export interface Trade {
    tradeId?: number;
    price: number;
    quantity: number;
    tradeType: boolean;
//    SecurityName: string;
    securityId: number;
    tradeExecutionTime: Date;
    brokerName: string;
    customerId: number;
    marketPrice: number;
    isChecked?:boolean;
}