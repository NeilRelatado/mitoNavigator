import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { DiseasesService } from '../diseases.service';


@Component({
  selector: 'edit',
  templateUrl: 'app/diseases/edit/edit.template.html'
})
export class EditComponent {
	disease: any = {};
	errorMessage: string;
	paramsObserver: any;

	constructor(private _router:Router, 
				private _route: ActivatedRoute, 
				private _diseasesService: DiseasesService) {}

	ngOnInit() {
		this.paramsObserver = this._route.params.subscribe(params => {
			let diseaseId = params['diseaseId'];

			this._diseasesService.read(diseaseId).subscribe(disease => {
																this.disease = disease;
													 		},
															error => this._router.navigate(['/diseases']));
		});
	}

	ngOnDestroy() {
		this.paramsObserver.unsubscribe();
	}
	
	update() {
		this._diseasesService.update(this.disease).subscribe(savedDisease => this._router.navigate(['/diseases', savedDisease._id]),
							 				  				 error =>  this.errorMessage = error);
	}
}