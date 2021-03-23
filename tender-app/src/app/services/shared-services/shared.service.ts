import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Tender } from 'src/app/models/tender';
import { environment } from 'src/environments/environment';
import { StateOrgan } from 'src/app/models/state-organ';
import { EligibleSupplier } from 'src/app/models/eligible-supplier';

const apiCaller = environment.apiBaseUrl;

@Injectable({
  providedIn: 'root'
})


export class SharedService {

  constructor(private http: HttpClient) { }

  captureTender(tender: any) {
    return this.http.post(apiCaller + '/tender', tender);
  }

  updateTender(tender: any) {
    return this.http.put(apiCaller + '/tender', tender);
  }

  getTenders(): Observable<Tender[]> {
    return this.http.get<Tender[]>(apiCaller + 'tenders');
  }
  
  getTender(tenderId:number): Observable<Tender> {
    console.log(this.http.get<Tender>(apiCaller + `tenders/${tenderId}`));
    return this.http.get<Tender>(apiCaller + `tenders/${tenderId}`);
  }

  getStateOrgan(stateOrganId: number): Observable<StateOrgan>{
    return this.http.get<StateOrgan>(apiCaller + `/companies/stateOrgan${stateOrganId}`)
  }

  getEligibleSuppliers(tenderId: number): Observable<EligibleSupplier[]>{
    return this.http.get<EligibleSupplier[]>(apiCaller + `tenders/getEligibleSuppliers/${tenderId}`);
  }

}
