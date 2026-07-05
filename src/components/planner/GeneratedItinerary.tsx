import DayCard from "../../components/Itinerary/DayCard";
import Timeline from "../../components/Itinerary/TimeLine";

type Activity = {

title:string;

description:string;

icon:string;

};

type Day = {

day:number;

activities:Activity[];

};

type Props = {

itinerary:Day[];

};

function GeneratedItinerary({

itinerary

}:Props){

if(

itinerary.length===0

){

return null;

}

return(

<div

className="
space-y-6
"

>

{

itinerary.map(

(day)=>(

<DayCard

key={day.day}

day={day.day}

>

<Timeline

activities={day.activities}

/>

</DayCard>

)

)

}

</div>

);

}

export default GeneratedItinerary;