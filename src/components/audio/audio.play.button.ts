import { Component, Output } from '@angular/core';
import { EventEmitter } from 'events';
import { AudioProvider } from 'app/components/audio/audio.provider';

@Component({
  selector: 'vida-audio-play-button',
  template: `
  <button *ngIf="playingState==='pause'" (click)="play()">PLAY</button>
  <button *ngIf="playingState==='play'" (click)="pause()">PAUSE</button>
  `
})
export class AudioPlayButtonComponent  {
  playingState = 'pause';
  constructor(private audioProvider: AudioProvider) {
     audioProvider.audioChangeState$.subscribe( (state: string) => {
         this.playingState = state;
        console.log(state);
        });
  }

  play() {
      this.audioProvider.play();
  }

  pause() {
      this.audioProvider.pause();
  }


}
