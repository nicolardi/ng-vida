import {Component, OnChanges} from '@angular/core';
import {VideoService} from './video.service';

@Component({
    selector: 'vida-controller-bar',
    template: `
        <div style="display: flex;">
            paused: {{TESTpausedState}} - muted: {{TESTmutedState}}
        </div>
        <div style="display: flex; flex-direction: row;">
            <controller-paused></controller-paused>
            <controller-volume-bar></controller-volume-bar>
        </div>
    `,
    styles: [`        
    `]
})

export class ControllerBarComponent {
    TESTpausedState = this._video.getPausedState();
    TESTmutedState = this._video.getMutedState();

    constructor(private _video: VideoService) {
    }


}
