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

  public getFavouritedCats (): Observable<any>{
    return this.request.get(`${environment.API}/favourites?limit=20&sub_id=user-123&order=DESC`,
    {
      headers:  { 'x-api-key': environment.APIKEY}
    }
    )
  }

  public getCat(image_id:string):Observable<any>{
    return this.request.get(`${environment.API}/images/${image_id}`)
  }

  public favouriteCat(image_id:string, sub_id: string): Observable<any>{
    const favourite = {
      image_id:image_id,
      sub_id:sub_id
    }
    return this.request.post(`${environment.API}/favourites`, favourite,
    {
      headers:  { 'x-api-key': environment.APIKEY}
    })
  }
}
