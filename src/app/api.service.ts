import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoveResult } from './love.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  readonly url = 'http://localhost:3000/results';

  constructor(readonly http: HttpClient) { }

  getAllResults() {
    return this.http.get<LoveResult[]>(this.url);
  }

  getOneResult(id: string) {
    return this.http.get<LoveResult>(`${this.url}/${id}`);
  }
  
  addResult(loveResult: LoveResult) {
    return this.http.post<LoveResult>(this.url, loveResult);
  }

  removeResult(id: string) {
    return this.http.delete<LoveResult>(`${this.url}/${id}`);
  }


}
