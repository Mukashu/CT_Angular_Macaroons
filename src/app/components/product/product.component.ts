import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ProductsType} from "../../../types/products.type";
import {AppComponent} from "../../app.component";
import {CartService} from "../../services/cart.service";

@Component({
  selector: 'product-component',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input() product: ProductsType;
  @Input() index: number;

  @Output() addToCartEvent: EventEmitter<string> = new EventEmitter<string>();

  constructor(public cartService: CartService) {
    this.product = {
      image: '',
      title: '',
      quantity: 0,
      price: '',
      order: ''
    }

    this.index = 0;
  }

  ngOnInit(): void { }

  addProductToCart(): void {
    this.cartService.count++;

    this.cartService.purchaseAmount = this.cartService.purchaseAmount.replace(/,/g, '.');
    this.product.price = this.product.price.replace(/,/g, '.');

    this.cartService.purchaseAmount = (+this.cartService.purchaseAmount + +this.product.price).toFixed(2).replace(/\./g, ',');
    this.product.price = this.product.price.replace(/\./g, ',');

    this.addToCartEvent.emit(this.product.title);
  }

  convertProductPrice(price: string): number {
    return +price.replace(/,/g, '.');
  }

  protected readonly AppComponent = AppComponent;
}
