import {Component, Input, OnInit} from '@angular/core';
import {ButtonEventsService} from '../../events/button.events.service';
import {MediaEventsService} from '../../events/media.events.service';
import {NgVidaApiService} from '../../events/ng-vida.api.service';

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

export class PlayPauseComponent implements OnInit{
    @Input() group: string;     // Get Identifier group
    state = 'pause';

    constructor(private _ngVidaApi: NgVidaApiService,
                private buttonEvents: ButtonEventsService) {
    }

    ngOnInit() {
        let gr = this._ngVidaApi.getGroup(this.group);
        gr.onPlay$
            .subscribe(() => {
                this.state = 'play';
            });
            
        this._ngVidaApi.getGroup(this.group).onPause$
            .subscribe(() => {
                this.state = 'pause';
            });
    }

    toggle() {
        (this.state === 'pause') ? this.buttonEvents.notifyPlay(this.group) : this.buttonEvents.notifyPause(this.group);
    }
}
