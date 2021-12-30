import { Injectable } from '@angular/core';
import { City } from './city';
import { HttpService } from '../HttpService';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  environment = {
    production: false,
    appId: 'a582103249cf3a8891c50e217432d85a',
    baseUrl: 'http://api.openweathermap.org/data/2.5/'
  };

  cities: City[];

  constructor(
    private service: HttpService
  ) {
    this.cities = [];
  }

  addCity(city: City): void {
    var id: number;
    id = this.cities.length + 1;

    /* idを設定 */
    city.id = id;

    /* OpenweathermapのAPIを呼び出す処理を追加 */
    //var result: any;
    var apiEndPoint: string = this.environment.baseUrl
    + 'weather?q=' + city.name
    + '&appid=' + this.environment.appId;

    this.service.getWeatheritemsbyCity(apiEndPoint)
    .subscribe(res => {
      var weather = res.weather[0].description;
      // 天気を設定して配列に追加
      city.weather = weather;
      this.cities.push(city);
    }, err => {
      console.log(err);
    }, () => {

    });
  }

  getCities(): City[]{
    return this.cities;
  }
}
