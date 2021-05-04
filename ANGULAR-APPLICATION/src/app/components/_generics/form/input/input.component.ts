import * as uuid from 'uuid';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormComponent } from '../form.component';
import { CurrencyMaskConfig } from 'ng2-currency-mask';
import { InputType } from '../_enums/input-type.enum';
import { InputCustom } from '../_models/input-custom.model';

@Component({
	selector: 'app-input',
	templateUrl: './input.component.html',
	styleUrls: ['./input.component.scss']
})

export class InputComponent implements OnInit {
	@Input() _id: string;
	@Input() inputCustom: InputCustom;

	InputType = InputType;
	_disableAfterSelecting: boolean = false;

	//password
	isPassword: boolean;
	hidePassword: boolean = true;

	//money
	customCurrencyMaskConfig: CurrencyMaskConfig = {
		align: "left",
		allowNegative: false,
		decimal: ",",
		precision: 2,
		prefix: "R$ ",
		suffix: "",
		thousands: "."
	};

	formControl = new FormControl;
	parentForm = new FormComponent(null);


	constructor(parent: FormComponent) {
		if (!this._id) this._id = uuid.v4();
		this.parentForm = parent;
	}

	ngOnInit(): void {
		this.isPassword = this.inputCustom.type == InputType.password;

		this.bindInputForm();
		if (this.inputCustom.type == InputType.date)
			this.formControl.setValue(this.formControl.value?.split('T')[0])

		if (this.formControl.value !== '')
			setTimeout(() => this.formControl.markAsTouched());
	}

	bindInputForm() {
		const keys = this.inputCustom.controlName.split('.');
		let controls = this.parentForm.formGroup.controls as any;
		keys.forEach(e => controls = controls[e].controls ?? controls[e])
		this.formControl = controls as FormControl;
	}

	getErrorMessage() {
		if (this.formControl.hasError('required'))
			return 'Campo obrigatório';

		if (this.formControl.hasError('email'))
			return 'Email inválido';

		if (this.formControl.hasError('minlength'))
			return `Mínimo ${this.formControl.errors.minlength.requiredLength} caracteres`

		if (this.formControl.hasError('maxlength'))
			return `Máximo ${this.formControl.errors.maxlength.requiredLength} caracteres`

		if (this.formControl.errors.mask) {
			return `${this.inputCustom.label} invalido(a)`
		}
	}

	isTextField = () => {
		switch (this.inputCustom.type) {
			case undefined:
			case InputType.text:
			case InputType.password:
			case InputType.date:
			case InputType.number:
				return true
			default:
				return false
		}
	}

	//password
	viewPassword() {
		this.hidePassword = !this.hidePassword;
		this.inputCustom.type = this.inputCustom.type == InputType.text ? InputType.password : InputType.text;
	}

	/* SELECT */
	getValueOptionSelect(option: any) {
		return option[this.inputCustom.optionValueKey] ?? option
	}

	getTextOptionSelect(option: any) {
		return option[this.inputCustom.optionTextKey] ?? option
	}

	onChangeSelect(selectedValue: string) {
		if (this.inputCustom.disableAfterSelecting)
			this._disableAfterSelecting = true

		const selectedObject = this.inputCustom.optionsSelect.find(e =>
			e[this.inputCustom.optionValueKey].toString() === selectedValue.toString())

		if (this.inputCustom.onChangeFn)
			this.inputCustom.onChangeFn(selectedValue, selectedObject)
	}
	/* / SELECT */

	onChangeValueInput(value: any) {
		if (this.inputCustom.onChangeFn)
			this.inputCustom.onChangeFn(value);
	}

	get isErrorValidate() {
		return this.formControl.invalid && this.formControl.touched
	}

}