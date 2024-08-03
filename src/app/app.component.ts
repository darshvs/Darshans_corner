import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'DVS_Portfolio';
  hideFooter: boolean = false;
  isResponsive = false;

 
  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // Check if the current route is ResumeComponent
        this.hideFooter = event.url.includes('resume') || event.url.includes('about');
      }
    });
  }


  toggleResponsive() {
    this.isResponsive = !this.isResponsive;
  }
 
}
