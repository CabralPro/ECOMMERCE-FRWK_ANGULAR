import { Component, ContentChild, Input, OnInit, TemplateRef } from '@angular/core';
import { convertToLocalDate, convertToLocalDateTime } from 'src/app/utils/date-utils';
import { convertToReal } from 'src/app/utils/string-utils';
import { ElementColumnType } from './_enums/element-column-type';
import { HeaderTable } from './_models/header-table.model';

@Component({
	selector: 'app-table',
	templateUrl: './table.component.html',
	styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit  {
	@ContentChild('customColumn') customColumn: TemplateRef<any>;
	@Input() headers: HeaderTable[];
	@Input() items: any[];
	@Input() title: string;
	@Input() _class: string;
	@Input() loading: boolean = false;

	ngOnInit(): void {	}

	formatValue(item: Object, headerTable: HeaderTable) {

		let value = this.getValueItem(item, headerTable.prop);
		
		if (headerTable.textEnum) value = headerTable.textEnum[value]

		switch (headerTable.type) {
			case ElementColumnType.money:
				return convertToReal(value)
			case ElementColumnType.date:
				return convertToLocalDate(value)
			case ElementColumnType.dateTime:
				return convertToLocalDateTime(value)
			case ElementColumnType.boolean:
				return headerTable.booleanText[value]
			default:
				return value
		}
	}

	valueIsTypeText(headerTable: HeaderTable) {
		if (headerTable.custom) return false

		switch (headerTable.type) {
			case undefined:
			case ElementColumnType.date:
			case ElementColumnType.dateTime:
			case ElementColumnType.money:
			case ElementColumnType.boolean:
				return true
		}
	}

	getValueItem(item: Object, prop: string) {
		const keys = prop.split('.');
		if (keys.length === 1) return item[prop]
		let child;
		keys.forEach(e => child = child ? child[e] : item[e])
		return child;
	}
	
}
