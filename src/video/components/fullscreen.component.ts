import {Component} from '@angular/core';
import {FullScreenEventsService} from '../../events/fullscreen.events.service';

@Component({
    selector: 'vida-fullscreen',
    template: `
        <button (click)="enterFullScreen()"
                class="fullscreen">FScreen
        </button>
    `,
    styles: [``]
})
export class FullScreenComponent {
    state = false;

    constructor(private fullScreenEvents: FullScreenEventsService) {

    }

    enterFullScreen() {
        this.fullScreenEvents.enterFullScreen();
    }
}
