import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
@Component({
    selector: 'app-counter-action',
    template: `
        <p>Counter Action Component</p>
        <button (click)="increment()">Increment</button>
        <button (click)="decrement()">Decrement</button>
        <button (click)="reset()">Reset Counter</button>
    `
})
export class CounterActionComponent {

    constructor(private store: Store<number>) {}

    increment() {
        this.store.dispatch({ type: 'INCREASE' });
    }
    decrement() {
        this.store.dispatch({ type: 'DECREASE' });
    }
    reset() {
        this.store.dispatch({ type: 'RESET' });
    }
}
