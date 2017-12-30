import {Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import {DefaultVideoOptions, VideoOptionsModel} from './video.model';
import {VideoService} from './video.service';

@Component({
    selector: 'vida-video-player',
    template: `
        <video #videoRef id="{{id}}"
               [attr.playsinline]="this._options.playsinline"
               [attr.autoplay]="this._options.autoplay"
               [attr.buffered]="this._options.buffered"
               [attr.loop]="this._options.loop"
               [attr.muted]="this._options.muted"
               [attr.preload]="this._options.preload"
               [attr.poster]="this._options.poster">
            <source [src]="src" [type]="type">
        </video>
        <vida-controller-bar></vida-controller-bar>
    `
})
export class VideoComponent implements OnInit, OnChanges {
    // Get the video player Id
    @Input() id: string;
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

    // The view relies on these options
    _options: VideoOptionsModel = DefaultVideoOptions;

    constructor(private _video: VideoService) {
        console.log('avid video player is working well...');
        console.log('options', this._options);
        // if Id is not present assign a default class (vida-default)
        if (!this.id) {
            this.id = 'vida-default'
        }
    }

    ngOnInit() {
        this._video.pausedState$
            .subscribe(state => {
                (state) ? this.video.nativeElement.pause() : this.video.nativeElement.play();
            });

        this._video.mutedState$
            .subscribe(state => {
                (state) ? this.video.nativeElement.muted = true : this.video.nativeElement.muted = false;
            })
    }

    ngOnChanges(changes: SimpleChanges) {
        console.log('changes:', changes);
        this.mergeOptions();
    }

    /**
     * Merge options with the default ones
     **/
    mergeOptions() {
        for (const key in this.options) {
            if (this.options.hasOwnProperty(key)) {
                const value = this.options[key];
                if (value) {
                    this._options[key] = '';
                } else {
                    this._options[key] = null;
                }
            }
        }
        console.log(this._options);
    }

}
