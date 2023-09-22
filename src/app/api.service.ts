import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  // Método para fazer uma requisição GET
  public get(url: string): Observable<any> {
    return this.http.get(url);
  }

  // Método para fazer uma requisição POST
  public post(url: string, data: any): Observable<any> {
    return this.http.post(url, data);
  }

  // Método para fazer uma requisição PUT
  public put(url: string, data: any): Observable<any> {
    return this.http.put(url, data);
  }

  // Método para fazer uma requisição DELETE
  public delete(url: string): Observable<any> {
    return this.http.delete(url);
  }
}
