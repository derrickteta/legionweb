import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FunctionsService } from 'src/app/services/functions.service';

@Component({
  selector: 'app-entonnoir',
  templateUrl: './entonnoir.component.html',
  styleUrls: ['./entonnoir.component.scss']
})
export class EntonnoirComponent implements OnInit {

  constructor(private Function: FunctionsService,
    private router: Router) { }

  ngOnInit(): void {
  }
  scrol(y:string){
    this.Function.scroll(y);
  }
  redirect(r:string){
    this.router.navigate(['./'+r]);
  }
}
