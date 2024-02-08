import { CommonModule } from '@angular/common';
import { SelectionModel } from '@angular/cdk/collections';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { AfterViewInit, Component, ViewChild, inject } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { User } from './user-interface';
import { UserService } from '../../services/user.service';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { TestComponent } from '../../test/test.component';
import { MatSort, MatSortModule, SortDirection } from '@angular/material/sort';
import {
  catchError,
  map,
  merge,
  of as observableOf,
  startWith,
  switchMap,
} from 'rxjs';
import { CreateUserComponent } from '../../components/create/create-user/create-user.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatIconModule,
    MatCheckboxModule,
    RouterModule,
    TestComponent,
    MatSortModule,
    CreateUserComponent
  ],
})
export class UsersComponent implements AfterViewInit {
  displayedColumns: string[] = [
    'id',
    'img',
    'firstName',
    'lastName',
    'email',
    'phone',
    'createdAt',
    'verified',
    'action',
  ];
  userService: UserService = inject(UserService);
  userData: User[] = [];

  resultsLength = 0;
  isLoadingResults = true;
  isRateLimitReached = false;

  isModalActive: boolean = false;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor() {}
  // TODO: Here will be http pagination which is an advanced problem
  ngAfterViewInit() {

    // console.log(this.paginator);
    // console.log(this.sort);

    merge(this.sort.sortChange, this.paginator.page).pipe(
      startWith({}),
      switchMap(() => {
        // this.isLoadingResults = true;
        return this.userService!.getUsers(
          this.paginator.pageIndex + 1,
          this.paginator.pageSize,
          this.sort.active,
          this.sort.direction
        ).pipe(catchError(() => observableOf(null)));
      }),
      map((data) => {
        // Flip flag to show that loading has finished.
        this.isLoadingResults = false;
        this.isRateLimitReached = data === null;

        if (data === null) {
          return [];
        }

        this.resultsLength = data.totalItems;
        return data.currentItems;
      })
    ).subscribe((data) => {
      this.userData = data;
      
    });
  }

  openModal() {
    this.isModalActive = true;
  }

  closeModal() {
    this.isModalActive = false;
  }

  createUser(user: User) {
    this.userService.addUser(user).subscribe({
      next: (data) => console.log('Data added succesfully: ', data),
      error: (err) => console.error(err)
    })
  }
}
