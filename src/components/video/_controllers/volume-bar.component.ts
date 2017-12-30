import {Component} from '@angular/core';
import {VideoService} from '../video.service';

@Component({
    selector: 'controller-volume-bar',
    template: `        
        <button (click)="toggleMutedState()">Volume</button>
    `,
    styles: [`
        .vida-volume__bar {
            background: bisque;
            position: relative;
            height: 100px;
            width: 10px;
        }

        .vida-volume__dot {
            background: green;
            position: absolute;
            height: 5px;
            width: 5px;
        }
    `]
})
export class ControllerVolumeBarComponent {
    constructor(private _video: VideoService) {
    }

    toggleMutedState() {
        (this._video.getMutedState()) ? this._video.unmute() : this._video.mute();
    }
}
