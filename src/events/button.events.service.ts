import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class ButtonEventsService {

    private subjects = {};

    constructor() {

    }

    getPlay$(group)
    {
        return this.getSubject(group).play;
    }

    getPause$(group)
    {
        return this.getSubject(group).pause;
    }

    notifyPlay(group: string) {
        return this.getSubject(group).play.next;
    }

    notifyPause(group) {
        return this.getSubject(group).pause.next;
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
           pause: new Subject()
        };
    } 

    

    private hasSubject(group: string)
    {
        return this.subjects[group]?true:false;
    }

    
}

