import { Component, OnInit } from '@angular/core';
import { ElementColumnType } from '@_generics/table/_enums/element-column-type';
import { HeaderTable } from '@_generics/table/_models/header-table.model';
import { ToastrService } from '@_shared/services/toastr-service.service';
import { ProductsService } from '../_services/products.service';

@Component({
	selector: 'app-table-products',
	templateUrl: './table-products.component.html',
	styleUrls: ['./table-products.component.css']
})
export class TableProductsComponent implements OnInit {

	loading: Boolean = true;

	headers: HeaderTable[] = [
		{ title: 'Nome', prop: "nome", minWidth: '200px' },
		{ title: 'Estoque', prop: "quantidadeEstoque", width: '150px', textAlign: 'center' },
		{ title: 'Preço', prop: "valor", type: ElementColumnType.money, width: '200px', textAlign: 'center' },
		{ title: 'Opções', custom: true, width: '100px' },
	]

	constructor(
		public productsService: ProductsService,
		public toaster: ToastrService
	) {
		productsService.loadProducts()
	}

	ngOnInit(): void { }

	deleteProduct = (productId: string) =>
		async () => {
			const resp = await this.productsService.delete(productId)
			if (resp)  this.toaster.success('Produto deletado com sucesso')
		}

	get products() {
		return this.productsService.products;
	}
}
