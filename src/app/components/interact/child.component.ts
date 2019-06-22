import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-child',
    template: `
        <h2>Child Component</h2>
        {{nameFromParent}}
        <br>
        <button (click)="send()">Send</button>
        <br>
        <button (click)="increase()">Increase</button>
        <button (click)="decrease()">Decrease</button>
    `
})
export class ChildComponent {
    @Input() nameFromParent: string;
    @Output() sendToParent = new EventEmitter();
    age = 10;

    @Input() number: number;
    @Output() numberOutput = new EventEmitter();

    send() {
        this.sendToParent.emit(this.age);
    }
    increase() {
        this.numberOutput.emit(this.number + 1);
    }
    decrease() {
        this.numberOutput.emit(this.number - 1);
    }

}
