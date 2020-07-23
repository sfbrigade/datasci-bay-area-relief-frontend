export enum County {
    SanFrancisco = 'San Francisco',
    Alameda = 'Alameda',
    SanMateo = 'San Mateo',
    ContraCosta = 'Contra Costa',
    SantaClara = 'Santa Clara',
    Any = 'Any'
}

export enum BusinessType {
    SmallBusiness = 'Small business',
    NonProfit = 'Non-profit'
}

export interface FilterOptions {
    businessType: BusinessType;
    county: County;
}

export interface Result {
    name: string;
}
