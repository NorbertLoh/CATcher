import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared.module';
import { MdTipsComponent } from './md-tips.component';

@NgModule({
  declarations: [MdTipsComponent],
  imports: [CommonModule, SharedModule],
  exports: [MdTipsComponent]
})
export class MdTipsModule {}
