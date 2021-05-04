import { environment } from '@_enviroments/environment';
import { HeadersRequest } from './_models/headers-request.model';

export const API_URL = environment.apiUrl;
export const HEADERS : HeadersRequest = {
  'Content-Type': 'application/json',
};