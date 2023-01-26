import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { University } from 'src/app/model/universities';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

// List of University in datatable component 
export class HomeComponent implements OnInit{
  // variable declaration
  loader = false;
  filter = '';
  pageSizeList = [10,20,30,40,50,0]
  pageSize = 10;
  p:number=1
  result_filter:University[]=[];
  result :University[]=[];
  
  //contructor
  constructor(private apiService: ApiService){}

  ngOnInit() {
    // loader will continue to load until all the result returned
    this.loader=true;
    this.getUniversities();
  }

  // function to get university data from apiService
  getUniversities(){
    this.apiService.getUniversities().subscribe(res=>{
      this.result=res;
      console.log(res);
      this.result_filter = this.result;
      this.loader = false
    });
  }

  // to truncate wording from web page url; 
  // ex: 'https://','http://','/(at the end of url if have)'  
  filterWebPage(web_page: string){
    let web_page_display:string
    if(web_page.includes('http://')){
       web_page_display = web_page.replace('http://','')
    }
    else if(web_page.includes('https://')){
      web_page_display = web_page.replace('https://','')
    }
    else
    web_page_display = web_page
    return web_page_display.replace("/",'')
  }

  // to get current page number
  page(page:number){
    this.p = page;
  }
  // to get page size selected by user
  onPageSizeSelected(size:number){
    this.pageSize = size
  }

  // to display page size, if its 0 then will return as 'All'
  displaySize(size:number){
    let sizeInString:string
    if(size==0)
    sizeInString = 'All'
    else
    sizeInString = size.toString();
    return sizeInString
  }

  // filtering function
  // it will automatically filter based on word in search input
  filtering(){
    this.result_filter = this.result;
    this.result_filter = this.result_filter.filter((university)=>{
      return university.name.toLowerCase().includes(this.filter.toLowerCase());
    });
  }
  // function to clear all wording in search input at once
  // but commented out since it not required by assessment
  clear(){
    this.filter = '';
    this.filtering();
  }
}
