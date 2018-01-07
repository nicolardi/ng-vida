import {Component, Input} from '@angular/core';
import {FullScreenEventsService} from '../../events/fullscreen.events.service';

@Component({
    selector: 'vida-fullscreen',
    template: `
        <button (click)="enableFullScreen()"
                class="fullscreen">FScreen
        </button>
    `,
    styles: [``]
})
export class FullScreenComponent {
    @Input() group: string;     // Get Identifier group
    state = false;

    constructor(private fullScreenEvents: FullScreenEventsService) {
    }

    enableFullScreen() {
        this.fullScreenEvents.enterFullScreen(this.group);
    }
}
