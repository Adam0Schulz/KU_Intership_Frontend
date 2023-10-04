import HTML from "./component.html"
import $ from "jquery"
import "@gcss"
import "./style.css"

interface Props {
    id: string,
    objects: Object[],
    checked?: string[],

}

export default (props: Props) => {

    $(`div[table][id=${props.id}]`).html(HTML)

    const attrNames = getAttrNames(props.objects[0]).map(name => props.checked && props.checked.includes(name) ? { name: name, checked: true } : { name: name, checked: false })
    
    attrNames
        .map(attrName => $(`div[id=${props.id}] .table_component thead tr`)
            .append($(`<th scope="col">${props.checked ? `<input type="checkbox" attr-select ${attrName.checked ? "checked" : ""}/>` : ''} ${attrName.name}</th>`)))

    populateTable(props.objects)



    function populateTable(data: Object[]) {
        var tableBody = $(`div[id=${props.id}] .table_component tbody`);
        data.forEach(function (obj) {
            var row = $("<tr>");
            Object.keys(obj).forEach(function (key) {
                //@ts-ignore
                var cell = $('<td>').text(obj[key]);
                row.append(cell);
            });
            tableBody.append(row);
        });
    }
}

export function getAttrNames(object: Object) {
    return Object.keys(object)
}

