import { Injectable } from '@angular/core';
import { Contact } from '../models/Contact.models';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) {}

  private contact: Contact[] = [
    {
prenom:"Derrick",
nom:"TETA",
email:"derrickteta1@gmail.com",
phone:693998524,
entreprise:"brainCenter",
secteuractivite:"MUti secteur",
urlsite:"test.com",
interet:"tout le plaisir de collaborer",
message:"je suis venu pour m'enregistrer arrive",
pub:"oui",
    },
    {
      prenom:"Derrick",
      nom:"TCHEUjo",
      email:"sypmatieteeta1@gmail.com",
      phone:6936498524,
      entreprise:"brainSTorm",
      secteuractivite:"Ecommerce",
      urlsite:"win.com",
      interet:"machine learning",
      message:"nous somme une startup en plein envol",
      pub:"oui",
    },
  ];
 // public contact$ = new Subject<Contact[]>();
/*
  getAddress() {
    this.http.get('http://localhost:3000/api/contacts').subscribe(
      (contact: Contact[]) => {
        if (contact) {
          this.contact = contact;
          this.emitAddress();
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }*/

  /*emitAddress() {
    this.contact$.next(this.contact);
  }*/

  getAddressById(id: string) {
    return new Promise((resolve, reject) => {
      this.http.get('http://localhost:3000/api/contacts/' + id).subscribe(
        (response) => {
          resolve(response);
        },
        (error) => {
          reject(error);
        }
      );
    });
  }

  createNewAddress(contact: Contact) {
    return new Promise((resolve, reject) => {
      this.http.post('http://localhost:3000/api/contacts/create', contact).subscribe(
        (response) => {
          resolve(response);
        },
        (error) => {
          reject(error);
        }
      );
    });
  }

  modifyAddress(id: string, contact: Contact) {
    return new Promise((resolve, reject) => {
      this.http.put('http://localhost:3000/api/contacts/' + id, contact).subscribe(
        (response) => {
          resolve(response);
        },
        (error) => {
          reject(error);
        }
      );
    });
  }


  deleteAddress(id: string) {
    return new Promise((resolve, reject) => {
      this.http.delete('http://localhost:3000/api/contacts/' + id).subscribe(
        (response) => {
          resolve(response);
        },
        (error) => {
          reject(error);
        }
      );
    });
  }


}
