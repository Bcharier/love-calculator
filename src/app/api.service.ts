import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoveResult } from './love.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(readonly http: HttpClient) { }

  addResult(loveResult: LoveResult) {
    return this.http.post<LoveResult>('http://localhost:3000/results', loveResult);
  }

  
}
