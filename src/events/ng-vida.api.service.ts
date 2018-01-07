import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';

export interface VideoPlayerState {
    play$: Subject<void>;
    pause$: Subject<void>;
    onPlay$: Subject<void>;
    onPause$: Subject<void>;
    restart$: Subject<void>;
    duration$: Subject<number>;
    timeUpdate$: Subject<number>;
    fullscreen$: Subject<void>,
    volumeLevel$: Subject<number>,
    muted$: Subject<void>
}

@Injectable()
export class NgVidaApiService {
    public subjects: Array<VideoPlayerState> = [];

    /** private methods */
    createGroup = (group: string) => {
        return this.subjects[group] = {
            play$: new Subject(),
            pause$: new Subject(),
            onPlay$: new Subject(),
            onPause$: new Subject(),
            restart$: new Subject(),
            duration$: new Subject<number>(),
            timeUpdate$: new Subject<number>(),
            fullscreen$: new Subject(),
            volumeLevel$: new Subject<number>(),
            muted$: new Subject<void>()
        };
    };

    hasGroup(group: string) {
        return !!this.subjects[group];
    }

    getGroup(group: string) {
        if (this.hasGroup(group)) {
            return this.subjects[group];
        } else {
            this.createGroup(group);
        }
    }
}