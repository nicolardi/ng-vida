import { NgVidaApiService } from './ng-vida.api.service';
import { Injectable, Input } from '@angular/core';

@Injectable()
export class FullScreenEventsService {
    @Input()
    group : string;
    constructor(private _ngVidaApi: NgVidaApiService) {
    }

    enterFullScreen(group: string) {
        this._ngVidaApi.getGroup(group).fullscreen$.next();
    }
}