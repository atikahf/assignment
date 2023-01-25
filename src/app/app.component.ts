import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  page = 'home';
  title = 'assignment';
  constructor(private route:Router){}

  navigate(navigate:string){
    this.page = navigate;
    this.route.navigateByUrl(this.page);
  }
}
