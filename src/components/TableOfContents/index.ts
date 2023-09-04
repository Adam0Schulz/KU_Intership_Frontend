import HTML from './component.html'
import $ from 'jquery'
import './style.css'

interface Heading {
    heading: string,
    subHeadings?: Heading[]
}

interface Props {
    heading: string,
    items: Heading[]
}

export default (props: Props) => {
    $("div[table-of-contents]").replaceWith(HTML)
    $(".table-of-contents__heading").text(props.heading)

    props.items.map((heading, index) => {
        const headingHtml = HeadingToHtml(heading, 1, [index + 1])
        $(".table-of-contents").append($(headingHtml))
    })

    $(".table-of-contents__level").on("click", (e) => {
        $(".table-of-contents__level.active").removeClass("active")
        console.log($(e.currentTarget).addClass("active"))
    })







}

function HeadingToHtml(heading: Heading, level: number, indexArr: number[]): string {
    let subHeading = ""
    if(heading.subHeadings) {
        heading.subHeadings.map((heading, index) => {
            const subIndexArr = indexArr.slice() // splice makes a copy of indexArr otherwise it's assigned by refrence
            subIndexArr.push(index + 1)
            subHeading += HeadingToHtml(heading, level + 1, subIndexArr)
        })
        
    }
    if(level < 1) {
        level = 1
    }
    if(level > 6) {
        level = 6
    }
    const string = `<h${level} class="table-of-contents__level">${indexArr.join(".")} ${heading.heading}</h${level}>` + subHeading
    return string
}