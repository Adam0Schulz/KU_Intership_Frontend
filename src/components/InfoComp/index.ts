import HTML from './component.html';
import $ from 'jquery';
import './style.css';

export default () => {
    $('div[info-comp]').replaceWith(HTML);
    $('.info-cont').on("click", () => console.log("hello!"))
}