import './style.css';
import $ from 'jquery'

export interface SectionData {
    dictionary?: boolean,
    resource?: boolean,
    headings: string[],
    bodies: string[],
    subtitle?: string,
    footer?: string
}
export default (data: SectionData) => {
    const component = $('<div class="content-section"><h1 id="page-heading"></h1>\n' +
        '<p id="page-subtitle"></p>\n' +
        '<div image-grid></div></div>');
    $("#page-heading").text("Red Delicious");
    $("#page-subtitle").text("Æro, Denmark");
    data.headings.forEach((heading, index)=> {
        component.append($(`<h2 class="content-section__heading">${heading}</h2>`));
        console.log(data.bodies[index]);
        component.append($(`<p class="content-section__body">${data.bodies[index]}</p>`))
    })
    data.subtitle && component.find('h2').first().after($(`<p class="content-section__subtitle">${data.subtitle}</p>`));
    data.footer && component.append($(`<p class="content-section__footer">${data.footer}</p>`))
    $('div[page-content]').append(component);
}