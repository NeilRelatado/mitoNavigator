import { Routes } from '@angular/router';
import { DiseasesComponent} from './diseases.component';

import { ListComponent } from './list/list.component';

export const DiseasesRoutes:Routes = [{
  path: 'diseases',
  component: DiseasesComponent,
  children: [
    {path: '/diseases', component: ListComponent}
  ]
}];
