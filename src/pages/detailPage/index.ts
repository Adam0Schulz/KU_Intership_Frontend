import $ from 'jquery';
import components, {ActivePage} from "@js/components";
import HTML from './content.html';
import PageContentSection from "@components/PageContentSection";

$(function () {
    $('div[main-content]').replaceWith(HTML);

    // PageContentSection([{
    //     heading: 'Red Delicious',
    //     subtitle: 'Aero, Denmark',
    //     subsections: [{
    //         heading: 'Origin',
    //         body: 'Aero, Denmark'
    //     }, {
    //         heading: 'Color',
    //         body: 'red'
    //     }, {
    //         heading: 'Usage',
    //         body: 'everything'
    //         }
    //     ]
    // }], 2);

    // PageContentSection([{
    //     heading: 'Eric the red',
    //     subtitle: 'Isafjordur, Iceland',
    //     subsections: [{
    //         heading: '',
    //         footer: '',
    //         subsections: [
    //             {
    //                 heading: 'Title',
    //                 body: 'Eric the red'
    //             },
    //             {
    //                 heading: 'Origin',
    //                 body: 'Isafjordur, Iceland'
    //             }
    //         ]
    //     }, {
    //         heading: '',
    //         footer: 'Contents',
    //         subsections: [
    //             {
    //                 heading: 'Bibliography',
    //                 body: 'Íslenskt fornbréfasafn VIII. nr. 80, bl. 85-86. Reykjavík 1906-1913'
    //             },
    //             {
    //                 heading: 'Incipit',
    //                 body: '„Jak Anders Hansson, Eric Arnulsson, Gunnar Ericsson, Anders Gudmundsson …“'
    //             },
    //             {
    //                 heading: 'Explicit',
    //                 body: '„… datum Bergis anno domini md sexto infra octauam epifanie.“'
    //             }
    //         ]
    //     }]
    // }], 1)
    // PageContentSection(
    //     [
    //         {
    //             heading: 'abetekara (m.)',
    //             subtitle: '[abəˈtekara]',
    //             body: 'foran personnavne: abeteker; apoteker; ‹hon kommer ota te abetekarens.› || flt. abetekarna = apotekspersonalet; farmaceuterne.',
    //             footer: 'Bornholms Ordbog'
    //         },
    //         {
    //             heading: 'apotikkara (m.)',
    //             subtitle: '[apoˈtekara]',
    //             body: '[s. appetekara.]',
    //             footer: 'Bornholms Ordbog'
    //         },
    //         {
    //             heading: 'appetekara, apotikkara (m.)',
    //             subtitle: '[ap⁽⁾əˈtekara, apoˈtekara]',
    //             body: 'ogs. en form apotikkara kan høres (jf. abbetekara) apoteker. hertil appetekerska, en apotekers hustru.',
    //             footer: 'Bornholms Ordbog'
    //         },
    //         {
    //             heading: 'abetekara (m.)',
    //             body: 'apoteker – flt. farmaceuterne.',
    //             footer: 'Teinnæs’ måloptegnelser'
    //         },
    //         {
    //             heading: 'Teinnæs’ måloptegnelser',
    //             subtitle: '[apo^tikkara]',
    //             footer: 'Teinnæs’ måloptegnelser'
    //         }
    //     ], 0)

    PageContentSection([{
        heading: 'Resource',
        subtitle: 'Aero, Denmark',
        subsections: [{
            heading: 'Origin',
            body: 'Aero, Denmark'
        }, {
            heading: 'Color',
            body: 'red'
        }, {
            heading: 'Usage',
            body: 'everything'
            }
        ]
    }], 0, false, true);
    
    components(
        {
            crumbsArray: [
                {label: "Detail", link: "", isActive: true}
            ],
            activePage: ActivePage.DETAIL
        }
    )
    $('title').text("Detail");
});



