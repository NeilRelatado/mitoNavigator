import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { DiseasesRoutes } from './diseases.routes';
import { DiseasesComponent } from './diseases.component';
import { ListComponent } from './list/list.component';

@NgModule({
  imports:[
    CommonModule,
    FormsModule,
    RouterModule.forChild(DiseasesRoutes)
  ],
  declarations: [
    DiseasesComponent,
    ListComponent
  ]
})
export class DiseasesModule {}
