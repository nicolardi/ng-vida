import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AudioComponent} from './audio/audio.component';
import {VideoModule} from './video/video.module';
import {VideoComponent} from './video/video.component';

@NgModule({
    imports: [
        CommonModule,
        VideoModule
    ],
    declarations: [
        AudioComponent,
        VideoComponent
    ],
    exports: [
        AudioComponent,
        VideoComponent,
        
    ]
})
export class NgVidaModule {
}