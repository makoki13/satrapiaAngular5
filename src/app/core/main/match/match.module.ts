import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatchComponent } from './match.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: MatchComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild( routes )
  ],
  declarations: [MatchComponent]
})
export class MatchModule { }
