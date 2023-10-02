import $ from 'jquery';
import HTML from './content.html';
import './style.css';
import axios from "axios";


$(function () {
    const credentials = {
        database: "",
        username: "",
        password: ""
    }

    $('main').replaceWith(HTML);
    $('title').text("New Database Configuration");
    $("#page-heading").text("New Database Configuration");

    $('#test-btn').on('click', async ()=> {
        const c2 = credentials;
        c2.database = $('#url-i').val().toString();
        c2.username = $('#username-i').val().toString();
        c2.password = $('#password-i').val().toString();
        const response = await axios.post('http://localhost:5000/testdb', c2);
        const result = response.data;
        console.log(result);
        if (result.dbConfig) {
            $('#next-btn').removeClass('disabled-btn');
            $('.input-form input').css({"border-color": "transparent","outline": "#08ca5d 2px solid"}).attr('disabled', "true");
            $('#test-btn').addClass('disabled-btn');
        }
        else {
            $('.input-form input').css({"border-color": "transparent","outline": "#dc060d 2px solid"});
        }


    })

});



