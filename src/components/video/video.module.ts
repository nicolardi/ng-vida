import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ControllerBarComponent} from './controller-bar.component';
import {ControllerPausedComponent} from './_controllers/paused.component';
import {ControllerVolumeBarComponent} from './_controllers/volume-bar.component';
import {ControllerMutedComponent} from './_controllers/muted.component';
import {ControllerRestartComponent} from './_controllers/restart.component';
import {ControllerFullScreen} from './_controllers/fullscreen.component';

@NgModule({
    imports: [CommonModule],
    declarations: [
        ControllerBarComponent,
        ControllerPausedComponent,
        ControllerVolumeBarComponent,
        ControllerMutedComponent,
        ControllerRestartComponent,
        ControllerFullScreen,
    ],
    exports: [
        ControllerBarComponent,
        ControllerPausedComponent,
        ControllerVolumeBarComponent,
        ControllerMutedComponent,
        ControllerRestartComponent,
        ControllerFullScreen
    ]
})
export class VideoModule {
}