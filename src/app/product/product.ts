import { Component } from '@angular/core';
import { ProductCard } from "../productcard/productcard";

@Component({
  selector: 'app-product',
  imports: [ProductCard],
  templateUrl: './product.html',
  styleUrl: './product.css',
})
export class Product {}
