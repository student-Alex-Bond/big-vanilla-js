import {
    updateBook,
    makeHairStyle,
    moveUser,
    moveUserChangeHouse,
    upgradeLaptop,
    UserType,
    UserWithBooksType,
    UserWithLaptopType, changeBooks, removeJSBook, UserWithCompaniesType, addJob, updateCompany, updateCompany2
} from "./10";


test("reference type test", () => {
    let user: UserType = {
        name: "Dima",
        hair: 32,
        address: {
            city: "Minsk",
            house: 12
        }
    }

    const awesomeUser = makeHairStyle(user, 2)

    expect(user.hair).toBe(32)
    expect(awesomeUser.hair).toBe(16)
})

test("change address test", () => {
    let user: UserWithLaptopType = {
        name: "Dima",
        hair: 32,
        address: {
            city: "Minsk",
            house: 12
        },
        laptop: {
            title: "Zenbook"
        }
    }

    const movedUser = moveUser(user, "Kiev")

    expect(user).not.toBe(movedUser)
    expect(user.address).not.toBe(movedUser.address)
    expect(movedUser.address.city).toBe("Kiev")
    expect(user.laptop).toBe(movedUser.laptop)
})

test("upgrade laptop to macbook", () => {
    let user: UserWithLaptopType = {
        name: "Dima",
        hair: 32,
        address: {
            city: "Minsk",
            house: 12
        },
        laptop: {
            title: "Zenbook"
        }
    }

    const upgradeUserLaptop = upgradeLaptop(user, "Macbook")

    expect(user).not.toBe(upgradeUserLaptop)
    expect(user.laptop).not.toBe(upgradeUserLaptop.laptop)
    expect(upgradeUserLaptop.laptop?.title).toBe("Macbook")

})

test("change user number house", () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: "Dima",
        hair: 32,
        address: {
            city: "Minsk",
            house: 12
        },
        laptop: {
            title: "Zenbook"
        },
        books: ["css", "html", "js", "react"]
    }

    const changeUserHouse = moveUserChangeHouse(user, 99)

    expect(user).not.toBe(changeUserHouse)
    expect(user.address.house).not.toBe(changeUserHouse.address.house)
    expect(changeUserHouse.address.house).toBe(99)

})

test("add new user books", () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: "Dima",
        hair: 32,
        address: {
            city: "Minsk",
            house: 12
        },
        laptop: {
            title: "Zenbook"
        },
        books: ["css", "html", "js", "react"]
    }

    const changeUserBooks = changeBooks(user, ["ts", "rest api"])

    expect(user).not.toBe(changeUserBooks)
    expect(user.laptop).toBe(changeUserBooks.laptop)
    expect(user.address).toBe(changeUserBooks.address)
    expect(user.books).not.toBe(changeUserBooks.books)
    expect(changeUserBooks.books[4]).toBe('ts')
    expect(changeUserBooks.books[5]).toBe('rest api')


})

test("replace user book", () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: "Dima",
        hair: 32,
        address: {
            city: "Minsk",
            house: 12
        },
        laptop: {
            title: "Zenbook"
        },
        books: ["css", "html", "js", "react"]
    }

    const updateUserBooks = updateBook(user, 'js', 'ts')

    expect(user).not.toBe(updateUserBooks)
    expect(user.laptop).toBe(updateUserBooks.laptop)
    expect(user.address).toBe(updateUserBooks.address)
    expect(user.books).not.toBe(updateUserBooks.books)
    expect(updateUserBooks.books[2]).toBe('ts')


})

test("remove js book", () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: "Dima",
        hair: 32,
        address: {
            city: "Minsk",
            house: 12
        },
        laptop: {
            title: "Zenbook"
        },
        books: ["css", "html", "js", "react"]
    }

    const updateUserBooks = removeJSBook(user, 'js')

    expect(user).not.toBe(updateUserBooks)
    expect(user.laptop).toBe(updateUserBooks.laptop)
    expect(user.address).toBe(updateUserBooks.address)
    expect(user.books).not.toBe(updateUserBooks.books)
    expect(updateUserBooks.books[2]).toBe('react')


})

test("job in companies", () => {
    let user: UserWithLaptopType & UserWithCompaniesType = {
        name: "Dima",
        hair: 32,
        address: {
            city: "Minsk",
            house: 12
        },
        laptop: {
            title: "Zenbook"
        },
        companies: [
            {id: 1, title: 'Epam'},
            {id: 2, title: 'IT-INCUBATOR'}]
    }

    const updateUserJob = addJob(user, 'Googgle')

    expect(user).not.toBe(updateUserJob)
    expect(user.laptop).toBe(updateUserJob.laptop)
    expect(user.address).toBe(updateUserJob.address)
    expect(user.companies).not.toBe(updateUserJob.companies)
    expect(updateUserJob.companies[2].title).toBe('Googgle')


})

test("update companies", () => {
    let user: UserWithLaptopType & UserWithCompaniesType = {
        name: "Dima",
        hair: 32,
        address: {
            city: "Minsk",
            house: 12
        },
        laptop: {
            title: "Zenbook"
        },
        companies: [
            {id: 1, title: 'Ipam'},
            {id: 2, title: 'IT-INCUBATOR'}]
    }

    const updateUserJob = updateCompany(user, 1, 'Epam')

    expect(user).not.toBe(updateUserJob)
    expect(user.address).toBe(updateUserJob.address)
    expect(user.companies).not.toBe(updateUserJob.companies)
    expect(updateUserJob.companies[0].title).toBe('Epam')


})

test("update company", () => {

    let companies = {
        ['Dimych']: [{id: 1, title: 'Epam'}, {id: 2, title: 'IT-INCUBATOR'}],
        'Artem': [{id: 2, title: 'IT-INCUBATOR'}],
    }


    const copy:{ [p: string]: Array<{ id: number; title: string }>;} =
        updateCompany2(companies, "Dimych", 1, "Google")


    expect(copy["Dimych"]).not.toBe(companies["Dimych"])
    expect(copy["Artem"]).toBe(companies["Artem"])
    expect(copy["Dimych"][0].title).toBe("Google")
})