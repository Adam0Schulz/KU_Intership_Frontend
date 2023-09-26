import HTML from './component.html'
import $ from 'jquery'
import './style.css'

import TableOfContents, { Heading } from '@components/TableOfContents'
import Popup from '@components/Popup'
import Checkbox from '@components/Input/Checkbox'
import PillSection from '@components/PillSection'
import { Link } from '@js/interfaces'
import { idSections, renderSections, extractHeadingsFromSections, SectionData } from '@components/Sections'
import { mediaQuery } from "@utils"



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

    
    checkboxChange()
    $(".browse-guide input[type='checkbox']").on("change", () => checkboxChange())

    mediaQuery(() => $(".left-side-bar").after($(".right-side-bar")),
        () => $(".browse-guide__main").after($(".right-side-bar"))
        , 768
    )
    $(window).resize(() => mediaQuery(() => $(".left-side-bar").after($(".right-side-bar")),
        () => $(".browse-guide__main").after($(".right-side-bar"))
        , 768
    ))

    function checkboxChange() {
        const pills = $('.browse-guide input[type="checkbox"]:checked')
            .toArray()
            .map((box) => {
                return {
                    id: $(box.parentElement.parentElement).attr("id"),
                    text: $(box.parentElement.parentElement)
                        .find('input[type="text"]')
                        .attr("value")
                }
            })
        $(".browse-guide .pill-section").remove()
        PillSection({
            heading: "Selected filters",
            pills: pills,
            onDelete: (deletedId) => $(`.browse-guide .input-checkbox[id="${deletedId}"]`).find("input:checkbox").prop("checked", false)

        })
        $(".browse-guide .right-side-bar").append($("<div pill-section></div>"))
    }

}