import { EventEmitter, Injectable } from '@angular/core';
import { CounterService } from './counter-service';

@Injectable()
export class UserService {
    activeUsers = ['Max', 'Anna'];
    inactiveUsers = ['Chris', 'Manu'];
    countAi = 0;
    countIa = 0;

    constructor(private counterService: CounterService) {}

    setToInactive(id: number) {
        this.countAi++;
        this.inactiveUsers.push(this.activeUsers[id]);
        this.activeUsers.splice(id, 1);
        this.counterService.activeToInactiveUser(this.countAi);
    }
    setToActive(id: number) {
        this.countIa++;
        this.activeUsers.push(this.inactiveUsers[id]);
        this.inactiveUsers.splice(id, 1);
        this.counterService.inactiveToActiveUser(this.countIa);
      }
}
