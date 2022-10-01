import { Component } from '@angular/core';
import{Router, NavigationEnd} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'legionweb';
  constructor(public router: Router){   
      this.router.events.subscribe(event => {
         if(event instanceof NavigationEnd){
             gtag('config', 'G-EF3W6X7YLB', 
                   {
                     'page_path': event.urlAfterRedirects
                   }
                  );
          }
       }
    )}
}

declare let gtag: Function;


