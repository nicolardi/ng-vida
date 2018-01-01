import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class MediaEventsService {

    play$ = new Subject();
    pause$ = new Subject();
    duration$ = new Subject();
    progress$ = new Subject<number>();

    constructor() { }

    notifyPlay() {
        this.play$.next();
    }

    notifyPause() {
        this.pause$.next();
    }

    notifyDuration(duration: number) {
       this.duration$.next(duration);
    }

    notifyProgress(currentTime: number) {
        this.progress$.next(currentTime);
    }

}