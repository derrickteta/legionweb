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
  lien="http://legion-web.com:3000";
  //lien="http://localhost:3000"
 // public souscription$ = new Subject<Souscription[]>();
/*
  getSouscription() {
    this.http.get(this.lien+'/api/souscription').subscribe(
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
      this.http.get(this.lien+'api/souscription/' + id).subscribe(
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
    console.log(this.lien);
    return new Promise((resolve, reject) => {
      this.http.post(this.lien+'/api/souscription/create', souscription/*, {responseType: 'text'}*/).subscribe(
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
      this.http.put(this.lien+'/api/souscription/' + id, souscription).subscribe(
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
      this.http.delete(this.lien+'/api/souscription/' + id).subscribe(
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

