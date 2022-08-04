import { environment } from './../../environments/environment.prod';
import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICats } from '../interfaces/placeholder.model';


@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private request: HttpClient) { }

  public getCats (): Observable<any>{
    return this.request.get(`${environment.API}/images/search?api_key=${environment.APIKEY}&limit=10`);
  }

  public getBreeds (): Observable<any>{
    return this.request.get(`${environment.API}/breeds`);
  }
}
