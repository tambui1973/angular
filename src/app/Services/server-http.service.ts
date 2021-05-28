import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {catchError} from 'rxjs/operators';
import { Observable, throwError} from 'rxjs';

const httpOptions={
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      //'Authorization': 'my-auth-token'
    })
  };

@Injectable({
  providedIn: 'root'
})
export class ServerHttpService {
  private REST_API_SERVER = 'http://localhost:3000';

  constructor(private httpClient:HttpClient) { }

  public getProfile():Observable<any>{
    const url =`${this.REST_API_SERVER}/profile`;
    return this.httpClient.get<any>(url,httpOptions).pipe(catchError(this.handleError));
  }

   public getComments():Observable<any>{
    const url =`${this.REST_API_SERVER}/comments`;
    return this.httpClient.get<any>(url,httpOptions).pipe(catchError(this.handleError));
  }

  public getPosts():Observable<any>{
    const url =`${this.REST_API_SERVER}/posts`;
    return this.httpClient.get<any>(url,httpOptions).pipe(catchError(this.handleError));
  }

  public addPosts(data: { title: string; author: string; }){
    const url= `${this.REST_API_SERVER}/posts`;
    return this.httpClient.post<any>(url,data,httpOptions).pipe(catchError(this.handleError));
  }
  private handleError(error: HttpErrorResponse){
    if (error.error instanceof ErrorEvent){
      console.error('An error occurred',error.error.message);
    } else {
      console.error(`Backend returned code ${error.status}, `+`body was: ${error.error}`);
    }
    return throwError('Something bad happened; please try again later.')
  }
}
