import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class FullScreenEventsService {
    fullScreen$ = new Subject();

    enterFullScreen() {
        this.fullScreen$.next();
    }

}