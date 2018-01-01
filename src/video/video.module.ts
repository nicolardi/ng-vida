import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {VideoComponent} from './video.component';

import {ProgressBarComponent} from './components/progressbar.component';
import {PlayPauseComponent} from './components/play-pause.component';

import {MediaEventsService} from '../events/media.events.service';
import {ButtonEventsService} from '../events/button.events.service';
import {ProgressBarEventsService} from '../events/progress.bar.events';
import {FullScreenEventsService} from '../events/fullscreen.events.service';
import {FullScreenComponent} from './components/fullscreen.component';
import {RestartEventsService} from '../events/restart.events.service';
import {RestartComponent} from './components/restart.component';


@NgModule({
    imports: [CommonModule],
    declarations: [
        VideoComponent,
        PlayPauseComponent,
        ProgressBarComponent,
        FullScreenComponent,
        RestartComponent
    ],
    exports: [
        VideoComponent,
        PlayPauseComponent,
        ProgressBarComponent,
        FullScreenComponent,
        RestartComponent
    ],
    providers: [
        MediaEventsService,
        ButtonEventsService,
        ProgressBarEventsService,
        FullScreenEventsService,
        RestartEventsService,

    ]

})

export class VideoModule {
    constructor() {
    }
}