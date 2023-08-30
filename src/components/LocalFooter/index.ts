import HTML from './component.html';
import $ from 'jquery';
import {Contact} from "@js/interfaces";

export default (contact: Contact) => {
    $('#content').append(HTML);

    $('.footer-address').html(`
        <address>       
           <a href="${contact.departmentWeb}">${contact.department}</a><br>
           <a href="${contact.institutionWeb}">${contact.institution}</a><br>
                ${contact.address.addressDetail},
                <br>${contact.address.postalCode +" "+ contact.address.city +" "+contact.address.district}<br>
        </address>
    `);

    $('.footer-data').html(`
        <address>
            ${contact.department}<br>
            E-mail: <a href="${contact.email}">${contact.team}</a><br>
            <abbr title="Tlf.">Tlf:</abbr> <a href="tel:+${contact.phone}">${spaceTelephoneNumber(contact.phone)}</a>
        </address>
    `);
}

export const spaceTelephoneNumber = (phone: number)=> {
    const numberString = phone.toString();
    let spacedNumber = '+';

    for (let i = 0; i < numberString.length; i++) {
        spacedNumber += numberString[i];
        if ((i + 1) % 2 === 0 && i !== numberString.length) {
            spacedNumber += ' ';
        }
    }
    return spacedNumber;
}