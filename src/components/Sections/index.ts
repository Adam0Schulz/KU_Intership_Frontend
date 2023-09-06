import $ from "jquery";
import { Link } from "@js/interfaces";
import { FilterOption } from "@components/BrowseGuide";
import { Heading } from "@components/TableOfContents";


export interface SectionData {
    id?: string,
    heading?: string,
    body?: string,
    subtitle?: string,
    footer?: string,
    subsections?: SectionData[],
    image?: Link,
    filterOptions?: FilterOption[]
}

export function extractHeadingsFromSections(sections: SectionData[]): Heading[] {
    return sections.filter((section) => section.id).map((section) => {
        let heading: Heading = {
            id: section.id,
            heading: section.heading,
        }
        if (section.subsections) {
            heading.subHeadings = extractHeadingsFromSections(section.subsections)

        }
        return heading
    })
}

export function generateRandomId(length: number): string {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let randomId = '';

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        randomId += characters.charAt(randomIndex);
    }

    return randomId;
}

export function idFilterOptions(filterOptions: FilterOption[]) {
    return filterOptions.map((filterOption) => {
        filterOption.id = generateRandomId(10)
        console.log(filterOption.id)
        return filterOption
    })
}

export function idSections(sections: SectionData[], indexArr: number[]) {
    let index = 1
    return sections.map((section) => {
        if (!section.heading) return section
        const newIndexArr = indexArr.slice()
        newIndexArr.push(index)
        index++
        return idSection(section, newIndexArr)
    })
    // return sections.map((section, index) => {
    //     const newIndexArr = indexArr.slice()
    //     newIndexArr.push(index + 1)
    //     return idSection(section, newIndexArr)
    // })
}

function idSection(section: SectionData, indexArr: number[]) {

    if (section.subsections) {
        idSections(section.subsections, indexArr)
    }
    section.id = indexArr.join(".")
    return section
}


export function renderSections(sections: SectionData[], level: number, usage: string, numbered?: boolean) {
    return sections.map((section) => {
        return renderSection(section, level, usage, numbered)
    })
}

function renderSection(section: SectionData, level: number, usage: string, numbered?: boolean): JQuery<HTMLElement> {
    const baseDiv = $(`<div class="${usage}__section" ${section.id ? `id="section-${section.id}"` : ``}></div>`)
    //const baseDiv = $(`<div class="${usage}__section" id="section-${section.id}"></div>`)
    const sectionsDiv = $(`<div class="${usage}-section-cont"></div>`)
    const filterDiv = $(`<div class="filter-cont"></div>`)
    if (section.subsections) {
        renderSections(section.subsections, level + 1, usage, numbered).forEach((section) => {
            sectionsDiv.append(section)
        })
    }

    if (section.filterOptions) {
        idFilterOptions(section.filterOptions).map((filterOption) => {
            const optionDiv = $(`<div input-checkbox></div>`)
            optionDiv.attr("label", filterOption.text)
            optionDiv.attr("id", filterOption.id)
            if (filterOption.image) optionDiv.attr("img-url", filterOption.image.url)
            filterDiv.append(optionDiv)

        })
    }

    if (level < 1) {
        level = 1
    }
    if (level > 6) {
        level = 6
    }

    if (section.heading) baseDiv.append(`<h${level}>${numbered ? section.id + " " : ''}${section.heading}</h${level}>`)

    if (section.subtitle) baseDiv.append(`<p class="subtitle">${section.subtitle}</p>`)

    if (section.image) baseDiv.append(`<img src="${section.image.url}" alt="${section.image.label}">`)

    if (section.body) baseDiv.append(`<p>${section.body}</p>`)


    baseDiv.append(sectionsDiv)
    section.footer !== undefined && baseDiv.append($(`<p class="content-section__footer">${section.footer}</p>`))
    section.filterOptions && baseDiv.append(filterDiv)

    return baseDiv
}