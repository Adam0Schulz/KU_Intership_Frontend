import HTML from './component.html';
import $ from 'jquery';
import './style.css';
import ItemCard, { ItemCardProps } from '@components/ItemCard';

interface Props {
    cards: ItemCardProps[],
    columns?: string[]
}

export default (props: Props) => {
    $('div[item-card-list]').replaceWith(HTML);
    if(props.columns) {
        $('.item-card-list').addClass('item-card-list--imageless')
        $('.item-card-list').append($(`<div item-card imageless i1=${props.columns[0]} i2=${props.columns[1]} i3=${props.columns[2]} class="item-card-list__heading"></div`))
    }
    props.cards.map(card => {
        $('.item-card-list').append($(`<div item-card ${props.columns ? `imageless i1=${card.i1} i2=${card.i2} i3=${card.i3}` : `title=${card.title} image-url=${card.image.url} image-label=${card.image.label}`} ></div>`))
    })
    ItemCard()


}