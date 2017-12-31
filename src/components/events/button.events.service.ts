import { Subject } from 'rxjs/Subject';

import { Injectable } from '@angular/core';

@Injectable()
export class ButtonEventsService {

    play$ = new Subject();
    pause$ = new Subject();

    constructor() { }

    notifyPlay()
    {
        this.play$.next();
    }

    notifyPause() {
        this.pause$.next();
    }
}

