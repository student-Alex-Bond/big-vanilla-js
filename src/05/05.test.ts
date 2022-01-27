import {createGreetingMessage, MainType} from "./05";

let people: Array<MainType> = []

beforeEach(() => {
    people = [
        {name: "Andrew Ivanov", age: 33},
        {name: "Alexandr Petrov", age: 24},
        {name: "Dmitry Sidorov", age: 18},
    ]
})

test('Should be arraay of greeting messages', ()=>{
    const message = createGreetingMessage(people)
    expect(message.length).toBe(3)
    expect(message[0]).toBe("Hi Andrew. Welcome to The Club")
    expect(message[1]).toBe("Hi Alexandr. Welcome to The Club")
    expect(message[2]).toBe("Hi Dmitry. Welcome to The Club")

})