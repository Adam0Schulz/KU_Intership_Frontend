import HTML from "./component.html"
import "@gcss"
import "./style.css"
import $ from "jquery"
import { Link } from "@js/interfaces"
import subOption, {Props as subMenu} from "./subOption"

export const toggleMobileMenu = () => {
    $(".mobile-menu").toggleClass("mobile-menu--hidden")
}

const mobileMenuLevels = () => {

    $(".mobile-menu__level").on("click", (event) => {
        $(".mobile-menu__level").removeClass("active")
        $(event.currentTarget).addClass("active")
        $(".mobile-menu__level.active").removeClass("mobile-menu__level--small").addClass("mobile-menu__level--big")
        $(".mobile-menu__level:not(.active)").removeClass("mobile-menu__level--big").addClass("mobile-menu__level--small")
        rotatingArrow()
    })

    

}

const rotatingArrow = () => {

    let toBeRotated: JQuery<HTMLElement>[] = []
    $(".mobile-menu__level").removeClass("flipped")
    const levels = $(".mobile-menu__level").toArray()
    let index = 0
    while (true) {
        if(!$(levels[index]).hasClass("active")) {
            toBeRotated.push($(levels[index]))
        } else {
            break
        }
        index++
    }

    toBeRotated.map((item) => {
        item.addClass("flipped")
    })

}

const expadingSubmenu = () => {
    $(".mobile-menu__submenu-icon").on("click", (event) => {
        $(event.currentTarget).toggleClass("flipped")
        $(event.currentTarget.parentElement.parentElement).toggleClass("expanded")
    })
}

const insertMenu = (menu: Menu, typeOfMenu: 'primary' | 'secondary' | 'ternary') => {
    const elementQuery = `#mobile-menu__level-${typeOfMenu} .mobile-menu__content ul`
    menu.options.map((option) => {
        if('url' in option) {
            $(elementQuery).append($(`<li class="mobile-menu__item"><a href="${option.url}">${option.label}</a></li>`))
        } else {
            $(elementQuery).append(subOption(option))
            
        }
    })
}

interface Menu {
     options: (Link | subMenu)[]
}

interface Props {
    primaryMenu: Menu,
    secondaryMenu: Menu,
    ternaryMenu: Menu
}

export default (props: Props) => {
    $("div[mobile-menu]").html(HTML)

    insertMenu(props.primaryMenu, "primary")
    insertMenu(props.secondaryMenu, "secondary")
    insertMenu(props.ternaryMenu, "ternary")

    mobileMenuLevels()
    expadingSubmenu()

}

