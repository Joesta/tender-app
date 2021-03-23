import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Tender } from 'src/app/models/tender';
import { SharedService } from 'src/app/services/shared-services/shared.service';


@Component({
  selector: 'app-tender',
  templateUrl: './tender.component.html',
  styleUrls: ['./tender.component.scss']
})
export class TenderComponent implements OnInit {
  tender: Tender;

  constructor(private sharedService: SharedService,
    private activatedRoute: ActivatedRoute) { 
    }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      const tenderId = +params['id'];
      this.sharedService.getTender(tenderId).subscribe((tender: Tender) => {
        this.tender = tender;
      });
    });
  }

}
