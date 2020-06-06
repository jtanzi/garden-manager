export interface Plant {
  id: string;
  name: string;
  description: string;
  tags: PlantTag[];
  favorite: boolean;
  startPlantDate: Date;
  endPlantDate: Date;
}

export interface PlantTag {
  id: string;
  name: string;
}
