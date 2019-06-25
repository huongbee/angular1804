import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-counter',
    template: `
        <p>Counter Component</p>
        <p>Value = {{value | async }}</p>
    `
})
export class CounterComponent {
    // value: number;
    value: Observable<number>;

    constructor(private store: Store<number>) {
        // this.store.select('counter').subscribe(n => this.value = n);
        this.value = this.store.pipe(select('counter'));
    }
}
