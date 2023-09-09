import HTML from './component.html'
import $ from 'jquery'
import './style.css'

export interface Heading {
    id: string,
    heading: string,
    subHeadings?: Heading[]
}

interface Props {
    heading: string,
    items: Heading[],
    onSelect: (id: string) => void
}

export default (props: Props) => {
    $("div[table-of-contents]").replaceWith(HTML)
    $(".table-of-contents__heading").text(props.heading)
    $(".table-of-contents__header").on("click", (e) => {
        $(e.currentTarget.parentElement).toggleClass("expanded")
    })

    props.items.map((heading) => {
        const headingHtml = HeadingToHtml(heading, 1)
        $(".table-of-contents").append($(headingHtml))
    })

    $(".table-of-contents__level").on("click", (e) => {
        $(".table-of-contents__level.active").removeClass("active")
        $(e.currentTarget).addClass("active")
        props.onSelect(e.currentTarget.id)
    })







}

function HeadingToHtml(heading: Heading, level: number): string {
    let subHeading = ""
    if(heading.subHeadings) {
        heading.subHeadings.map((heading, index) => {
            subHeading += HeadingToHtml(heading, level + 1)
        })
        
    }
    if(level < 1) {
        level = 1
    }
    if(level > 6) {
        level = 6
    }
    const string = `<h${level} id="${heading.id}" class="table-of-contents__level">${heading.id} ${heading.heading}</h${level}>` + subHeading
    return string
}