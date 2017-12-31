import {Component, EventEmitter, Output} from '@angular/core';

@Component({
    selector: 'controller-fullscreen',
    template: `
        <button (click)="toggleFullScreen()" class="fullscreen">FScreen</button>
    `,
    styles: [``]
})
export class ControllerFullScreen {
    @Output() fullScreen = new EventEmitter<boolean>();

    toggleFullScreen() {
        this.fullScreen.emit();
    }

}
