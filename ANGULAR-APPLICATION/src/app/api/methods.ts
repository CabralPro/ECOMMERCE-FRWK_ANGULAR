import { UserData } from '@_components/admin/_models/user-data.model';
import { API_URL, HEADERS } from './constants';
import { HeadersRequest } from './_models/headers-request.model';
import { OptionsRequest } from './_models/options-request.model';

export const get = <T>(route: string, options?: OptionsRequest) => baseRequest<T>('GET', route, options);
export const post = <T>(route: string, options?: OptionsRequest) => baseRequest<T>('POST', route, options);
export const put = <T>(route: string, options?: OptionsRequest) => baseRequest<T>("PUT", route, options);
export const del = <T>(route: string, options?: OptionsRequest) => baseRequest<T>("DELETE", route, options);

async function baseRequest<T>(method: string, route: string, options: OptionsRequest): Promise<T> {

	const body = options?.body ? JSON.stringify(options.body) : null;
	const headers = HEADERS;

	addAuthorization(options, headers);

	try {

		return await fetch(
			`${API_URL}${route}`,
			Object.assign(
				{ method, headers } as any,
				{ body } || {}
			)
		).
			then(r => {
				if (!r.ok) throw r
				return r.json()
			})
			.then(json => {
				return json;
			});

	} catch (error) {

		if (!checkExpiredToken(error))
			window.toaster?.error(error?.message ?? 'Ocorreu um erro inesperado')

		console.log("aqui");

		return false as any;
	}
};

function addAuthorization(options: OptionsRequest, headers: HeadersRequest) {
	if (options?.sendTokenClient === false) return;

	if (localStorage.userData) {
		const user: UserData = JSON.parse(localStorage.userData);
		headers.Authorization = 'Bearer ' + user.token;
	}
}

function checkExpiredToken(error) {
	if (error.status == 401) {
		localStorage.clear();
		window.location.reload();
		return true
	}
}