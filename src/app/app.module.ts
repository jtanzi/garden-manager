// Angular Imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Angular Layout Imports
import { FlexLayoutModule } from '@angular/flex-layout';

// Angular Material Imports
import { GmMaterialModule } from './material.module';

// Internal Imports
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlantsViewComponent } from './plants-view/plants-view.component';
import { PlantComponent } from './components/plant/plant.component';

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
    FlexLayoutModule,
    GmMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
