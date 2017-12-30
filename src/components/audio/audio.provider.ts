
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class AudioProvider {

    play$ = new Subject;
    pause$ = new Subject;

    audioChangeState$ = new Subject();

    constructor() {

    }

    play() {
        console.log('play!');
        this.play$.next();
    }

    pause() {
        console.log('pause!');
        this.pause$.next();
    }

    notifyAudioState(state)
    {
        this.audioChangeState$.next(state);
    }


}