import { Injectable } from '@angular/core';
import { Product } from '../_models/product.model';
import { EcommerceApi } from '@_api';

@Injectable({
	providedIn: 'root'
})

export class ProductsService {

	products: Product[] = [];
	loading: boolean = false;

	constructor() { }

	loadProducts = async () => {
		this.loading = true;
		const resp = await EcommerceApi.Products.getAll();
		if (resp) this.products = resp;
		this.loading = false;
	}

	create = async (product: Product) => {
		const resp = await EcommerceApi.Products.createProduct(product);
		if (resp) this.loadProducts()
		return resp
	}

	update = async (product: Product) => {
		const resp = await EcommerceApi.Products.updateProduct(product);
		if (resp) this.loadProducts()
		return resp
	}

	delete = async (productId: string) => {
		const resp = await EcommerceApi.Products.deleteProductById(productId);
		if (resp) this.loadProducts()
		return resp
	}

}
