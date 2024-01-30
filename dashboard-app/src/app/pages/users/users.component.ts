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

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatIconModule,
    MatCheckboxModule,
    RouterModule,
  ],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss',
})
export class UsersComponent implements AfterViewInit {
  displayedColumns: string[] = [
    'select',
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

  dataSource = new MatTableDataSource<User>(this.userData);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor() {
    this.userService.getUsers(1, 10, 'id', 'asc').subscribe((users) => {
      console.log(users);
      this.userData = users.currentItems;
    });
  }

  // TODO: Here will be http pagination which is an advanced problem
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  selection = new SelectionModel<User>(true, []);
  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  toggleAllRows() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }
    this.selection.select(...this.dataSource.data);
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: User): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${
      row.id + 1
    }`;
  }
}
