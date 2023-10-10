import $ from "jquery"
import HTML from "./component.html"
import "@gcss"
import "./style.css"
import { getAttrNames } from "@components/Table"

interface Props {
    id: string,
    list: string[],
    checked?: string[],
    onClick?: (text: string) => void
}

export default (props: Props) => {

    $(`div[sidebar][id=${props.id}]`).html(HTML)
    const $sidebar = $(`div[sidebar][id=${props.id}]`)

    const attrNames = props.list.map(name => props.checked && props.checked.includes(name) ? { name: name, checked: true } : { name: name, checked: false })
    attrNames.map(item => $sidebar.find("ul").append($(`<li>${props.checked ? `<input type='checkbox' attr-select ${item.checked ? "checked" : ""}/>` : ''} ${item.name}</li>`)))

    if (props.onClick) {
        $sidebar.find("li").on("click", (e: Event) => {
            props.onClick($(e.currentTarget).text())
        })
    }


}