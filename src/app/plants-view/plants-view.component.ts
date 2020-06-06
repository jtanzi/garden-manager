import { Component, OnInit } from '@angular/core';
import { Plant } from '../interfaces/plant';
import { MatCard } from '@angular/material/card';

@Component({
  selector: 'gm-plants-view',
  templateUrl: './plants-view.component.html',
  styleUrls: ['./plants-view.component.scss']
})
export class PlantsViewComponent implements OnInit {

  plants: Plant[];

  constructor() {
    this.plants = [];
  }

  ngOnInit(): void {
    this.plants = [
      {
        id: '',
        name: 'Lettuce',
        description: `A staple of salads and sandwiches, these leafy greens do best in mild temperatures and should be planted as early as two weeks before the last frost.`,
        tags: [{ id: '', name: 'Cool' }],
        favorite: true,
        startPlantDate: new Date('04/01/2020'),
        endPlantDate: new Date('06/01/2020')
      },
      {
        id: '',
        name: 'Onion',
        description: `Onions are spicy. Don't bite them raw!`,
        tags: [{ id: '', name: 'Warm' }],
        favorite: true,
        startPlantDate: new Date('05/01/2020'),
        endPlantDate: new Date('06/15/2020')
      },
      {
        id: '',
        name: 'Radish',
        description: `Radishes are crist. Don't cook them!`,
        tags: [{ id: '', name: 'Warm' }],
        favorite: false,
        startPlantDate: new Date('05/01/2020'),
        endPlantDate: new Date('06/15/2020')
      }
    ];
  }

}
