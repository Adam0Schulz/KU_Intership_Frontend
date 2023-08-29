import HTML from './component.html';
import $ from 'jquery';
import './style.css';
import { Link } from '@js/interfaces';

interface Props {
    heading: string,
    body: string,
    link: Link
}

export default (props: Props) => {
    $('div[info-comp]').replaceWith(HTML);
    $('.info-cont').on("click", () => console.log("hello!"))
    $('.info-cont h2').text(props.heading)
    $('.info-cont p').text(props.body)
}