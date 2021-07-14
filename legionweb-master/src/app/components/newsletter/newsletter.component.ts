import { Component, OnInit } from '@angular/core';
import { NgForm} from '@angular/forms';
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
  public loadingvision = false;
  public loadingtips = false;
  public loadingstrategie = false;

  public vision = false;
  public tips=false;
  public strategie=false;
  public feedbackvision=false;
  public feedbacktips=false;
  public feedbackstrategie=false;
  public successvision=1;
  public successtips=1;
  public successstrategie=1;

  public typevision:string | undefined;
  public typetips:string | undefined;
  public typestrategie:string | undefined;
  constructor(private sousc:SouscriptionService) { }

  ngOnInit(): void {
    
  }
afficher_vision(){
    this.vision = true;
}
affecter_vision(){
  this.typevision="vision"
}
afficher_tips(){
  this.tips = true;
}
  affecter_tips(){
  this.typetips="tips"
  }

afficher_strategie(){
  this.strategie = true;
}
affecter_strategie(){
  this.typestrategie="strategie";
}
  
onSubmit(form:NgForm) {
  const souscription = new Souscription();
     if(this.typevision==="vision"){
          this.loadingvision = true;
          souscription.type="vision";
          souscription.email = form.value['emailvision'];
          souscription.actif="true";
          this.vision=false;
          
        console.log(souscription);
          this.sousc.createNewSouscription(souscription).then(
           () => {  
                    this.loadingvision = false;
                    this.feedbackvision=true;
                    this.successvision=2;
                    
           } ).catch(
             (error) => {
                    this.loadingvision=false;
                    this.feedbackvision=true;
                    this.successvision=3;
                    this.errorMessage = error.message;
          }
        );
        setTimeout(() => {
          this.feedbackvision=false;
          this.successvision=1;
        },8000);
        this.typevision="";
     }
     if(this.typetips==="tips"){
        this.loadingtips = true;
        souscription.type="tips";
        souscription.email = form.value['emailtips'];
        souscription.actif="true";
        this.tips=false;
        
        console.log(souscription);
        this.sousc.createNewSouscription(souscription).then(
        () => {
            this.loadingtips = false;
            this.feedbacktips=true;
            this.successtips=2;
        } ).catch(
          (error) => {
            this.loadingtips=false;
            this.feedbacktips=true;
            this.successtips=3;
            this.errorMessage = error.message;
          }
        );
        setTimeout(() => {
          this.feedbacktips=false;
          this.successtips=1;
        },8000);
        this.typetips="";
    }
    if(this.typestrategie==="strategie"){
        this.loadingstrategie = true;
        souscription.type="strategie";
        souscription.email = form.value['emailstrategie'];
        souscription.actif="true";
        this.strategie=false;
        console.log(souscription);
        this.sousc.createNewSouscription(souscription).then(
          () => {
              this.loadingstrategie = false;
              this.feedbackstrategie=true;
              this.successstrategie=2;
         } ).catch(
          (error) => {
              this.loadingstrategie=false;
              this.feedbackstrategie=true;
              this.successstrategie=3;
              this.errorMessage = error.message;
          }
        );
        setTimeout(() => {
          this.feedbackstrategie=false;
          this.successstrategie=1;
        },8000);
        this.typestrategie="";
    }
    
    }
  
}





////////::::::::::::::::::::::::::::::::



