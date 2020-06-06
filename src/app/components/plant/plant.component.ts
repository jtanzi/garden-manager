import { Component, OnInit, Input } from '@angular/core';
import { Plant, PlantTag } from '../../interfaces/plant';

@Component({
  selector: 'gm-plant',
  templateUrl: './plant.component.html',
  styleUrls: ['./plant.component.scss']
})
export class PlantComponent implements OnInit {

  @Input() plant: Plant;

  constructor() { }

  ngOnInit(): void {
    console.dir(this.plant);
  }

}
