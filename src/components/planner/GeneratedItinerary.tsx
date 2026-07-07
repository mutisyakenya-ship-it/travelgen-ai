
import DayCard from "../../components/Itinerary/DayCard";
import Timeline from "../../components/Itinerary/TimeLine";

import type {Day} from "../../pages/types/itinerary"

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
space-y-8
"

>

{

itinerary.map(

(day)=>(

<DayCard

key={day.day}

day={day.day}

>

<div

className="
space-y-5
"

>

<Timeline

activities={day.activities}

/>

<div

className="
grid
md:grid-cols-2
gap-4
"

>

<div

className="
rounded-2xl
bg-green-50
p-4
"

>

<h3

className="
font-semibold
text-green-700
"

>

💰 Estimated Cost

</h3>

<p>

{day.estimatedCost}

</p>

</div>

<div

className="
rounded-2xl
bg-blue-50
p-4
"

>

<h3

className="
font-semibold
text-blue-700
"

>

🏨 Hotel

</h3>

<p>

{day.hotel}

</p>

</div>

<div

className="
rounded-2xl
bg-purple-50
p-4
"

>

<h3

className="
font-semibold
text-purple-700
"

>

🏠 Airbnb

</h3>

<p>

{day.airbnb}

</p>

</div>

<div

className="
rounded-2xl
bg-orange-50
p-4
"

>

<h3

className="
font-semibold
text-orange-700
"

>

📍 Attractions

</h3>

<ul

className="
list-disc
pl-5
"

>

{

(day.attractions ??[]).map(

(place,index)=>(

<li

key={index}

>

{place}

</li>

)

)

}

</ul>

</div>

</div>

<div

className="
rounded-2xl
bg-yellow-50
p-4
"

>

<h3

className="
font-semibold
text-yellow-700
"

>

🍽 Restaurants

</h3>

<ul

className="
list-disc
pl-5
"

>

{

(day.restaurants ?? []).map(

(restaurant,index)=>(

<li

key={index}

>

{restaurant}

</li>

)

)

}

</ul>

</div>

<div

className="
rounded-2xl
bg-slate-100
p-4
"

>

<h3

className="
font-semibold
"

>

💡 Travel Tips

</h3>

<p>

{day.tips}

</p>

</div>

</div>

</DayCard>

)

)

}

</div>

);

}

export default GeneratedItinerary;

