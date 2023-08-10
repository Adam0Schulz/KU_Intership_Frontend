import HTML from "./component.html"
import $ from "jquery"

export default (crumbsArray: {label: string, link: string, isActive: boolean}[]) => {
    $("div[bread-crumbs]").html(HTML)

    crumbsArray.forEach((crumb) =>{
        const listItem = $(`<li ${crumb.isActive ? 'class="active"' : ''}>${crumb.link ? `<a href="${crumb.link}">${crumb.label}</a>` : crumb.label}</li>`)
        
        $(".breadcrumb").append(listItem)
    })
    
}

