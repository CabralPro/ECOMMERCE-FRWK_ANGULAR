import * as qs from 'qs';
import { get, put, post, del } from './methods';

//#region importing models 
import { Product } from '@_components/product/_models/product.model';
import { Login } from '@_components/admin/_models/login.model';
import { UserData } from '@_components/admin/_models/user-data.model';
import { ItemCheckoutShopping } from '@_components/shopping-cart/_models/checkout-shopping-cart';
//#endregion

export const EcommerceApi = {

	Admin: {
		singIn: (body: Login) => post<UserData>(`/AdminAuthentication/SingIn`, { body }),
	},
	ShoppingCart: {
		checkout: (body: ItemCheckoutShopping[]) => post<UserData>(`/Carrinho/Checkout`, { body }),
	},
	Products: {
		getAll: () => get<Product[]>(`/Vitrine/ListaProdutos`),
		deleteProductById: (id: string) => del<boolean>(`/AdminProdutos/DeletarProduto?${qs.stringify({ id })}`),
		updateProduct: (body: Product) => put<boolean>(`/AdminProdutos/AtualizarProduto`, { body }),
		createProduct: (body: Product) => post<boolean>(`/AdminProdutos/NovoProduto`, { body }),
	},

}