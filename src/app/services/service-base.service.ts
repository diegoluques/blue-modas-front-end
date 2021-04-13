import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceBaseService {
 
 
  constructor(protected http: HttpClient) { }
  
  protected UrlBack: string = "http://localhost:59034/api";
}
