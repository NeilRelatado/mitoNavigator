import {Component} from '@angular/core';
import {Router} from '@angular/router';

import {DiseasesService} from '../diseases.service';

@Component({
  selector: 'create',
  templateUrl: 'app/diseases/create/create.template.html'
})
export class CreateComponent {
	disease: any = {};
	errorMessage: string;

	constructor(private _router:Router,
				private _diseasesService: DiseasesService) {}

	create() {
		this._diseasesService.create(this.disease).subscribe(createdDisease => this._router.navigate(['/diseases', createdDisease._id]),
							 				  				 error =>  this.errorMessage = error);
	}
}