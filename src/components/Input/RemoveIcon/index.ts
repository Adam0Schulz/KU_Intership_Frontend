import $ from 'jquery';
import HTML from './component.html';
import './style.css'
import {filterOptions, InputProp} from "@components/FilterSidebar";

export default ()=> {
    $('div[remove-icon]').replaceWith(HTML);
    $('.remove-icon').on('click', function() {
        const filterElement = $(this).parent().parent().parent();
        filterElement.remove();
        const newOptions =  filterOptions.getValue().map((option: InputProp)=> {
            if (option.label === filterElement.attr('label') || option.label === filterElement.find('input[value]').attr('value')) {
                option.isActive = false
            }
            return option
        })
        filterOptions.setValue(newOptions)
    });
}