import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'login';

  isLoginPage = false;

  isNavBarCollapsed = false

  constructor( private router: Router){}
  
  ngOnInit(): void {

    this.router.events.subscribe(event => {

      if(event instanceof NavigationEnd){
        if(event.url.includes('/login')){
          this.isLoginPage = true;
        }
        else{
          this.isLoginPage = false;
        }
      }
    })
    
  }

  handleCollapsed(event :any){
    this.isNavBarCollapsed = event;
  }
}
