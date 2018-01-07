import {Injectable} from '@angular/core';
import {NgVidaApiService} from './ng-vida.api.service';

@Injectable()
export class VolumeBarEventsService {
    constructor(private _ngVidaApi: NgVidaApiService) {
    }

    updateVolumeLevel(group: string, volume: number) {
        return this._ngVidaApi.getGroup(group).volumeLevel$.next(volume);
    }

    toggleMuted(group: string) {
        return this._ngVidaApi.getGroup(group).muted$.next();
    }
}