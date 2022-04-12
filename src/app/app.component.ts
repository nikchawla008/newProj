import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
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

  constructor( private router: Router, private cd: ChangeDetectorRef){}
  
  ngOnInit(): void {

    this.cd.detectChanges();
    this.router.events.subscribe(event => {

      if(event instanceof NavigationEnd){
        if(event.url.includes('/login') || event.urlAfterRedirects.includes('/login')){
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
