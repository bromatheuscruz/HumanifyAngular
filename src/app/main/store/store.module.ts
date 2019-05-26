import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreRoutingModule } from './store-routing.module';
import { StartSeparationComponent } from './start-separation/start-separation.component';
import { MainStoreComponent } from './main-store/main-store.component';
import { ViewFiscalNoteComponent } from './view-fiscal-note/view-fiscal-note.component';

@NgModule({
  declarations: [
    MainStoreComponent,
    StartSeparationComponent,
    ViewFiscalNoteComponent
  ],
  imports: [
    CommonModule,
    StoreRoutingModule
  ]
})
export class StoreModule { }
