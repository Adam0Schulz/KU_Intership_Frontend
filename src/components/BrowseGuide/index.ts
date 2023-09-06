import HTML from './component.html'
import $ from 'jquery'
import './style.css'

import TableOfContents, { Heading } from '@components/TableOfContents'
import Popup from '@components/Popup'
import Checkbox from '@components/Input/Checkbox'
import PillSection from '@components/PillSection'
import { Link } from '@js/interfaces'
import { idSections, renderSections, extractHeadingsFromSections, SectionData } from '@components/Sections'



export interface FilterOption {
    id?: string,
    text: string,
    image?: Link

}

interface Props {
    content: SectionData[]
}

export default (props: Props) => {

    $("body").append(HTML)

    idSections(props.content, [])
    renderSections(props.content, 1, "browse-guide", true).forEach((section) => {
        $(".browse-guide .col-md-6").append(section)
    })


    Popup()
    Checkbox()
    TableOfContents({
        heading: "Apple Browse Guide",
        items: extractHeadingsFromSections(props.content),
        onSelect: (id: string) => { window.location.hash = "section-" + id }
    })

    $(".browse-guide input[type='checkbox']").on("change", () => {
        const pills = $('.browse-guide input[type="checkbox"]:checked')
            .toArray()
            .map((box) => {
                return {
                    id: $(box.parentElement.parentElement.parentElement).attr("id"),
                    text: $(box.parentElement.parentElement.parentElement)
                        .find('input[type="text"]')
                        .attr("value")
                }
            })
        $(".browse-guide .pill-section").remove()
        PillSection({
            heading: "Selected filters",
            pills: pills,
            onDelete: (deletedId) => $(`.browse-guide div[input-checkbox][id="${deletedId}"]`).find("input:checkbox").prop("checked", false)
                
        })
        $(".browse-guide .right-side-bar").append($("<div pill-section></div>"))
    })
}

/* function generateRandomId(length: number = 10): string {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let randomId = '';

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        randomId += characters.charAt(randomIndex);
    }

    return randomId;
} */

/* function idFilterOptions(filterOptions: FilterOption[]) {
    return filterOptions.map((filterOption) => {
        filterOption.id = generateRandomId()
        return filterOption
    })
} */

/* function extractHeadingsFromSections(sections: Section[]): Heading[] {
    return sections.filter((section) => section.id).map((section) => {
        let heading: Heading = {
            id: section.id,
            heading: section.heading,
        }
        if (section.sections) {
            heading.subHeadings = extractHeadingsFromSections(section.sections)

        }
        return heading
    })
} */

/* function idSections(sections: Section[], indexArr: number[]) {
    let index = 1
    return sections.map((section) => {
        if (!section.heading) return section
        const newIndexArr = indexArr.slice()
        newIndexArr.push(index)
        index++
        return idSection(section, newIndexArr)
    })
}

function idSection(section: Section, indexArr: number[]) {
    if (section.sections) {
        idSections(section.sections, indexArr)
    }
    section.id = indexArr.join(".")
    return section
}

function renderSections(sections: Section[], level: number) {
    return sections.map((section) => {
        return renderSection(section, level)
    })
}

function renderSection(section: Section, level: number): JQuery<HTMLElement> {
    const baseDiv = $(`<div class="browse-guide__section" ${section.id ? `id="section-${section.id}"` : ``}></div>`)
    const sectionsDiv = $(`<div class="section-cont"></div>`)
    const filterDiv = $(`<div class="filter-cont"></div>`)
    if (section.sections) {

        renderSections(section.sections, level + 1).forEach((section) => {
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

    if (section.heading) baseDiv.append(`<h${level}>${section.id} ${section.heading}</h${level}>`)

    if (section.image) baseDiv.append(`<img src="${section.image.url}" alt="${section.image.label}"></img>`)

    if (section.text) baseDiv.append(`<p>${section.text}</p>`)

    baseDiv.append(sectionsDiv)
    baseDiv.append(filterDiv)

    return baseDiv
} */