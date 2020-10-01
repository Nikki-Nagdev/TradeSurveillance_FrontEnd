export interface Trade {
    tradeId?: number;
    price: number;
    quantity: number;
    tradeType: any;
    security: any;
    securityId: any;
    tradeExecutionTime: any;
    brokerName?: string;
    customerId: any;
    marketPrice?: number;
    isChecked?:boolean;
}

