// import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';

// @Component({
//     selector: 'registration',
//     templateUrl: 'registration.component.html',
//     styleUrls: ['registration.component.scss']
// })
// export class RegistrationComponent  implements OnInit {

//     constructor(private router: Router) { }

//     ngOnInit(): void {
//         // throw new Error('Method not implemented.');
//     }

//     onSubmit(form:any){
//         console.log(form.value)
//     }

//     openLoginPage(){
//         this.router.navigateByUrl("");
//     }
// }

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'registration',
  templateUrl: 'registration.component.html',
  styleUrls: ['registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  registrationForm!: FormGroup;
  organizations: string[] = ['Amazon', 'Flipkart', 'meesho', 'Intuit', 'Google'];  // Define the organizations array

  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.registrationForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      organization: ['', Validators.required],
      designation: ['', Validators.required],
      birthDate: ['', Validators.required],
      city: ['', Validators.required],
      pincode: ['', [Validators.required, Validators.pattern('^[0-9]{6}$')]]
    });
  }

  onSubmit() {
    if (this.registrationForm.valid) {
      console.log('Form is valid:', this.registrationForm.value);
      this.router.navigateByUrl('/login');
    } else {
      console.log('Form is invalid');
      for (const control in this.registrationForm.controls) {
        if (this.registrationForm.controls.hasOwnProperty(control)) {
          const ctrl = this.registrationForm.controls[control];
          console.log(`${control} is ${ctrl.valid ? 'valid' : 'invalid'}`);
        }
      }
    }
  }
  
  

  openLoginPage() {
    this.router.navigateByUrl("");
  }
}
