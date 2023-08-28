import HTML from "./component.html"
import $ from "jquery"
import './style.css'

export const numOfDisplayedPages = 5   // to do: link with the same variable in css

interface Props {
    displayResults?: boolean,
    numOfPages: number,
}

export default (props: Props) => {
    $("div[pagination]").html(HTML)

    const changePage = (page: number) => {
        page <= props.numOfPages 
        ?
        window.location.href = window.location.pathname + "?page=" + page
        : {}
    }

    const params = new URLSearchParams(new URL(window.location.href).search)
    const page = Number(params.get("page"))

    $(".pagination-cont .page-results").text(props.numOfPages + " Results")
    if (props.displayResults) $(".custom-pagination .page-results").remove()

    renderArray(page, props.numOfPages)

    $(".custom-pagination .custom-pagination__arrow").on("click", e => {
        $(e.currentTarget).hasClass("custom-pagination__arrow--left")
        ?
        changePage(page - 1)
        :
        changePage(page + 1)
    }
    )

    $(".custom-pagination__pages-cont .custom-pagination__cell").on("click", e => { 
        changePage(Number(e.currentTarget.textContent))
    })

    if (page == props.numOfPages) $(".custom-pagination .custom-pagination__arrow--right").addClass("disabled").off("click")
    if (page == 1) $(".custom-pagination .custom-pagination__arrow--left").addClass("disabled").off("click")
}

function renderArray(selectedNum: number, numOfPages: number) {
    $(".custom-pagination__cell").remove()
    const array = generateNumberArray(numOfPages)
    const offset = () => {
        const formula = selectedNum - (numOfDisplayedPages / 2) - 0.5
        if (formula < 0) {
            return 0
        }
        if (selectedNum > numOfPages - (numOfDisplayedPages / 2) - 0.5) {
            return numOfPages - numOfDisplayedPages
        }
        return formula
    }
    const subArray = getSubArray(array as [], numOfDisplayedPages, offset())
    subArray.map(number => $('.custom-pagination__pages-cont').append($(`<h6 class="custom-pagination__cell ${selectedNum == number ? "selected" : ""}">${number}</h6>`)))
}

function generateNumberArray(count: number) {
    const numberArray = [];
    for (let i = 1; i <= count; i++) {
        numberArray.push(i);
    }
    return numberArray;
}

function getSubArray(array: [], lengthOfSub: number, offset: number) {
    return array.slice(offset, lengthOfSub + offset)
}

