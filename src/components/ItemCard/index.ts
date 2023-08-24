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

        $(element).html(HTML)
        $(element).find('.item-card__text').text(title)
        $(element).find('.item-card__bg-img').attr("src", imageUrl).attr("alt", imageLabel)

    })

    //$('#item-card__text').text(props.title)

}