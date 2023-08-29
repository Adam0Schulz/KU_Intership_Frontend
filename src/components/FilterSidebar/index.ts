import HTML from "./component.html"
import $ from "jquery"
import './style.css'
import TextInput from "@components/Input/Text"
import SelectInput from "@components/Input/Select"
import CheckboxInput from "@components/Input/Checkbox"

export interface Props {
    
}

export default (props: Props) => {
    $("div[filter-sidebar]").replaceWith(HTML)
    //$("div[input-select]").attr("options", JSON.stringify(["option", "option", "option"]))
    TextInput()
    SelectInput()
    CheckboxInput()
}
