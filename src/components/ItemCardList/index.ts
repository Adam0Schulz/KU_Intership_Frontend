import HTML from './component.html';
import $ from 'jquery';
import './style.css';
import ItemCard, { ItemCardProps } from '@components/ItemCard';

interface Props {
    cards: ItemCardProps[]
}

export default (props: Props) => {
    $('div[item-card-list]').replaceWith(HTML);
    props.cards.map(card => {
        $('.item-card-list').append($(`<div item-card title='${card.title}' image-url='${card.image.url}' image-label='${card.image.label}'></div>`))
    })
    ItemCard()


}