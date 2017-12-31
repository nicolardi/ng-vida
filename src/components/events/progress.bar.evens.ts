import { Subject } from 'rxjs/Subject';

import { Injectable } from '@angular/core';
import { MediaEventsService } from 'app/components/events/media.events.service';

@Injectable()
export class ProgressBarEventsService {

    seek$ = new Subject<number>();

    constructor() {
     }

     
    seek( currentTime: number ) {
        this.seek$.next(currentTime);
    }

}