import { Injectable } from "@angular/core";
import { UnSubscrible } from "../../shared/UnSubscrible.module";
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "../../../environments/environment.development";
import { IClasse } from "../interfaces/classe.interface";

@Injectable({
    providedIn: 'root'
})
export class ClasseService extends UnSubscrible {
   
    constructor(
        private http: HttpClient
    ){
        super();
    }

   

    //ajout d'une école dans la base de donées//
    addClasse(data: IClasse): void {
        const headers = new HttpHeaders({'LONGOKA': 'Benade'});
        this.subs.sink = this.http.post<IClasse[]>(`${environment.apiUrl}/Classe`, data ,
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
      getAllClasse(): Observable<IClasse[]> {
        const headers = new HttpHeaders({'LONGOKA' : 'Benade'});
       return this.http.get<IClasse[]>(`${environment.apiUrl}/Classe`, {headers})
      }

      //recuperation d'une seul IClasse par son Id//
      getClasseById(IClasseId: string): Observable<IClasse> {
        const headers = new HttpHeaders({'LONGOKA' : 'Benade'});
       return this.http.get<IClasse>(`${environment.apiUrl}/Classe/${IClasseId}`, {headers})
           
      }

      //Modification des informations d'une école//
      updateClasse(IClasseId: string, data: IClasse): Observable<IClasse> {
        const headers = new HttpHeaders({'LONGOKA' : 'Benade'});
        return this.http.put<IClasse>(`${environment.apiUrl}/${IClasseId}`, data, {headers})
      }

      //Supression d'une école//
      deleteClasse(IClasseId: string): void {
        const headers = new HttpHeaders({'LONGOKA' : 'Benade'});
        this.subs.sink = this.http.delete<IClasse>(`${environment.apiUrl}/${IClasseId}`, {headers})
            .subscribe({
                next: (result) => {
                    
                },
                error: (error: HttpErrorResponse) => {
                    console.log(error);
                    
                }
            })
      }
}