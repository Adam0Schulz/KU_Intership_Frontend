import HTML from './component.html'
import $ from 'jquery'
import './style.css'

export interface IPill {
    id: string,
    text: string,
}

interface Props {
    onDelete: (e: HTMLElement) => void
}

export default (props: Props) => {
    $("div[pill]").each((_index, element) => {
        const text = $(element).attr("text")

        $(element).append(HTML)
        $(element).find(".pill__text").text(text)


        $(element).find(".glyphicon-remove").on("click", (e) => {
            $(element).remove()
            props.onDelete(e.currentTarget.parentElement.parentElement)
        })
    })
}