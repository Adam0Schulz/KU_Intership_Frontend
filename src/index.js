import {myData} from "./js/api/calls";
import {api} from "./js/api/axios";
import $ from 'jquery';

const promise = await api.get("http://localhost:8080/api");
const footer = promise.data;
console.log(footer);

$(document).ready(function() {
    // Select the div with the ID "myDiv" and set its HTML content
    $('#myDiv').html(footer);
});