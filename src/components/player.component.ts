import { Component } from '@angular/core';

@Component({
  selector: 'my-player',
  template: `Video Player is working`
})
export class PlayerComponent {
  constructor() {
    console.log('My player is working');
  }
}