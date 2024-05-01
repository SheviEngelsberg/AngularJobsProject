import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponentComponent } from './components/main-component/main-component.component';
import { LoginComponent } from './components/login/login.component';
import { JobsComponent } from './components/jobs/jobs.component';

const routes: Routes = [
  {path: "login", component: LoginComponent},
  {path: "jobs", component: JobsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
