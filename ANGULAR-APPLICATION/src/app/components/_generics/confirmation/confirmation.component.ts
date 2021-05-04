import * as uuid from 'uuid';
import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from '@_shared/services/toastr-service.service';

@Component({
	selector: 'app-confirmation',
	templateUrl: './confirmation.component.html',
	styleUrls: ['./confirmation.component.scss'],
	encapsulation: ViewEncapsulation.None,
	providers: [NgbModalConfig, NgbModal]
})

export class ConfirmationComponent implements OnInit {
	@Input() msgSuccess: string = 'Sucesso';
	@Input() msgError: string;
	@Input() _class: string;
	@Input() title: string = "Deseja continuar?";
	@Input() text: string;
	@Input() subtitleLoading: string;
	@Input() size: 'sm' | 'md' | 'lg' | 'xl' = 'md';
	@Input() full: boolean = false;
	@Input() loading: boolean = false;
	@Input() callback: Function;
	@Input() disabled: boolean;
	@Input() isAsync: boolean = true;

	identification = uuid.v4();;

	constructor(private modalService: NgbModal, public toaster: ToastrService) { }

	ngOnInit(): void { }

	openModal(content) {
		if (this.disabled) return
		this.modalService.open(content, { centered: true, size: this.size, windowClass: this.complementaryClass });
	}

	async continue(modal: any) {

		this.loading = true;

		const element = document.getElementsByClassName(this.identification)[0]
		element.classList.add('cancelClickEvents');

		const resp = await this.callback();

		element.classList.remove('cancelClickEvents');

		this.loading = false;

		this.modalService.dismissAll();

		if (resp) this.toaster.success(this.msgSuccess);
		else if (this.msgError) this.toaster.error(this.msgError);
	}

	get complementaryClass(){
		return `confirmation ${this.identification} ${this.full  && 'modal-full'}`;
	}

}
