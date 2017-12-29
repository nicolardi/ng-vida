export interface VideoOptionsModel {
  playinline?: string;
  controls?: string;
  autoplay?: string;
  buffered?: string;
  loop?: string;
  muted?: string;
  preload?: string;
  poster?: string;
}

export const DefaultVideoOptions : VideoOptionsModel = {
  playinline: '',
  controls: '',
  autoplay: null,
  buffered: null,
  loop: null,
  muted: null,
  preload: null,
  poster: ''
};


import { AfterViewInit, Component, ElementRef, Input, OnChanges, SimpleChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'vida-video-player',
  template: `
    <video #vidaRef id="vida-{{id}}" 
      [attr.playsinline]="this._options.playsinline"
      [attr.controls]="this._options.controls"
      [attr.autoplay]="this._options.autoplay"
      [attr.buffered]="this._options.buffered"
      [attr.loop]="this._options.loop"
      [attr.muted]="this._options.muted"
      [attr.preload]="this._options.preload"
      [attr.poster]="this._options.poster"> 
    
      <source src="{{src}}" type="{{type}}"> 
    
    </video>
  `
})
export class VideoComponent implements AfterViewInit, OnChanges {
  // Get the video player Id
  @Input() id: string;
  // Get the source to reproduce
  @Input() src: string;
  // Get the video type format
  @Input() type: string;
  // Get the poster
  @Input() poster: string;
  
  // reference video player
  @ViewChild('vidaRef') vida: ElementRef;
  
  // Get Options
  @Input() options: VideoOptionsModel = {}; // Use these to update options defaults
  
  // The view relies on these options
  _options : VideoOptionsModel = DefaultVideoOptions;
  
  constructor( ) {
    console.log('avid video player is working well...');
    console.log('options',this._options);
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

  ngOnChanges(change: SimpleChanges) {
    console.log('change:' , change);

    this.mergeOptions(); // on change merge options again
  }
  ngAfterViewInit() {
    this.mergeOptions();
    console.log(this.vida);
  }

}
