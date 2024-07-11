import { Inject, Injectable } from "@angular/core";
import { UnSubscrible } from "../../shared/UnSubscrible.module";
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { BehaviorSubject, Observable } from "rxjs";
import { environment } from "../../../environments/environment.development";
import { Eleve } from "../models/eleve.model";

@Injectable({
    providedIn: 'root'
})
export class EleveService extends UnSubscrible {


   
    constructor(
        private http: HttpClient
    ){
        super();
    }

   

    //ajout d'une école dans la base de donées//
    addEleve(data: Eleve): void {
        const headers = new HttpHeaders({'LONGOKA': 'Benade'});
        this.subs.sink = this.http.post<Eleve[]>(`${environment.apiUrl}/Eleve`, data ,
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
      getAllEleve(): Observable<Eleve[]> {
        const headers = new HttpHeaders({'LONGOKA' : 'Benade'});
       return this.http.get<Eleve[]>(`${environment.apiUrl}/Eleve`, {headers})
      }

      //recuperation d'une seul Eleve par son Id//
      getEleveById(EleveId: string): Observable<Eleve> {
        const headers = new HttpHeaders({'LONGOKA' : 'Benade'});
       return this.http.get<Eleve>(`${environment.apiUrl}/Eleve/${EleveId}`, {headers})
           
      }

      //Modification des informations d'une école//
      updateEleve(EleveId: string, data: Eleve): Observable<Eleve> {
        const headers = new HttpHeaders({'LONGOKA' : 'Benade'});
        return this.http.put<Eleve>(`${environment.apiUrl}/${EleveId}`, data, {headers})
      }

      //Supression d'une école//
      deleteEleve(EleveId: string): void {
        const headers = new HttpHeaders({'LONGOKA' : 'Benade'});
        this.subs.sink = this.http.delete<Eleve>(`${environment.apiUrl}/${EleveId}`, {headers})
            .subscribe({
                next: (result) => {
                    
                },
                error: (error: HttpErrorResponse) => {
                    console.log(error);
                    
                }
            })
      }
}