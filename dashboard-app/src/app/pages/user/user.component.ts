import { Component, inject } from '@angular/core';
import { SingleComponent } from '../../components/single/single.component';
import { UserService } from '../../services/user.service';
import { Single } from '../../components/single/single.interface';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [SingleComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {
  singleUser: Single;
  userService = inject(UserService);
  
  constructor() {
    this.singleUser = this.userService.getSingleUser();
  }
}
