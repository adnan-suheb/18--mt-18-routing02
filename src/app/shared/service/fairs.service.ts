import { Injectable } from '@angular/core';
import { Ifair } from '../model/fairs.interface';
import { fairsArr } from '../model/fairs.const';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FairsService {

  constructor() { }


  fairsArr: Ifair[] = fairsArr;

  fetchAllFairs(): Observable<Ifair[]> {
    return of(this.fairsArr)
  }

  getSelectedFair(id: string): Observable<Ifair> {
    return of(this.fairsArr.find(fair => fair.fairId === id)!)
  }

}
