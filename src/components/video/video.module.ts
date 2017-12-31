import { ProgressBarComponent } from './components/progressbar.component';
import { PlayPauseComponent } from './components/play.pause.component';
import { ButtonEventsService } from './../events/button.events.service';
import { MediaEventsService } from './../events/media.events.service';
import { VideoComponent } from './video.component';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { ProgressBarEventsService } from 'app/components/events/progress.bar.evens';

@NgModule({
    imports: [CommonModule],
    declarations: [
        VideoComponent,
        PlayPauseComponent,
        ProgressBarComponent
    ],
    exports: [
        VideoComponent,
        PlayPauseComponent,
        ProgressBarComponent
    ],
    providers: [
        MediaEventsService,
        ButtonEventsService,
        ProgressBarEventsService
    ]

})
export class VideoModule {
    constructor() {
    }
}