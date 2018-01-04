import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class VolumeBarEventsService {
    volumeLevel$ = new Subject();
    muted$ = new Subject();

    updateVolumeLevel(volume: number) {
        this.volumeLevel$.next(volume);
    }

    toggleMuted() {
        this.muted$.next();
    }
}