import { Component, OnInit,OnDestroy, ViewChild} from '@angular/core';
import { FormGroup, NgForm, Validators} from '@angular/forms';
import { Contact } from 'src/app/models/Contact.models';
import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  public contact: Contact | undefined;
  public errorMessage: string | undefined;
  public loading = false;


  constructor(private register:RegisterService) {}
 
  ngOnInit():void{
};


onSubmit(form:NgForm) {
  this.loading = false;
  const contact = new Contact();
  contact.prenom = form.value['prenom'];
  contact.nom = form.value['nom'];
  contact.email = form.value['email'];
  contact.phone = form.value['phone'];
  contact.entreprise= form.value['entreprise'];
  contact.secteuractivite= form.value['secteuractivite'];
  contact.urlsite= form.value['urlsite'];
  contact.interet = form.value['interet'];
  contact.message = form.value['message'];
  contact.pub = form.value['pub'];
  //console.log("avant l'envoi");
  //console.log(contact);
  this.register.createNewAddress(contact).then(
    () => {
      console.log("apres l'envoi");
      console.log(contact);
      this.loading = false;
    }
  ).catch(
    (error) => {
      this.errorMessage = error.message;
    }
  );
}

}


