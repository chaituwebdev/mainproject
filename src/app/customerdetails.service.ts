import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Icustomerdetails } from 'icustomerdetails';


@Injectable({
  providedIn: 'root'
})
export class CustomerdetailsService {
  private url : string = "https://jsonplaceholder.typicode.com/posts";
  httpclient: any;

  constructor(private http:HttpClient) { }
  getCustomers() : Observable<Icustomerdetails[]> {
    return this.http.get<Icustomerdetails[]>(this.url)
  }
    

}
