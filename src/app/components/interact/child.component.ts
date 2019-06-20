import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-child',
    template: `
        <h2>Child Component</h2>
        {{nameFromParent}}
    `
})
export class ChildComponent {
    @Input() nameFromParent: string;

}
