import {api} from "../../js/api/axios";
import $ from 'jquery';
import components from "../../js/components";
import BreadCrumbs from "../../components/BreadCrumbs"
    

$(function() {

    components()
    BreadCrumbs([{ label: "Home", link: "", isActive: true }])

    $.get("http://localhost:8080/ku/footer", function(data) {
        $("footer").html(data);
    });
});

// $(function() {
//     $.get("http://localhost:8080/ku/header", function(data) {
//         $("header").html(data);
//         console.log(data);
//     });
// });
//
// $(function() {
//     $.get("http://localhost:8080/ku/top2menu", function(data) {
//         $("#myNav").html(data);
//     });
// });

