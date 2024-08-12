import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ifair } from 'src/app/shared/model/fairs.interface';
import { FairsService } from 'src/app/shared/service/fairs.service';

@Component({
  selector: 'app-fairs-dash',
  templateUrl: './fairs-dash.component.html',
  styleUrls: ['./fairs-dash.component.scss']
})
export class FairsDashComponent implements OnInit {

  constructor(
    private _fairService: FairsService,
    private _router: Router
  ) { }

  fairArr: Ifair[] = [];
  fairObj!: Ifair;


  ngOnInit(): void {
    this._fairService.fetchAllFairs().subscribe((res: Ifair[]) => {
      this.fairArr = res
    })

    this._router.navigate(['fairs', this.fairArr[0].fairId])
  }

}
