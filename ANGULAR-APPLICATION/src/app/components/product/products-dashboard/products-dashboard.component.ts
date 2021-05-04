import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../_services/products.service';

@Component({
	selector: 'app-products-dashboard',
	templateUrl: './products-dashboard.component.html',
	styleUrls: ['./products-dashboard.component.css']
})
export class ProductsDashboardComponent implements OnInit {

	constructor(public productsService: ProductsService) {
		productsService.loadProducts();
	 }

	ngOnInit() { }

	get productsLength(){
		return this.productsService.products.length;
	}

}
