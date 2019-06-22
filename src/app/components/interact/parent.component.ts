import { Component } from '@angular/core';

@Component({
    selector: 'app-parent',
    template: `
        <h2>Parent Component</h2>
        <b>{{txtAge}}</b>
        <p>{{value}}</p>
        <app-child
        [nameFromParent]="name"
        (sendToParent)="getData($event)"
        [number]="value"
        (numberOutput)="getNumber($event)"
        ></app-child>
    `
})
export class ParentComponent {
    name = 'Admin';
    txtAge: number;

    value = 1;

    getData(data: number) {
        this.txtAge = data;
    }
    getNumber(value: number) {
        this.value = value;
    }
}
