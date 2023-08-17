import $ from 'jquery';
import components from "@js/components";
import HTML from './content.html';

$(function () {

    $('div[main-content]').replaceWith(HTML);
    components(
        {
            branding: {
                heading: "Browse"
            },
            crumbsArray: [
                {label: "Browse", link: "", isActive: true}
            ],
            pageConfig: {
                title: "Browse",
                pages: [
                    {pageTitle: 'Home', isActive: false},
                    {pageTitle: 'Browse', isActive: true},
                    {pageTitle: 'About', isActive: false}
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
    $('title').text("Browse");
    $("#page-heading").text("Browse")
    $("#page-paragraph").text("Here you can browse")
    $.get("http://localhost:8080/ku/footer", function (data) {
        $("footer").html(data);
    });
});



