import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Http, Headers, Request, RequestMethod, Response } from '@angular/http';

@Injectable()
export class DiseasesService {
  private _baseURL = '/diseases';
  constructor(private _http: Http) {
  }

  // create(diseases: any): Observable<any> {
	// 	return this._http
	// 		.post(this._baseURL, diseases)
	// 		.map((res: Response) => res.json())
	// 		.catch(this.handleError);
  // 	}
	
	// read(diseasesId: string): Observable<any> {
	// 	return this._http
	// 		.get(`${this._baseURL}/${diseasesId}`)
	// 		.map((res: Response) => res.json())
	// 		.catch(this.handleError);
	// }

	// update(diseases: any): Observable<any> {
	// 	return this._http
	// 		.put(`${this._baseURL}/${diseases._id}`, diseases)
	// 		.map((res: Response) => res.json())
	// 		.catch(this.handleError);
  // 	}

	// delete(diseasesId: any): Observable<any> {
	// 	return this._http
	// 		.delete(`${this._baseURL}/${diseasesId}`)
	// 		.map((res: Response) => res.json())
	// 		.catch(this.handleError);
	// }	

  list() :Observable<any> {
    return this._http
    .get(this._baseURL)
    .map((res: Response) => res.json())
    .catch(this.handleError);
  }

  private handleError(error: Response) {
    return Observable.throw(error.json().message || 'Server Error');
  }

}
