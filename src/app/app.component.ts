import {Component, OnInit} from '@angular/core';
//import { Country } from './domain/Country';
import { Car } from './domain/car';
import { Car1 } from './domain/car1';
import { CarService} from './services/carservice';
import { FilterPipe } from './filter.pipe';
//import { IMultiSelectOption } from 'angular-2-dropdown-multiselect';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [CarService],
    //Pipes:[FilterPipe]
})
export class AppComponent implements OnInit{

   // optionsModel: number[];
   // myOptions: IMultiSelectOption[];

   // selectedCountry:Country = new Country(2, 'India');
  //countries = [
  //   new Country(1, 'USA' ),
  //   new Country(2, 'India' ),
   //  new Country(3, 'Australia' ),
   //  new Country(4, 'Brazil')
  //];
    
    displayDialog: boolean;
    
    car: Car = new PrimeCar();
    
    selectedCar: Car;
    
    newCar: boolean;
    
    cars: Car[];

    cols: any[];

    profile = {};

    cVin:boolean = true;
   // brand: string;

// MULTI SELECT DROP DOWN WITH CHECKBOXES
   dropdownList = [];
   selectedItems = [];
   dropdownSettings = {};
// MULTI SELECT DROP DOWN WITH CHECKBOXES










    car1 : Car= {vin: '', year: '', brand: '', color: '', price: '', country: []};
    
    constructor(private carService: CarService) { }

    callVin() {
        if(this.car1.vin.length > 0) {
            console.log(this.cVin);
            this.cVin = false;
        }
    }
    
    
    ngOnInit() {
        this.carService.getAllCars().subscribe(data => this.cars = data);
        this.cols = [
            { field: 'vin', header: 'Vin' },
            { field: 'year', header: 'Year' },
            { field: 'brand', header: 'Brand' },
            { field: 'color', header: 'Color' }
        ];

        // MULTI SELECT DROP DOWN WITH CHECKBOXES
            this.dropdownList = [
            {"id":1,"itemName":"India"},
            {"id":2,"itemName":"Singapore"},
            {"id":3,"itemName":"Australia"},
            {"id":4,"itemName":"Canada"},
            {"id":5,"itemName":"South Korea"},
            {"id":6,"itemName":"Germany"},
            {"id":7,"itemName":"France"},
            {"id":8,"itemName":"Russia"},
            {"id":9,"itemName":"Italy"},
            {"id":10,"itemName":"Sweden"}
          ];
      //        this.selectedItems = [
      //        {"id":2,"itemName":"Singapore"},
      //        {"id":3,"itemName":"Australia"},
      //        {"id":4,"itemName":"Canada"},
      //       {"id":5,"itemName":"South Korea"}
      //    ];
                this.dropdownSettings = { 
                singleSelection: false, 
                text:"Select Countries",
                selectAllText:'Select All',
                unSelectAllText:'UnSelect All',
                enableSearchFilter: true,
                classes:"myclass custom-class"
              };       
        // MULTI SELECT DROP DOWN WITH CHECKBOXES
    }

    loadCars() {
        this.carService.getAllCars().subscribe(data => this.profile = data);
      }
    
    showDialogToAdd() {
        this.newCar = true;
        this.car = new PrimeCar();
        this.displayDialog = true;
    }
    
    save() {
        const cars = [...this.cars];
        if (this.newCar) {
            cars.push(this.car);
        } else {
            cars[this.findSelectedCarIndex()] = this.car;
        }
        this.cars = cars;
        this.car = null;
        this.displayDialog = false;
    }
    
    delete() {
        const index = this.findSelectedCarIndex();
        this.cars = this.cars.filter((val, i) => i != index);
        this.car = null;
        this.displayDialog = false;
    }
    
    onRowSelect(event) {
        this.newCar = false;
        this.car = this.cloneCar(event.data);
        this.displayDialog = true;
    }
    
    cloneCar(c: Car): Car {
        const car = new PrimeCar();
        for (const prop in c) {
            car[prop] = c[prop];
        }
        return car;
    }
    
    findSelectedCarIndex(): number {
        return this.cars.indexOf(this.selectedCar);
    }

    private searchCustomers() {
        
      }
    
      onSubmit() {
          console.log(this.car1);
        //this.carService.getCarsByBrand(this.car1.brand).map(data => this.cars = data);
        this.carService.getCarsto(this.car1).map(data =>  this.cars = data);
      }


      onItemSelect(item: any) {
        console.log(item);
        console.log(this.selectedItems);
    }
    OnItemDeSelect(item: any) {
        console.log(item);
        console.log(this.selectedItems);
    }
    onSelectAll(items: any) {
        console.log(items);
    }
    onDeSelectAll(items: any) {
        console.log(items);
    }

   
}

export class PrimeCar implements Car {
    
    constructor(public vin?, public year?, public brand?, public color?) {}
}
