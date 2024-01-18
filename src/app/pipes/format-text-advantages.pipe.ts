import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatTextAdvantages'
})
export class FormatTextAdvantagesPipe implements PipeTransform {

  transform(text: string): string {
    if (text.length > 95) {
      text = text.substring(0, 95) + "...";
    }
    return text;
  }
}
