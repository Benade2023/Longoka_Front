import { Inject, Injectable } from "@angular/core";
import { UnSubscrible } from "../../shared/UnSubscrible.module";
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { Ecole } from "../models/ecole.model";
import { BehaviorSubject, Observable } from "rxjs";
import { environment } from "../../../environments/environment.development";

@Injectable({
    providedIn: 'root'
})
export class EcoleService extends UnSubscrible {


   
    constructor(
        private http: HttpClient
    ){
        super();
    }

   

    //ajout d'une école dans la base de donées//
    addEcole(data: Ecole): void {
        const headers = new HttpHeaders({'LONGOKA': 'Benade'});
        this.subs.sink = this.http.post<Ecole[]>(`${environment.apiUrl}/Ecole`, data ,
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
      getAllEcole(): Observable<Ecole[]> {
        const headers = new HttpHeaders({'LONGOKA' : 'Benade'});
       return this.http.get<Ecole[]>(`${environment.apiUrl}/Ecole`, {headers})
      }

      //recuperation d'une seul ecole par son Id//
      getEcoleById(ecoleId: string): Observable<Ecole> {
        const headers = new HttpHeaders({'LONGOKA' : 'Benade'});
       return this.http.get<Ecole>(`${environment.apiUrl}/Ecole/${ecoleId}`, {headers})
           
      }

      //Modification des informations d'une école//
      updateEcole(ecoleId: string, data: Ecole): Observable<Ecole> {
        const headers = new HttpHeaders({'LONGOKA' : 'Benade'});
        return this.http.put<Ecole>(`${environment.apiUrl}/${ecoleId}`, data, {headers})
      }

      //Supression d'une école//
      deleteEcole(ecoleId: string): void {
        const headers = new HttpHeaders({'LONGOKA' : 'Benade'});
        this.subs.sink = this.http.delete<Ecole>(`${environment.apiUrl}/${ecoleId}`, {headers})
            .subscribe({
                next: (result) => {
                    
                },
                error: (error: HttpErrorResponse) => {
                    console.log(error);
                    
                }
            })
      }
}