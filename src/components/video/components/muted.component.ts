import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
    selector: 'controller-muted',
    template: `
        <button (click)="toggleMutedState()" style="height: 25px; width: 25px"
                [ngClass]="{'muted': muted, 'sound': !muted}">M
        </button>
    `,
    styles: [`
        .muted {
            background: yellow;
        }

        .sound {
            background: green;
        }
    `]
})
export class ControllerMutedComponent {
    @Input() muted: boolean;
    @Output() mutedUpdated = new EventEmitter<boolean>();

    toggleMutedState() {
        this.mutedUpdated.emit(!this.muted);
    }
}
