 export type CityType ={
    title: string
    houses: Array<HouseType>
    governmentBuildings: Array<GoverType>
    citizensNumber: number
}

export type HouseType ={
    buildedAt: number
    repaired: boolean
    address: AddressType
}

export type AddressType ={
    number: number
    street: StreetType
}
export type StreetType ={
    title: string
}

export type GoverType ={
    type: 'HOSPITAL' | 'FIRE-STATION'
    budget: number
    staffCount: number
    address: StreetsType
}
type StreetsType ={
    street: TitleType
}

type TitleType ={
    title: string
}