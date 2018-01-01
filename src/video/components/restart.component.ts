import {Component} from '@angular/core';
import {RestartEventsService} from '../../events/restart.events.service';

@Component({
    selector: 'vida-restart',
    template: `
        <button (click)="resetCurrentTime()">restart</button>`,
    styles: [``]
})
export class RestartComponent {
    constructor(private restartEvents: RestartEventsService) {
    }

    resetCurrentTime() {
        this.restartEvents.resetCurrentTime();
    }
}
