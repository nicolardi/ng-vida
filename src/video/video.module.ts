import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {VideoComponent} from './video.component';

import {ProgressBarComponent} from './components/progressbar.component';
import {PlayPauseComponent} from './components/play-pause.component';

import {MediaEventsService} from '../events/media.events.service';
import {ButtonEventsService} from '../events/button.events.service';
import {ProgressBarEventsService} from '../events/progress.bar.evens';
import {FullScreenEventsService} from '../events/fullscreen.events.service';
import {FullScreenComponent} from './components/fullscreen.component';


@NgModule({
    imports: [CommonModule],
    declarations: [
        VideoComponent,
        PlayPauseComponent,
        ProgressBarComponent,
        FullScreenComponent
    ],
    exports: [
        VideoComponent,
        PlayPauseComponent,
        ProgressBarComponent,
        FullScreenComponent
    ],
    providers: [
        MediaEventsService,
        ButtonEventsService,
        ProgressBarEventsService,
        FullScreenEventsService
    ]

})

export class VideoModule {
    constructor() {
    }
}