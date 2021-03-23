import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TenderComponent } from './components/tender/tender.component';
import { TenderBidComponent } from './components/tender-bid/tender-bid.component';
import { EditTenderBidComponent } from './components/edit-tender-bid/edit-tender-bid.component';
import { TendersComponent } from './components/tenders/tenders.component';

const routes: Routes = [
  { path: 'bid-submission', component: TenderBidComponent },
  { path: 'tender/:id', component: TenderComponent },
  { path: 'edit-tender', component: EditTenderBidComponent },
  { path: 'tenders', component: TendersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
