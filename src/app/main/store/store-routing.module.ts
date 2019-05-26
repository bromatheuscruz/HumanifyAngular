import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StartSeparationComponent } from './start-separation/start-separation.component';
import { MainStoreComponent } from './main-store/main-store.component';
import { ViewFiscalNoteComponent } from './view-fiscal-note/view-fiscal-note.component';

const routes: Routes = [
  {
    path: '', component: MainStoreComponent
  },
  {
    path: 'start-separation', component: StartSeparationComponent
  },
  {
    path: 'view-fiscal-note', component: ViewFiscalNoteComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StoreRoutingModule { }
