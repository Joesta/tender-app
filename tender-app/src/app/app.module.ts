import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TenderBidComponent } from './components/tender-bid/tender-bid.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TendersComponent } from './components/tenders/tenders.component';
import { TenderComponent } from './components/tender/tender.component';
import { EditTenderBidComponent } from './components/edit-tender-bid/edit-tender-bid.component';
import { HttpClientModule } from '@angular/common/http';
import { SharedService } from './services/shared-services/shared.service';

const routes: Routes = [
  { path: 'tender-bid', component: TenderBidComponent },
  { path: 'bid-submission', component: TenderBidComponent },
  { path: 'tenders/:id', component: TenderComponent },
  { path: 'edit-tender', component: EditTenderBidComponent },
  { path: 'tenders', component: TendersComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    TenderBidComponent,
    TendersComponent,
    TenderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    NgbModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
