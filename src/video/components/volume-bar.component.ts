import {Component, ElementRef, ViewChild} from '@angular/core';
import {VolumeBarEventsService} from '../../events/volume-bar.events.service';

@Component({
    selector: 'vida-volume-bar',
    template: `
        <button (click)="toggleMuted()">m</button>
        <input #volumeBarRangeRef
               type="range" step="1" min="0" max="100"
               (input)="updateVolume()">
        {{volumeBarRangeRef.value}}
    `,
    styles: [`
    `]
})
export class VolumeBarComponent {
    @ViewChild('volumeBarRangeRef') volumeBarRangeRef: ElementRef;

    level: number = 0.5;        // level min=0.01 max=1.00

    constructor(private volumeBarEvents: VolumeBarEventsService) {
    }

    updateVolume(): void {
        this.volumeBarEvents.updateVolumeLevel(this.getVolumeLevel());
    }

    getVolumeLevel(): number {
        return this.level = this.volumeBarRangeRef.nativeElement.value / 100;
    }

    toggleMuted() {
        this.volumeBarEvents.toggleMuted();
    }
}
