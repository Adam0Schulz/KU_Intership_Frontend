import HTML from './component.html';
import HTMLImageless from './componentImageless.html';
import $ from 'jquery';
import './style.css';

export interface ItemCardProps {
    image?: {
        url: string,
        label: string
    },
    title?: string,
    i1?: string,
    i2?: string,
    i3?: string
}

export default () => {
    $('div[item-card]').each((_index, element) => {

        const imageless = $(element).attr("imageless")

        if(imageless !== undefined) {
            $(element).html(`
                <div class="item-card--imageless">
                    <p>${$(element).attr('i1')}</p>
                    <p>${$(element).attr('i2')}</p>
                    <p>${$(element).attr('i3')}</p>
                    <span class="glyphicon glyphicon-chevron-right"></span>
                </div>`)
            $('.item-card-list__heading').find('span').remove()
        } else {
            $(element).html(HTML)
            const imageUrl = $(element).attr("image-url")
            const imageLabel = $(element).attr("image-label")
            const title = $(element).attr("title")
            $(element).find('.item-card__text').text(title)
            $(element).find('.item-card__bg-img').attr("src", imageUrl).attr("alt", imageLabel)
        }
        

    })
}