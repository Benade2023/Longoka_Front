import { Injectable } from "@angular/core";
import { UnSubscrible } from "../../shared/UnSubscrible.module";
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "../../../environments/environment.development";
import { Profiles } from "../models/profile.model";

@Injectable({
    providedIn: 'root'
})
export class ProfilesService extends UnSubscrible {
   
    constructor(
        private http: HttpClient
    ){
        super();
    }

   

    //ajout d'une école dans la base de donées//
    addProfiles(data: Profiles): void {
        const headers = new HttpHeaders({'LONGOKA': 'Benade'});
        this.subs.sink = this.http.post<Profiles[]>(`${environment.apiUrl}/Profile`, data ,
          {headers}
        ).subscribe({
          next: (result) => {
          },
          error: (error: HttpErrorResponse) => {
            console.log(error);
          }
        })
      } 


      //recuperation de la liste de toutes les écoles//
      getAllProfiles(): Observable<Profiles[]> {
        const headers = new HttpHeaders({'LONGOKA' : 'Benade'});
       return this.http.get<Profiles[]>(`${environment.apiUrl}/Profile`, {headers})
      }

      //recuperation d'une seul Profiles par son Id//
      getProfilesById(ProfilesId: string): Observable<Profiles> {
        const headers = new HttpHeaders({'LONGOKA' : 'Benade'});
       return this.http.get<Profiles>(`${environment.apiUrl}/Profile/${ProfilesId}`, {headers})
           
      }

      //Modification des informations d'une école//
      updateProfiles(ProfilesId: string, data: Profiles): Observable<Profiles> {
        const headers = new HttpHeaders({'LONGOKA' : 'Benade'});
        return this.http.put<Profiles>(`${environment.apiUrl}/${ProfilesId}`, data, {headers})
      }

      //Supression d'une école//
      deleteProfiles(ProfilesId: string): void {
        const headers = new HttpHeaders({'LONGOKA' : 'Benade'});
        this.subs.sink = this.http.delete<Profiles>(`${environment.apiUrl}/${ProfilesId}`, {headers})
            .subscribe({
                next: (result) => {
                    
                },
                error: (error: HttpErrorResponse) => {
                    console.log(error);
                    
                }
            })
      }
}