import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
    selector: 'controller-paused',
    template: `
        <button (click)="togglePausedState()"
                class="vida-control__button"
                [ngClass]="{'vida-control__play': pausedState === 'play', 'vida-control__pause': pausedState === 'pause'}">
            X
        </button>
    `,
    styles: [`
        .vida-control__button {
            height: 25px;
            width: 25px;
        }

        .vida-control__play {
            background: green;
        }

        .vida-control__pause {
            background: red;
        }
    `]
})

export class ControllerPausedComponent {
    @Output() pausedStateUpdated = new EventEmitter();
    @Input() pausedState: string;

    togglePausedState() {
        (this.pausedState === 'pause') ? this.play() : this.pause();
    }

    play() {
        this.pausedState = 'play';
        this.pausedStateUpdated.emit(this.pausedState);
    }

    pause() {
        this.pausedState = 'pause';
        this.pausedStateUpdated.emit(this.pausedState);
    }
}
