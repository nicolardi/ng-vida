import { NgVidaApiService } from '../../events/ng-vida.api.service';
import { ProgressBarEventsService } from '../../events/progress-bar.events';
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
    @Input() group: string; 
    
     currentTime: number = 0;

     constructor(private _ngVidaApi: NgVidaApiService, private mediaEvents: MediaEventsService, private progressBarEvents: ProgressBarEventsService) {
     }



    ngOnDestroy() {
        // this.mediaEvents.duration$.unsubscribe();
    }


    change(event: any) {
         this.progressBarEvents.seek(this.group, event.target.value);
    }

    ngOnInit() {
        this.mediaEvents.getDuration$(this.group).subscribe((duration: number) => {
                    this.max = duration;
                });
           
                this.mediaEvents.getTimeUpdate$(this.group).subscribe(( currentTime : number) => {
                    this.currentTime = currentTime;
                } );

    }
}