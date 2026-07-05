
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

import {

useEffect,
useRef,
useState

}

from "react";

import {

Link,
useNavigate,
useParams

}

from "react-router-dom";

import {

auth

}

from "../pages/services/firebase/firebase";

import {

getTrip,
deleteTrip,
updateTrip,
toggleFavorite,
makeTripShareable

}

from "../pages/services/firebase/trips";

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

favorite:boolean;

shareable:boolean;

};

function TripDetails(){

const { id } = useParams();

const navigate = useNavigate();

const itineraryRef =

useRef<HTMLDivElement>(null);

const [

trip,

setTrip

]

=

useState<Trip|null>(null);

const [

loading,

setLoading

]

=

useState(true);

const [

editing,

setEditing

]

=

useState(false);

const [

destination,

setDestination

]

=

useState("");

const [

budget,

setBudget

]

=

useState("");

const [

days,

setDays

]

=

useState(0);

const [

travelStyle,

setTravelStyle

]

=

useState("");

const [

itinerary,

setItinerary

]

=

useState<Day[]>([]);

useEffect(()=>{

loadTrip();

},[]);

async function loadTrip(){

try{

const user=

auth.currentUser;

if(

!user ||

!id

){

setLoading(false);

return;

}

const data=

await getTrip(

user.uid,

id

);

if(

!data

){

setLoading(false);

return;

}

const tripData=

data as Trip;

setTrip(

tripData

);

setDestination(

tripData.destination

);

setBudget(

tripData.budget

);

setDays(

tripData.days

);

setTravelStyle(

tripData.travelStyle

);

setItinerary(

tripData.itinerary

);

}

catch(

error

){

console.error(

error

);

}

finally{

setLoading(false);

}

}

async function handleUpdate(){

const user=

auth.currentUser;

if(

!user ||

!id ||

!trip

)return;

await updateTrip(

user.uid,

id,

{

destination,

budget,

days,

travelStyle,

itinerary

}

);

setTrip({

...trip,

destination,

budget,

days,

travelStyle,

itinerary

});

setEditing(false);

}

async function handleDelete(){

const confirmDelete=

window.confirm(

"Delete this itinerary?"

);

if(

!confirmDelete

)return;

const user=

auth.currentUser;

if(

!user ||

!id

)return;

await deleteTrip(

user.uid,

id

);

navigate(

"/trips"

);

}

async function handleFavorite(){

const user=

auth.currentUser;

if(

!user ||

!trip

)return;

await toggleFavorite(

user.uid,

trip.id,

!trip.favorite

);

setTrip({

...trip,

favorite:

!trip.favorite

});

}

async function handleShare() {

  const user = auth.currentUser;

  if (!user || !trip) return;

  await makeTripShareable(

    user.uid,

    trip.id

  );

  const shareUrl =

    `${window.location.origin}/trips/${trip.id}`;

  const message =

    `🌍 Check out my ${trip.destination} itinerary!\n\n${shareUrl}`;

  if ("share" in navigator) {

    await (navigator as Navigator).share?.({

      title: trip.destination,

      text: message,

      url: shareUrl

    });

  } else {

    window.open(

      `https://wa.me/?text=${encodeURIComponent(message)}`,

      "_blank"

    );

  }

}

async function exportPDF(){

if(

!itineraryRef.current

)return;

const canvas=

await html2canvas(

itineraryRef.current

);

const image=

canvas.toDataURL(

"image/png"

);

const pdf=

new jsPDF(

"p",

"mm",

"a4"

);

const width=

210;

const height=

(

canvas.height *

width

)

/

canvas.width;

pdf.addImage(

image,

"PNG",

0,

0,

width,

height

);

pdf.save(

`${destination}.pdf`

);

}

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

Loading...

</div>

);

}

if(

!trip

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

Trip not found

</div>

);

}

return(

<div

className="
min-h-screen
bg-slate-50
py-10
"

>

<div

className="
max-w-5xl
mx-auto
px-6
"

>

<Link

to="/trips"

className="
text-green-700
font-medium
"

>

← Back to Trips

</Link>

<div

className="
mt-6
rounded-3xl
bg-white
p-8
shadow-xl
"

>

{

editing ?

(

<input

value={destination}

onChange={(e)=>

setDestination(

e.target.value

)

}

className="
w-full
border
rounded-xl
p-4
text-3xl
font-bold
"

/>

)

:

(

<h1

className="
text-4xl
font-bold
"

>

{destination}

</h1>

)

}

<div

className="
mt-6
flex
gap-4
flex-wrap
"

>

{

editing ?

(

<>

<input

value={budget}

onChange={(e)=>

setBudget(

e.target.value

)

}

className="
border
rounded-xl
p-3
"

/>

<input

type="number"

value={days}

onChange={(e)=>

setDays(

Number(

e.target.value

)

)

}

className="
border
rounded-xl
p-3
w-28
"

/>

<input

value={travelStyle}

onChange={(e)=>

setTravelStyle(

e.target.value

)

}

className="
border
rounded-xl
p-3
"

/>

</>

)

:

(

<>

<span

className="
rounded-full
bg-green-100
px-4
py-2
text-green-700
"

>

{budget}

</span>

<span

className="
rounded-full
bg-blue-100
px-4
py-2
text-blue-700
"

>

{days} Days

</span>

<span

className="
rounded-full
bg-purple-100
px-4
py-2
text-purple-700
"

>

{travelStyle}

</span>

</>

)

}

</div>

<div

ref={itineraryRef}

className="
mt-10
space-y-6
"

>

<h2

className="
text-2xl
font-semibold
"

>

Itinerary

</h2>

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

<div

className="
mt-8
flex
gap-4
flex-wrap
"

>

{

editing ?

(

<>

<button

onClick={handleUpdate}

className="
rounded-xl
bg-green-700
px-5
py-3
text-white
"

>

Save Changes

</button>

<button

onClick={()=>

setEditing(false)

}

className="
rounded-xl
bg-slate-200
px-5
py-3
"

>

Cancel

</button>

</>

)

:

(

<button

onClick={()=>

setEditing(true)

}

className="
rounded-xl
bg-blue-600
px-5
py-3
text-white
"

>

Edit Trip

</button>

)

}

<button

onClick={handleFavorite}

className="
rounded-xl
bg-pink-600
px-5
py-3
text-white
"

>

{

trip.favorite

?

"❤️ Favorited"

:

"🤍 Favorite"

}

</button>

<button

onClick={handleShare}

className="
rounded-xl
bg-indigo-600
px-5
py-3
text-white
"

>

🔗 Share

</button>

<button

onClick={exportPDF}

className="
rounded-xl
bg-green-600
px-5
py-3
text-white
"

>

Export PDF

</button>

<button

onClick={handleDelete}

className="
rounded-xl
bg-red-600
px-5
py-3
text-white
"

>

Delete Trip

</button>

</div>

</div>

</div>

</div>

);

}

export default TripDetails;

