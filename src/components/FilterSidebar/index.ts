import HTML from "./component.html"
import $ from "jquery"
import './style.css'
import TextInput from "@components/Input/Text"
import SelectInput from "@components/Input/Select"
import CheckboxInput from "@components/Input/Checkbox"
import InfoComp from "@components/InfoComp"
import InfoIcon from "@components/Input/InfoIcon"
import RemoveIcon from "@components/Input/RemoveIcon";
import AddFilterButton from "@components/Input/AddFilterButton";

export interface Props {
    inputProps: InputProp[],
    infoComp?: () => void
}

export enum InputType {
    TEXT = "input-text",
    SELECT = "input-select",
    CHECKBOX = "input-checkbox"
}

export interface InputProp {
    label: string,
    type: InputType,
    isActive: boolean
}

export const filterOptions = {
    _value: [{}] as InputProp[],
    getValue() {
        return this._value;
    },
    setValue(newValue: InputProp[]) {
        this._value = newValue
        TextInput()
        SelectInput()
        CheckboxInput()
        InfoIcon()
        RemoveIcon()
        AddFilterButton()
        this.getValue().forEach((value: InputProp) => {
            console.log(value.label)
            console.log(value.type)
            console.log(value.isActive)
        })
    }
}
export default (props: Props) => {
    $("div[filter-sidebar]").replaceWith(HTML)

    filterOptions.setValue(props.inputProps)
    if (props.infoComp) {
        InfoComp(
            {
                heading: "Apple browse guide",
                body: "Get detailed information about all the search parameters by clicking here or click on the information icon next to each specific parameter",
                link: {
                    label: "",
                    url: ""
                },
                onClick: async () => props.infoComp()
            }
        )
    }
    $(".filter-bar__header").on("click", (e) => {
        $(e.currentTarget.parentElement).find(".filter-bar__expandable").toggleClass("expanded")
    })

}
