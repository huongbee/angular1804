import { Component } from '@angular/core';
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

}
