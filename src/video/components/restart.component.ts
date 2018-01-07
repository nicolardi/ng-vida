import {Component, Input} from '@angular/core';
import {RestartEventsService} from '../../events/restart.events.service';

@Component({
    selector: 'vida-restart',
    template: `
        <button (click)="resetCurrentTime()">restart</button>`,
    styles: [``]
})
export class RestartComponent {
    @Input() group: string;     // Get Identifier group
    constructor(private restartEvents: RestartEventsService) {
    }

    resetCurrentTime() {
        this.restartEvents.resetCurrentTime(this.group);
    }
}
