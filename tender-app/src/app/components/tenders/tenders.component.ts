import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Tender } from 'src/app/models/tender';
import { SharedService } from 'src/app/services/shared-services/shared.service';

@Component({
  selector: 'app-tenders',
  templateUrl: './tenders.component.html',
  styleUrls: ['./tenders.component.scss']
})
export class TendersComponent implements OnInit {
  tenders: Tender[];
  
  constructor(private sharedService: SharedService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.sharedService.getTenders().subscribe((tenders: Tender[]) => {
        this.tenders = tenders;
      });
    });
  }

}
