export type UserType = {
    name: string
    age: number,
    address: {title: string}
}

let user = {
    name: "Dimych",
    age: 32
}

function increaseAge(user: UserType) {
    user.age++
}