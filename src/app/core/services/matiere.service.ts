import { Injectable } from "@angular/core";
import { UnSubscrible } from "../../shared/UnSubscrible.module";
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "../../../environments/environment.development";
import { Matiere } from "../models/matiere.model";

@Injectable({
    providedIn: 'root'
})
export class MatiereService extends UnSubscrible {
   
    constructor(
        private http: HttpClient
    ){
        super();
    }

   

    //ajout d'une école dans la base de donées//
    addMatiere(data: Matiere): void {
        const headers = new HttpHeaders({'LONGOKA': 'Benade'});
        this.subs.sink = this.http.post<Matiere[]>(`${environment.apiUrl}/Matiere`, data ,
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
      getAllMatiere(): Observable<Matiere[]> {
        const headers = new HttpHeaders({'LONGOKA' : 'Benade'});
       return this.http.get<Matiere[]>(`${environment.apiUrl}/Matiere`, {headers})
      }

      //recuperation d'une seul Matiere par son Id//
      getMatiereById(MatiereId: string): Observable<Matiere> {
        const headers = new HttpHeaders({'LONGOKA' : 'Benade'});
       return this.http.get<Matiere>(`${environment.apiUrl}/Matiere/${MatiereId}`, {headers})
           
      }

      //Modification des informations d'une école//
      updateMatiere(MatiereId: string, data: Matiere): Observable<Matiere> {
        const headers = new HttpHeaders({'LONGOKA' : 'Benade'});
        return this.http.put<Matiere>(`${environment.apiUrl}/${MatiereId}`, data, {headers})
      }

      //Supression d'une école//
      deleteMatiere(MatiereId: string): void {
        const headers = new HttpHeaders({'LONGOKA' : 'Benade'});
        this.subs.sink = this.http.delete<Matiere>(`${environment.apiUrl}/${MatiereId}`, {headers})
            .subscribe({
                next: (result) => {
                    
                },
                error: (error: HttpErrorResponse) => {
                    console.log(error);
                    
                }
            })
      }
}