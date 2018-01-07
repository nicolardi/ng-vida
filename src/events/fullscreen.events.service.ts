import {Injectable} from '@angular/core';
import {NgVidaApiService} from './ng-vida.api.service';

@Injectable()
export class FullScreenEventsService {

    constructor(private _ngVidaApi: NgVidaApiService) {
    }

    enterFullScreen(group: string) {
        this._ngVidaApi.getGroup(group).fullscreen$.next();
    }
}