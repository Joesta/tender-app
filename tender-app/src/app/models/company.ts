import { CompanyUser } from "./company-user";



export class Company {
    name: string;
    vatNo: string;
    registration: string;
    physicalAddress1: string;
    physicalAddress2: string;
    suburb: string;
    region: string;
    postalCode: string;
    contactPersons: CompanyUser[];
}