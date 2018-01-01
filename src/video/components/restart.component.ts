import {Component, EventEmitter, Output} from '@angular/core';

@Component({
    selector: 'controller-restart',
    template: `<button (click)="restartVideo()">restart</button>`,
    styles: [``]
})
export class ControllerRestartComponent {
    @Output() restart = new EventEmitter<boolean>();

    restartVideo() {
        this.restart.emit(true);
    }
}
