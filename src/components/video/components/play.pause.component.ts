import { MediaEventsService } from './../../events/media.events.service';
import { ButtonEventsService } from './../../events/button.events.service';
import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
    selector: 'vida-play-pause-button',
    template: `
        <button *ngIf="state === 'pause'" (click)="toggle()">
           play
        </button>

        <button *ngIf="state === 'play'" (click)="toggle()">
           pause
        </button>
    `,
    styles: [`
    `]
})

export class PlayPauseComponent {

    state = 'pause';
    constructor(private buttonEvents: ButtonEventsService, private mediaEvents: MediaEventsService) {
        mediaEvents.play$.subscribe( () => {
            this.state = 'play';
        });

        mediaEvents.pause$.subscribe(() => {
            this.state = 'pause';
        });
    }

    toggle() {
        if (this.state === 'pause') {
           this.buttonEvents.notifyPlay();
        }

        if (this.state === 'play') {
            this.buttonEvents.notifyPause();
         }
    }
}
