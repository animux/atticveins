export default class BodyProfile {
    constructor(gender, age, height, weight) {
        this.gender = gender;
        this.age = age;
        this.height = height;
        this.weight = weight;
        this.mtpbase = 2.205;
        this.itcbase = 2.54;
    };
    bmi() {
        return 703 * (this.weight * this.mtpbase) / (this.height * this.height);
    };
    bfp() {
        if (this.gender == 0 && this.age > 18) return 1.20 * this.bmi() + 0.23 * this.age - 16.2;
        else if (this.gender == 1 && this.age > 18) return 1.20 * this.bmi() + 0.23 * this.age - 5.4;
        else if (this.gender == 0 && this.age <= 18) return 1.51 * this.bmi() - 0.70 * this.age - 2.2;
        else if (this.gender = 1 && this.age <= 18) return  1.51 * this.bmi() - 0.70 * this.age + 1.4
        else return 0;
    };
    calorie() {
        let msj = () => {
            if (this.gender == 0) return (10 * this.weight) + (6.25 * (this.itcbase * this.height)) - (5 * this.age) + 5;
            if (this.gender == 1) return (10 * this.weight) + (6.25 * (this.itcbase * this.height)) - (5 * this.age) - 161; 
        };
        let rhb = () => {
            if (this.gender == 0) return (13.397 * this.weight) + (4.799 * (this.itcbase * this.height)) - (5.677 * this.age) + 88.362;
            if (this.gender == 1) return (9.247 * this.weight) + (3.098 * (this.itcbase * this.height)) - (4.330 * this.age) + 447.593;
        };
        let kma = () => { return 370 + (21.6 * (1 - this.bfp()) * this.weight) };

        return (msj() + rhb() + kma()) / 3;
    };
}