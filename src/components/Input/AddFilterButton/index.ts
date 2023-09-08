import $ from 'jquery';
import HTML from './component.html';
import './style.css';

export default (options: string[])=> {
    const component = $(HTML);
    options.forEach(option => {
        component.find('.dropdown-menu').append(`<li><a href="#">${option.toUpperCase()}</a></li>`);
    })
    $('div[add-filter-button]').replaceWith(component);
}