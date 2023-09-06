import HTML from './component.html';
import $ from 'jquery';
import './style.css';
import { Link } from '@js/interfaces';

interface Props {
    heading: string,
    body: string,
    link: Link,
    onClick: () => {}
}

export default (props: Props) => {
    $('div[info-comp]').replaceWith(HTML);
    $('.info-cont').on("click", () => props.onClick())
    $('.info-cont h2').text(props.heading)
    $('.info-cont p').text(props.body)
}