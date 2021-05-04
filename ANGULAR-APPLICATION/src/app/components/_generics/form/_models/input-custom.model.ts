import { FormGroup, FormControl } from '@angular/forms';
import { InputType } from '../_enums/input-type.enum';

export interface InputCustom {
	label?: string,
	icon?: string,
	placeholder?: string,
	mask?: string,
	controlName: string,
	class?: string,
	info?: string,
	type?: InputType,
	rows?: number
	optionValueKey?: string,
	optionTextKey?: string,
	optionsSelect?: any[],
	control: FormControl | FormGroup,
	onChangeFn?: Function
	disabled?: boolean
	disableAfterSelecting?: boolean
	otherOptions?: any
}