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
        $('.cb-container').remove();
        const keyword = $('#search-i').val().toString();
        const response = await api.get(`/tables`, {
            params: {
                'keyword': keyword,
                'db': db
            }
        });
        const result = response.data
        console.log(JSON.stringify(result));
        result.forEach((res:string)=> {
            $('#occ-1').append(`<div class="cb-container"><label for="checkbox-${res}">${res}</label><input type="checkbox" id="checkbox-${res}"></div>`)
        })
    })


    $('input[type="checkbox"]').on('change', function () {
        console.log("hh")
        if ($(this).is(":checked")) {

            console.log(`checked: ${this.id}`)

        } else {

            console.log(`unchecked: ${this.id}`)

        }
    })


});



