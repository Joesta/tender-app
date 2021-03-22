import { TenderBidProduct } from "./tender-bid-product";
import { User } from "./user";


export class TenderBidSubmission{
    TenderBidSubmissionId:number =0;
    TotalQuotation: number = 0.00;
    SumittedById: number = 0;
    SumittedBy: User = null;
    TenderBidProducts: TenderBidProduct[] = [];
}

