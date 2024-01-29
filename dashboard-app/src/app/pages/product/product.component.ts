import { Component, inject } from '@angular/core';
import { SingleComponent } from '../../components/single/single.component';
import { ProductService } from '../../services/product.service';
import { Single } from '../../components/single/single.interface';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [SingleComponent],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {

  productService = inject(ProductService);
  singleProduct: Single;

  constructor() {
    this.singleProduct = this.productService.getSingleProduct();
  }
}
