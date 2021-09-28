import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Souscription } from '../models/Souscription.models';

@Injectable({
  providedIn: 'root'
})
export class SouscriptionService {

  constructor(private http: HttpClient) { }
  
  private souscription: Souscription[] = [
    {
type:"Derrick",                                                                                                                                                                                                                                                                                                           
email:"derrickteta1@gmail.com",
actif:"oui",
    },
    {
      type:"Derrick",
      email:"sypmatieteeta1@gmail.com",
      actif:"oui",
    },
  ];
 // public souscription$ = new Subject<Souscription[]>();
/*
  getSouscription() {
    this.http.get('https://legion-web.com/api/souscription').subscribe(
      (souscription: Souscription[]) => {
        if (souscription) {
          this.souscription = souscription;
          this.emitSouscription();
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }*/

  /*emitSouscription() {
    this.souscription$.next(this.souscription);
  }*/

  getSouscriptionById(id: string) {
    return new Promise((resolve, reject) => {
      this.http.get('https://legion-web.com/api/souscription/' + id).subscribe(
        (response) => {
          resolve(response);
        },
        (error) => {
          reject(error);
        }
      );
    });
  }

  createNewSouscription(souscription: Souscription) {
    return new Promise((resolve, reject) => {
      this.http.post('https://legion-web.com/api/souscription/create', souscription, {responseType: 'text'}).subscribe(
        (response) => {
          resolve(response);
        },
        (error) => {
          reject(error);                                                                                                                                                                                                                                                            
        }
      );
    });
  }

  modifySouscription(id: string, souscription: Souscription) {
    return new Promise((resolve, reject) => {
      this.http.put('https://legion-web.com/api/souscription/' + id, souscription).subscribe(
        (response) => {
          resolve(response);
        },
        (error) => {
          reject(error);
        }
      );
    });
  }


  deleteSouscription(id: string) {
    return new Promise((resolve, reject) => {
      this.http.delete('https://legion-web.com/api/souscription/' + id).subscribe(
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

