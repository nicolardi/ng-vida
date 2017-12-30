import { Component, Input, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { AudioProvider } from 'app/components/audio/audio.provider';

@Component({
  selector: 'vida-audio-player',

  template: `
  <audio #audioRef controls>
     <source src="{{src}}">
  </audio>`
})
export class AudioComponent implements AfterViewInit {
  @Input() src: string;

  @ViewChild('audioRef') audio: ElementRef;

  constructor(private audioProvider: AudioProvider) {

  }

    public ngAfterViewInit(): void {
        this.audioProvider.play$.subscribe( () => {
          this.audio.nativeElement.play();
          this.audioProvider.notifyAudioState('play');
        });

        
        this.audioProvider.pause$.subscribe( () => {
          this.audio.nativeElement.pause();
          this.audioProvider.notifyAudioState('pause');
        });


    }
}