import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }



getCandidats() {
  
  const token = localStorage.getItem('token'); // Retrieve the token from local storage

  // Create the headers object and include the authorization token
  const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

  // Make the HTTP GET request with the headers
  return this.http.get("https://localhost:7191/api/Candidat/get", { headers });
}




PostCandidats(data:any){
   return this.http.post("https://localhost:7191/api/Candidat",data)
  
  }

  DeleteCandidats(id:any){
    return this.http.delete("https://localhost:7191/api/Candidat/"+id)
   
   }
  
   Login(User:any){
    return this.http.post("https://localhost:7191/api/Login",User).pipe(map(
      response=>{
        return response;
      }
    ))

    
    
    }
    
    

}
