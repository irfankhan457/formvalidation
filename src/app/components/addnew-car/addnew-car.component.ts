import { Component, OnInit } from '@angular/core';
import { Car1 } from './../../domain/car1';
import { CarService } from '../../services/carservice';

@Component({
  selector: 'app-addnew-car',
  templateUrl: './addnew-car.component.html',
  styleUrls: ['./addnew-car.component.css']
})
export class AddnewCarComponent implements OnInit {
    dropdownList = [];
    selectedItems = [];
    dropdownSettings = {};
    cars;
    dis: boolean = false;
    enableYears: boolean = true;
    constructor(private carService: CarService) { 
      this.carService.getAllCars().subscribe(data => this.cars = data);
    }
    modelCar: Car1 = {vin: '', year: '', brand: '', color: '', price: '', country: []};
    results;
    onSubmit() {
      console.log(this.modelCar);
      this.carService.getCarsto(this.modelCar).map(data =>  this.results = data);
      console.log(this.results);
  }

  ngOnInit() {
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

      this.dropdownSettings = { 
        singleSelection: false, 
        text:"Select Countries",
        selectAllText:'Select All',
        unSelectAllText:'UnSelect All',
        enableSearchFilter: true,
        classes:"myclass custom-class"
      };       
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

    enableYear() {
        if(this.modelCar.vin.length >0) {
          this.enableYears = false;
        }
      
    }
 
}
