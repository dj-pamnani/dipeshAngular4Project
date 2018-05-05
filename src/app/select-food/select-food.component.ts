import { Component, ViewChild, OnInit } from '@angular/core';

@Component({
  selector: 'select-food',
  templateUrl: './select-food.component.html',
  styleUrls: ['./select-food.component.css']
})
export class SelectFoodComponent implements OnInit {

  @ViewChild('foodName') food;
  foodTyp = "chinese";
  constructor() { }

  ngOnInit() {
    // setInterval(() => {
    //   this.getFoodName();
    // }, 1000);
  }
  getFoodName() {
    let data= this.food.nativeElement.value;
    console.log(data);
  }
  getFoodDashData(ev) {
    console.log('ev', ev);
  }

}
