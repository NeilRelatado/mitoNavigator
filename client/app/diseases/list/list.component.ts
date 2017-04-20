import { Component } from '@angular/core';
import { DiseasesService } from '../diseases.service';

@Component({
  selector: 'list',
  templateUrl: 'app/diseases/list/list.template.html'
})
export class ListComponent{
  diseases: any;
  errorMessage: string;
  constructor(private _diseasesService: DiseasesService){}

  ngOnInit() {
    this._diseasesService.list().subscribe(diseases => this.diseases = diseases);
  }
}
