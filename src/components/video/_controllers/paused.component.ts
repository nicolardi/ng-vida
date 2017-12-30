import {Component} from '@angular/core';
import {VideoService} from '../video.service';

@Component({
    selector: 'controller-paused',
    template: `
        <button (click)="togglePausedState()"
                class="vida-control__button"
                [ngClass]="{'vida-control__play': !_video.getPausedState(), 'vida-control__pause': _video.getPausedState()}">
            X
        </button>
        <br>
    `,
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
export class ControllerPausedComponent {
    constructor(private _video: VideoService) {
    }

    togglePausedState() {
        (this._video.getPausedState()) ? this._video.play() : this._video.pause();
    }

}
