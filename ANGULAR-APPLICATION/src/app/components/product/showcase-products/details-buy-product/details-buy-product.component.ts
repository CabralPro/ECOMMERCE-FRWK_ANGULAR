import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Product } from '@_components/product/_models/product.model';
import { ShoppingCartItem } from '@_components/shopping-cart/_models/shopping-cart-item.model';
import { ShoppingCartService } from '@_components/shopping-cart/_services/shopping-cart.service';
import { ToastrService } from '@_shared/services/toastr-service.service';
import { convertToReal } from 'src/app/utils/string-utils';

@Component({
	selector: 'app-details-buy-product',
	templateUrl: './details-buy-product.component.html',
	styleUrls: ['./details-buy-product.component.scss']
})
export class DetailsBuyProductComponent implements OnInit {

	@Input() productReceived: Product;

	amount: number = 1;

	convertToReal = convertToReal;

	constructor(
		public router: Router,
		public modal: NgbModal,
		public shoppingCartService: ShoppingCartService,
		public toastr: ToastrService,
	) { }

	ngOnInit() {	}

	goToShoppingCart() {
		const shoppingCartItem = new ShoppingCartItem(this.productReceived, this.amount);
		this.shoppingCartService.addProduct(shoppingCartItem)
		this.modal.dismissAll();
		this.router.navigate(['shopping-cart']);
	}

	get total() {
		return convertToReal(this.productReceived.valor * this.amount);
	}

	checkStock() {
		if (this.amount <= this.productReceived.quantidadeEstoque)
			return

		this.toastr.warning('Estoque máximo atingido')
		setTimeout(() => this.amount--)
	}

}
