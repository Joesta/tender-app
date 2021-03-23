import { TenderBidProduct } from "./tender-bid-product";
import { User } from "./user";


export class TenderBidSubmission {
    tenderBidSubmissionId:number;
    totalQuotation: number;
    bidNo: string;
    companyName: string;
    registrationNo: string;
    sumittedById: number;
    sumittedBy: User = null;
    tenderBidProducts: TenderBidProduct[];
}

