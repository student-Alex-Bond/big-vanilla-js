export type StudentType = {
    id: number,
    name: string
    age: number
    isActive: boolean
    address: AddressType
    technologies: Array<TechnologiesType>
}
export type AddressType ={
    streetTitle: string,
    city: LocalCityType
}
export type LocalCityType= {
    title: string
    countryTitle: string
}
export type TechnologiesType ={
    id: number
    title: string
}
const student: StudentType =  {
    id: 1,
    name: 'Alex',
    age: 31,
    isActive: true,
    address: {
        streetTitle: 'Surganova 2',
        city: {
            title: 'Minsk',
            countryTitle: 'Belarus'
        }
    },
    technologies: [{
        id: 1,
        title: 'HTML'
    },
        {
            id: 2,
            title: 'CSS'
        },
        {
            id: 3,
            title: 'JS'
        },
        {
            id: 4,
            title: 'React'
        }
    ]
}

