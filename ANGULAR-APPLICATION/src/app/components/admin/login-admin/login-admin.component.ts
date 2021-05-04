import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { InputCustom } from '@_generics/form/_models/input-custom.model';
import { Router } from '@angular/router';
import { InputType } from '@_generics/form/_enums/input-type.enum';
import { AdminService } from '../_services/admin.service';
import { ToastrService } from '@_shared/services/toastr-service.service';

@Component({
	selector: 'app-login-admin',
	templateUrl: './login-admin.component.html',
	styleUrls: ['./login-admin.component.scss']
})
export class LoginAdminComponent implements OnInit {

	formLogin: FormGroup = new FormGroup({});
	inputsLogin: InputCustom[] = [
		{ label: 'Usuário', controlName: 'userName', control: new FormControl('admin', [Validators.required]), class: 'col-12' },
		{ label: 'Senha', controlName: 'password', control: new FormControl('admin', [Validators.required]), type: InputType.password, class: 'col-12' },
	]

	constructor(
		public adminService: AdminService,
		public router: Router,
		public toaster: ToastrService,
	) { }

	ngOnInit() { }

	login = async () => {
		const resp = await this.adminService.signIn({...this.formLogin.value});
		
		if (resp) this.toaster.success('Login efetuado com sucesso')
		else this.toaster.success('Email ou senha incorretos')
	}

}
