
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import QRCode from "react-qr-code";
import { getSharedTrip, incrementViews } from "./services/firebase/trips";
import { Link } from "react-router-dom";
import DayCard from "../components/Itinerary/DayCard";
import Timeline from "../components/Itinerary/TimeLine";

type Activity = {
  title:string;
  description:string;
  icon:string;
};

type Day = {
  day:number;
  activities:Activity[];
};

type Trip = {
  id:string;
  destination:string;
  budget:string;
  days:number;
  travelStyle:string;
  itinerary:Day[];
  shareable:boolean;
  views:number;
  likes:number;
};

function SharedTrip(){

const { id } = useParams();

const [trip,setTrip] = useState<Trip | null>(null);

const [loading,setLoading] = useState(true);

useEffect(()=>{

loadTrip();

},[]);

async function loadTrip(){

if(!id) return;
await incrementViews(id);
const data = await getSharedTrip(id);

setTrip(data as Trip);

setLoading(false);

}

if(loading){

return(

<div className="h-screen flex items-center justify-center">

Loading...

</div>

);

}

if(!trip){

return(

<div className="h-screen flex items-center justify-center">

Trip not found

</div>

);

}

return (

<div className="min-h-screen bg-slate-50">

<div className="max-w-5xl mx-auto px-6 py-12">

{/* Hero */}

<div
className="
rounded-3xl
bg-gradient-to-r
from-green-700
to-emerald-500
p-10
text-white
shadow-xl
"
>

<h1
className="
text-5xl
font-bold
"
>

{trip.destination}

</h1>

<p
className="
mt-3
opacity-90
"
>

Shared with TravelGen AI

</p>

<div
className="
mt-6
flex
gap-3
flex-wrap
"
>

<span
className="
rounded-full
bg-white/20
px-4
py-2
"
>

{trip.budget}

</span>

<span
className="
rounded-full
bg-white/20
px-4
py-2
"
>

{trip.days} Days

</span>

<span
className="
rounded-full
bg-white/20
px-4
py-2
"
>

{trip.travelStyle}

</span>

</div>

<p
className="
mt-6
text-sm
opacity-90
"
>

👀 {trip.views || 0} views

</p>

</div>

{/* Itinerary */}

<div
className="
mt-8
rounded-3xl
bg-white
p-8
shadow-xl
"
>

<div
className="
space-y-6
"
>

{

trip.itinerary.map((day)=>(

<DayCard

key={day.day}

day={day.day}

>

<Timeline

activities={day.activities}

/>

</DayCard>

))

}

</div>

</div>

{/* QR */}

<div
className="
mt-12
flex
justify-center
"
>

<div
className="
rounded-2xl
bg-white
p-5
shadow-lg
"
>

<QRCode

value={window.location.href}

size={140}

/>

<p
className="
mt-4
text-center
text-sm
text-slate-500
"
>

Scan to open itinerary

</p>

</div>

</div>

{/* CTA */}

<div
className="
mt-12
text-center
"
>

<h2
className="
text-2xl
font-bold
"
>

Ready for your next adventure?

</h2>

<p
className="
mt-3
text-slate-500
"
>

Create personalized trips with AI

</p>

<Link

to="/planner"

className="
mt-6
inline-block
rounded-xl
bg-green-700
px-6
py-3
font-semibold
text-white
hover:bg-green-800
"

>

Plan Your Own Trip

</Link>

</div>

<footer
className="
mt-16
border-t
pt-8
text-center
text-slate-400
"
>

Generated with TravelGen AI

</footer>

</div>

</div>

)}
export default SharedTrip;