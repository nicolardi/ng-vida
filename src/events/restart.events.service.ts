import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class RestartEventsService {
    restart$ = new Subject();

    resetCurrentTime() {
        this.restart$.next();
    }
}