import $ from 'jquery';

export default ()=> {
    $(document).on('keydown', (e) => {
        const focused = $(':focus');
        if (e.keyCode === 13) {
            focused.click();
        }
    });
}