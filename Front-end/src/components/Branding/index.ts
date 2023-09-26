import HTML from "./component.html"
import $ from "jquery"

export default (siteTitle?: string) => {
    $("div[branding]").replaceWith(HTML)

    $(".branding__img-link").attr("title", siteTitle)
    $(".branding__heading").text(siteTitle)

}

