import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { University } from 'src/app/model/universities';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  result :University[]=[];
  constructor(private apiService: ApiService){}
  ngOnInit() {
    this.getUniversities();
  }

  getUniversities(){
    this.apiService.getUniversities().subscribe(res=>{
      this.result=res;
      console.log(res);
    });
  }
}
