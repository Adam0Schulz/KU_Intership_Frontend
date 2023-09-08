import $ from 'jquery';
import HTML from './component.html';
import './style.css'

export default ()=> {
    $('div[remove-icon]').replaceWith(HTML);
    $('.remove-icon').on('click', function() {
        const filterElement = $(this).parent().parent().parent();
        console.log(`filer removed: ${filterElement.attr('label').toLowerCase()}`);
        filterElement.remove();
    });
}