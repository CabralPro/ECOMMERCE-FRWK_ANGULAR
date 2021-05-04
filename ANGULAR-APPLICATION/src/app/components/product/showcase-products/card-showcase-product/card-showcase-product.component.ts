import { Component, Input, OnInit } from '@angular/core';
import { Product } from '@_components/product/_models/product.model';
import { convertToReal } from 'src/app/utils/string-utils';

@Component({
  selector: 'app-card-showcase-product',
  templateUrl: './card-showcase-product.component.html',
  styleUrls: ['./card-showcase-product.component.scss']
})
export class CardShowcaseProductComponent implements OnInit {

	@Input() productReceived: Product;

	convertToReal = convertToReal;

  constructor() { }

  ngOnInit() {  }

}
