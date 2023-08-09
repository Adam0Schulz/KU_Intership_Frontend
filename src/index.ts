import {myData} from "./js/api/calls";
import {api} from "./js/api/axios";
import $ from 'jquery';

$(document).ready(function() {
    api.get("http://localhost:8080/api")
    .then((res) => {

        console.log(res.data);

        // Select the div with the ID "myDiv" and set its HTML content
        $('#myDiv').html(res.data);
    });   
});