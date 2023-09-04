import HTML from './component.html'
import $ from 'jquery'
import './style.css'

import TableOfContents from '@components/TableOfContents'
import Popup from '@components/Popup'
import Checkbox from '@components/Input/Checkbox'
import PillSection from '@components/PillSection'

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
    PillSection({
        heading: "Selected filters",
        pills: [
            {
                text: "something",
                onChange: () => {}
            },
            {
                text: "something2",
                onChange: () => {}
            },
            {
                text: "hello",
                onChange: () => {}
            },
            {
                text: "world",
                onChange: () => {}
            }
        ]
    })
}