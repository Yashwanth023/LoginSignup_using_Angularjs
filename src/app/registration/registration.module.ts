// // Angular Imports
// import { NgModule } from '@angular/core';
// import { RegistrationRoutingModule } from './registration-routing.module';
// import { FormsModule,ReactiveFormsModule } from '@angular/forms';
// import { CommonModule } from '@angular/common';
// // This Module's Components
// import { RegistrationComponent } from './registration.component';

// @NgModule({
//     imports: [
//         RegistrationRoutingModule,
//         FormsModule,
//         CommonModule
//     ],
//     declarations: [
//         RegistrationComponent,
//     ]
// })
// export class RegistrationModule {

// }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';  // Import ReactiveFormsModule
import { RegistrationRoutingModule } from './registration-routing.module';
import { RegistrationComponent } from './registration.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,  // Add ReactiveFormsModule here
    RegistrationRoutingModule
  ],
  declarations: [
    RegistrationComponent,
  ]
})
export class RegistrationModule { }
