import { Injectable } from '@angular/core';
import Foo from 'src/app/models/Foo';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class FooService {

  private fooUrl = 'http://localhost:8080/helloworld/foo';

  constructor( private http: HttpClient) { }

  public getFoos(): Observable<Foo[]> {
    return  this.http.get<Foo[]>(this.fooUrl);
  }
}
