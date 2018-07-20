import { EventEmitter } from '@angular/core';

export class CounterService {
    activeToInactiveCount = [];
    inactiveToActiveCount = [];

    constructor( ) {}

    activeToInactiveUser(count) {
        // console.log(count);
        this.activeToInactiveCount.push(count);
        // console.log(this.activeToInactiveCount);
    }
    inactiveToActiveUser(count) {
        // console.log(count);
        this.inactiveToActiveCount.push(count);
    }
}
