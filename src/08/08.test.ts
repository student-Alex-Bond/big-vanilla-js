import {userObj} from "./08";


export type UsersType = {
    [key: string]: { id: number, name: string }
}

let users: UsersType = {// перед beforeEach тип переменной должен быть let
    "101": {id: 101, name: "Dimych"},
    "1212": {id: 1212, name: "Valera"},
    "323232": {id: 323232, name: "Natasha"},
    "1": {id: 1, name: "Katya"}
}
beforeEach(() => {
    users = {
        "101": {id: 101, name: "Dimych"},
        "1212": {id: 1212, name: "Valera"},
        "323232": {id: 323232, name: "Natasha"},
        "1": {id: 1, name: "Katya"}
    }
})

    test("should select corresponding user from obj", () => {
        expect(userObj[0]).toBe('Dimych')
        expect(userObj[1]).toBe('Natasha')
        expect(userObj[2]).toBe('Valera')
        expect(userObj[3]).toBe('Katya')
    })

test("should update corresponding user ", () => {
   users["1"].name =  'Ekaterina'

    expect(users["1"].name).toBe('Ekaterina')

})

test("should delete corresponding user ", () => {
   delete users["1"]

    expect(users["1"]).toBeUndefined()

})