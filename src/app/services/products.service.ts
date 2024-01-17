import { Injectable } from '@angular/core';
import {ProductsType} from "../../types/products.type";

@Injectable()
export class ProductsService {

  constructor() { }

  getProducts(): ProductsType[] {
    return [
      {
        image: '1.png',
        title: 'Макарун с малиной',
        quantity: '1 шт.',
        price: 1.70,
        order: 'Заказать'
      },
      {
        image: '2.png',
        title: 'Макарун с манго',
        quantity: '1 шт.',
        price: 1.70,
        order: 'Заказать'
      },
      {
        image: '3.png',
        title: 'Пирог с ванилью',
        quantity: '1 шт.',
        price: 1.70,
        order: 'Заказать'
      },
      {
        image: '4.png',
        title: 'Пирог с фисташками',
        quantity: '1 шт.',
        price: 1.70,
        order: 'Заказать'
      }
    ];
  }
}
