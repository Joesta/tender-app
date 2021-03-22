

export class TenderBidProduct {
    TenderBidProductId: number;
    ProductId: number;
    Description: string;
    RecommendedPrice: number = 0.00;
    QuotedPrice: number = 0.00;
    Quantity: number = 0;
    Total: number;
}