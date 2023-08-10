import {api} from "../../js/api/axios";
import $ from 'jquery';
import components from "../../js/components";
import BreadCrumbs from "../../components/BreadCrumbs";
import SidebarNavigation from "../../components/SidebarNavigation";
    

$(function() {

    components()
    BreadCrumbs([{ label: "Home", link: "", isActive: true }])
    SidebarNavigation({title: "Denmark's Apples", pages: [
            {pageTitle: 'Home', isActive: true},
            {pageTitle: 'Browse', isActive: false},
            {pageTitle: 'About', isActive: false}
        ]});

    $.get("http://localhost:8080/ku/footer", function(data) {
        $("footer").html(data);
    });
});

