import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';
import { UserService} from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Dipesh app works!';
  counter = 0;
  result = 2;
  resultString= '';
  isVisible = true;
  data = [
       {name: "html", type: "frontend"},
       {name: "css", type: "frontend"},
       {name: "angular", type: "frontend"},
       {name: "java", type: "backend"}
    ];
    constructor(public user:UserService) {
      var uniqueCount = ["a","b","c","d","d","e","a","b","c","f","g","h","h","h","e","a"];
      var  count = {};
      uniqueCount.forEach(function(i) {
          console.log('i->',i,'count[i]->',count[i],'count[i]||0-->',count[i]||0)
         count[i] = (count[i]||0) + 1;
          console.log('count[i]-->',count[i],'count-->',count);
        }
        
        );
         
      console.log(count);
    };
    myKeydownFunct(event) {
      console.log(event);
      this.resultString +=event.target.value;
    }
    saveUserData() {
      let userData = {
        name: 'Dipesh',
        lastName: 'Pamnani',
        flag: 'true'
      };
      console.log("user data clicked")
      this.user.setUserData(userData);
    }
}
