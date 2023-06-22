import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-page-admin',
  templateUrl: './page-admin.component.html',
  styleUrls: ['./page-admin.component.css']
})
export class PageAdminComponent {
  candidats: any = []; // Your array of candidates
  pagedCandidats: any[] = [];
  pageSize = 7; // Number of items per page
  currentPage = 1; // Current page number

  // Function to initialize the pagedCandidats array based on currentPage
  initializePage(): void {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.pagedCandidats = this.candidats.slice(startIndex, endIndex);
  }
  constructor(private service:ServiceService,private router:Router) {
    this.getcandidat()
   }
 ngOnInit(): void {
    this.initializePage();
  }

  ngOnChanges(): void {
    this.initializePage();
  }

  public getcandidat(){
    this.service.getCandidats().subscribe(data => {
      this.candidats=data
      console.log( this.candidats)
      return this.candidats;
    });
  }


  deleteItem(index:any){
    return this.service.DeleteCandidats(index).subscribe(data=>{
    location.assign("http://localhost:4200/oc-admin")
              return data
    }
      )

  }


  showpdf(direction:any){
   
      
   
    console.log(direction)
    location.href = direction;

    }

logout(){
  localStorage.removeItem('token');
  this.router.navigate(["/oc-admin-login"]);
}


  


}

