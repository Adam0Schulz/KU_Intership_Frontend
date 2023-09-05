import HTML from './component.html'
import $ from 'jquery'
import './style.css'

interface Props {

}

export default (/* props: Props */) => {
    const children = $("div[popup]").children()
    $('body').addClass('body-background')
    $("div[popup]").replaceWith(HTML)
    $(".popup").append(children)

    const close = () => {
        $('.popup').remove();
        $('body').removeClass('body-background');
    }


    let mid = false;
    $('.popup__btn--close').on('click', close);
    $(document).on('keydown', (e) => {
        e.preventDefault();
        if (e.keyCode === 27 && !mid) {
            mid = true;
            close();
            mid = false;
        }
    });

}