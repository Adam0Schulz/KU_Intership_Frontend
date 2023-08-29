import HTML from './component.html';
import $ from 'jquery';
import './style.css';

export interface ItemCardProps {
    image: {
        url: string,
        label: string
    },
    title: string
}

export default () => {
    $('div[item-card]').each((index, element) => {
        const imageUrl = $(element).attr("image-url")
        const imageLabel = $(element).attr("image-label")
        const title = $(element).attr("title")
        const imageless = $(element).attr("imageless")

        $(element).html(HTML)
        $(element).find('.item-card__text').text(title)
        if(imageless) {
            $(element).find('.item-card__bg-img').remove()
            $(element).find('.item-card').addClass('item-card--imageless')
        } else {
            $(element).find('.item-card__bg-img').attr("src", imageUrl).attr("alt", imageLabel)
        }
        

    })

    //$('#item-card__text').text(props.title)

}