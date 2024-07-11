import { Inject, Injectable } from "@angular/core";
import { UnSubscrible } from "../../shared/UnSubscrible.module";
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { BehaviorSubject, Observable } from "rxjs";
import { environment } from "../../../environments/environment.development";
import { ParentEleve } from "../models/parent.model";

@Injectable({
    providedIn: 'root'
})
export class ParentEleveService extends UnSubscrible {


   
    constructor(
        private http: HttpClient
    ){
        super();
    }

   

    //ajout d'une école dans la base de donées//
    addParentEleve(data: ParentEleve): void {
        const headers = new HttpHeaders({'LONGOKA': 'Benade'});
        this.subs.sink = this.http.post<ParentEleve[]>(`${environment.apiUrl}/ParentEleve`, data ,
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
      getAllParentEleve(): Observable<ParentEleve[]> {
        const headers = new HttpHeaders({'LONGOKA' : 'Benade'});
       return this.http.get<ParentEleve[]>(`${environment.apiUrl}/ParentEleve`, {headers})
      }

      //recuperation d'une seul ParentEleve par son Id//
      getParentEleveById(ParentEleveId: string): Observable<ParentEleve> {
        const headers = new HttpHeaders({'LONGOKA' : 'Benade'});
       return this.http.get<ParentEleve>(`${environment.apiUrl}/ParentEleve/${ParentEleveId}`, {headers})
           
      }

      //Modification des informations d'une école//
      updateParentEleve(ParentEleveId: string, data: ParentEleve): Observable<ParentEleve> {
        const headers = new HttpHeaders({'LONGOKA' : 'Benade'});
        return this.http.put<ParentEleve>(`${environment.apiUrl}/${ParentEleveId}`, data, {headers})
      }

      //Supression d'une école//
      deleteParentEleve(ParentEleveId: string): void {
        const headers = new HttpHeaders({'LONGOKA' : 'Benade'});
        this.subs.sink = this.http.delete<ParentEleve>(`${environment.apiUrl}/${ParentEleveId}`, {headers})
            .subscribe({
                next: (result) => {
                    
                },
                error: (error: HttpErrorResponse) => {
                    console.log(error);
                    
                }
            })
      }
}