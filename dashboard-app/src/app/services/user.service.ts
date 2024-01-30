import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { userRows } from '../data';
import { User } from '../pages/users/user-interface';
import { singleUser } from '../data';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  readonly baseUrl = 'http://localhost:3030/api';

  protected users: User[] = userRows;

  constructor(private _httpClient: HttpClient) {}

  getUsers(
    page: number,
    pageSize: number,
    sortField: string,
    sortOrder: string
  ): Observable<UserApi> {
    const params = new HttpParams()
      .set('page', page.toString())
      .set('pageSize', pageSize.toString())
      .set('sort', sortField)
      .set('order', sortOrder);

      return this._httpClient.get<UserApi>(`${this.baseUrl}/users`, {params})
  }

  getUserById(id: number): Observable<User> {
    return this._httpClient.get<User>(`${this.baseUrl}/users/${id}`);
  }

  // this will be deleted soon :)
  getSingleUser() {
    return singleUser;
  }
}

export interface UserApi {
  page: number;
  pageSize: number;
  totalItems: number;
  currentItems: User[];
}
