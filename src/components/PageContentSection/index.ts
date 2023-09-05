import './style.css';
import $ from 'jquery'
import ImageGrid from "@components/ImageGrid";

export enum ImageDisplay {
    NONE,
    SINGLE,
    FULL
}
export interface SectionData {
    heading: string,
    body?: string,
    subtitle?: string,
    footer?: string,
    img?: string[],
    imgDisplay?: ImageDisplay,
    subsections?: SectionData[]

}
export default (data: SectionData) => {
    const component = $('<div class="content-section"><h1 class="main-heading"></h1><p class="subtitle"></p></div>');
    component.find('.main-heading').text(data.heading);
    data.subtitle && component.find('.subtitle').text(data.subtitle);


    if(data.imgDisplay !== ImageDisplay.NONE && data.imgDisplay) {
        component.append($('<div image-grid></div>'))
    }
    data.footer !== undefined && component.append($(`<p class="content-section__footer"></p>`))
    $('div[page-content]').append(component);
    ImageGrid(data.imgDisplay);
}