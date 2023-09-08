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
    infoComp?: () => void
}

export default (props: Props) => {
    $("div[filter-sidebar]").replaceWith(HTML)
    TextInput()
    SelectInput()
    CheckboxInput()
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
    RemoveIcon()
    InfoIcon()
    AddFilterButton(["color", "shape", "seeds"])

}
