import HTML from './component.html';
import $ from 'jquery';
import './style.css';
import {PageConfig} from "@js/interfaces";

export default (config: PageConfig) => {
    $('div[sidebar-navigation]').replaceWith(HTML);
    $('.ku-navbar-header').html(`<a href="#">${config.title}</a>`)
    config.pages.forEach((page) => {
        $('.sidebar-nav').append(
            `<li ${page.isActive ? 'class="active"' : ''}><a tabindex="0" href="/${page.pageTitle.toLowerCase()}">${page.pageTitle}</a></li>`);
    })
}