import $ from 'jquery';
import components, {ActivePage, meta} from "@js/components";
import HTML from './content.html';
import ContactSidebar from "@components/ContactSidebar";
import PageContentSection from "@components/PageContentSection";

$(async function () {

    $('div[main-content]').replaceWith(HTML);
    components(
        {
            crumbsArray: [
                {label: "About", link: "", isActive: true}
            ],
            activePage: ActivePage.ABOUT
        }
    );
    ContactSidebar((await meta).contact);
    PageContentSection([
        {
            heading: 'About us',
            subsections: [
                {
                    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget neque nec ligula cursus ultricies. Vestibulum ac lorem arcu. Quisque interdum euismod justo non lacinia. Sed euismod ipsum ut neque consectetur, eget vestibulum ligula convallis. Sed eget tincidunt sapien. Praesent nec felis eu purus ultricies dignissim. Vivamus dapibus elit eu fringilla sodales. Maecenas in tristique orci. Nullam vel justo quis lectus auctor iaculis non eget justo.Suspendisse potenti. Integer auctor ipsum non est fermentum, vel gravida turpis bibendum. Duis congue sem sit amet libero posuere, eu fringilla justo consequat. Morbi vestibulum, arcu nec feugiat sodales, ipsum ipsum vehicula ex, ac bibendum enim nulla a ex. Etiam tristique nisl nec libero fringilla, non dapibus purus varius.'
                }
            ]
        }
    ], 1, true)
});



