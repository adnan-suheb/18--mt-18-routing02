import { Component, Input, OnInit } from '@angular/core';
import { Ifair } from 'src/app/shared/model/fairs.interface';

@Component({
  selector: 'app-fairs-card',
  templateUrl: './fairs-card.component.html',
  styleUrls: ['./fairs-card.component.scss']
})
export class FairsCardComponent implements OnInit {

  constructor() { }

  @Input() fairObj!:Ifair;

  ngOnInit(): void {
  }

}
