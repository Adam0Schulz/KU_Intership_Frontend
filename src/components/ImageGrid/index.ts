import HTML from './component.html';
import $ from 'jquery';
import './style.css';
import ImageViewerPopUp from "@components/ImageViewer";
import {ImageDisplay} from "@components/PageContentSection";

export const imageElements: HTMLImageElement[] = [];
let x = Math.floor(Math.random() * 8) + 1;
//const x = 3;
for (let i = 0; i < x; i++) {
    const img = new Image();
    img.alt = `img${i}`;
    img.src = `https://picsum.photos/120${i}/80${i}`;
    img.tabIndex = 0;
    imageElements.push(img);
}

export default (imgDisplay: ImageDisplay) => {
    if (imgDisplay === ImageDisplay.NONE || !imgDisplay) {
        return
    } else {
        if (imgDisplay === ImageDisplay.SINGLE) {
            x = 1;
            imageElements.splice(1);
        }
        $('div[image-grid]').replaceWith(HTML);
        const grid = $('#ig-1');
        if (x > 2) {
            grid.after('<div class="image-grid" id="ig-2"></div>');
        } else {
            grid.css({'grid-template-rows': '20em'})
        }
        const grid2 = $('#ig-2');

        switch (x) {
            case 1:
                grid.css({'grid-template-columns': '1fr'});
                break;
            case 2:
                grid.css({'grid-template-columns': '1fr 2fr'});
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
        for (let i = 1; i <= imageElements.length && i <= 6; i++) {
            const img = imageElements[i - 1];
            img.id = `img-g--${i - 1}`;
            if (x < 6) {
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
        $('.image-grid').find('img').on('click', (e) => {
            const id = +e.currentTarget.id.split('--')[1]
            ImageViewerPopUp(id);
        })

    }
}