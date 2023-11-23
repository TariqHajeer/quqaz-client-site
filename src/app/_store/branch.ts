export interface BranchDto {
    id: number;
    name: string;
    address: string;
    phoneNumber: string;
    prices: Price[];
}
export interface Price {
    countryName: string;
    price: number;
}