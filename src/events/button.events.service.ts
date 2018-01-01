import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class ButtonEventsService {

    play$ = new Subject();
    pause$ = new Subject();

    constructor() {
    }

    notifyPlay() {
        this.play$.next();
    }

    notifyPause() {
        this.pause$.next();
    }
}

