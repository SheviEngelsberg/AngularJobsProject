import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponentComponent } from './components/main-component/main-component.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: "", component: MainComponentComponent},
  {path: "login", component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
