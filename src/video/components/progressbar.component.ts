
import {Component, OnInit, Input, OnDestroy} from '@angular/core';
import {MediaEventsService} from '../../events/media.events.service';

@Component({
    selector: 'vida-progress-bar',
    template: `
        <input type="range" class="progress-bar"
               (input)="change($event)"
               max="{{max}}">
    `
})

export class ProgressBarComponent implements OnInit, OnDestroy {
    @Input() max: number = 100;

    constructor(private mediaEvents: MediaEventsService) {
        mediaEvents.duration$.subscribe((duration: number) => {

            this.max = duration;
        });
    }

    ngOnDestroy() {
        this.mediaEvents.duration$.unsubscribe();
    }


    change(event: any) {
        console.log("change: ", event.target.value);
    }

    ngOnInit() {
    }
}