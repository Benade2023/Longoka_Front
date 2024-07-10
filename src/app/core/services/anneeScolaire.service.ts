import { Injectable } from "@angular/core";
import { UnSubscrible } from "../../shared/UnSubscrible.module";
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "../../../environments/environment.development";
import { AnneeScolaire } from "../models/anneeScolaire.model";

@Injectable({
    providedIn: 'root'
})
export class AnneeScolaireService extends UnSubscrible {
   
    constructor(
        private http: HttpClient
    ){
        super();
    }

   

    //ajout d'une école dans la base de donées//
    addAnneeScolaire(data: AnneeScolaire): void {
        const headers = new HttpHeaders({'LONGOKA': 'Benade'});
        this.subs.sink = this.http.post<AnneeScolaire[]>(`${environment.apiUrl}/AnneeScolaire`, data ,
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
      getAllAnneeScolaire(): Observable<AnneeScolaire[]> {
        const headers = new HttpHeaders({'LONGOKA' : 'Benade'});
       return this.http.get<AnneeScolaire[]>(`${environment.apiUrl}/AnneeScolaire`, {headers})
      }

      //recuperation d'une seul AnneeScolaire par son Id//
      getAnneeScolaireById(AnneeScolaireId: string): Observable<AnneeScolaire> {
        const headers = new HttpHeaders({'LONGOKA' : 'Benade'});
       return this.http.get<AnneeScolaire>(`${environment.apiUrl}/AnneeScolaire/${AnneeScolaireId}`, {headers})
           
      }

      //Modification des informations d'une école//
      updateAnneeScolaire(AnneeScolaireId: string, data: AnneeScolaire): Observable<AnneeScolaire> {
        const headers = new HttpHeaders({'LONGOKA' : 'Benade'});
        return this.http.put<AnneeScolaire>(`${environment.apiUrl}/${AnneeScolaireId}`, data, {headers})
      }

      //Supression d'une école//
      deleteAnneeScolaire(AnneeScolaireId: string): void {
        const headers = new HttpHeaders({'LONGOKA' : 'Benade'});
        this.subs.sink = this.http.delete<AnneeScolaire>(`${environment.apiUrl}/${AnneeScolaireId}`, {headers})
            .subscribe({
                next: (result) => {
                    
                },
                error: (error: HttpErrorResponse) => {
                    console.log(error);
                    
                }
            })
      }
}