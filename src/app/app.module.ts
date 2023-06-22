import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostulerComponent } from './components/postuler/postuler.component';
import { LoginComponent } from './components/login/login.component';
import { PageAdminComponent } from './components/page-admin/page-admin.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms'; 
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [
    AppComponent,
    PostulerComponent,
    LoginComponent,
    PageAdminComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NgxPaginationModule,
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
