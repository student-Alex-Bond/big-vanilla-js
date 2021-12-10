import {chipCourses, courses} from "./04";

test('should take courses chipper 160', ()=> {
    const coursess = courses

    const chipCourses = coursess.filter(course=> course.price < 160)
})

expect(chipCourses.length).toBe(2)
expect(chipCourses[0].title).toBe('CSS')
expect(chipCourses[1].title).toBe('REACT')


test('Get only completed task', ()=> {
    const tasks = [
        {id: 1, title: 'Bread', isDone: false},
        {id: 2, title: 'Milk', isDone: true},
        {id: 3, title: 'Solt', isDone: false},
        {id: 4, title: 'Sugar', isDone: true},
    ]

    const completed = tasks.filter(task => task.isDone )

    expect(completed.length).toBe(2)
    expect(completed[0].title).toBe('Milk')
    expect(completed[1].title).toBe('Sugar')

})
test('Get only Uncompleted task', ()=> {
    const tasks = [
        {id: 1, title: 'Bread', isDone: false},
        {id: 2, title: 'Milk', isDone: true},
        {id: 3, title: 'Solt', isDone: false},
        {id: 4, title: 'Sugar', isDone: true},
    ]

    const uncompleted = tasks.filter(task => !task.isDone )

    expect(uncompleted.length).toBe(2)
    expect(uncompleted[0].title).toBe('Bread')
    expect(uncompleted[1].title).toBe('Solt')

})