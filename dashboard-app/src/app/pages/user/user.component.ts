import { Component, inject } from '@angular/core';
import { SingleComponent } from '../../components/single/single.component';
import { UserService } from '../../services/user.service';
import { Single } from '../../components/single/single.interface';
import { User } from '../users/user-interface';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [SingleComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
})
export class UserComponent {
  singleUser!: Single;
  userData: any = null;
  userService = inject(UserService);

  constructor() {
    this.userService.getUserById(2).subscribe((user) => {
      this.singleUser = {
        id: user.id,
        title: user.firstName + ' ' + user.lastName,
        img: user.img,
        info: {
          username: 'testUsername',
          fullname: user.firstName + ' ' + user.lastName,
          email: user.email,
          phone: user.phone,
          status: user.verified,
        },
        chart: {
          dataKeys: [
            { name: 'visits', color: '#82ca9d' },
            { name: 'clicks', color: '#8884d8' },
          ],
          data: [
            {
              name: 'Sun',
              visits: 4000,
              clicks: 2400,
            },
            {
              name: 'Mon',
              visits: 3000,
              clicks: 1398,
            },
            {
              name: 'Tue',
              visits: 2000,
              clicks: 3800,
            },
            {
              name: 'Wed',
              visits: 2780,
              clicks: 3908,
            },
            {
              name: 'Thu',
              visits: 1890,
              clicks: 4800,
            },
            {
              name: 'Fri',
              visits: 2390,
              clicks: 3800,
            },
            {
              name: 'Sat',
              visits: 3490,
              clicks: 4300,
            },
          ],
        },
        activities: [
          {
            text: 'John Doe purchased Playstation 5 Digital Edition',
            time: '3 day ago',
          },
          {
            text: 'John Doe added 3 items into their wishlist',
            time: '1 week ago',
          },
          {
            text: 'John Doe purchased Sony Bravia KD-32w800',
            time: '2 weeks ago',
          },
          {
            text: 'John Doe reviewed a product',
            time: '1 month ago',
          },
          {
            text: 'John Doe added 1 items into their wishlist',
            time: '1 month ago',
          },
          {
            text: 'John Doe reviewed a product',
            time: '2 months ago',
          },
        ],
      };
      console.log(this.singleUser)
    });
  }
}
