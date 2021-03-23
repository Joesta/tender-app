import { Company } from "./company";
import { StateOrgan } from "./state-organ";


export class Tender {
    tenderId: number;
    bidNo: string ;
    description: string;
    openDate: string ;
    closeDate: string ;
    isClosed: boolean;
    contactNo: string ;
    emailAddress: string;
    stateOrganId: number;
    stateOrgan: StateOrgan ;
    eligibleSupplier: Company[];

}