import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FunctionsService } from 'src/app/services/functions.service';

@Component({
  selector: 'app-acquisition',
  templateUrl: './acquisition.component.html',
  styleUrls: ['./acquisition.component.scss']
})
export class AcquisitionComponent implements OnInit {

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
