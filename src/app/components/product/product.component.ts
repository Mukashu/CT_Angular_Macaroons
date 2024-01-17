import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ProductsType} from "../../../types/products.type";
import {AppComponent} from "../../app.component";

@Component({
  selector: 'product-component',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input() product: ProductsType;
  @Input() index: number;

  @Output() addToCartEvent: EventEmitter<ProductsType> = new EventEmitter<ProductsType>();

  constructor() {
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
    this.addToCartEvent.emit(this.product);
  }

  protected readonly AppComponent = AppComponent;
}
