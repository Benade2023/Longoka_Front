import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject, map, of } from 'rxjs';
import { User } from '../models/user.model';
import { environment } from '../../../environments/environment.development';
import { Ecole } from '../models/ecole.model';
import { UnSubscrible } from '../../shared/UnSubscrible.module';

@Injectable({
  providedIn: 'root'
})
export class AuthService extends UnSubscrible {

  private currentUserObject: BehaviorSubject<User>;
  public userCurrent = Subject<User>;


  constructor(
    private http: HttpClient
  ) { 
    super();
    this.currentUserObject = new BehaviorSubject<User>(
      JSON.parse(localStorage.getItem('userCurrent') || '{}')
    );
    
  }


  get currentUserValue(): User {
    return this.currentUserObject.value;
  }

  login(telephone: string, password: string, ecoleId: string) {
    const headers = new HttpHeaders({'LONGOKA': 'Benade'});
    return this.http.post<User>(`${environment.apiUrl}`, {
      telephone, password, ecoleId
    }, {headers}
  ).pipe(
    map((result) => {
      // const jwtUtilitaire = new JwtHelperService();
      // let tokenDecode = jwtUtilitaire.decodeToken(result.value.accessToken)
      const myUser : User = {
        userId: '',
        username: 'Benade2024',
        password: '246750',
        completName: 'Benade Mabondzo',
        birthday: '03/09/1990',
        numeroRue: 10,
        rueName: 'Masseke',
        quartier: 'Fond Tié Tié',
        ville: 'Pointe-Noire',
        pays: 'Congo',
        ecoleId: 'f8d89ed4-68b3-4e94-b950-729f7364abd4',
        profileId: 'admin',
      }
      localStorage.setItem('userCurrent', JSON.stringify(result));
      this.currentUserObject.next(myUser)
      return result
    })
  )
  }

  logOut() {
    localStorage.removeItem('userCurrent');
    this.currentUserObject.next(this.currentUserValue);
    return of({success: false})
  }


}
