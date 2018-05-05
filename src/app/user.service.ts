import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
  private userData;
  constructor() {}
  setUserData(data) {
    this.userData = data;
  }
  getUserData() {
    return this.userData;
  }
}
