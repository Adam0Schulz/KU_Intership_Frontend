import HTML from './component.html'
import $ from 'jquery'
import './style.css'

export default () => {
    $("div[info-icon]").replaceWith(HTML)
}