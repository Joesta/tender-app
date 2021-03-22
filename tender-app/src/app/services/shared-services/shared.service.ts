import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { analyzeAndValidateNgModules } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})


export class SharedService {
  readonly apiBaseUrl = 'http://localhost:32666/api';

  constructor(private http: HttpClient) { }

  captureTender(tender: any) {
    return this.http.post(this.apiBaseUrl + '/Tender', tender);
  }

  updateTender(tender: any) {
    return this.http.put(this.apiBaseUrl + '/Tender', tender);
  }

}
