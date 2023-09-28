import $ from 'jquery';
import HTML from './content.html';
import './style.css';
import axios from "axios";


$(function () {
    const credentials = {
        url: "",
        username: "",
        password: ""
    }

    $('main').replaceWith(HTML);
    $('title').text("New Database Configuration");
    $("#page-heading").text("New Database Configuration");

    $('#next-btn').on('click', ()=> {
        const c2 = credentials;
        c2.url = $('#url-i').val().toString();
        c2.username = $('#username-i').val().toString();
        c2.password = $('#password-i').val().toString();
        //alert("credentials passed");
        axios.post('http://localhost:5000/testdb', c2).then(res => console.log(res.data));


    })

});



