import { myData } from "../../js/api/calls";
import { api } from "../../js/api/axios";
import $ from 'jquery';
import components from "../../js/components";
import BreadCrumbs from "../../components/BreadCrumbs"


$(document).ready(function () {

    components()
    BreadCrumbs([{ label: "Home", link: "", isActive: true }])

    api.get("http://localhost:8080/api")
        .then((res) => {

            console.log(res.data);

            // Select the div with the ID "myDiv" and set its HTML content
            $("footer").html(res.data);
        });


});