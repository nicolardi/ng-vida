import {NgModule} from '@angular/core';
import {VideoComponent} from './video/video.component';
import {AudioComponent} from './audio/audio.component';
import { AudioPlayButtonComponent } from 'app/components/audio/audio.play.button';
import { AudioProvider } from 'app/components/audio/audio.provider';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
    declarations: [VideoComponent, AudioComponent, AudioPlayButtonComponent],
    exports: [VideoComponent, AudioComponent, AudioPlayButtonComponent],
    providers: [AudioProvider],
    imports: [CommonModule, BrowserModule]
})
export class NgVidaModule {};