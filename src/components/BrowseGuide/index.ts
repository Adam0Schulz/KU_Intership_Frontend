import HTML from './component.html'
import $ from 'jquery'
import './style.css'

import TableOfContents from '@components/TableOfContents'
import Popup from '@components/Popup'
import Checkbox from '@components/Input/Checkbox'
import PillSection from '@components/PillSection'
import { Link } from '@js/interfaces'

interface FilterOption {
    text: string,
    image?: Link

}

interface Section {
    id?: string,
    heading?: string,
    sections?: Section[]
    text?: string,
    image?: Link,
    filterOptions?: FilterOption[]

}

interface Props {
    content: Section[]
}

export default (props: Props) => {
    $("div[browse-guide]").replaceWith(HTML)

    idSections(props.content, [])
    renderSections(props.content, 1).forEach((section) => {
        $(".browse-guide .col-md-6").append(section)
    })


    Popup()
    TableOfContents({
        heading: "Apple Browse Guide",
        items: [
            {
                heading: "bla bla bla",
                subHeadings: [
                    {
                        heading: 'hello',
                        subHeadings: [
                            {
                                heading: "hello2",
                                subHeadings: [
                                    {
                                        heading: "hello3",
                                        subHeadings: [
                                            {
                                                heading: "hello4"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                heading: "hello2"
                            },
                            {
                                heading: "hello2"
                            }
                        ]
                    },
                    {
                        heading: "hello"
                    },
                    {
                        heading: "hello"
                    }
                ]
            },
            {
                heading: "bla bla bla"
            },
            {
                heading: "bla bla bla"
            },
            {
                heading: "bla bla bla"
            },
            {
                heading: "bla bla bla"
            },
            {
                heading: "bla bla bla"
            },
            {
                heading: "bla bla bla"
            },
            {
                heading: "bla bla bla"
            },
            {
                heading: "bla bla bla"
            },
            {
                heading: "bla bla bla"
            },
            {
                heading: "bla bla bla"
            },
            {
                heading: "bla bla bla"
            },
            {
                heading: "bla bla bla"
            },
            {
                heading: "bla bla bla"
            },
            {
                heading: "bla bla bla"
            },
            {
                heading: "bla bla bla"
            },
            {
                heading: "bla bla bla"
            },
            {
                heading: "bla bla bla"
            },
            {
                heading: "bla bla bla"
            },
            {
                heading: "bla bla bla"
            },
        ]
    })
    Checkbox()
    PillSection({
        heading: "Selected filters",
        pills: [
            {
                text: "something",
                onChange: () => { }
            },
            {
                text: "something2",
                onChange: () => { }
            },
            {
                text: "hello",
                onChange: () => { }
            },
            {
                text: "world",
                onChange: () => { }
            }
        ]
    })


}

function idSections(sections: Section[], indexArr: number[]) {
    return sections.map((section, index) => {
        const newIndexArr = indexArr.slice()
        newIndexArr.push(index + 1)
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
    const baseDiv = $(`<div class="browse-guide__section" id="section-${section.id}"></div>`)
    const sectionsDiv = $(`<div class="section-cont"></div>`)
    const filterDiv = $(`<div class="filter-cont"></div>`)
    if (section.sections) {
        renderSections(section.sections, level + 1).forEach((section) => {
            sectionsDiv.append(section)
        })
    }

    if (section.filterOptions) {
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

    if (section.heading) baseDiv.append(`<h${level}>${section.id} ${section.heading}</h${level}>`)

    if (section.image) baseDiv.append(`<img src="${section.image.url}" alt="${section.image.label}"></img>`)

    if (section.text) baseDiv.append(`<p>${section.text}</p>`)

    baseDiv.append(sectionsDiv)
    baseDiv.append(filterDiv)

    return baseDiv
}