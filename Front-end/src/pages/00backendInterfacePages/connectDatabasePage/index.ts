import $ from 'jquery';
import HTML from './content.html';
import './style.css';

$(function () {

    $('main').replaceWith(HTML);

    $('title').text("New Database Configuration");
    $("#page-heading").text("New Database Configuration");
    $("#page-paragraph").text("Gogogo");
});



