import HTML from './component.html'
import $ from 'jquery'
import './style.css'



export default () => {
    $("div[input-checkbox]").each((_index, element) => {
        const label = $(element).attr("label")
        const imgUrl = $(element).attr("img-url")

        $(element).append(HTML)

        if (imgUrl) {
            $(element)
            .find('input[type="text"]').attr("value", label)
            .css("display", "none")
            .after($(`<div class="form-control img-cont"><img src="${imgUrl}" alt="${label}"></div>`))

        } else {
            $(element).find('input[type="text"]').attr("value", label)
        }
    })

    $('div[input-checkbox] input[type="checkbox"]').on("change", (e) => {
        
    })
}