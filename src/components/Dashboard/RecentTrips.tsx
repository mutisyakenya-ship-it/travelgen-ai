import { Link } from "react-router-dom";
import type { Trip } from "../../types/itinerary";


type Props = {

  trips:Trip[];

};

function RecentTrips({

  trips

}:Props){

return(

<section

className="
rounded-3xl
bg-white
p-6
shadow
"

>

<h2

className="
text-2xl
font-bold
"

>

Recent Trips

</h2>

<div

className="
mt-6
space-y-4
"

>

{

trips.length===0

?

(

<p

className="
text-slate-500
"

>

No trips yet.

</p>

)

:

(

trips

.slice(

0,

5

)

.map(

trip=>(

<Link

key={trip.id}

to={`/trips/${trip.id}`}

>

<div

className="
flex
items-center
justify-between
border-b
pb-4
hover:bg-slate-50
rounded-xl
px-3
py-2
transition
"

>

<div>

<h3

className="
font-semibold
text-slate-800
"

>

{trip.destination}

</h3>

<p

className="
text-sm
text-slate-500
"

>

{trip.days}

Days • {trip.budget}

</p>

</div>

<span

className="
rounded-full
bg-green-100
px-3
py-1
text-xs
font-medium
text-green-700
"

>

{trip.travelStyle}

</span>

</div>

</Link>

)

)

)

}

</div>

</section>

);

}

export default RecentTrips;