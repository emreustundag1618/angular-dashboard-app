import { Injectable } from "@angular/core";
import { userRows } from "../data";
import { User } from "../pages/users/user-interface";
import { singleUser } from "../data";

@Injectable({
    providedIn: 'root'
})

export class UserService {

    protected users: User[] = userRows;

    getUsers() {
        return this.users
    }

    getUserById(id: number): User | undefined {
        return this.users.find(user => user.id === id)
    }

    // this will be deleted soon :)
    getSingleUser() {
        return singleUser
    }
}