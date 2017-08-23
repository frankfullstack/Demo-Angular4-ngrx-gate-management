import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoaderComponent } from './loader/loader.component';
import { ModalComponent } from './modal/modal.component';
import { CountdownComponent } from './countdown/countdown.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    LoaderComponent, ModalComponent, CountdownComponent
  ],
  entryComponents: [ModalComponent],
  exports: [
    LoaderComponent, ModalComponent, CountdownComponent
  ],
})
export class SharedModule { }
