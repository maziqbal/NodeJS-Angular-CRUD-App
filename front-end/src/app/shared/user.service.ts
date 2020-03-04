import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable,  } from 'rxjs';
import { map } from 'rxjs/operators';
//import 'rxjs/add/operator/toPromise';

import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  selectedUser : User;
  users: User[];
  readonly serverUrl = 'http://localhost:3000/users';
  constructor(private http: HttpClient) { }

  postUser(user: User) {
    return this.http.post(this.serverUrl, user);
  }

  getUsersList() {
    return this.http.get(this.serverUrl);
  }

  updateUser(user: User) {
    return this.http.put(this.serverUrl+`/${user._id}`,user);
  }

  deleteUser(_id: string){
    return this.http.delete(this.serverUrl + `/${_id}`);
  }

}
