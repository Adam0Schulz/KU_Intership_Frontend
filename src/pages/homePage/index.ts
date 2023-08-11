import { api } from "@js/api/axios";
import $ from 'jquery';
import components from "@js/components";
import BreadCrumbs from "@components/BreadCrumbs"
import SidebarNavigation from "@components/SidebarNavigation";
import InfoComp from "@components/InfoComp";
import TopMenu from "@components/TopMenu";
import SecondMenu from "@components/SecondMenu";
import LocalFooter from "@components/LocalFooter";

$(function() {

    TopMenu();
    SecondMenu();
    components(
        {
            searchSection: {
                heading: "Find Apple Species",
                subHeading: "Search for apples by name"

            }
        }
    )
    BreadCrumbs([{ label: "Home", link: "", isActive: true }])
    SidebarNavigation({title: "Denmark's Apples", pages: [
            {pageTitle: 'Home', isActive: true},
            {pageTitle: 'Browse', isActive: false},
            {pageTitle: 'About', isActive: false}
        ]});
    InfoComp();
    LocalFooter({
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
    });

    $.get("http://localhost:8080/ku/footer", function(data) {
        $("footer").html(data);
    });
});

