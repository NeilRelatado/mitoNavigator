import { Component } from '@angular/core';
import { DiseasesService } from './diseases.service';

@Component({
  selector: 'diseases-app',
  template: '<router-outlet></router-outlet>',
  providers: [DiseasesService]
})
export class DiseasesComponent {}
