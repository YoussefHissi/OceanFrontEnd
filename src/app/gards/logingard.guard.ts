import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { asapScheduler } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class LoginGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(): boolean {
    // Check if the user is authenticated
   /* const isAuthenticated =  Your authentication logic here */;

    if (localStorage.getItem("token")) {
      this.router.navigate(["/oc-admin"]);
      return false;
    } else {
   
  
      return true;
    }
  }
}
