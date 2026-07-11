import ActivityCard from "../../components/Itinerary/ActivityCard";
type Activity={

title:string;

description:string;

icon:string;

};
type Props={

activities:Activity[];

};

function Timeline({

activities

}:Props){

return(

<div

className="
space-y-4
"

>

{

activities.map(

(activity,index)=>(

<ActivityCard

key={index}

title={activity.title}

description={activity.description}

icon={activity.icon}

/>

)

)

}

</div>

);

}

export default Timeline;