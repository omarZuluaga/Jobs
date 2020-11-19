import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { HttpType } from '@Utils/types/http.type';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StoreAuthenticate } from '@Utils/class/store-auth.class';

@Injectable({
	providedIn: 'root',
})
export class Http implements HttpType {
	private _apiUrl: string = environment.API_BASE_URL;
	private _headers: HttpHeaders | { [name: string]: string | string[] };

	constructor(private http: HttpClient, private storeAuth: StoreAuthenticate) {
		this.initialize();
  }

	public initialize() {
		const tokens = this.storeAuth.getStoredTokens();
		if (tokens) {
			this._headers = new HttpHeaders({
				Authorization: `Bearer ${tokens}`,
			});
		}
	}

	public generateHeaders(key: string, value: string): HttpHeaders | { [name: string]: string | string[] } {
		return new HttpHeaders({
			[key]: value,
		});
	}

	get<T>(url: string = '', headers: HttpHeaders | { [name: string]: string | string[] } = this._headers): Observable<T> {
		this.initialize();
		return this.http.get<T>(`${this._apiUrl + url}`, { headers });
	}

	post<T, K>(
		url: string,
		data: K,
		headers: HttpHeaders | { [name: string]: string | string[] } = this._headers
	): Observable<T> {
		this.initialize();
		return this.http.post<T>(`${this._apiUrl + url}`, data, { headers });
	}

	put<T, K>(
		url: string,
		body: K,
		headers: HttpHeaders | { [name: string]: string | string[] } = this._headers
	): Observable<T> {
		this.initialize();
		return this.http.put<T>(`${this._apiUrl + url}`, body, { headers });
	}

	delete<T>(url: string, headers: HttpHeaders | { [name: string]: string | string[] } = this._headers): Observable<T> {
		this.initialize();
		return this.http.delete<T>(`${this._apiUrl + url}`, { headers });
	}

	get apiUrl(): string {
		return this._apiUrl;
	}

	set apiUrl(value: string) {
		this._apiUrl = value;
	}
}
