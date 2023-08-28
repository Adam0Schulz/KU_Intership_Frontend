import HTML from './component.html';
import $ from 'jquery';
import './style.css';

const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'Æ', 'Ø', 'Å'];

export default () => {
    $('div[alpha-filter]').replaceWith(HTML)
    alphabet.map(letter => $('.alpha-filter').append($(`<h6 class="alpha-filter__letter">${letter}</h6>`)))

}