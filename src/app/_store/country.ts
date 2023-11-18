export interface CountryDto {
    id: number;
    name: string;
    prices: Price[];
}
export interface Price {
    countryName: string;
    price: number;
}