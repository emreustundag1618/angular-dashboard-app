import { Component, EventEmitter, Output } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { User } from '../../../pages/users/user-interface';

@Component({
  selector: 'app-create-user',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './create-user.component.html',
  styleUrl: './create-user.component.scss',
})
export class CreateUserComponent {
  @Output() createUser = new EventEmitter<User>();
  @Output() closeModalEvent = new EventEmitter<void>();

  userForm!: FormGroup;

  constructor(private fb: FormBuilder) {
    this.userForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', [Validators.required]],
      image: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, phoneNumberValidator]],
    });
  }

  onSubmit() {
    let testId = 111;

    const user: User = {
      id: testId,
      img: this.userForm.value.image,
      lastName: this.userForm.value.lastName,
      firstName: this.userForm.value.firstName,
      email: this.userForm.value.email,
      phone: this.userForm.value.phone,
      createdAt: dateConverter(new Date().toString()),
      verified: false,
    };

    this.createUser.emit(user);
    this.userForm.reset();
    this.closeModal();
  }

  closeModal() {
    this.closeModalEvent.emit();
  }

  stopPropagation(event: Event) {
    event.stopPropagation();
  }
}

function phoneNumberValidator(
  control: FormControl
): { [key: string]: any } | null {
  const phoneNumberRegex = /^\d{10}$/; // This regex assumes 10-digit phone numbers without any special characters

  if (control.value && !phoneNumberRegex.test(control.value)) {
    return { phoneNumber: true }; // Return an error if the value doesn't match the regex
  }

  return null; // Return null if the value is valid
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
