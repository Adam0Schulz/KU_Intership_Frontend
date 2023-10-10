import Table, { getAttrNames } from "@components/Table";
import HTML from "./content.html"
import "./style.css"
import GenericSidebar from "@components/GenericSidebar";
import { api } from "@js/api/axios";

const data = [
    {
        id: 1,
        danish_name: "Granny Smith",
        latin_name: "Malus domestica 'Granny Smith'",
        description: "Crisp and tart green apple",
        description2: "Popular for baking",
        description3: "Originated in Australia",
        color: "Green",
        shape: "Round",
        dictionary: 1
    },
    {
        id: 2,
        danish_name: "Red Delicious",
        latin_name: "Malus domestica 'Red Delicious'",
        description: "Sweet and mildly flavored apple",
        description2: "Bright red skin",
        description3: "Common apple variety",
        color: "Red",
        shape: "Oval",
        dictionary: 2
    },
    {
        id: 3,
        danish_name: "Fuji",
        latin_name: "Malus domestica 'Fuji'",
        description: "Sweet and crisp apple",
        description2: "Originally from Japan",
        description3: "Yellow-green with red stripes",
        color: "Yellow-green",
        shape: "Round",
        dictionary: 1
    },
    {
        id: 4,
        danish_name: "Honeycrisp",
        latin_name: "Malus domestica 'Honeycrisp'",
        description: "Sweet and juicy apple",
        description2: "Known for its crunchy texture",
        description3: "Developed in Minnesota, USA",
        color: "Light red with yellow specks",
        shape: "Irregular",
        dictionary: 2
    },
    {
        id: 5,
        danish_name: "Gala",
        latin_name: "Malus domestica 'Gala'",
        description: "Sweet and aromatic apple",
        description2: "Commonly used in salads",
        description3: "Originated in New Zealand",
        color: "Red and yellow stripes",
        shape: "Round",
        dictionary: 1
    }
]

// const data2 = [
//     {
//         id: 1,
//         danish_name: "Granny Smith",
//         latin_name: "Malus domestica 'Granny Smith'",
//         description: "Crisp and tart green apple",
//         description2: "Popular for baking",
//         description3: "Originated in Australia",
//         color: "Green",
//         shape: "Round",
//         dictionary: 1
//     },
//     {
//         id: 4,
//         danish_name: "Honeycrisp",
//         latin_name: "Malus domestica 'Honeycrisp'",
//         description: "Sweet and juicy apple",
//         description2: "Known for its crunchy texture",
//         description3: "Developed in Minnesota, USA",
//         color: "Light red with yellow specks",
//         shape: "Irregular",
//         dictionary: 2
//     },
//     {
//         id: 5,
//         danish_name: "Gala",
//         latin_name: "Malus domestica 'Gala'",
//         description: "Sweet and aromatic apple",
//         description2: "Commonly used in salads",
//         description3: "Originated in New Zealand",
//         color: "Red and yellow stripes",
//         shape: "Round",
//         dictionary: 1
//     }
// ]

$(async function () {
    $('main').replaceWith(HTML)


    const url = new URL(window.location.href);
    const params = new URLSearchParams(url.search);

    const dbName = params.get('db');

    const response = await api.get("/tables/selected", {
        params: {
            db: dbName
        }
    })



    console.log(response.data)

    initStuff([], [], "blank")
    function addEventListenerToCheckboxes(data: Object[], tableName: string) {
        $(`input[type='checkbox'][attr-select]`).on("change", (e) => {
            const checkboxPair = $(`input[type='checkbox'][attr-select]`).filter((_, item) => $(item).parent().text() == $(e.currentTarget).parent().text())
            if ($(e.currentTarget).is(":checked")) {
                checkboxPair.prop("checked", true)
            } else {
                checkboxPair.prop("checked", false)
            }

            const attrNames = Array.from(new Set(removeSpacesFromArrayStrings($(`input[type='checkbox'][attr-select]`)
                .filter((_, item) => $(item).is(":checked"))
                .parent()
                .map((_, item) => $(item).text())
                .toArray())))
            initStuff(attrNames, data, tableName)
        })
    }


    GenericSidebar({
        id: "big-side", list: response.data, onClick: async (tableName) => {
            const data = await api.get(`/tables/${tableName}/example`, { params: { db: dbName } }).then(res => res.data)
            initStuff([], data, tableName)
        }
    })




    function initStuff(attrNames: string[], data: Object[], tableName: string) {
        $(".big_div h1 span").text(tableName)
        Table({ id: "table1", objects: data, checked: attrNames })
        Table({ id: "table2", objects: filterObjectsByAttributes(data, attrNames) })
        GenericSidebar({ id: "small-side", list: getAttrNames(data[0]), checked: attrNames })
        addEventListenerToCheckboxes(data, tableName)
    }




})

// Helper function - simulates requerying of the database for a new set of data
function filterObjectsByAttributes<T>(objects: T[], attributeNames: string[]): T[] {

    return objects.map(obj => {
        const filteredObject: Partial<T> = {};

        attributeNames.forEach(attributeName => {
            if (obj.hasOwnProperty(attributeName)) {
                filteredObject[attributeName as keyof T] = obj[attributeName as keyof T];
            }
        });

        return filteredObject as T;
    });
}

function removeSpacesFromArrayStrings(strings: string[]): string[] {
    return strings.map((str) => str.trim());
}