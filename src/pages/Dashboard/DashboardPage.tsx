import { useEffect } from "react";
import { useState } from "react";
import WelcomeBanner from "../../components/Dashboard/WelcomeBanner";
import StatsCard from "../../components/Dashboard/StatsCard";
import QuickActions from "../../components/Dashboard/QuickActions";
import RecentTrips from "../../components/Dashboard/RecentTrips";
import { auth }from "../../services/firebase/firebase";
import { getTrips}from "../../services/firebase/trips";
import type { Trip } from "../../types/itinerary";


function Dashboard(){

const [

trips,

setTrips

]

=

useState<Trip[]>([]);


const [

loading,

setLoading

]

=

useState(

true

);


useEffect(()=>{

loadTrips();

},[]);



async function loadTrips(){

try{

const user=

auth.currentUser;

if(

!user

){

setLoading(

false

);

return;

}


const data=

await getTrips(

user.uid

);

setTrips(data);

}

catch(

error

){

console.error(

error

);

}

finally{

setLoading(

false

);

}

}


const totalTrips=

trips.length;


const destinations=

new Set(

trips.map(

trip=>

trip.destination

)

).size;


const styleCounts: Record<string, number> = {};

trips.forEach((trip) => {

  styleCounts[trip.travelStyle] =

    (styleCounts[trip.travelStyle] || 0) + 1;

});

const favoriteStyle =

Object.keys(styleCounts).length

?

Object.keys(styleCounts).reduce(

(a, b) =>

styleCounts[a] >

styleCounts[b]

?

a

:

b

)

:

"None";


if(

loading

){

return(

<div

className="
h-screen
flex
justify-center
items-center
"

>

Loading Dashboard...

</div>

);

}


return(

<div

className="
min-h-screen
bg-slate-50
"

>

<div

className="
mx-auto
max-w-7xl
px-6
py-12
"

>

<WelcomeBanner

userName="Ambrose"

/>


<div

className="
mt-8
grid
gap-6
md:grid-cols-3
"

>

<StatsCard

title="Trips"

value={totalTrips}

/>


<StatsCard

title="Destinations"

value={destinations}

/>


<StatsCard

title="Favorite"

value={favoriteStyle}

/>

</div>


<div

className="
mt-8
"

>

<QuickActions/>

</div>


<div

className="
mt-8
"

>

<RecentTrips

trips={trips}

/>

</div>

</div>

</div>

);

}

export default Dashboard;