import { Component, OnInit } from '@angular/core';
import { UserService} from '../user.service';
@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  assignData;

  constructor(public user: UserService) { 
    
  }
  ngOnInit() {
  //  var assignData;
  
  }
  getData(){
    this.assignData = this.user.getUserData().name;
    console.log(this.assignData);
  }
}
