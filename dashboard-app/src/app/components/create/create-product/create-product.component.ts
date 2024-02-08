import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {
  ReactiveFormsModule,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { Product } from '../../../pages/products/product.interface';

@Component({
  selector: 'app-create-product',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './create-product.component.html',
  styleUrl: './create-product.component.scss',
})
export class CreateProductComponent {
  @Output() closeModalEvent = new EventEmitter<void>();
  @Output() createProduct = new EventEmitter<Product>();

  productForm!: FormGroup;

  constructor() {
    this.productForm = new FormGroup({
      title: new FormControl('', [Validators.required]),
      color: new FormControl('', [Validators.required]),
      image: new FormControl(''),
      producer: new FormControl('', [Validators.required]),
      price: new FormControl('', [Validators.required]),
    });
  }

  closeModal(): void {
    this.closeModalEvent.emit();
  }

  stopPropagation(event: Event): void {
    event.stopPropagation();
  }

  onSubmit(): void {
    let testId = 111;

    const product: Product = {
      id: testId,
      img: this.productForm.value.image,
      title: this.productForm.value.title,
      color: this.productForm.value.color,
      producer: this.productForm.value.producer,
      price: this.productForm.value.price,
      createdAt: dateConverter(new Date().toString()),
      inStock: false,
    };

    if (this.productForm.valid) {
      this.createProduct.emit(product);
    }
    this.productForm.reset();
    this.closeModal();
  }
}

// funtion to convert full date string to 01.01.1992 like string
function dateConverter(date: string): string {
  // Parse the date string
  const dateToConvert = new Date(date);

  // Format the date
  const day = String(dateToConvert.getDate()).padStart(2, '0'); // Get the day and pad with leading zero if necessary
  const month = String(dateToConvert.getMonth() + 1).padStart(2, '0'); // Get the month (zero-based index) and pad with leading zero if necessary
  const year = dateToConvert.getFullYear(); // Get the full year

  // Construct the new format
  const newDateFormat = `${day}.${month}.${year}`;

  return newDateFormat;
}
