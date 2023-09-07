import HTML from './component.html';
import $ from 'jquery';
import './style.css';
import {ActivePage} from "@js/components";

export default (siteTitle: string, activePage?: ActivePage) => {

    $('div[sidebar-navigation]').replaceWith(HTML);
    $('.ku-navbar-header').html(`<a href="/">${siteTitle}</a>`)
    $('li').removeClass('active');
    activePage && $(`a[href="/${activePage.toLowerCase()}"]`).parent().addClass('active');
}