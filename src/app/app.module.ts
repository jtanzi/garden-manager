import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlantsViewComponent } from './plants-view/plants-view.component';
import { PlantComponent } from './components/plant/plant.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Angular Material Imports
import { GmMaterialModule } from './material.module';

@NgModule({
  declarations: [
    AppComponent,
    PlantComponent,
    PlantsViewComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    GmMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
