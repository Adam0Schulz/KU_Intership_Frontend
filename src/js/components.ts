// Here you import components
import SearchSection from "@components/SearchSection"
import Branding from "@components/Branding"
import TopMenu from "@components/TopMenu";
import SecondMenu from "@components/SecondMenu";
import BreadCrumbs from "@components/BreadCrumbs";
import {Contact, PageConfig, SearchSection as ISearchSection} from "@js/interfaces";
import SidebarNavigation from "@components/SidebarNavigation";
import InfoComp from "@components/InfoComp";
import LocalFooter from "@components/LocalFooter";
import MobileMenu from "@components/MobileMenu"

export interface Params {
    searchSection?: ISearchSection,
    branding: { heading: string },
    crumbsArray: { label: string, link: string, isActive: boolean }[],
    pageConfig: PageConfig,
    contact: Contact
}
export default (params: Params) => {
    // And here you execute them
    TopMenu();
    SecondMenu();
    Branding(params.branding?.heading);
    SidebarNavigation(params.pageConfig);
    BreadCrumbs(params.crumbsArray);
    LocalFooter(params.contact);



    MobileMenu({
        primaryMenu: {
            options: [
                {
                    label: "ahha",
                    url: "www.google.com"
                }
            ]
        },
        secondaryMenu: {
            options: [
                {
                    label: "ahha",
                    url: "www.google.com"
                },
                {
                    heading: "multi-level-menu",
                    subOptions: [
                        {
                            label: "ahhah",
                            url: "www.google.com"
                        },
                        {
                            label: "ahhah",
                            url: "www.google.com"
                        },
                        {
                            label: "ahhah",
                            url: "www.google.com"
                        }
                    ]
                }
            ]
        },
        ternaryMenu: {
            options: [
                {
                    label: "ahha",
                    url: "www.google.com"
                }
            ]
        }
        
    })
}