import {Component, ElementRef, Input} from '@angular/core';

@Component({
    selector: 'vida-controller-bar',
    template: `
        <controller-paused
                [pausedState]="pausedState"
                (pausedStateUpdated)="handlePausedStateUpdated($event)"></controller-paused>

        <controller-volume-bar
                [volumeLevel]="volumeLevel"
                (volumeLevelUpdated)="handleVolumeLevelUpdated($event)"></controller-volume-bar>

        <controller-muted [muted]="muted"
                          (mutedUpdated)="handleMutedUpdated($event)"></controller-muted>

        <controller-restart (restart)="handleRestart()"></controller-restart>

        <controller-fullscreen (fullScreen)="handleFullScreen($event)"></controller-fullscreen>
    `,
    styles: [`
        :host {
            display: flex;
            flex-direction: row;
        }
    `],
})

export class ControllerBarComponent {
    @Input() videoRef: ElementRef;

    // Initial Settings Controller
    pausedState = 'pause';          // 'pause' or 'play'
    volumeLevel = 0.4;              // volume level min=0.1 max=1.0
    muted = false;                  // enable/disable audio
    fullScreen = false;             // enable/disable fullscreen


    handlePausedStateUpdated(state: string) {
        this.pausedState = state;
        (state === 'pause') ? this.videoRef.nativeElement.pause() : this.videoRef.nativeElement.play();
    }

    handleVolumeLevelUpdated(volume_level: number) {
        this.volumeLevel = volume_level;
        this.videoRef.nativeElement.volume = this.volumeLevel;
        console.log('volume is now set to:', this.videoRef.nativeElement.volume);
    }

    handleMutedUpdated(muted: boolean) {
        this.muted = muted;
        this.videoRef.nativeElement.muted = this.muted;
    }

    handleRestart() {
        this.videoRef.nativeElement.currentTime = 0;
    }

    handleFullScreen() {
        let elem = this.videoRef.nativeElement as HTMLVideoElement;
        if (elem.requestFullscreen) {
            elem.requestFullscreen();
        } else if (elem.webkitRequestFullscreen) {
            elem.webkitRequestFullscreen();
        }
    }
}