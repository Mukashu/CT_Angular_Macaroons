import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatPhoneNumber'
})
export class FormatPhoneNumberPipe implements PipeTransform {

  transform(phone: string): string {
    phone = "+" + phone.slice(0, 3) + " (" + phone.slice(3, 5) + ") " + phone.slice(5);
    phone = phone.replace(/(\d{3})(\d{2})(\d{2})$/, "$1-$2-$3");
    return phone;
  }
}
