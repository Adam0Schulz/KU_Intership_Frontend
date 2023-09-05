import $ from "jquery";
import {Link} from "@js/interfaces";
import {FilterOption} from "@components/BrowseGuide";


export interface SectionData {
    id?: string,
    heading: string,
    body?: string,
    subtitle?: string,
    footer?: string,
    subsections?: SectionData[],
    image?: Link,
    filterOptions?: FilterOption[]
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


export function renderSections(sections: SectionData[], level: number, usage: string, numbered: boolean) {
    return sections.map((section) => {
        return renderSection(section, level, usage, numbered)
    })
}

function renderSection(section: SectionData, level: number, usage: string, numbered: boolean): JQuery<HTMLElement> {
    const baseDiv = $(`<div class="${usage}-guide__section" ${section.id ? `id="section-${section.id}"` : ``}></div>`)
    //const baseDiv = $(`<div class="${usage}__section" id="section-${section.id}"></div>`)
    const sectionsDiv = $(`<div class="${usage}-section-cont"></div>`)
    const filterDiv = $(`<div class="filter-cont"></div>`)
    if (section.subsections) {
        renderSections(section.subsections, level + 1, usage, numbered).forEach((section) => {
            sectionsDiv.append(section)
        })
    }

    if (section.filterOptions) {
        console.log("filter")
        section.filterOptions.map((filterOption) => {
            const optionDiv = $(`<div input-checkbox></div>`)
            optionDiv.attr("label", filterOption.text)
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

    if (section.heading) baseDiv.append(`<h${level}>${numbered ? section.id : ''}${section.heading}</h${level}>`)

    if(section.subtitle) baseDiv.append(`<p class="subtitle">${section.subtitle}</p>`)

    if (section.image) baseDiv.append(`<img src="${section.image.url}" alt="${section.image.label}">`)

    if (section.body) baseDiv.append(`<p>${section.body}</p>`)


    baseDiv.append(sectionsDiv)
    section.footer !== undefined && baseDiv.append($(`<p class="content-section__footer">${section.footer}</p>`))
    section.filterOptions && baseDiv.append(filterDiv)

    return baseDiv
}