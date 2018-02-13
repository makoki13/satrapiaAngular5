import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: MainComponent
  },
  {
    path: 'partida',
    loadChildren: './match/match.module#MatchModule' // Lazy load
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild( routes )
  ],
  declarations: [MainComponent]
})
export class MainModule { }
