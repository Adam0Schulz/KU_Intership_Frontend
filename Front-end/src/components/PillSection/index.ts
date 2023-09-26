import HTML from './component.html'
import $ from 'jquery'
import './style.css'
import Pill, { IPill } from '@components/Pill'

interface Props {
    heading: string,
    pills: IPill[],
    onDelete: (deletedId: string) => {}
}

export default (props: Props) => {
    $("div[pill-section]").replaceWith(HTML)
    $(".pill-section").append($(`<h1>${props.heading}</h1>`))
    props.pills.map((pill) => {
        $(".pill-section").append($(`<div pill id="${pill.id}" text="${pill.text}"></div>`))
    })
    Pill({
        onDelete: (e) => { props.onDelete(e.id) }
    })
}