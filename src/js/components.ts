// Here you import components
import Branding from "@components/Branding"
import TopMenu from "@components/TopMenu";
import SecondMenu from "@components/SecondMenu";
import BreadCrumbs from "@components/BreadCrumbs";
import SidebarNavigation from "@components/SidebarNavigation";
import LocalFooter from "@components/LocalFooter";
import MobileMenu from "@components/MobileMenu"
import Footer from "@components/Footer";
import $ from "jquery";
import {getMeta} from "@js/api/calls-pometum";
import EnterListener from "@components/EnterListener";

export interface PageConfig {
    activePage?: ActivePage,
    crumbsArray: { label: string, link: string, isActive: boolean }[],
}
export enum ActivePage {
    BROWSE = 'Browse',
    ABOUT = 'About',
    DETAIL = 'Detail'
}

export default async (pageConfig: PageConfig) => {
    // And here you execute them
    $('title').text(pageConfig.activePage && pageConfig.activePage.toString() || (await meta).database);
    TopMenu();
    SecondMenu();
    Footer();
    Branding((await meta).database);
    SidebarNavigation((await meta).database, pageConfig.activePage);
    BreadCrumbs(pageConfig.crumbsArray);
    LocalFooter((await meta).contact);
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
    EnterListener();
}

export const meta = getMeta().then(res => res.data)