export type MainType = {
    name: string
    age: number
}

const people: Array<MainType> = [
    {name: "Andew Ivanov", age: 33},
    {name: "Alexandr Petrov", age: 24},
    {name: "Dmitry Sidorov", age: 18},
]


const dimychTransformator = (man: MainType) => {
    return {
        stack: ['css','html','js','tdd', 'react'],
        firstName: man.name.split(" ")[0],
        lastName: man.name.split(" ")[1]
    }
}

const devs  = []

const dev2= [
    dimychTransformator(people[0]),
    dimychTransformator(people[1]),
    dimychTransformator(people[2]),
]

const devs3 = people.map(dimychTransformator)

const message = people.map(man => `Hi ${man.name.split(" ")[0]}. Welcome to The Club`)

export const createGreetingMessage =  (people: Array<MainType>) => {
    return people.map(man => `Hi ${man.name.split(" ")[0]}. Welcome to The Club`)
}