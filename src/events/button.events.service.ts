import {Injectable} from '@angular/core';
import {NgVidaApiService} from './ng-vida.api.service';


@Injectable()
export class ButtonEventsService {

    constructor(private _ngVidaApi: NgVidaApiService) {
    }

    // getPlay$(group) {
    //     return this.getSubject(group).play;
    // }
    //
    // getPause$(group) {
    //     return this.getSubject(group).pause;
    // }

    notifyPlay(group: string) {
        console.log(this._ngVidaApi.getGroup(group));
        return this._ngVidaApi.getGroup(group).play$.next();
    }

    notifyPause(group: string) {
        return this._ngVidaApi.getGroup(group).pause$.next();
    }
}

