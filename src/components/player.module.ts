import {NgModule} from '@angular/core';
import {PlayerComponent} from './player.component';
export * from './player.component';

@NgModule({
    declarations: [PlayerComponent],
    exports: [PlayerComponent]
})
export class PlayerModule {};