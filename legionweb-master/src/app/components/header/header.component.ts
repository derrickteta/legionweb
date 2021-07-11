import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public aria:boolean | undefined;
  constructor() { }
  
  ngOnInit(): void {
    if(screen.width<992){
      this.aria=false;
    }
    else{
      this.aria=true;
    }
  }  
  derouler (){
    if(screen.width<992){
        if(this.aria==true){
          this.aria=false;
        }
        else{
          this.aria=true;
        }
    }
  }

}
