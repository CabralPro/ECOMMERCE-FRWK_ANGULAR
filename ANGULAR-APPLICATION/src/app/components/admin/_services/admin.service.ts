import { Injectable } from '@angular/core';
import { EcommerceApi } from '@_api';
import { Login } from '../_models/login.model';
import { UserData } from '../_models/user-data.model';

@Injectable({
	providedIn: 'root'
})
export class AdminService {

	user: UserData;

	constructor() {
		this.loadUser();
	}

	signIn = async (login: Login) => {

		const resp = await EcommerceApi.Admin.singIn(login);

		if (!resp) return resp

		this.setUserLocalStorage(resp);
		this.loadUser();
		return resp;
	}

	signOut() {
		localStorage.clear();
		window.location.reload();
	}

	private setUserLocalStorage(userData: UserData) {
		localStorage.setItem('userData', JSON.stringify(userData))
	}

	private loadUser() {
		this.user = JSON.parse(localStorage.getItem('userData'));
	}

	get isLoggedIn(): boolean {
		return !!this.user?.token
	}

}
