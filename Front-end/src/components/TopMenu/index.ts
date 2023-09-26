import HTML from './component.html'
import $ from 'jquery';
import { toggleMobileMenu } from '@components/MobileMenu';

export default () => {
    $('header[top-menu]').html(HTML);
    $("#btn_left").on("click", toggleMobileMenu)
}