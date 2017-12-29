import {NgModule} from '@angular/core';
import {VideoComponent} from './video/video.component';
import {AudioComponent} from './audio/audio.component';

@NgModule({
    declarations: [VideoComponent, AudioComponent],
    exports: [VideoComponent, AudioComponent]
})
export class NgVidaModule {};