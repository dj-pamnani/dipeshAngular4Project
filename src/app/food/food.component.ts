import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css']
})
export class FoodComponent implements OnInit {
  name: String = '';
  constructor(private route: ActivatedRoute) {
    console.log(this.route.snapshot.params);
  }

  ngOnInit() {
    // this.name = this.route.snapshot.params.foodName;
  }

}
