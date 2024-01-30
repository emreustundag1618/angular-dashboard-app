import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../pages/users/user-interface';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [],
  templateUrl: './test.component.html',
  styleUrl: './test.component.scss'
})
export class TestComponent {
  userData: User[] = [];

  constructor(private userService: UserService) {
    this.getUsers();
  }

  getUsers(): void {
    this.userService.getUsers(1, 10, 'id', 'asc')
    .subscribe((results) => {
      this.userData = results.currentItems;
      console.log(this.userData)
    })
  }
}
