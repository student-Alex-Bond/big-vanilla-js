import {StudentType} from '../02/02'
import {addSkill, makeStudentActive, doesStudentLiveIN} from "./03_function";

let student1: StudentType;

beforeEach(() => {
    student1 = {
        id: 1,
        name: 'Alex',
        age: 31,
        isActive: false,
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
                title: 'React'
            },

        ]
    }
})


test("new tech skill should be added to student", () => {
    expect(student1.technologies.length).toBe(3)

    addSkill(student1, "JS")
    expect(student1.technologies.length).toBe(4)
    expect(student1.technologies[3].title).toBe("JS")
    expect(student1.technologies[3].id).toBeDefined()
    // toBeDefined функция которая говорит определено что-то или этого нет
})
test("student should be made active", () => {
    expect(student1.isActive).toBe(false)

    makeStudentActive(student1)
    expect(student1.isActive).toBe(true)
    })

test("does student lives in city", () => {
    expect(student1.isActive).toBe(false)

    let res1 = doesStudentLiveIN(student1, 'Moskow')
    let res2 = doesStudentLiveIN(student1, 'Minsk')
    expect(res1).toBe(false)
    expect(res2).toBe(true)
})