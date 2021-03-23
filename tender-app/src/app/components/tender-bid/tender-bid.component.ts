import { Component, OnInit } from '@angular/core';
import { TenderBidSubmission } from 'src/app/models/tender-bid-submission';
import { TenderBidProduct } from 'src/app/models/tender-bid-product';
import { SharedService } from 'src/app/services/shared-services/shared.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

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

  closeResult: string;

  tenderBidSubmission: TenderBidSubmission;
  tenderBidSubmissionProducts: TenderBidProduct[] = [];
  tenderBidProduct: TenderBidProduct;

  constructor( private modalService: NgbModal, private sharedService: SharedService) {
    this.tenderBidSubmission = new TenderBidSubmission();
   }

  ngOnInit(): void {
    this.tenderBidProduct = new TenderBidProduct();
  }


  AddOrEditProduct()
  {

  }

  validateForm() {
    this.isValid = true;
    if (this.tenderBidSubmission.tenderBidSubmissionId == 0)
      this.isValid = false;
    else if (this.tenderBidSubmission.tenderBidProducts.length == 0)
      this.isValid = false;
    return this.isValid;
  }

  onDeleteOrderItem(tenderBidProduct,i) {

  }

  submit(): void {
    console.log(this.tenderBidSubmissionProducts);
    this.sharedService.captureTender(this.tenderBidSubmission).subscribe(response => {
      console.log('alskdjfklasdjflas');
    });
  }


  open(content) {

    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
      this.tenderBidSubmissionProducts.push(this.tenderBidProduct);

     
    }, (reason) => {
      console.log('Reason is ', reason)

      //this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;

    });

  }

}
