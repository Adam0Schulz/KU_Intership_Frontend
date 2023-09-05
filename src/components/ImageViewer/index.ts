import HTML from './component.html';
import $ from 'jquery';
import './style.css';
import {imageElements} from "@components/ImageGrid";
import Popup from '@components/Popup';

export default (index: number) => {
    
    const thumbnails = $('.image-view__small');
    const cImage = $('.image-view__large');
    const length = imageElements.length;
    let start = 0;
    let rePopulate = true;
    const selected = {
        _value: 0,
        getValue() {
            return this._value;
        },
        setValue(newValue: number) {
            cImage.empty();
            cImage.append(cloneAndAddId(newValue, 'c'));
            thumbnailSelectorEffect(newValue);
            hideArrows(newValue);
            $('#progress').text(`${newValue + 1} / ${length}`)
            this._value = newValue;
            populateThumbnails();
        }
    }

    //initial selection based on the click event
    selected.setValue(index);

    //reusable to populate thumbnail section
    function populateThumbnails() {
        const position = selected.getValue();
        if (position < start ) {
            start = position;
        }
        if (position > start + 4 ) {
            start = position-4;
        }
        thumbnails.empty();
        for (let i = 0; i <= 4 && i <= length; i++) {
            const index = start + i;
            const img = cloneAndAddId(index, 'th')
            if (position === index) {
                img.addClass('image__active');
            }
            thumbnails.append(img);
        }
    }

    //reusable to apply selected image effect
    function thumbnailSelectorEffect(toAdd: number) {
        if (selected.getValue() !== toAdd) {
            $(`#img-th--${selected.getValue()}`).removeClass('image__active');
            $(`#img-th--${toAdd}`).addClass('image__active');
        }
    }

    //click events on the thumbnails
    thumbnails.on('click', 'img', (e) => {
        const id = +e.currentTarget.id.split('--')[1];
        selected.setValue(id);
    })
    const next = () => {
        if (selected._value < imageElements.length - 1) {
            selected.setValue(selected.getValue() + 1)
        }
    }
    const previous = () => {
        if (selected._value > 0) {
            selected.setValue(selected.getValue() - 1)
        }
    }
    

    //click & key events & preventing the keys from firing multiple times
    let mid = false;
    $('.right__btn').on('click', next)
    $(document).on('keydown', (e) => {
        if (e.keyCode === 39 && !mid) {
            mid = true;
            next();
            mid = false;
        }
    });
    $('.left__btn').on('click', previous)
    $(document).on('keydown', (e) => {
        e.preventDefault();
        if (e.keyCode === 37 && !mid) {
            mid = true;
            previous();
            mid = false;
        }
    });
}

//reusable to create cloned copies of <img> elements
const cloneAndAddId = (index: number, idTag: string) => {
    const imgCopy = $(imageElements[index]).clone();
    imgCopy.attr('id', `img-${idTag}--${index}`);
    return imgCopy;
}

function hideArrows(position: number) {
    const left = $('.left__btn');
    const right = $('.right__btn');
    left.removeClass('hidden-arrow');
    right.removeClass('hidden-arrow');
    if (position === 0) {
        left.addClass('hidden-arrow');
    }
    if (position === imageElements.length - 1) {
        right.addClass('hidden-arrow');
    }

    //apply popup
    Popup()
}



