import $ from 'jquery';
import HTML from './component.html';
import './style.css';
import {filterOptions, InputProp, InputType} from "@components/FilterSidebar";

export default () => {
    if($('div[add-filter-button]').children().length > 0) {
        $('div[add-filter-button]').empty()
    }
    const component = $(HTML);
    filterOptions.getValue().forEach((option: InputProp) => {
        !option.isActive && component.find('.dropdown-menu').append(`<li><a href="#" id="id-${option.label}">${option.label}</a></li>`);
    })
    $('div[add-filter-button]').append(component);
    $('#add-filter-comp a').on('click', function (e) {
        e.preventDefault();
        console.log(`clicked:${this.id}`)
        const newOptions =  filterOptions.getValue().map((option: InputProp)=> {
            if (option.label === this.textContent) {
                option.isActive = true
                const inputDiv = $(`<div ${option.type} label="${this.textContent}" ></div>`);
                if(option.type === InputType.TEXT) {
                    inputDiv.attr('placeholder', `Search by ${this.textContent}`);
                }
                if(option.type === InputType.SELECT) {
                    inputDiv.attr('options','["option1", "option2", "option3"]');
                }
                $('div[add-filter-button]').before(inputDiv);
            }
            return option
        })
        filterOptions.setValue(newOptions)

    })

}