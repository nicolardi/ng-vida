import {
    AfterViewInit,
    Component,
    ElementRef,
    Input,
    OnChanges,
    OnDestroy,
    OnInit,
    SimpleChanges,
    ViewChild,
} from '@angular/core';
import {ButtonEventsService} from '../events/button.events.service';
import {MediaEventsService} from '../events/media.events.service';
import {DefaultVideoOptions, VideoOptionsModel} from './_model/options.model';
import {FullScreenEventsService} from '../events/fullscreen.events.service';
import {RestartEventsService} from '../events/restart.events.service';
import {VolumeBarEventsService} from '../events/volume-bar.events.service';
import {ProgressBarEventsService} from '../events/progress-bar.events';
import {NgVidaApiService} from '../events/ng-vida.api.service';

@Component({
    selector: 'vida-video-player',
    template: `
        <video #videoRef id="{{_id}}"
               [attr.width]="this.options.width"
               [attr.height]="this.options.height"
               [attr.playsinline]="this.options.playsinline"
               [attr.autoplay]="this.options.autoplay"
               [attr.buffered]="this.options.buffered"
               [attr.loop]="this.options.loop"
               [attr.muted]="this.options.muted"
               [attr.preload]="this.options.preload"
               [attr.poster]="this.options.poster"
               (play)="onPlay($event)"
               (end)="onPause($event)"
               (pause)="onPause($event)"
               (error)="onError($event)"
               (timeupdate)="onTimeUpdate($event)"
               (loadedmetadata)="onLoadedmetadata($event)">
            <source [src]="src" [type]="type">
        </video>
    `,
    styles: [`
        /* Hide controls on full screen */
        video::-webkit-media-controls {
            display: none;
        }

    `]
})
export class VideoComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy {
    // Get the video player Id
    @Input() _id: string = 'vida-default';
    // Get Identifier group
    @Input() group: string;
    // Get the source to reproduce
    @Input() src: string;
    // Get the video type format
    @Input() type: string;
    // Get the poster
    @Input() poster: string;

    // reference video player
    @ViewChild('videoRef') videoRef: ElementRef;

    // Get video player's options configuration
    @Input() options: VideoOptionsModel = {}; // Use these to update options defaults

    constructor(private _ngVida: NgVidaApiService,
                private buttonEvents: ButtonEventsService,
                private mediaEvents: MediaEventsService,
                private fullScreenEvents: FullScreenEventsService,
                private restartEvents: RestartEventsService,
                private volumeBarEvents: VolumeBarEventsService,
                private progressBarEvents: ProgressBarEventsService) {
    }

    ngOnInit() {
        
    }

    ngOnChanges(changes: SimpleChanges) {
        this.mergeOptions();
    }

    ngOnDestroy() {
        this._ngVida.getGroup(this.group).play$.unsubscribe();
        this._ngVida.getGroup(this.group).pause$.unsubscribe();
        this._ngVida.getGroup(this.group).restart$.unsubscribe();
    }

    ngAfterViewInit(): void {
        // Binds the play pressed event
        this._ngVida.getGroup(this.group).play$.subscribe(() => {
            this.videoRef.nativeElement.play();
        });
        // Binds the pause pressed event
        this._ngVida.getGroup(this.group).pause$.subscribe(() => {
            this.videoRef.nativeElement.pause();
        });

        // Binds the pause pressed event
         this.progressBarEvents.getSeek$(this.group).subscribe((time : number) => {
             this.videoRef.nativeElement.currentTime =  time;
         });
        
        // enter fullScreen
        this._ngVida.getGroup(this.group).fullscreen$.subscribe(() => {
            let elem = this.videoRef.nativeElement as HTMLVideoElement;
            if (elem.requestFullscreen) {
                elem.requestFullscreen();
            } else if (elem.webkitRequestFullscreen) {
                elem.webkitRequestFullscreen();
            }
        });

        // reset Time video player
        this._ngVida.getGroup(this.group).restart$.subscribe(() => {
            this.videoRef.nativeElement.currentTime = 0;
        });

        // update Volume
        this._ngVida.getGroup(this.group).volumeLevel$.subscribe((volume: number) => {
            this.videoRef.nativeElement.volume = volume;
        });

        // muted
        this._ngVida.getGroup(this.group).muted$.subscribe(() => {
            (this.videoRef.nativeElement.muted === true) ? this.videoRef.nativeElement.muted = false : this.videoRef.nativeElement.muted = true;
        })
    }


    onPlay() {
        this.mediaEvents.notifyPlay(this.group);
    }

    onPause() {
        this.mediaEvents.notifyPause(this.group);
    }

    onError(event: any) {
        this.mediaEvents.notifyPause(this.group);
    }

    onTimeUpdate(event: any) {
       
        this.mediaEvents.notifyTimeUpdate(this.group, event.target.currentTime);
    }

    onLoadedmetadata(event: any) {
        this.mediaEvents.notifyDuration(this.group, event.target.duration);
    }


    /**
     * Merge options with the default ones
     **/
    mergeOptions() {
        this.options = Object.assign({}, DefaultVideoOptions, this.options);
    }

}
