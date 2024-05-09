import { UniqueEntityID } from "../../../../core/entities/unique-id";

export class Meal extends UniqueEntityID{
    constructor(
        private name:string,
        private description:string,
        private mealTime:Date,
        private isOnTheDiet:boolean,
        private userID:string,

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
    getUserID(){
        return this.userID;
    }


    setName(name:string,){
        this.name = name
    }
    setDescription(description:string,){
        this.description = description
    }
    setMealTime(mealTime: Date) {
        this.mealTime = mealTime;
    }
    setIsOnTheDiet(value:boolean){
        this.isOnTheDiet = value
    }
   

    parseMealTime(mealTime: string) {
        const [date, time] = mealTime.split(' - ');
        const [day, month, year] = date.split('/');
        const [hour, minute] = time.split(':');
        return  new Date(Number(year), Number(month) - 1, Number(day), Number(hour), Number(minute));
    }
}
