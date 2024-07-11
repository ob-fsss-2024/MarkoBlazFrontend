import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CocktailService {
  private baseUrl = 'http://localhost:9090/coctails';

  constructor(private http: HttpClient) {}


  getCocktail(coctailName: string): Observable<any> {
    return this.http.get(`${this.baseUrl}?coctailName=${coctailName}`);
  }

  getCocktailFunFact(coctailName: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/funfact?coctailName=${coctailName}`);
  }

  getCocktailRecipe(myMood: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/makemeacocktail?myMood=${myMood}`);
  }

  getCocktailById(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/cocktailbyid?id=${id}`);
  }
}
