import { Component, OnInit } from '@angular/core';
import { Plant } from '../interfaces/plant';
import { MatCard } from '@angular/material/card';

@Component({
  selector: 'gm-plants-view',
  templateUrl: './plants-view.component.html',
  styleUrls: ['./plants-view.component.scss']
})
export class PlantsViewComponent implements OnInit {

  data: Plant[];

  constructor() {
    this.data = [];
  }

  ngOnInit(): void {
    this.data = [
      { id: '', name: 'Lettuce', tags: [{ id: '', name: 'Cool' }], favorite: true },
      { id: '', name: 'Onion', tags: [{ id: '', name: 'Warm' }], favorite: true },
      { id: '', name: 'Radish', tags: [{ id: '', name: 'Warm' }], favorite: false }
    ];
  }

}
