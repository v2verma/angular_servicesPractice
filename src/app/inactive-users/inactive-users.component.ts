import { Component, EventEmitter, Input, Output } from '@angular/core';

import { UserService } from '../user-service';
import { CounterService } from '../counter-service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent {
  @Input() users: string[];
  activeCount = 0;

  constructor( private userService: UserService, private counterService: CounterService) {
    // this.userService.statusUpdatedActive.subscribe(
    //   (x) => alert('Active user' + x )
    // );
  }

  onSetToActive(id: number) {
    // this.activeCount++;
    // this.userService.statusUpdatedInActive.emit(this.activeCount);
    this.userService.setToActive(id);
  }
}
