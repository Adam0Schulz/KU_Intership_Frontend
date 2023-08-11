import HTML from './component.html'
import $ from 'jquery';
export default () => {
    $('header[top-menu]').html(HTML);
}