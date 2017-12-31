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
    @ViewChild('volumeBarRangeRef') volumeBarRangeRef: ElementRef;

    @Input() volumeLevel: number;
    @Output() volumeLevelUpdated = new EventEmitter<number>();

    constructor(private renderer: Renderer2) {
    }

    ngOnInit() {
        // assign initial volume level
        this.volumeBarRangeRef.nativeElement.value = this.volumeLevel * 100;
    }

    ngAfterViewInit() {
        // listener to get the volume change
        this.renderer.listen(this.volumeBarRangeRef.nativeElement, 'change',
            () => {
                this.volumeLevelUpdated.emit(this.getVolumeLevel());
            });
    }

    getVolumeLevel() {
        return this.volumeBarRangeRef.nativeElement.value / 100;
    }
}
