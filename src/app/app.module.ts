import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { SelectFoodComponent } from './select-food/select-food.component';
import { BlueColorDirective } from './blue-color.directive';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserService } from './user.service';
import { AuthenticateGuard } from './authenticate.guard';
import { FoodComponent } from './food/food.component';
import { ErrorComponent } from './error/error.component';
import { FoodDashboardComponent } from './select-food/food-dashboard/food-dashboard.component';

const appRoutes: Routes = [
  {
    path: '',
    component: SelectFoodComponent
  },
  {
    path: 'select-food',
    component: SelectFoodComponent
  },
  {
    path: 'food-dashboard',
    component: FoodDashboardComponent
  },
  {
    path: 'select-food',
    pathMatch: 'prefix',
    // component: FoodComponent,
    children: [{
      path: ':foodName',
      component: FoodComponent
    }]
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthenticateGuard]
  },
  {
    path: '**',
    component: ErrorComponent
  }

];

@NgModule({
  declarations: [
    AppComponent,
    SelectFoodComponent,
    BlueColorDirective,
    DashboardComponent,
    FoodComponent,
    ErrorComponent,
    FoodDashboardComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [UserService, AuthenticateGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
