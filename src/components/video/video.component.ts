import {Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import {DefaultVideoOptions, VideoOptionsModel} from './_model/options.model';

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
               [attr.poster]="this.options.poster">
            <source [src]="src" [type]="type">
        </video>
        <vida-controller-bar
                [videoRef]="video"></vida-controller-bar>
    `,
    styles: [`
        /* Hide controls on full screen*/
        video::-webkit-media-controls {
            display: none;
        }

    `]
})
export class VideoComponent implements OnInit, OnChanges {
    // Get the video player Id
    @Input() _id: string = 'vida-default';
    // Get the source to reproduce
    @Input() src: string;
    // Get the video type format
    @Input() type: string;
    // Get the poster
    @Input() poster: string;

    // reference video player
    @ViewChild('videoRef') video: ElementRef;

    // Get video player's options configuration
    @Input() options: VideoOptionsModel = {}; // Use these to update options defaults

    constructor() {
        console.log('avid video player is working well...');
    }

    ngOnInit() {
        console.log('video nativeElement', this.video);
    }

    ngOnChanges(changes: SimpleChanges) {
        console.log('changes:', changes);
        this.mergeOptions();
    }

    /**
     * Merge options with the default ones
     **/
    mergeOptions() {
        for (const key in DefaultVideoOptions) {
            const optionKeyDefaultValue = DefaultVideoOptions[key];
            if (!DefaultVideoOptions.hasOwnProperty(key)) {
                this.options[key] = optionKeyDefaultValue;
            }
        }
    }

}
