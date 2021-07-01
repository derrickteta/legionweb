import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm, Validators} from '@angular/forms';
import { Souscription } from 'src/app/models/Souscription.models';
import { SouscriptionService } from 'src/app/services/souscription.service';
@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.scss']
})
export class NewsletterComponent implements OnInit {
  public souscription: Souscription | undefined;
  public errorMessage: string | undefined;
  public valeurtype:string |undefined;
  public loading = false;
  public vision = false;
  public tips=false;
  public strategie=false;   
  public type:string | undefined;
  constructor(private sousc:SouscriptionService) { }

  ngOnInit(): void {
    
  }
afficher_vision(){
    this.vision = true;
    this.type="vision"
}
afficher_tips(){
  this.tips = true;
  this.type="tips"
}
afficher_strategie(){
  this.strategie = true;
  this.type="strategie";
}
  
onSubmit(form:NgForm) {
  this.loading = false;
  const souscription = new Souscription();
  souscription.type = this.type;
  souscription.email = form.value['email'];
  souscription.actif="true";
  this.sousc.createNewSouscription(souscription).then(
    () => {
      console.log("apres l'envoi");
      console.log(souscription);
     if(this.type="vision"){
       this.vision=false;
     }
     if(this.type="tips"){
      this.tips=false;
    }
    if(this.type="vision"){
      this.strategie=false;
    }

      this.loading = false;
    }
  ).catch(
    (error) => {
      this.errorMessage = error.message;
    }
  );
}

}



////////::::::::::::::::::::::::::::::::



