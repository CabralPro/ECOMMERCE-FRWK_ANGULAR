import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { ProductsService } from '../_services/products.service';
import { Product } from '../_models/product.model';
import { InputType } from '@_generics/form/_enums/input-type.enum';
import { InputCustom } from '@_generics/form/_models/input-custom.model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from '@_shared/services/toastr-service.service';
import { ShoppingCartService } from '@_components/shopping-cart/_services/shopping-cart.service';

@Component({
	selector: 'app-product-form',
	templateUrl: './product-form.component.html',
	styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

	@Input() readonly: boolean = false;
	@Input() productReceived: Product;

	inputs: InputCustom[] = []
	form: FormGroup = new FormGroup({});

	categories = [
		{ key: 'Fruta', value: '4c88815e-97bd-4009-bc97-27aa5d7ec9b1' },
		{ key: 'Legume', value: 'd5d1f355-9742-4a13-9770-9669d6eee884' },
	]

	constructor(
		private productsService: ProductsService,
		private shoppingCartService: ShoppingCartService,
		private toastr: ToastrService,
		private modalService: NgbModal
	) { }

	ngOnInit(): void {
		this.fillInputs();
	}

	fillInputs() {
		this.inputs = [
			{
				label: 'Cetegoria', controlName: 'categoriaId', control: new FormControl('', [Validators.required]),
				optionsSelect: this.categories, type: InputType.select, optionTextKey: 'key', optionValueKey: 'value'
			},
			{ label: 'Nome', controlName: 'nome', control: new FormControl('', [Validators.required]) },
			{ label: 'Descrição', controlName: 'descricao', control: new FormControl('', [Validators.required]) },
			{ label: 'Imagem (URL)', controlName: 'imagem', control: new FormControl('', [Validators.required]) },
			{ label: 'Estoque', controlName: 'quantidadeEstoque', control: new FormControl('', [Validators.required]), type: InputType.number },
			{ label: 'Altura (Centimetros)', controlName: 'altura', control: new FormControl('', [Validators.required]), type: InputType.number },
			{ label: 'Largura (Centimetros)', controlName: 'largura', control: new FormControl('', [Validators.required]), type: InputType.number },
			{ label: 'Profundidade (Centimetros)', controlName: 'profundidade', control: new FormControl('', [Validators.required]), type: InputType.number },
			{ label: 'Preço', controlName: 'valor', control: new FormControl('', [Validators.required]), type: InputType.money },
		]
		this.inputs.forEach(e => e.disabled = this.readonly)
	}

	submitForm = async () => {

		const product: Product = { ...this.productReceived, ...this.form.value }

		const resp = this.productReceived ?
			await this.productsService.update(product) :
			await this.productsService.create(product)

		if (!resp) return

		if (this.productReceived)
			this.shoppingCartService.removeProduct(this.productReceived.id)

		this.toastr.success(`Produto ${this.productReceived ? 'atualzado' : 'criado'} com sucesso!`);
		this.modalService.dismissAll();
	}

}
