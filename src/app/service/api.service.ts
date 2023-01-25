import { Injectable } from '@angular/core';
import { University } from '../model/universities';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  universitiesUrl = 'http://universities.hipolabs.com/search?country=United+States'
  constructor(private http: HttpClient) { }

  getUniversities(): Observable<University[]> {
    return this.http.get<University[]>(this.universitiesUrl);
  }
}
