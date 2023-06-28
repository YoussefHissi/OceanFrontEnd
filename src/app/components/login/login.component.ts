import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username!: FormControl;
  password!:FormControl;
  Loginform!: FormGroup;
constructor(private service:ServiceService,private router :Router){}
ngOnInit() {
  this.initialiseData();
}

  initialiseData() {
    this.password = new FormControl('', Validators.required);
    this.username = new FormControl('', Validators.required);
  
    this.Loginform = new FormGroup({
      password: this.password,
      username: this.username
    });
  }


 

  Login() {
    const formData = {
      password: this.password.value,
      username: this.username.value,
    };
  
    this.service.Login(formData).subscribe((data:any) => {
      console.log(data);
      const token = data.token; // Extract the token from the response object
      localStorage.setItem('token', token);
      this.router.navigate(["/oc-admin"]);
      return data;
    });
  }

  






}
