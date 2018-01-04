import { ProgressBarEventsService } from './../../events/progress.bar.events';
import { MediaEventsService } from './../../events/media.events.service';
import {Component, OnInit, Input, OnDestroy} from '@angular/core';


@Component({
    selector: 'vida-progress-bar',
    template: `
        <input type="range" class="progress-bar"
               (input)="change($event)"
               [value]='currentTime'
               max="{{max}}"
               min="0"
               >
    `
})

export class ProgressBarComponent implements OnInit, OnDestroy {
    @Input() max: number = 100;
   
    currentTime: number = 0;
    constructor(private mediaEvents: MediaEventsService, private progressBarEvents: ProgressBarEventsService) {
        mediaEvents.duration$.subscribe((duration: number) => {

            this.max = duration;
        });

        mediaEvents.timeUpdate$.subscribe(( currentTime ) => {
            //console.log("current time sent by video",currentTime);
            this.currentTime = currentTime;
        } );
    }



    ngOnDestroy() {
        this.mediaEvents.duration$.unsubscribe();
    }


    change(event: any) {
        this.progressBarEvents.seek(event.target.value);
    }

    ngOnInit() {
    }
}