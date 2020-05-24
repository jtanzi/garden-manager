import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlantsViewComponent } from './plants-view/plants-view.component';


const routes: Routes = [
  { path: 'main', component: PlantsViewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
