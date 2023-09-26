import HTML from './component.html'
import $ from 'jquery'
import './style.css'



export default () => {
    $("div[input-checkbox]").each((_index, element) => {
        const label = $(element).attr("label")
        const imgUrl = $(element).attr("img-url")
        const id = $(element).attr("id")
        const $html = $(HTML)

        if (imgUrl) {
            $html
                .find('input[type="text"]').attr("value", label)
                .css("display", "none")
                .after($(`<div class="form-control img-cont"><img src="${imgUrl}" alt="${label}"></div>`))


        } else {
            $html.find('input[type="text"]').attr("value", label)
        }

        $html.attr("id", id)

        $(element).replaceWith($html)
    })

}