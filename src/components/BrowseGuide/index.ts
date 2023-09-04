import HTML from './component.html'
import $ from 'jquery'
import './style.css'

import TableOfContents from '@components/TableOfContents'
import Popup from '@components/Popup'
import Checkbox from '@components/Input/Checkbox'

export default () => {
    $("div[browse-guide]").replaceWith(HTML)
    Popup()
    TableOfContents({
        heading: "Apple Browse Guide",
        items: [
            {
                heading: "bla bla bla",
                subHeadings: [
                    {
                        heading: 'hello',
                        subHeadings: [
                        {
                            heading: "hello2",
                            subHeadings: [
                                {
                                    heading: "hello3",
                                    subHeadings: [
                                        {
                                            heading: "hello4"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            heading: "hello2"
                        },
                        {
                            heading: "hello2"
                        }
                        ]
                    },
                    {
                        heading: "hello"
                    },
                    {
                        heading: "hello"
                    }
                ]},
            {
                heading: "bla bla bla"
            },
            {
                heading: "bla bla bla"
            },
            {
                heading: "bla bla bla"
            },
            {
                heading: "bla bla bla"
            },
            {
                heading: "bla bla bla"
            },
            {
                heading: "bla bla bla"
            },
            {
                heading: "bla bla bla"
            },
            {
                heading: "bla bla bla"
            },
            {
                heading: "bla bla bla"
            },
            {
                heading: "bla bla bla"
            },
            {
                heading: "bla bla bla"
            },
            {
                heading: "bla bla bla"
            },
            {
                heading: "bla bla bla"
            },
            {
                heading: "bla bla bla"
            },
            {
                heading: "bla bla bla"
            },
            {
                heading: "bla bla bla"
            },
            {
                heading: "bla bla bla"
            },
            {
                heading: "bla bla bla"
            },
            {
                heading: "bla bla bla"
            },
        ]
    })
    Checkbox()
}