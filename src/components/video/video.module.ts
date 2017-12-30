import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ControllerBarComponent} from './controller-bar.component';
import {ControllerPausedComponent} from './_controllers/paused.component';
import {ControllerVolumeBarComponent} from './_controllers/volume-bar.component';


@NgModule({
    imports: [CommonModule],
    declarations: [
        ControllerBarComponent,
        ControllerPausedComponent,
        ControllerVolumeBarComponent
    ],
    exports: [
        ControllerBarComponent,
        ControllerPausedComponent,
        ControllerVolumeBarComponent
    ]
})
export class VideoModule {
}