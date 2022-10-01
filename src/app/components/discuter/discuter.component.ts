import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-discuter',
  templateUrl: './discuter.component.html',
  styleUrls: ['./discuter.component.scss']
})
export class DiscuterComponent implements OnInit {

  constructor(
    private router: Router) { }

  ngOnInit(): void {
  }
    redirect(r:string){
    this.router.navigate(['./'+r]);
  }
}
