import $ from 'jquery';
import './style.css'
import components from "@js/components";
import HTML from "../homePage/content.html";

import {getMeta} from '@js/api/calls';
import SearchSection from "@components/SearchSection";
import InfoComp from "@components/InfoComp";

const meta = getMeta().then(res => res.data)
meta.then(res => console.log(res))

$(async function () {

    $('div[main-content]').replaceWith(HTML);
    components(
        {
            branding: {
                heading: (await meta).database
            },
            crumbsArray: [
                {label: "Home", link: "", isActive: true}
            ],
            pageConfig: {
                title: (await meta).database,
                pages: [
                    {pageTitle: 'Home', isActive: true},
                    {pageTitle: 'Browse', isActive: false},
                    {pageTitle: 'About', isActive: false},
                    {pageTitle: 'Detail', isActive: false}
                ]
            },
            contact: (await meta).contact
        }
    )
    SearchSection("Find " + (await meta).mainEntity,
        "Search for " + (await meta).mainEntity
    );
    InfoComp({
        heading: "Advanced Search",
        body: "Do you need a more specific search with the option to search for each attribute separately?",
        link: {
            label: "",
            url: ""
        }
    });

    $('title').text("Home");
    $("#page-heading").text("Some Heading")
    $("#page-paragraph").text("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat ")
    $.get("http://localhost:8080/ku/footer", function (data) {
        $("footer").replaceWith(data);
    });
    console.log(window.location.pathname);
});

