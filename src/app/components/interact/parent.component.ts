import { Component } from '@angular/core';

@Component({
    selector: 'app-parent',
    template: `
        <h2>Parent Component</h2>
        <app-child [nameFromParent]="name"></app-child>
    `
})
export class ParentComponent {
    name = 'Admin';
}
