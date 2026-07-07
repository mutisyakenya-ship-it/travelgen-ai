export type Activity = {

title:string;

description:string;

icon:string;

};

export type Day = {

day:number;

estimatedCost:string;

hotel:string;

airbnb:string;

restaurants:string[];

attractions:string[];

tips:string;

activities:Activity[];

};