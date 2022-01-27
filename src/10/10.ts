export type LaptopType = {
    title: string
}

export type UserWithLaptopType = UserType & {
    laptop?: LaptopType
}
export type UserWithBooksType = UserType & {
    books: Array<string>
}

export type UserWithCompaniesType =  {
    companies: Array<{id: number, title: string }>
}

export type UserType = {
    name: string,
    hair: number,
    address: { city: string, house: number }


}

export function makeHairStyle(user: UserWithLaptopType, power: number) {
    const copy = {
        ...user,
        hair: user.hair / power
    }


    return copy
}

export function moveUser(user: UserWithLaptopType, city: string) {
    return {
        ...user,
        address: {...user.address, city: city}
    }
}

export function moveUserChangeHouse(user: UserWithLaptopType & UserWithBooksType, house: number) {
    return {
        ...user,
        address: {...user.address, house: house}
    }
}

export function upgradeLaptop(user: UserWithLaptopType, newLaptopTitle: string) {
    return {
        ...user,
        laptop: {...user.laptop, title: newLaptopTitle}
    }
}

export function changeBooks(user: UserWithLaptopType & UserWithBooksType, books: Array<string>) {
    return {
        ...user,
        books: [...user.books.concat(books)]
    }
}

export function updateBook(user: UserWithLaptopType & UserWithBooksType, book: string, replaceBook: string) {
    return {
        ...user,
        books: user.books.map((b) => b === book ? replaceBook : b)
    }
}

export function removeJSBook(user: UserWithLaptopType & UserWithBooksType, book: string) {
    return {
        ...user,
        books: user.books.filter((b) => b !== book )
    }
}

export function addJob(user: UserWithLaptopType & UserWithCompaniesType, job: string) {
    return {
        ...user,
        companies: [...user.companies, {id: 4, title: job}]
    }
}

export function updateCompany(user: UserWithLaptopType & UserWithCompaniesType, id: number, companyName: string) {
    return {
        ...user,
        companies: user.companies.map(company => company.id === id ? {...company, title: companyName}: company)
    }
}

export function updateCompany2(companies: {[key: string]: Array<{id: number, title: string}> },
                               userName: string,
                               companyID:number,
                               newTitle: string) {
    return {
        ...companies,
        [userName]: companies[userName].map(c => c.id === companyID ? {...c, title: newTitle} : c)
    }
}