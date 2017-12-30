import {Component} from '@angular/core';
import {VideoService} from './video.service';

@Component({
    selector: 'vida-controller-bar',
    template: `
    paused: {{TESTpausedState}} - muted: {{TESTmutedState}}
        <div class="vida-control__bar">
            <button (click)="togglePausedState()"
                    class="vida-control__button"
                    [ngClass]="{'vida-control__play': !_video.getPausedState(), 'vida-control__pause': _video.getPausedState()}">
                X
            </button>
            <button (click)="toggleMutedState()">Volume</button>
        </div>`,
    styles: [`
        .vida-control__button {
            height: 25px;
            width: 25px;
        }

        .vida-control__play {
            background: green;
        }

        .vida-control__pause {
            background: red;
        }
    `]
})

export class ControllerBarComponent {
    TESTpausedState = this._video.getPausedState();
    TESTmutedState = this._video.getMutedState();

    constructor(private _video: VideoService) {
    }

    togglePausedState() {
        (this._video.getPausedState()) ? this._video.play() : this._video.pause();
    }

    toggleMutedState() {
        (this._video.getMutedState()) ? this._video.unmute() : this._video.mute();
    }
}
