import HTML from "./component.html"
import "@gcss"
import "./style.css"
import $ from "jquery"

export default (heading?: string, subHeading?: string) => {
    $("div[search-section]").replaceWith(HTML)

    $(".search--large__heading").text(heading)
    $(".search--large__subHeading").text(subHeading)

}

