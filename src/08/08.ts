export const userArray = ['Dimych', 'Natasha', 'Valera', 'Katya']


export const userObj = {
    "0": "Dimych",
    "1": "Natasha",
    "2": "Valera",
    "3": "Katya"
}

export type UsersType ={
    [key: string] : { id: number, name: string}
}

export const users: UsersType = {
    "101": {id: 101,  name: "Dimych"},
    "1212": {id: 1212,  name: "Valera"},
    "323232": {id: 323232,  name: "Natasha"},
    "1": {id: 1,  name: "Katya"}
}

let user = {id: 100500, name: "Igor"}
delete users[user.id]

users[user.id] = user // добавление  в ассоциативный масив user

users[user.id].name = "Vitya" // обновление свойств по ключу