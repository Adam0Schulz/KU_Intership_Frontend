import {api} from "./axios.js";

const promise = await api.get("http://localhost:8080/api");
const footer = promise.data;
console.log(footer);

$(document).ready(function() {
    // Select the div with the ID "myDiv" and set its HTML content
    $('#footer-div').html(footer);
});

export const myData = 6;