import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tender-bid',
  templateUrl: './tender-bid.component.html',
  styleUrls: ['./tender-bid.component.scss']
})
export class TenderBidComponent implements OnInit {

  companyName: string;
  companyRegistraionNumber: string;
  quotation: number;
  qtyPrice: number;

  constructor() { }

  ngOnInit(): void {
  }

  submit(): void {
    console.log(this.companyRegistraionNumber);
    console.log(this.companyName);
    console.log(this.quotation);
    console.log(this.qtyPrice);

  }

}
