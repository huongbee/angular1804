import { Component } from '@angular/core';
@Component({
    selector: 'app-counter',
    template: `
        <p>Counter Component</p>
        <p>Value = {{value}}</p>
    `
})
export class CounterComponent {
    value: number;
}
