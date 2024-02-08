import { Injectable } from '@angular/core';
import { Product } from '../pages/products/product.interface';
import { products } from '../data';
import { singleProduct } from '../data';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
readonly baseUrl = 'http://localhost:3030/api'
  protected products: Product[] = [];

  constructor(private _httpClient: HttpClient) {
    this.products = products;
  }

  getProducts(
    page: number,
    pageSize: number,
    sortField: string,
    sortOrder: string
  ): Observable<ProductApi> {
    const params = new HttpParams()
      .set('page', page.toString())
      .set('pageSize', pageSize.toString())
      .set('sort', sortField)
      .set('order', sortOrder);
      return this._httpClient.get<ProductApi>(`${this.baseUrl}/products`, {params})
  }

  getProductById(id: number): Product | undefined {
    return this.products.find((product) => product.id === id);
  }

  // Later this will be deleted
  getSingleProduct() {
    return singleProduct;
  }

  addProduct(product: Product): Observable<Product> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type' : 'application/json',
        'Authorization' : 'Token'
      })
    }
    return this._httpClient.post<Product>(this.baseUrl + '/products', product, httpOptions)
    .pipe(
      tap((data) => console.log(data))
    );
  }
}

interface ProductApi {
    page: number;
    pageSize: number;
    totalItems: number;
    currentItems: Product[];
  }
