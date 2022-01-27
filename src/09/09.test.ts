import {UserType} from "./09";

function increaseAge(user: UserType) {
    user.age++
}

test("reerence typy test", () => {
    let user = {
        name: "Dimych",
        age: 32,
        address: {
            title: "Minsk",
        }
    }

    increaseAge(user)
    expect(user.age).toBe(33)

    const superman = user
    superman.age = 1000
    expect(user.age).toBe(1000)
})

test("array reference test", () => {
    let users = [{
        name: "Dimych",
        age: 32
    },
        {
            name: "Dimych",
            age: 32
        },
    ]

    let admins = users
    admins.push({name: "bandygan", age: 10})
    expect(users[2]).toEqual({name: "bandygan", age: 10})
})

test("value type test", () => {
    let usersCount = 100

    let adminsCount = usersCount
    adminsCount++

    expect(adminsCount).toBe(101)
    expect(usersCount).toBe(100)
})

test("reference type test", () => {
    let user = {
        name: "Dimych",
        age: 32,
        address: {
            title: "Minsk",
        }
    }

    //const addr = user.address

    const user2: UserType ={
        name: "Natasha",
        age: 30,
        address: user.address
    }

    user2.address.title = 'Grodno'
    expect(user.address.title).toBe('Grodno')
})