import $ from 'jquery';
import './style.css'
import components from "@js/components";
import HTML from './content.html';
import ImageGrid from "@components/ImageGrid";

$(function () {
    $('div[main-content]').replaceWith(HTML);
    ImageGrid();
    components(
        {
            branding: {
                heading: "Detail"
            },
            crumbsArray: [
                {label: "Detail", link: "", isActive: true}
            ],
            pageConfig: {
                title: "Detail",
                pages: [
                    {pageTitle: 'Home', isActive: false},
                    {pageTitle: 'Browse', isActive: false},
                    {pageTitle: 'About', isActive: false},
                    {pageTitle: 'Detail', isActive: true}
                ]
            },
            contact: {
                institution: 'Københavns Universitet',
                institutionWeb: 'http://www.kommunikation.ku.dk',
                department: 'Kommunikation',
                departmentWeb: 'http://www.kommunikation.ku.dk',
                address: {
                    country: 'Denmark',
                    city: 'København',
                    district: 'K',
                    postalCode: 1165,
                    addressDetail: 'Nørregade 10'
                },
                team: 'Web Team',
                email: 'FA-webredaktor@adm.ku.dk',
                phone: 4535324261
            }
        }
    )
    $('title').text("Detail");
    $("#page-heading").text("Detail");
    $("#page-paragraph").text("Lorem ipsum sit dolorum");
    $.get("http://localhost:8080/ku/footer", function (data) {
        $("footer").replaceWith(data);
    });
    //$('body').append('<div class="popup"></div>');
});



