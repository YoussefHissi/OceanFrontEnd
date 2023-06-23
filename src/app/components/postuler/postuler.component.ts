import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-postuler',
  templateUrl: './postuler.component.html',
  styleUrls: ['./postuler.component.css']
})
export class PostulerComponent implements OnInit {
  nom!: FormControl;
  prenom!: FormControl;
  email!: FormControl;
  telephone!: FormControl;
  Niveau_etude!: FormControl;
  annees_experience!:FormControl;
  postuler!: FormGroup;
  Dernier_employeur!:FormControl;
  cv!:FormControl;
  submitClicked:boolean=false;
  showedlist:boolean=false;
  itemvalue:any=""
  constructor(private service: ServiceService) {}

  ngOnInit() {
    this.initialiseData();
  }

  showlist(){
    this.showedlist=!this.showedlist;
      
    }

    hidelist(){
      this.showedlist=false;
        
      }
    get_item_value(event:any){
      this.itemvalue=event.target.value 
      if(this.itemvalue==1){
        this.itemvalue=this.itemvalue
      }if(this.itemvalue==8){
        this.itemvalue='+ '+this.itemvalue+" years"
      }
      
      else{
        this.itemvalue=this.itemvalue +' years'
      }
      console.log(this.itemvalue)
    }
    
   

  initialiseData() {
    this.nom = new FormControl('', Validators.required);
    this.prenom = new FormControl('', Validators.required);
    this.email = new FormControl('', [Validators.required, Validators.email]);
    this.telephone = new FormControl('', Validators.required);
    this.Niveau_etude = new FormControl('', Validators.required);
    this.annees_experience = new FormControl(this.itemvalue, Validators.required);
    this.Dernier_employeur = new FormControl('', Validators.required);
    this.cv=new FormControl(null, Validators.required);
    this.postuler = new FormGroup({
      nom: this.nom,
      prenom: this.prenom,
      email: this.email,
      telephone: this.telephone,
      Niveau_etude: this.Niveau_etude,
      annees_experience: this.itemvalue,
      Dernier_employeur:this.Dernier_employeur,
      cv:this.cv
    });
  }

  postFormData() {
    const formData = {
      id: 5,
      nom: this.nom.value,
      prenom: this.prenom.value,
      email: this.email.value,
      telephone: this.telephone.value,
      niveau_etude: this.Niveau_etude.value,
      annees_experience: this.itemvalue,
      Dernier_employeur:this.Dernier_employeur.value,
      cv:this.cv.value
    };

    return formData;
  }




 


AddCandidature() {
  if (this.postuler.invalid) {
    return; // Exit the function if the form is invalid
  }
  this.submitClicked = true; // Set the variable to true upon successful submission

  console.log(this.postFormData());
  this.service.PostCandidats(this.postFormData()).subscribe(data => {
    // Handle the response data as needed
    console.log(data);
  });


  setTimeout(() => {
    
  this.nom.reset()
  this.prenom.reset()
 this.email.reset()
  this.telephone.reset()
  this.Niveau_etude.reset()
 this.annees_experience.reset()
 this.Dernier_employeur.reset()
    this.submitClicked=false;

  }, 4000);
}





  




}


