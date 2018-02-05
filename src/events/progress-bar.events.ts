import { NgVidaApiService } from './ng-vida.api.service';
import {Subject} from 'rxjs/Subject';

import {Injectable} from '@angular/core';

@Injectable()
export class ProgressBarEventsService {

    constructor(private _ngVidaApi: NgVidaApiService) {
    }

    getSeek$(group:string)
    {
       return this._ngVidaApi.getGroup(group).seek$;
    }

    seek(group:string, currentTime: number) {

        this._ngVidaApi.getGroup(group).seek$.next(currentTime);
    }

}