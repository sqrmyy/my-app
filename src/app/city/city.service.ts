import { Injectable } from '@angular/core';
import { City } from './city';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  cities: City[];

  constructor() {
    this.cities = [];
  }

  addCity(city: City): void {
    var id: number;
    id = this.cities.length + 1;

    /* idを設定 */
    city.id = id;

    /* 配列に追加 */
    this.cities.push(city);
  }

  getCities(): City[]{
    return this.cities;
  }
}
