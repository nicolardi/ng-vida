import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {NgVidaApiService} from './ng-vida.api.service';

@Injectable()
export class MediaEventsService {
    constructor(private _ngVidaApi: NgVidaApiService) {
    }


    // getPlay$(group: string) {
    //     return this._ngVidaApi.getSubject(group).play$.next();
    // }
    //
    // getPause$(group: string) {
    //     return this._ngVidaApi.getSubject(group).pause$.next();
    // }

    getDuration$(group: string) {
        return this._ngVidaApi.getGroup(group).duration$;
    }

    getTimeUpdate$(group: string) {
       let g = this._ngVidaApi.getGroup(group);
        return g.timeUpdate$;
    }


    notifyPlay(group: string) {
        let gr = this._ngVidaApi.getGroup(group); 
        
        gr.onPlay$.next();
    }

    notifyPause(group: string) {
        this._ngVidaApi.getGroup(group).onPause$.next();
    }

    notifyDuration(group: string, duration: number) {
        
         this._ngVidaApi.getGroup(group).duration$.next(duration);
     }
    
     notifyTimeUpdate(group: string, currentTime: number) {
         this._ngVidaApi.getGroup(group).timeUpdate$.next(currentTime);
     }
}