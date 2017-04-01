import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { DiseasesRoutes } from './diseases.routes';
import { DiseasesComponent } from './diseases.component';

//import { CreateComponent } from './create/create.component';

import { ListComponent } from './list/list.component';

//import { ViewComponent } from './view/view.component';
//import { EditComponent } from './edit/edit.component';


@NgModule({
  imports:[
    CommonModule,
    FormsModule,
    RouterModule.forChild(DiseasesRoutes)
  ],
  declarations: [
    DiseasesComponent,
    //CreateComponent,
    //ViewComponent,
    //EditComponent,
    ListComponent
  ]
})
export class DiseasesModule {}
