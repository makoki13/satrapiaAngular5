import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TutorialComponent } from './tutorial.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: TutorialComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild( routes )
  ],
  declarations: [TutorialComponent]
})
export class TutorialModule { }
