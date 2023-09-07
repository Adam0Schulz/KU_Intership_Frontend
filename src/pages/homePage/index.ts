import $ from 'jquery';
import './style.css'
import components, {meta} from "@js/components";
import HTML from "../homePage/content.html";
import SearchSection from "@components/SearchSection";
import InfoComp from "@components/InfoComp";
import PageContentSection from "@components/PageContentSection";


meta.then(res => console.log(res))

$(async function () {

    $('div[main-content]').replaceWith(HTML);
    await components(
        {
            crumbsArray: [
                {label: (await meta).database, link: "", isActive: true}
            ]
        }
    )
    SearchSection("Find " + (await meta).mainEntity,
        "Search for " + (await meta).mainEntity
    );
    InfoComp({
        heading: "Advanced Search",
        body: "Do you need a more specific search with the option to search for each attribute separately?",
        link: {
            label: "",
            url: ""
        },
        onClick: () => window.location.href = "browse"
    });
    PageContentSection([
        {
            heading: "The Pometum Apple Key",
            body: "The key includes 317 varieties of apple, that either are of danish origin or have been widely grown in Denmark. The varieties are part of the collection of apple varieties at the Pometum in Høje Tåstrup, at the Faculty of Science at the University of Copenhagen. The collection is part of NordGen."
        }
    ], 0, true)
    console.log(window.location.pathname);

});

