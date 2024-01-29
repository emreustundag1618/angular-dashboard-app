import { Injectable } from "@angular/core";
import { Product } from "../pages/products/product.interface";
import { products } from "../data";
import { singleProduct } from "../data";

@Injectable({
    providedIn: 'root'
})

export class ProductService {

    protected products: Product[] = [];

    constructor() {
        this.products = products
    }

    getProducts() {
        return this.products;
    }

    getProductById(id: number): Product | undefined {
        return this.products.find(product => product.id === id)
    }

    // Later this will be deleted
    getSingleProduct() {
        return singleProduct
    }
}