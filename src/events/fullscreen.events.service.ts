import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class FullScreenEventsService {

    subjects = {};
    
    enterFullscreen(group: string) {
        this.getSubject(group).fullscreen.next();
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
              fullscreen: new Subject(),
          };
      } 
  
      private hasSubject(group: string)
      {
          return this.subjects[group]?true:false;
      }
      

}