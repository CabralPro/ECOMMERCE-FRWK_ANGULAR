import { Component, OnInit } from '@angular/core';
import { ElementColumnType } from '@_generics/table/_enums/element-column-type';
import { HeaderTable } from '@_generics/table/_models/header-table.model';
import { ProductsService } from '../_services/products.service';

@Component({
  selector: 'app-showcase-products',
  templateUrl: './showcase-products.component.html',
  styleUrls: ['./showcase-products.component.scss']
})
export class ShowcaseProductsComponent implements OnInit {

  loading: Boolean = true;

  headers: HeaderTable[] = [
    { title: 'Nome', prop: "name" },
    { title: 'Estoque', prop: "stock" },
    { title: 'Preço', prop: "price", type: ElementColumnType.money },
    { title: 'Opções', custom: true, maxWidth: '100px' },
  ]

  constructor(public productsService: ProductsService) {
		productsService.loadProducts()
	 }

  ngOnInit(): void { }

	get products(){
		return this.productsService.products;
	}

}
