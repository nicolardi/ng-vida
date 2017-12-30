import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {VideoComponent} from './video/video.component';
import {AudioComponent} from './audio/audio.component';
import {VideoService} from './video/video.service';
import {ControllerBarComponent} from './video/controller-bar.component';

@NgModule({
    imports: [CommonModule],
    declarations: [VideoComponent, ControllerBarComponent, AudioComponent],
    exports: [VideoComponent, AudioComponent],
    providers: [VideoService]
})
export class NgVidaModule {
}