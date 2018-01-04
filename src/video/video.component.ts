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

@Component({
    selector: 'vida-video-player',
    template: `
        <video #videoRef id="{{_id}}"
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

    constructor(private buttonEvents: ButtonEventsService,
                private mediaEvents: MediaEventsService,
                private fullScreenEvents: FullScreenEventsService,
                private restartEvents: RestartEventsService,
                private volumeBarEvents: VolumeBarEventsService) {
    }

    ngOnInit() {
        console.log('video nativeElement', this.videoRef);
    }

    ngOnChanges(changes: SimpleChanges) {
        console.log('changes:', changes);
        this.mergeOptions();
    }

    ngOnDestroy() {
        this.buttonEvents.play$.unsubscribe();
    }

    ngAfterViewInit(): void {
        // Binds the play pressed event
        this.buttonEvents.play$.subscribe(() => {
            this.videoRef.nativeElement.play();
        });

        // Binds the pause pressed event
        this.buttonEvents.pause$.subscribe(() => {
            this.videoRef.nativeElement.pause();
        });

        // enter fullScreen
        this.fullScreenEvents.fullScreen$.subscribe(() => {
            let elem = this.videoRef.nativeElement as HTMLVideoElement;
            if (elem.requestFullscreen) {
                elem.requestFullscreen();
            } else if (elem.webkitRequestFullscreen) {
                elem.webkitRequestFullscreen();
            }
        });

        // reset Time video player
        this.restartEvents.restart$.subscribe(() => {
            this.videoRef.nativeElement.currentTime = 0;
        });

        // update Volume
        this.volumeBarEvents.volumeLevel$.subscribe((volume: number) => {
            this.videoRef.nativeElement.volume = volume;
        });

        // muted
        this.volumeBarEvents.muted$.subscribe(() => {
            (this.videoRef.nativeElement.muted === true) ? this.videoRef.nativeElement.muted = false : this.videoRef.nativeElement.muted = true;
        })

    }


    onPlay() {
        console.log('Play event');
        this.mediaEvents.notifyPlay();
    }

    onPause() {
        console.log('Pause event');
        this.mediaEvents.notifyPause();
    }

    onError(event: any) {
        console.log('error!!');
        this.mediaEvents.notifyPause();
    }

    onLoadedmetadata(event: any) {
        console.log('Loaded!!');
        this.mediaEvents.notifyDuration(event.target.duration);
    }


    /**
     * Merge options with the default ones
     **/
    mergeOptions() {
        this.options = Object.assign({}, DefaultVideoOptions, this.options);
    }

}
