import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { JobPageComponent } from './components/job-page/job-page.component';

const routes: Routes = [
  {path: "login", component: LoginComponent},
  {path: "jobs", component: JobPageComponent},
  {path: "jobs/:field" , component: JobPageComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
