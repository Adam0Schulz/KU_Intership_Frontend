import { Link } from "@js/interfaces"
import HTML from "./component.html"
import $ from "jquery"

export interface Props {
    heading: string,
    subOptions: Link[]
}

export default (props: Props) => {
    let html = $(HTML)
    html.find("a").text(props.heading)
    props.subOptions.forEach((option) => {
        html.find(".mobile-submenu ul").append($(`<li class="mobile-submenu__item"><a href="${option.url}">${option.label}</a></li>`))
    })
    

    return html
    
}

