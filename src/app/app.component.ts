import {Component, OnInit} from '@angular/core';
import {AdvantageType} from "../types/advantage.type";
import {ProductsType} from "../types/products.type";
import {ContactsType} from "../types/contacts.type";
import {ProductsService} from "./services/products.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public advantages: AdvantageType[] = [
    {
      title: 'Лучшие продукты',
      text: 'Мы честно готовим макаруны только из натуральных и качественных продуктов. Мы не используем консерванты, ароматизаторы и красители.'
    },
    {
      title: 'Много вкусов',
      text: 'Наша задача – предоставить вам широкое разнобразие вкусов. Вы удивитесь, но у нас более 70 вкусов пироженок.'
    },
    {
      title: 'Бисквитное тесто',
      text: 'Все пирожные готовятся на бисквитном тесте с качественным сливочным маслом 82,5%. В составе нет маргарина и дрожжей!'
    },
    {
      title: 'Честный продукт',
      text: 'Вкус, качество и безопасность наших пирогов подтверждена декларацией о соответствии, которую мы получили 22.06.2016 г.'
    }
  ];

  public products: ProductsType[] = [];

  public yourChoice: string = '';
  public showPresent: boolean = true;

  public phone: ContactsType = {
    text: '+375 (29) 368-98-68',
    link: 'tel: +375 (29) 368-98-68'
  };

  public instagram: ContactsType = {
    text: 'Мы в инстаграм',
    link: 'https://www.instagram.com/'
  };

  constructor(private productsService: ProductsService) {
  }

  ngOnInit() {
    this.products = this.productsService.getProducts();
  }

  public productChoice(product: ProductsType, target: HTMLElement): void {
    this.yourChoice = product.title.toUpperCase();
    this.scrollTo(target);
  }

  public scrollTo(target: HTMLElement): void {
    target.scrollIntoView({behavior: 'smooth'});
  }

  public changeShowPresent(): boolean {
    if (this.showPresent) {
      this.showPresent = false;
      return true;
    } else {
      this.showPresent = true;
      return false;
    }
  }

  public burgerMenu(target: HTMLElement): void {
    target.classList.add('open');

    const menuElements: NodeListOf<Element> = document.querySelectorAll('#menu *');

    menuElements.forEach((item: Element): void => {
      (item as HTMLElement).onclick = (): void => {
        target.classList.remove('open');
      }
    })
  }
}
