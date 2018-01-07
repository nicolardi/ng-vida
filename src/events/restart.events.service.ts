import {Injectable} from '@angular/core';
import {NgVidaApiService} from './ng-vida.api.service';

@Injectable()
export class RestartEventsService {

    constructor(private _ngVidaApi: NgVidaApiService) {
    }

    resetCurrentTime(group: string) {
        return this._ngVidaApi.getGroup(group).restart$.next();
        }
}