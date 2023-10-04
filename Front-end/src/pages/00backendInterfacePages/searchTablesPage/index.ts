import $ from 'jquery';
import HTML from './content.html';
import './style.css';
import {api} from "@js/api/axios";


$(function () {
    $('main').replaceWith(HTML);
    const db = new URLSearchParams(window.location.search).get('db')
    $('title').text(`Tables of ${db}`);
    $("#page-heading").text(`Tables of ${db}`);
    let selectedTables:string[] = [];

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
        result.forEach((res:string)=> {
            $('#occc-1').append(`<div class="cb-container">
                                    <input type="checkbox" id="checkbox-${res}">
                                    <label for="checkbox-${res}">${res}</label>
                                </div>`);
        })
        $('input[type="checkbox"]').on('change', function () {
            const label = $(`label[for="${this.id}"]`).text();

            if ($(this).is(":checked")) {
                selectedTables.push(label);
                $('#occc-2-l').append(`<li sId="${this.id}">${label}</li>`);
            } else {
                $(`li[sId="${this.id}"`).remove();
                selectedTables = selectedTables.filter(table=> {
                    return table !== label
                });
            }
        })
    })

    $('#next-btn').on('click', async ()=> {
        const response = await api.post('/tables/selected', {selectedTables: selectedTables});
        const result = response.data;
        console.log(`tables res: ${JSON.stringify(result)}`);
    })


});



