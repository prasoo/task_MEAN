import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import {User} from '../modals/user';
 
@Injectable()
export class user_dirService {
    constructor(private http: Http) { }
    getUser(){
        return this.http.get('http://localhost:3000/api/users').map(res=>res.json());
    }

    addUser(newUser: User){
        let headers = new Headers();
        headers.append('content-type','application/json');
        return this.http.post('http://localhost:3000/api/user',json.stringify(newUser) , {headers: headers})
        .map(res=>res.json());
    }

    updateUser(user: User){
        let headers = new Headers();
        headers.append('content-type','application/json');
        return this.http.put('http://localhost:3000/api/user'+user._id, json.stringify(user), {headers: headers})
        .map(res=>res.json());
    }

    deleteUser(id: any){
        return this.http.delete('http://localhost:3000/api/user'+id)
        .map(res=>res.json());
    }
}