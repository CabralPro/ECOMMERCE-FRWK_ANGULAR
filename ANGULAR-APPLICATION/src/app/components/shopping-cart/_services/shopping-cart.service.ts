import { Injectable } from '@angular/core';
import { EcommerceApi } from '@_api';
import { CheckoutShopping } from '../_models/checkout-shopping-cart';
import { ShoppingCartItem } from '../_models/shopping-cart-item.model';

@Injectable({
	providedIn: 'root'
})
export class ShoppingCartService {

	shoppingCartItems: ShoppingCartItem[] = []

	constructor() {
		this.loadShoppingCartItems();
	}

	private loadShoppingCartItems() {
		if (this.shoppingCartItems.length) return

		this.shoppingCartItemsStorage.forEach(e => {
			this.addProduct(new ShoppingCartItem(e.product, e.amount));
		})
	}

	addProduct(shoppingCartItem: ShoppingCartItem) {

		const itemExisting = this.shoppingCartItems.find(e => e.product.id == shoppingCartItem.product.id);

		if (itemExisting) {
			itemExisting.amount += shoppingCartItem.amount;
			this.addShoppingCartitemsInLocalStorage();
			return
		}

		this.shoppingCartItems.push(shoppingCartItem);
		this.addShoppingCartitemsInLocalStorage();
	}

	removeProduct(productId: string) {
		this.shoppingCartItems = this.shoppingCartItems.filter(e => e.product.id != productId);
		this.addShoppingCartitemsInLocalStorage();
	}

	checkoutShoppingCart = async () => {
		const checkoutShopping = new CheckoutShopping(this.shoppingCartItems);
		const resp = await EcommerceApi.ShoppingCart.checkout(checkoutShopping.itemsCheckoutShopping)
		if(resp) this.clearShoppingCart(); 
		console.log('resp :>> ', resp);
		return resp
	}

	clearShoppingCart() {
		this.shoppingCartItems = [];
		this.addShoppingCartitemsInLocalStorage();
	}

	private addShoppingCartitemsInLocalStorage() {
		localStorage.setItem('shoppingCartItems', JSON.stringify(this.shoppingCartItems))
	}

	private get shoppingCartItemsStorage(): ShoppingCartItem[] {
		const shoppingCartItemsStorage = localStorage.getItem('shoppingCartItems');
		return shoppingCartItemsStorage ? JSON.parse(shoppingCartItemsStorage) : []
	}

}
