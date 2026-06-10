import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-card',
  imports: [],
  templateUrl: './productcard.html',
  styleUrl: './productcard.css',
})
export class ProductCard {
  @Input()productData:any;
}