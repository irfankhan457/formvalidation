import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Car } from '../domain/car';
import 'rxjs/add/operator/toPromise';
import { Http, Response, Headers, URLSearchParams, RequestOptions  } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class CarService {

    url = "api/cars";
    constructor(private http: HttpClient,
                private _http: Http) {}

    getCarsto(car: Car): Observable<any>{
        return this._http.post('http://localhost:8080/api/cars/list',  JSON.stringify(car));
    }
    
    getCarsSmall() {
        return this.http.get<any>('assets/data/cars-small.json')
            .toPromise()
            .then(res => <Car[]> res.data)
            .then(data => data);
    }

    getAllCars() {
        return this._http.get(`http://localhost:8080/api/cars`)
        .map((res:Response) => res.json());
      }

      getCarsByBrand(brand: string): Observable<Car[]> {
        console.log(brand);
        const urli = `http://localhost:8080/api/findbybrand/${brand}`;
       
        return this._http.get(urli)
          .map((res:Response) => res.json());
      }

      getCarById(carId: string): Observable<Car[]> {
        let myHeaders = new Headers({ 'Content-Type': 'application/json' });
        //myHeaders.append('Content-Type', 'application/json');    
        let myParams = new URLSearchParams();
       // myParams.append('id', carId);	
        myParams.set('articleid', carId);
        let options = new RequestOptions({ headers: myHeaders, params: myParams });
        return this._http.get(this.url, options)
        .map(success => success.status)
        .catch(this.handleError);
    } 

    private extractData(res: Response) {
        let body = res.json();
            return body;
        }
    private handleError (error: Response | any) {
    console.error(error.message || error);
    return Observable.throw(error.message || error);
    }

    createService(url: string, param: any){

    }

   
   
}
