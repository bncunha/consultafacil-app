import { Injectable } from '@angular/core';
//import { Headers, Http, RequestOptions } from '@angular/http';
import { Http } from '@angular/http';

@Injectable()
export class BaseProvider {
    serviceUrl = "http://localhost:1337/";
	constructor(private http: Http) {
	}

	public post(url: string, data: any) {
		return new Promise((resolve, reject) => {
            //const header: Headers = new Headers();
			this.http.post(this.serviceUrl + url, data).subscribe((result: any) => {
				resolve(result.json());
			},
			err => {
				console.log(err);
				reject(err);
			});
		});
	}

	public noAuthPost(url: string, data: any) {
		return new Promise((resolve, reject) => {
			this.http.post(this.serviceUrl + url, data).subscribe((result: any) => resolve(result.status),
			err => reject(err));
		});
	}

	public put(url: string, data: any) {
		return new Promise((resolve, reject) => {
			this.http.put(this.serviceUrl + url, data).subscribe((result: any) => {
				resolve(result.json());
			},
			err => {
				console.log(err);
				reject(err);
			});
		});
	}

	public delete(url: string) {
		return new Promise((resolve, reject) => {
			this.http.delete(this.serviceUrl + url).subscribe((result: any) => {
				resolve(result.json());
			},
			err => {
				console.log(err);
				reject(err);
			});
		});
	}

	public get(url: string) {
		return new Promise((resolve, reject) => {
			this.http.get(this.serviceUrl + url).subscribe((result: any) => {
				resolve(result.json());
			},
			err => {
				console.log(err);
				reject(err);
			});
		});
	}


	public login(email: string, senha: string, url: string) {

		console.log("baseProviders");
		
		console.log("email: " + email);
		console.log("senha: " + senha);
		
		return new Promise((resolve, reject) => {
			this.http.post(this.serviceUrl + url , {email:email,senha: senha}).subscribe((result: any) => {
				resolve(result.json());
			},
			err => {
				console.log(err);
				reject(err);
			});
		});
	}
}
