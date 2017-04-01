import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../../authentication/authentication.service';
import { DiseasesService } from '../diseases.service';

@Component({
  selector: 'view',
  templateUrl: 'app/diseases/view/view.template.html',
})
export class ViewComponent {
	user: any;
	disease: any;
	routingObserver: any;
	errorMessage: string;
	allowEdit: boolean = false;

	constructor(private _router:Router, 
				private _route: ActivatedRoute, 
				private _authenticationService: AuthenticationService, 
				private _diseasesService: DiseasesService) {}

	ngOnInit() {
		this.user = this._authenticationService.user

		this.routingObserver = this._route.params.subscribe(params => {
			let diseaseId = params['diseaseId'];

			this._diseasesService
				.read(diseaseId)
				.subscribe(
					disease => {
						this.disease = disease;
						this.allowEdit = (this.user && this.user._id === this.disease.creator._id);
		 			},
					error => this._router.navigate(['/diseases'])
				);
		});
	}

	ngOnDestroy() {
		this.routingObserver.unsubscribe();
	}

	delete() {
		this._diseasesService.delete(this.disease._id).subscribe(deletedArticle => this._router.navigate(['/diseases']),
																 error => this.errorMessage = error);
	}
}