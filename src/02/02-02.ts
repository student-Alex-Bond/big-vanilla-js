 export type CityType ={
    title: string
    houses: Array<HouseType>
    governmentBuildings: Array<GoverType>
    citizensNumber: number
}

type HouseType ={
    buildedAt: number
    repaired: boolean
    address: AddressType
}

type AddressType ={
    number: number
    street: StreetType
}
type StreetType ={
    title: string
}

type GoverType ={
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