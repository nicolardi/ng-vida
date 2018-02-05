import { NgVidaApiService } from './../../events/ng-vida.api.service';
import { RestartEventsService } from './../../events/restart.events.service';
import { Component, Input } from '@angular/core';


@Component({
    selector: 'vida-restart',
    template: `
        <button (click)="resetCurrentTime()">restart</button>`,
    styles: [``]
})
export class RestartComponent {
    @Input() group: string;     // Get Identifier group
    constructor(private restartEvents: RestartEventsService, private _ngVida : NgVidaApiService) {
    }

    resetCurrentTime() {
        this.restartEvents.resetCurrentTime(this.group);
    }

    
}
