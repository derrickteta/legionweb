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
  public feedbackvision=false;
  public feedbacktips=false;
  public feedbackstrategie=false;
  public success=1;

  public type:string | undefined;
  constructor(private sousc:SouscriptionService) { }

  ngOnInit(): void {
    
  }
afficher_vision(){
    this.vision = true;
}
affecter_vision(){
  this.type="vision"
}
afficher_tips(){
  this.tips = true;
}
  affecter_tips(){
  this.type="tips"
  }

afficher_strategie(){
  this.strategie = true;
}
affecter_strategie(){
  this.type="strategie";
}
  
onSubmit(form:NgForm) {
  this.loading = true;
  const souscription = new Souscription();
  souscription.type = this.type;
  souscription.email = form.value['email'];
  souscription.actif="true";
  this.sousc.createNewSouscription(souscription).then(
    () => {
     if(this.type=="vision"){
       this.vision=false;
       this.feedbackvision=true;
     }
     if(this.type=="tips"){
      this.tips=false;
      this.feedbacktips=true;
    }
    if(this.type=="strategie"){
      this.strategie=false;
      this.feedbackstrategie=true;
    }

      this.loading = false;
      this.success=2;
    
    }
  ).catch(
    (error) => {
      this.success=3;
      this.errorMessage = error.message;
    }
  );
  setTimeout(() => {
    this.feedbackvision=false;
    this.feedbacktips=false;
    this.feedbackstrategie=false;
  },8000);

}

}



////////::::::::::::::::::::::::::::::::



