import { Component, OnInit } from '@angular/core';
import { TenderBidSubmission } from 'src/app/models/tender-bid-submission';
import { TenderBidProduct } from 'src/app/models/tender-bid-product';

@Component({
  selector: 'app-tender-bid',
  templateUrl: './tender-bid.component.html',
  styleUrls: ['./tender-bid.component.scss']
})
export class TenderBidComponent implements OnInit {
  isValid: boolean = true;
  companyName: string;
  companyRegistraionNumber: string;
  quotation: number;
  qtyPrice: number;

  tenderBidSubmission: TenderBidSubmission;
  tenderBidSubmissionProducts: TenderBidProduct[];

  constructor() {
    this.tenderBidSubmission = new TenderBidSubmission();
   }

  ngOnInit(): void {

  }


  AddOrEditProduct()
  {

  }

  validateForm() {
    this.isValid = true;
    if (this.tenderBidSubmission.TenderBidSubmissionId == 0)
      this.isValid = false;
    else if (this.tenderBidSubmission.TenderBidProducts.length == 0)
      this.isValid = false;
    return this.isValid;
  }

  onDeleteOrderItem(tenderBidProduct,i){

  }

  submit(): void {
    console.log(this.companyRegistraionNumber);
    console.log(this.companyName);
    console.log(this.quotation);
    console.log(this.qtyPrice);

  }

}
