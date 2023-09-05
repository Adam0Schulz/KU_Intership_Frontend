import HTML from './component.html'
import $ from 'jquery'
import './style.css'

export interface IPill {
    text: string,
    onChange?: () => void
}

export default () => {
    $("div[pill]").each((_index, element) => {
        const text = $(element).attr("text")

        $(element).append(HTML)
        $(element).find(".pill__text").text(text)

        $(element).find(".glyphicon-remove").on("click", () => {
            $(element).remove()
        })
    })
}