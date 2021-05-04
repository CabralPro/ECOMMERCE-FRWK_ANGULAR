import { ShoppingCartItem } from "./shopping-cart-item.model";

export class CheckoutShopping {
	itemsCheckoutShopping: ItemCheckoutShopping[] = []

	constructor(shoppingCartItems: ShoppingCartItem[]) {
		shoppingCartItems.forEach(e => {
			this.itemsCheckoutShopping.push(new ItemCheckoutShopping(e))
		});
	}
}

export class ItemCheckoutShopping {
	produtoId: string
	produtoNome: string
	quantidade: number
	valorUnitario: number
	valorTotal: number

	constructor(shoppingCartItem: ShoppingCartItem) {
		this.produtoId = shoppingCartItem.product.id;
		this.produtoNome = shoppingCartItem.product.nome;
		this.quantidade = shoppingCartItem.amount;
		this.valorTotal = shoppingCartItem.totalPrice;
		this.valorUnitario = shoppingCartItem.product.valor
	}
}

