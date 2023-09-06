import './style.css';
import $ from 'jquery'
import ImageGrid from "@components/ImageGrid";
import {idSections, renderSections, SectionData} from "@components/Sections";

export enum ImageDisplay {
    NONE,
    SINGLE,
    FULL
}

export default (data: SectionData[], imgDisplay: ImageDisplay) => {
    const component = $('<div class="main-section-content"></div>');
    idSections(data, []);
    renderSections(data, 1, "detail", false).forEach((section) => {
        component.append(section)
    })
    if(imgDisplay !== ImageDisplay.NONE && imgDisplay) {
        component.find('.detail-section-cont').first().before($('<div image-grid></div>'))
    }

    $('div[page-content-d]').replaceWith(component);
    ImageGrid(imgDisplay);
}
