import { UniqueEntityID } from "../../../../core/entities/unique-id";

export class Meal extends UniqueEntityID{
    constructor(
        private name:string,
        private description:string,
        private mealTime:Date,
        private isOnTheDiet:boolean,
    ){
        super()
    }
    getName(){
        return this.name;
    }
    getDescription(){
        return this.description;
    }
    getMealTime(){
        return this.mealTime;
    }
    getIsOnTheDiet(){
        return this.isOnTheDiet;
    }


    setName(name:string,){
        this.name = name
    }
    setDescription(description:string,){
        this.description = description
    }
    setMealTime(mealTime: string) {
        const parsedDate = this.parseMealTime(mealTime);
        this.mealTime = parsedDate;
    }
    toggleIsOnTheDiet(){
        this.isOnTheDiet = !this.isOnTheDiet
    }

    parseMealTime(mealTime: string) {
        const [date, time] = mealTime.split(' - ');
        const [day, month, year] = date.split('/');
        const [hour, minute] = time.split(':');
        return  new Date(Number(year), Number(month) - 1, Number(day), Number(hour), Number(minute));
    }
}
