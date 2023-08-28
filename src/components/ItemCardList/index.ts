import HTML from './component.html';
import $ from 'jquery';
import './style.css';
import ItemCard, { ItemCardProps } from '@components/ItemCard';

interface Props {
    cards: ItemCardProps[],
    isImageless?: boolean
}

export default (props: Props) => {
    $('div[item-card-list]').replaceWith(HTML);
    if(props.isImageless) {
        $('.item-card-list').addClass('item-card-list--imageless')
    }
    props.cards.map(card => {
        $('.item-card-list').append($(`<div item-card ${props.isImageless ? 'imageless' : ''} title='${card.title}' image-url='${card.image.url}' image-label='${card.image.label}'></div>`))
    })
    ItemCard()


}