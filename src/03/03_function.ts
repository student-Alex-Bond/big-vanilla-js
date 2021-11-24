import {StudentType} from "../02/02";
import {CityType, GoverType, HouseType} from "../02/02-02";


export const addSkill = (student: StudentType, skill: string) => {
    student.technologies.push({
        id: new Date().getTime(),
        title: skill
    })
}
export const makeStudentActive = (student: StudentType) => {
    student.isActive = true
}
export const doesStudentLiveIN = (student: StudentType, cityName: string) => {
    return student.address.city.title === cityName
}

export const addMoneyToBudget = (building: GoverType, budget: number) => {
    building.budget += budget
}

export const repairHouse = (repair: HouseType) => {
    repair.repaired = true
}

export const toFireStaff = (delStaff: GoverType, count: number) => {
    delStaff.staffCount-= count
}

export const toHireStaff = (governmentBuildings: GoverType, number: number)=> {
    governmentBuildings.staffCount+=number
}
export const createMessage = (city: CityType) => {
    return `Hello ${city.title} citizens. I want you be happy. All ${city.citizensNumber} men`
}