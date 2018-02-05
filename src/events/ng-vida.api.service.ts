import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';


@Injectable()
export class NgVidaApiService {
    public subjects: Array<VideoPlayerState> = [];

    /** private methods */
    createGroup(group: string) {

        if (!group || group === '') {
            group = "vida-default";
        }
       
        return this.subjects[group] = {
            'group': group,
            play$: new Subject(),
            pause$: new Subject(),
            onPlay$: new Subject(),
            onPause$: new Subject(),
            restart$: new Subject(),
            duration$: new Subject<number>(),
            timeUpdate$: new Subject<number>(),
            fullscreen$: new Subject(),
            volumeLevel$: new Subject<number>(),
            muted$: new Subject<void>(),
            seek$: new Subject<number>()
        };
    };

    hasGroup(group: string) {
        return this.subjects[group];
    }

    getGroup(group: string) {
        if (this.hasGroup(group)) {
            return this.subjects[group];
        } else {
            return this.createGroup(group);
        }
    }
}

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
