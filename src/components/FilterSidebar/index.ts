import HTML from "./component.html"
import $ from "jquery"
import './style.css'
import TextInput from "@components/Input/Text"
import SelectInput from "@components/Input/Select"
import CheckboxInput from "@components/Input/Checkbox"
import InfoComp from "@components/InfoComp"
import InfoIcon from "@components/Input/InfoIcon"

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
    $(".filter-bar__header").on("click", (e) => {
        $(e.currentTarget.parentElement).find(".filter-bar__expandable").toggleClass("expanded")
    })

    InfoIcon()
}
