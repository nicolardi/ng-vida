import { MediaEventsService } from './../../events/media.events.service';

import { Component, OnInit, Input } from '@angular/core';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
    selector: 'vida-progress-bar',
    template: `
      <input type="range" class="progress-bar" (input)="change($event)" max="{{max}}">
    `
})

export class ProgressBarComponent implements OnInit, OnDestroy {
   
     constructor( private mediaEvents: MediaEventsService) {
        mediaEvents.duration$.subscribe((duration: number) =>  {
            
            this.max = duration;
        });
    }

    ngOnDestroy() {
        this.mediaEvents.duration$.unsubscribe();
    }
   
    @Input() max = 100;

    change(event) {
        
       console.log("change: ",event.target.value);
    }
    ngOnInit() { }
}