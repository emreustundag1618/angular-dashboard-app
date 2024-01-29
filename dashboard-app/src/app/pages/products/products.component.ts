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

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    CommonModule,
    MatPaginatorModule,
    RouterModule
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
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent {
  productService: ProductService = inject(ProductService);
  productsData: Product[] = this.productService.getProducts();

  // dataSource = ELEMENT_DATA;
  columnsToDisplayy = ['name', 'weight', 'symbol', 'position'];
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

  dataSource = new MatTableDataSource<Product>(this.productsData);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;

  }
}
