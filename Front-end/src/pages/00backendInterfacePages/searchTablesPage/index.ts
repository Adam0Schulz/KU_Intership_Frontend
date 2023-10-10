import $ from 'jquery';
import HTML from './content.html';
import './style.css';
import {api} from "@js/api/axios";
import {Table} from "@js/interfaces";


$(async function () {
    $('main').replaceWith(HTML);
    const db = new URLSearchParams(window.location.search).get('db')
    $('title').text(`Tables of ${db}`);
    $("#page-heading").text(`Tables of ${db}`);
    let selectedTables: string[] = [];


    const tables: { _value: Table[], setTables: Function, getTables: Function } = {
        _value: [],
        setTables(tables: Table[]) {

            tables.forEach((table: Table) => {
                $('#occc-1').append(`<div class="cb-container">
                                    <input type="checkbox" id="checkbox-${table.name}" ${table.isSelected ? 'checked': ''}>
                                    <label for="checkbox-${table.name}">${table.name}</label>
                                </div>`);
                if (table.isSelected && !selectedTables.find(t => t === table.name)) {
                    selectedTables.push(table.name);
                    $('#occc-2-l').append(`<li sId="checkbox-${table.name}">${table.name}</li>`);
                }
            })
            $('input[type="checkbox"]').on('change', function () {
                const label = $(`label[for="${this.id}"]`).text();

                if ($(this).is(":checked")) {
                    selectedTables.push(label);
                    $('#occc-2-l').append(`<li sId="${this.id}">${label}</li>`);
                } else {
                    $(`li[sId="${this.id}"`).remove();
                    selectedTables = selectedTables.filter(table => {
                        return table !== label
                    });
                }
            })
            this._value = tables;
            console.log(`SET tables: ${JSON.stringify(this._value)}`)
        },
        getTables() {
            return this._value;
        }
    }
    const response = await api.get(`/tables`, {
        params: {
            'keyword': '',
            'db': db
        }
    });
    const result = response.data
    tables.setTables(result);

    console.log(`tables: ${JSON.stringify(result)}`)

    $('#search-btn').on('click', async () => {
        $('.cb-container').remove();
        const keyword = $('#search-i').val().toString();
        const response = await api.get(`/tables`, {
            params: {
                'keyword': keyword,
                'db': db
            }
        });
        const result = response.data
        tables.setTables(result);

    })

    $('#next-btn').on('click', async () => {
        api.post('/tables/selected', {
            selectedTables: selectedTables,
            db: db
        })
            .then(result => console.log(`tables res: ${JSON.stringify(result.data)}`))
            .then(() => window.location.href = `/table-comp?db=${db}`)
            .catch(error => console.error(error));
    })


});



