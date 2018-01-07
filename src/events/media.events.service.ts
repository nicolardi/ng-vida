import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class MediaEventsService {

    private subjects = {};

    constructor() { }


    getPlay$(group: string)
    {
        return this.getSubject(group).play.next();
    }
    
    getPause$(group: string)
    {
        return this.getSubject(group).pause.next();
    }
    
    getDuration$(group: string)
    {
        return this.getSubject(group).duration.next();
    }

    getTimeUpdate$(group: string)
    {
        return this.getSubject(group).timeDuration.next();
    }


    notifyPlay(group: string) {
        this.getSubject(group).play.next();
    }

    notifyPause(group: string) {
        this.getSubject(group).pause.next();
    }

    notifyDuration(group: string, duration: number) {
       this.getSubject(group).duration.next(duration);
    }

    notifyTimeUpdate(group: string, currentTime: number) {
        this.getSubject(group).timeUpdate.next(currentTime);
    }


    /** private methods */
    private getSubject(group: string)
    {
        if (this.hasSubject(group)) {
            return this.subjects[group];
        } else 
        {
            this.subjects[group] = this.createSubjects(group); 
        }
    }

    private createSubjects(group: string)
    {
        return {
            play: new Subject(),
            pause: new Subject(),
            duration: new Subject(),
            timeUpdate: new Subject<number>()

        };
    } 

    private hasSubject(group: string)
    {
        return this.subjects[group]?true:false;
    }
    
}