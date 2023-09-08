import $ from 'jquery';
import HTML from './component.html';
import './style.css'

export default ()=> {
    $('div[remove-icon]').replaceWith(HTML);
    $('.remove-icon').on('click', function() {
        $(this).parent().parent().parent().remove()
    })
}