import './style.css';
import $ from 'jquery'
import ImageGrid from "@components/ImageGrid";
import { extractHeadingsFromSections, idSections, renderSections, SectionData } from "@components/Sections";
import TableOfContents from '@components/TableOfContents';
import { mediaQuery } from '@utils';

export enum ImageDisplay {
    NONE,
    SINGLE,
    FULL
}

// TOC stands for table of contents
export default (data: SectionData[], imgDisplay: ImageDisplay, titleSpacing?: boolean, TOC?: boolean) => {
    const cont = $('<div></div>')
    const sidebar = $('<div class="col-sm-12 col-md-4 sections-sidebar"><div table-of-contents></div></div>')
    const component = $(`<div class="${TOC ? 'col-md-8' : ''} col-sm-12 main-section-content"></div>`);


    idSections(data, []);
    const sections = renderSections(data, 1, "detail", false)
    sections.forEach((section) => {
        component.append(section)
    })


    if (imgDisplay !== ImageDisplay.NONE && imgDisplay) {
        component.find('.detail-section-cont').first().before($('<div image-grid></div>'))
    }

    cont.replaceWith(component)
    if (TOC) cont.append(sidebar)

    $('div[page-content-d]').replaceWith(cont);

    TableOfContents({
        heading: "Table of Contents",
        items: extractHeadingsFromSections(data),
        onSelect: (id: string) => { window.location.hash = "section-" + id }
    })

    mediaQuery(() => $(".sections-sidebar").after($(".main-section-content")), () => $(".sections-sidebar").before($(".main-section-content")), 992)
    $(window).resize(() => {
        mediaQuery(() => $(".sections-sidebar").after($(".main-section-content")), () => $(".sections-sidebar").before($(".main-section-content")), 992)
    })

    titleSpacing && $('h1').css({ 'letter-spacing': 'normal', 'text-align': 'unset' })
    ImageGrid(imgDisplay);
}
