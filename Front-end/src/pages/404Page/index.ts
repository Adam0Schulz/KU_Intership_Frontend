import $ from 'jquery';
import components from "@js/components";
import HTML from './content.html';

$(function () {

    $('div[main-content]').replaceWith(HTML);
    components(
        {
            crumbsArray: [
                {label: "NotFound", link: "", isActive: true}
            ]
        }
    )
    $('title').text("404 - Not Found");
    $("#page-heading").text("404 - Not Found");
    $("#page-paragraph").text("The page you are looking for is not found.");
});



