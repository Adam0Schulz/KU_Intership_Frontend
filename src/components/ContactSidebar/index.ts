import HTML from './component.html';
import $ from 'jquery';
import {Contact} from "@js/interfaces";
import {spaceTelephoneNumber} from "@components/LocalFooter";

export default (contact: Contact) => {
    $('#contact-sidebar').replaceWith(HTML);
    $('#panel-title').html('<h2>Contact</h2>');
    const content = `<address>       
           <a href="${contact.departmentWeb}">${contact.department}</a><br>
           <a href="${contact.institutionWeb}">${contact.institution}</a><br>
                ${contact.address.addressDetail},
                <br>${contact.address.postalCode + " " + contact.address.city + " " + contact.address.district}<br>
                E-mail: <a href="${contact.email}">${contact.team}</a><br>
            <abbr title="Tlf.">Tlf:</abbr> <a href="tel:+${contact.phone}">${spaceTelephoneNumber(contact.phone)}</a>
        </address>`
    $('#panel-content').html(content)

}