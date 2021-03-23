import { Company } from "./company";
import { Tender } from "./tender";


export class EligibleSupplier {
    eligibleSupplierId: number;
    dateEvalauted: Date;
    score: string;
    inflationRate: string;
    tenderId: number;
    tender: Tender;
    companyId: number;
    company: Company;
}