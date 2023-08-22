import HTML from './component.html';
import $ from 'jquery';
import './style.css';
import img1 from '@img/a1.jpg'
import img2 from '@img/a2.jpg'
import img3 from '@img/a3.jpg'
import img4 from '@img/a4.jpg'
import img5 from '@img/a5.jpg'
import img6 from '@img/a6.jpg'
import img7 from '@img/a7.jpg'
import img8 from '@img/a8.jpg'

const images = [img1, img2, img3, img4, img5, img6, img7, img8]

export default () => {
    $('div[image-grid]').replaceWith(HTML);
    const grid = $('.image-grid');
    const x = Math.floor(Math.random()*8) + 1;

    if (x > 2) {
        grid.after('<div class="image-grid-2"></div>');
    } else {
        grid.css({'grid-template-rows': '20em'})
    }
    const grid2 = $('.image-grid-2');

    switch (x) {
        case 1: grid.css({'grid-template-columns': '1fr'});
            break;
        case 2: grid.css({'grid-template-columns': '1fr 2fr'});
            break;
        case 3: {
            grid.css({'grid-template-columns': '1fr 2fr'});
            grid2.css({'grid-template-columns': '1fr'});
            break;
        }
        case 4: {
            grid.css({'grid-template-columns': '1fr 2fr'});
            grid2.css({'grid-template-columns': '2fr 1fr'})
            break;
        }
        case 5: {
            grid.css({'grid-template-columns': '1fr 2fr'});
            grid2.css({'grid-template-columns': '2fr 1fr 1fr'})
            break;
        }
        default : {
            grid.css({'grid-template-columns': '1fr 2fr 1fr'});
            grid2.css({'grid-template-columns': '2fr 1fr 1fr'})
            break;
        }
    }
    for (let i = 1; i <= x && i <= 6; i++) {
        const img = new Image();
        img.alt = `img${i}`;
        img.src = images[i - 1];
        img.id = `img${i}`;
        if(x < 6) {
            if (i < 3) {
                grid.append(img);
            } else {
                grid2.append(img);
            }
        } else {
            if (i < 4) {
                grid.append(img);
            } else {
                grid2.append(img);
            }
        }
    }
}