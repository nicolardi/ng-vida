import {
    AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output, Renderer2,
    ViewChild
} from '@angular/core';

@Component({
    selector: 'controller-volume-bar',
    template: `
        <input #volumeBarRangeRef type="range" step="1" min="0" max="100">
        {{volumeBarRangeRef.value}}
    `,
    styles: [`
    `]
})
export class ControllerVolumeBarComponent implements OnInit, AfterViewInit {
    @ViewChild('volumeBarRangeRef') volumeBarRange: ElementRef;

    @Input() volumeLevel: number;
    @Output() volumeLevelUpdated = new EventEmitter<number>();

    constructor(private renderer: Renderer2) {
    }

    ngOnInit() {
        // assign initial volume level
        this.volumeBarRange.nativeElement.value = this.volumeLevel * 100;
    }

    ngAfterViewInit() {
        // listener to get the volume change
        this.renderer.listen(this.volumeBarRange.nativeElement, 'change',
            () => {
                this.volumeLevelUpdated.emit(this.getVolumeLevel());
            });
    }

    getVolumeLevel() {
        return this.volumeBarRange.nativeElement.value / 100;
    }
}
