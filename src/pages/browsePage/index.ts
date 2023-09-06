import $ from 'jquery';
import components from "@js/components";
import HTML from './content.html';
import ItemCardList from '@components/ItemCardList';
import AlphabeticalFilter from '@components/AlphabeticalFilter';
import Pagination from '@components/Pagination';
import FilterSidebar from '@components/FilterSidebar';
import BrowseGuide from '@components/BrowseGuide';

$(function () {

    $('div[main-content]').replaceWith(HTML);
    components(
        {
            branding: {
                heading: "Browse"
            },
            crumbsArray: [
                { label: "Browse", link: "", isActive: true }
            ],
            pageConfig: {
                title: "Browse",
                pages: [
                    { pageTitle: 'Home', isActive: false },
                    { pageTitle: 'Browse', isActive: true },
                    { pageTitle: 'About', isActive: false },
                    { pageTitle: 'Detail', isActive: false }
                ]
            },
            contact: {
                institution: 'Københavns Universitet',
                institutionWeb: 'http://www.kommunikation.ku.dk',
                department: 'Kommunikation',
                departmentWeb: 'http://www.kommunikation.ku.dk',
                address: {
                    country: 'Denmark',
                    city: 'København',
                    district: 'K',
                    postalCode: 1165,
                    addressDetail: 'Nørregade 10'
                },
                team: 'Web Team',
                email: 'FA-webredaktor@adm.ku.dk',
                phone: 4535324261
            }
        }
    )
    $('title').text("Browse");
    $("#page-heading").text("Browse")
    $("#page-paragraph").text("Here you can browse")

    FilterSidebar({
        infoComp: () => { 
            BrowseGuide({
                content: [
                    {
                        heading: "Section",
                        sections: [
                            {
                                heading: "Subsection",
                                text: "Subsection content",
                            },
                            {
                                heading: "Subsection",
                                text: "Subsection content",
                                image: {
                                    label: "Option",
                                    url: "https://picsum.photos/300/200"
                                },
                            },
                            {
                                text: "Subsection content",
                                image: {
                                    label: "Option",
                                    url: "https://picsum.photos/300/200"
                                },
                            },
                            {
                                heading: "Subsection",
                                text: "Subsection content",
                                image: {
                                    label: "Option",
                                    url: "https://picsum.photos/300/200"
                                },
                            },
                        ],
                    },
                    {
                        heading: "Section",
                        text: "Section content",
                        filterOptions: [
                            {
                                text: "Option",
                                image: {
                                    label: "Option",
                                    url: "https://picsum.photos/300/200"
                                },
                            },
                            {
                                text: "Second Option",
                                image: {
                                    label: "Second Option",
                                    url: "https://picsum.photos/500/200"
                                },
                            },
                        ],
                    },
                    {
                        heading: "Subsection",
                        sections: [
                            {
                                heading: "Subsection",
                                text: "Subsection content",
                                sections: [
                                    {
                                        heading: "Subsection ",
                                        text: "Subsection content",
                                        image: {
                                            label: "Option",
                                            url: "https://picsum.photos/300/200"
                                        },
                                    },
                                ],
                                image: {
                                    label: "Option",
                                    url: "https://picsum.photos/300/200"
                                },
                            },
                        ],
                        text: "Subsection content",
                        image: {
                            label: "Option",
                            url: "https://picsum.photos/300/200"
                        },
                    },
                ],
            })
        }
    })
    Pagination({ numOfPages: 10 })
    AlphabeticalFilter()
    ItemCardList(
        {

            cards: [
                {
                    image: {
                        url: "https://picsum.photos/500/500",
                        label: "bla bla bla"
                    },
                    title: "option"
                },
                {
                    image: {
                        url: "https://picsum.photos/700/500",
                        label: "bla bla bla"
                    },
                    title: "option"
                },
                {
                    image: {
                        url: "https://picsum.photos/500/200",
                        label: "bla bla bla"
                    },
                    title: "option"
                },
                {
                    image: {
                        url: "https://picsum.photos/400/500",
                        label: "bla bla bla"
                    },
                    title: "option"
                },
                {
                    image: {
                        url: "https://picsum.photos/500/500",
                        label: "bla bla bla"
                    },
                    title: "option"
                }
            ],
        }
    )
    // ItemCardList({
    //     columns: ['Word', 'Class', 'Source'],
    //     cards: [
    //         {
    //             i1: "æble",
    //             i2: "sb.",
    //             i3: "Bornholms Ordbog"
    //         },
    //         {
    //             i1: "2æble",
    //             i2: "2sb.",
    //             i3: "2Bornholms Ordbog"
    //         },
    //         {
    //             i1: "3æble",
    //             i2: "3sb.",
    //             i3: "3Bornholms Ordbog"
    //         },
    //         {
    //             i1: "4æble",
    //             i2: "4sb.",
    //             i3: "4Bornholms Ordbog"
    //         },
    //         {
    //             i1: "5æble",
    //             i2: "5sb.",
    //             i3: "5Bornholms Ordbog"
    //         },
    //         {
    //             i1: "6æble",
    //             i2: "6sb.",
    //             i3: "6Bornholms Ordbog"
    //         }
    //     ]})
    
    $.get("http://localhost:8080/ku/footer", function (data) {
        $("footer").replaceWith(data);
    });
});



