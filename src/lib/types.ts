export type status = "pending" | "paid"

export interface Invoice {
    id: string;
    createdAt: string;
    paymentDue: string;
    description: string;
    paymentTerms: number;
    clientName: string;
    clientEmail: string;
    status: status;
    senderAddress: Address;
    clientAddress: Address;
    items: Item[];
}

export interface Address {
    street: string;
    city: string;
    postCode: string;
    country: string;
}

export interface Item {
    name: string,
    quantity: number,
    price: number
}