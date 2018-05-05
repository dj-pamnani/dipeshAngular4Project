import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'food-dashboard',
  templateUrl: './food-dashboard.component.html',
  styleUrls: ['./food-dashboard.component.css']
})
export class FoodDashboardComponent implements OnInit {
  @Input() foodType;
  @Output() myOutputData = new EventEmitter();
  foodData='my child data';
  dashFoodType
  constructor() {
    this.myOutputData.emit(this.foodData);
  }

  ngOnInit() {
     this.dashFoodType = this.foodType;
    console.log(this.dashFoodType);
  }

}
