import HTML from './component.html'
import $ from 'jquery'
import './style.css'

export default () => {
    $("div[input-checkbox]").each((_index, element) => {
        const label = $(element).attr("label")

        $(element).append(HTML)
        $(element).find("input[type='text']").attr("value", label)
    })
}