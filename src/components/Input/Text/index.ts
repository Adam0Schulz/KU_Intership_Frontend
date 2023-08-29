import InfoIcon from '../InfoIcon'
import HTML from './component.html'
import $ from 'jquery'
import './style.css'

export default () => {
    $('div[input-text]').each((index, element) => {
        const label = $(element).attr("label")
        const placeholder = $(element).attr("placeholder")

        $(element).html(HTML)
        $(element).find('label').text(label)
        $(element).find('input').attr("placeholder", placeholder)

    })

    InfoIcon()
}    