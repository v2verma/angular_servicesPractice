import { Component, OnInit, Output } from '@angular/core';

import { UserService } from './user-service';
import { CounterService } from './counter-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {

  activeUsers: string[] = [];
  inactiveUsers: string[] = [];
  activeToInactive: number[] = [];
  inactiveToActive: number[] = [];

  constructor( private userService: UserService, private counterService: CounterService) {}

  ngOnInit() {
    this.activeUsers = this.userService.activeUsers;
    this.inactiveUsers = this.userService.inactiveUsers;
    this.activeToInactive = this.counterService.activeToInactiveCount;
    this.inactiveToActive = this.counterService.inactiveToActiveCount;
  }

}
