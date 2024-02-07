import { Component, ViewChild, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../products/product.interface';
import { ProductService } from '../../services/product.service';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { RouterModule } from '@angular/router';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatSort, MatSortModule, SortDirection } from '@angular/material/sort';
import {
  catchError,
  map,
  merge,
  of as observableOf,
  startWith,
  switchMap,
} from 'rxjs';

@Component({
  selector: 'app-product',
  standalone: true,
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
  imports: [
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    CommonModule,
    MatPaginatorModule,
    RouterModule,
    MatSortModule
  ],
  animations: [
    trigger('detailExpand', [
      state('collapsed,void', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition(
        'expanded <=> collapsed',
        animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')
      ),
    ]),
  ],
  
})
export class ProductsComponent {
  productService: ProductService = inject(ProductService);
  productsData: Product[] = [];

  // dataSource = ELEMENT_DATA;
  columnsToDisplay = [
    'id',
    'img',
    'title',
    'color',
    'producer',
    'price',
    'createdAt',
    'inStock',
  ];
  columnsToDisplayWithExpand = [...this.columnsToDisplay, 'expand'];
  expandedElement: Product | null | undefined;
  
  resultsLength = 0;
  isLoadingResults = true;
  isRateLimitReached = false;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {

    merge(this.sort.sortChange, this.paginator.page).pipe(
      startWith({}),
      switchMap(() => {
        // this.isLoadingResults = true;
        return this.productService!.getProducts(
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
      this.productsData = data;
    });
  }
}
