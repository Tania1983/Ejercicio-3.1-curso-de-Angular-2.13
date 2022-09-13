import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-temp',
  templateUrl: './temp.component.html',
  styleUrls: ['./temp.component.css'],
})
export class TempComponent implements OnInit {
  temp:number = 25;

  constructor() {}

  ngOnInit() {}

  // Funciones

  incTemp() {
    this.temp++;
  }

  desTemp() {
    this.temp--;
  }
}
