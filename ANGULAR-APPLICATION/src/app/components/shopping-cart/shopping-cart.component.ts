import { Component, OnInit } from '@angular/core';
import { ElementColumnType } from '@_generics/table/_enums/element-column-type';
import { HeaderTable } from '@_generics/table/_models/header-table.model';
import { ToastrService } from '@_shared/services/toastr-service.service';
import { ShoppingCartItem } from './_models/shopping-cart-item.model';
import { ShoppingCartService } from './_services/shopping-cart.service';

@Component({
	selector: 'app-shopping-cart',
	templateUrl: './shopping-cart.component.html',
	styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {

	loading: Boolean = true;

	headers: HeaderTable[] = [
		{ title: 'Produto', prop: "product.nome", minWidth: '200px' },
		{ title: 'Quantidade', custom: true, width: '50px', maxWidth: '80px', textAlign: 'center' },
		{ title: 'Preço Total', prop: "totalPrice", type: ElementColumnType.money, width: '200px', textAlign: 'center' },
		{ title: 'Opções', custom: true, width: '100px' },
	]

	constructor(
		public shoppingCartService: ShoppingCartService,
		public toastr: ToastrService,
	) { }

	ngOnInit(): void { }

	checkout = async () => {
		const resp = await this.shoppingCartService.checkoutShoppingCart();
		if(!resp) return 
		this.toastr.success('Compra efetuada com sucesso!')
	}

	removeProductShoppingCart = (productId: string) =>
		() => this.shoppingCartService.removeProduct(productId)

	checkStock(shoppingCartItem: ShoppingCartItem) {
		if (shoppingCartItem.amount <= shoppingCartItem.product.quantidadeEstoque)
			return

		this.toastr.warning('Estoque máximo atingido')
		setTimeout(() => shoppingCartItem.amount--)
	}

	get shoppingCartItems() {
		return this.shoppingCartService.shoppingCartItems;
	}
}
