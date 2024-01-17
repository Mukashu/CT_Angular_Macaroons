import {Component, OnInit} from '@angular/core';
import {ProductsType} from "../types/products.type";
import {ContactsType} from "../types/contacts.type";
import {ProductsService} from "./services/products.service";
import {CartService} from "./services/cart.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
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

  constructor(private productsService: ProductsService,
              public cartService: CartService) {
  }

  ngOnInit(): void {
    this.products = this.productsService.getProducts();
  }

  addToCart(product: ProductsType, target: HTMLElement): void {
    this.yourChoice = product.title.toUpperCase();
    this.scrollTo(target);

    this.cartService.count++;

    this.cartService.purchaseAmount = this.cartService.purchaseAmount.replace(/,/g, '.');
    product.price = product.price.replace(/,/g, '.');

    this.cartService.purchaseAmount = (+this.cartService.purchaseAmount + +product.price).toFixed(2).replace(/\./g, ',');
    product.price = product.price.replace(/\./g, ',');

    alert(`${product.title} добавлен в корзину`);
  }

  scrollTo(target: HTMLElement): void {
    target.scrollIntoView({behavior: 'smooth'});
  }

  changeShowPresent(): boolean {
    if (this.showPresent) {
      this.showPresent = false;
      return true;
    } else {
      this.showPresent = true;
      return false;
    }
  }

  burgerMenu(target: HTMLElement): void {
    target.classList.add('open');

    const menuElements: NodeListOf<Element> = document.querySelectorAll('#menu *');

    menuElements.forEach((item: Element): void => {
      (item as HTMLElement).onclick = (): void => {
        target.classList.remove('open');
      }
    })
  }

  protected readonly CartService = CartService;
}
