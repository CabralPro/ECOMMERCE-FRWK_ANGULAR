
import { Product } from "@_components/product/_models/product.model";

export class ShoppingCartItem {
	product: Product
	amount: number

	constructor(product: Product, amount: number) {
		this.product = product;
		this.amount = amount;
	}

	get totalPrice(){
		return this.amount * this.product.valor
	}
}
