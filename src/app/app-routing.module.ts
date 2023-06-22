import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageAdminComponent } from './components/page-admin/page-admin.component';
import { PostulerComponent } from './components/postuler/postuler.component';
import { AuthGuard } from './gards/admingard.guard';
import { LoginComponent } from './components/login/login.component';
import { LoginGuard } from './gards/logingard.guard';

const routes: Routes = [

  { path: '', redirectTo:"postuler",pathMatch:'full'},
  { path: 'postuler', component: PostulerComponent },
  { path: 'oc-admin', component: PageAdminComponent,canActivate:[AuthGuard]},
  { path: 'oc-admin-login', component: LoginComponent,canActivate:[LoginGuard]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
