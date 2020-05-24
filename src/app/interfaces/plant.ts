export interface Plant {
  id: string;
  name: string;
  tags: PlantTag[];
  favorite: boolean;
  // TODO - Add planting dates
}

export interface PlantTag {
  id: string;
  name: string;
}
