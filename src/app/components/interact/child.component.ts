import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-child',
    template: `
        <h2>Child Component</h2>
        {{nameFromParent}}
        <br>
        <button (click)="send()">Send</button>
        <br>

        <button>Increase</button>
        <button>Decrease</button>
    `
})
export class ChildComponent {
    @Input() nameFromParent: string;
    @Output() sendToParent = new EventEmitter();
    age = 10;

    send() {
        this.sendToParent.emit(this.age);
    }

}
