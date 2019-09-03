// Imports necesarios para las peticiones AJAX
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class RequestsService {

    public url:string;

    constructor(
        public _http: HttpClient,
    ) {
        this.url = "https://reqres.in";
    }

    getUser(userId: number): Observable<any> { // Tienen siempre un metodo .subscribe()
        return this._http.get(this.url + '/api/users/' + userId);
    }

    addUser(user): Observable<any> {
        let params = JSON.stringify(user);
        let headers = new HttpHeaders().set('Content-Type', 'application/json');

        return this._http.post(this.url + '/api/users', params, {headers: headers});
    }
}