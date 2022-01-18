import { Injectable } from '@angular/core';
import Foo from 'src/compnents/model/Foo';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class FooService {

  private fooUrl = '/helloworld/foo';

  constructor( private http: HttpClient) { }

  public getFoos(): Observable<Foo[]> {
    return  this.http.get<Foo[]>(this.fooUrl);
  }
}
