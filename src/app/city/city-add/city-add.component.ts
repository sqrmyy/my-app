import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { City } from '../city';
import { CityService } from '../city.service';

@Component({
  selector: 'app-city-add',
  templateUrl: './city-add.component.html',
  styleUrls: ['./city-add.component.css']
})
export class CityAddComponent implements OnInit {

  constructor(
    private router: Router,
    private service: CityService
  ) { }

  ngOnInit() {
  }

  onSubmit(form: any): void {
    // フォームの値を取得
    let name = form.name;
    // Cityクラスのインスタンスを生成して名前を指定
    var city: City = new City;
    city.name = name;
    // 天気はとりあえず'-'を設定
    city.weather = '';

    // サービスの都市登録メソッドに渡す
    this.service.addCity(city);

    // ダッシュボードに遷移
    this.router.navigate(['dashboard']);
  }

}
