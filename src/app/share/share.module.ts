import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidePanelComponent } from './side-panel/side-panel.component';
import { PopupComponent } from './popup/popup.component';

@NgModule({
  declarations: [SidePanelComponent, PopupComponent],
  imports: [
    CommonModule
  ],
  exports: [SidePanelComponent],
  entryComponents: [PopupComponent],
})
export class ShareModule { }
