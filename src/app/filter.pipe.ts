import { Pipe, PipeTransform } from '@angular/core';
import { Car } from './../app/domain/car';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(value: Car[], args: string[]): Car[] {
    let filter : string  = args && args[0] ? args && args[0].toLocaleLowerCase() : null;
    return filter ? value.filter((car:Car) => 
    car.brand.toLocaleLowerCase().indexOf(filter) != -1): value;
  }
}
