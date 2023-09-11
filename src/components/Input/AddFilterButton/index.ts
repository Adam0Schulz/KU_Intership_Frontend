import $ from 'jquery';
import HTML from './component.html';
import './style.css';
import TextInput from "@components/Input/Text";
import RemoveIcon from "@components/Input/RemoveIcon";
import InfoIcon from "@components/Input/InfoIcon";

export default (options: string[])=> {
    const component = $(HTML);
    options.forEach(option => {
        component.find('.dropdown-menu').append(`<li><a href="#" id="id-${option}">${option.toUpperCase()}</a></li>`);
    })
    $('div[add-filter-button]').append(component);
    $('#add-filter-comp a').on('click', function (e) {
        e.preventDefault();
        console.log(`clicked:${this.id}`)
        this.remove();
        $('div[add-filter-button]').before($(`<div input-text label="${this.textContent}" placeholder="Search by ${this.textContent}"></div>`));
        TextInput()
        RemoveIcon()
        InfoIcon()
    })

}