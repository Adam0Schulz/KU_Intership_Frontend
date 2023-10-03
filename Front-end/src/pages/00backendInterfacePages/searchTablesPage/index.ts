import $ from 'jquery';
import HTML from './content.html';
import './style.css';
import {api} from "@js/api/axios";


$(function () {

    $('main').replaceWith(HTML);
    const db = new URLSearchParams(window.location.search).get('db')
    $('title').text(`Tables of ${db}`);
    $("#page-heading").text(`Tables of ${db}`);

    $('#search-btn').on('click', async ()=>{
        const keyword = $('#search-i').val().toString();
        const response = await api.get(`/tables`, {
            params: {
                'keyword': keyword,
                'db': db
            }
        });
        const result = response.data
        console.log(`result: ${JSON.stringify(result)}`);
    })


});



