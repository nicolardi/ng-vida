import {Component} from '@angular/core';
import {ButtonEventsService} from '../../events/button.events.service';
import {MediaEventsService} from '../../events/media.events.service';

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
        mediaEvents.play$.subscribe(() => {
            this.state = 'play';
        });

        mediaEvents.pause$.subscribe(() => {
            this.state = 'pause';
        });
    }

    toggle() {
        (this.state === 'pause') ? this.buttonEvents.notifyPlay() : this.buttonEvents.notifyPause();
    }
}
