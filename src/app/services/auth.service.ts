import { Injectable } from '@angular/core';
import {delay, Observable, of, tap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLogged: boolean = false
  redirectUrl: string;




  login(name: string, password: string):Observable<boolean>{
    const isLogged = (name=="pokemon" && password=="pokemon");
    return of(isLogged).pipe(
      delay(1000),
      tap(isLogged => this.isLogged = isLogged)
    );
  }

  logOut(){
    this.isLogged=false;
  }

}
