// Here you import components 
import SearchSection from "@components/SearchSection"
import Branding from "@components/Branding"
import TopMenu from "@components/TopMenu";
import SecondMenu from "@components/SecondMenu";
import BreadCrumbs from "@components/BreadCrumbs";
import {Params} from "@js/interfaces";
import SidebarNavigation from "@components/SidebarNavigation";
import InfoComp from "@components/InfoComp";
import LocalFooter from "@components/LocalFooter";

import MobileMenu from "@components/MobileMenu"

export default (params: Params) => {
    // And here you execute them
    TopMenu();
    SecondMenu();
    Branding(params.branding?.heading);
    SidebarNavigation(params.pageConfig);
    BreadCrumbs(params.crumbsArray);
    params.searchSection && SearchSection(params.searchSection?.heading, params.searchSection?.subHeading);
    params.searchSection && InfoComp();
    LocalFooter(params.contact);
    MobileMenu()
}