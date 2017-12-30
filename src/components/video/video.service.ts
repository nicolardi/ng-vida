import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class VideoService {
    pausedState$ = new BehaviorSubject(true);
    mutedState$ = new BehaviorSubject(false);

    getPausedState() {
        return this.pausedState$.getValue();
    }

    play() {
        this.pausedState$.next(false);
    }

    pause() {
        this.pausedState$.next(true);
    }

    getMutedState() {
        return this.pausedState$.getValue();
    }

    mute() {
        this.mutedState$.next(true);
    }

    unmute() {
        this.mutedState$.next(false);
    }
}