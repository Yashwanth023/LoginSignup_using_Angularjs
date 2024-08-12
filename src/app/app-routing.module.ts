import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  // { path: '',loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
  // { path: 'signup',loadChildren: () => import('./registration/registration.module').then(m => m.RegistrationModule) }

  { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
  { path: 'signup', loadChildren: () => import('./registration/registration.module').then(m => m.RegistrationModule) },
  { path: '', redirectTo: 'login', pathMatch: 'full' }, // Redirect to login as the default route
  { path: '**', redirectTo: 'login' } // Wildcard route to handle 404

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
