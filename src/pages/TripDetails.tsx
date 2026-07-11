
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import type {Day} from "./types/itinerary"
import {

useEffect,
useRef,
useState

}

from "react";
import CommentSection from "../components/comments/CommentSection";
import {

Link,
useNavigate,
useParams

}

from "react-router-dom";
import GeneratedItinerary from "../components/planner/GeneratedItinerary";
import {

auth

}

from "../pages/services/firebase/firebase";

import {

getTrip,
deleteTrip,
updateTrip,
toggleFavorite,
makeTripShareable,
likeTrip,
unlikeTrip

}

from "../pages/services/firebase/trips";

type Trip = {
id:string;
destination:string;
budget:string;
estimatedCost:string;
days:number;
travelStyle:string;
itinerary:Day[];
accommodation: string;
transport: string;
favorite:boolean;
shareable:boolean;
likes:number;
likedBy:string[];

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
async function handleLike(){

const user = auth.currentUser;

if(!user || !trip) return;

const liked =

(trip.likedBy ?? [])

.includes(user.uid);

if(liked){

await unlikeTrip(

user.uid,

trip.id,

user.uid

);

setTrip({

...trip,

likes:

trip.likes - 1,

likedBy:

(trip.likedBy ?? []).filter(

id => id !== user.uid

)

});

}

else{

await likeTrip(

user.uid,

trip.id,

user.uid

);

setTrip({

...trip,

likes:

trip.likes + 1,

likedBy:[

...(trip.likedBy ?? []),

user.uid

]

});

}

}

async function handleShare() {

const user = auth.currentUser;

if (!user || !trip) return;

try {

await makeTripShareable(

user.uid,

trip.id

);

const shareUrl =

`${window.location.origin}/share/${trip.id}`;

const message =

`🌍 Check out my ${trip.destination} itinerary!\n\n${shareUrl}`;

if (

navigator.share &&

navigator.canShare?.({

url: shareUrl

})

) {

await navigator.share({

title: trip.destination,

text: message,

url: shareUrl

});

}

else {

window.open(

`https://wa.me/?text=${encodeURIComponent(message)}`,

"_blank"

);

}

}

catch(error){

console.log(

"Share cancelled"

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
  className="mt-10"
>
  <GeneratedItinerary
    destination={trip.destination}
    budget={trip.budget}
    travelStyle={trip.travelStyle}
    accommodation={(trip as any).accommodation ?? ""}
    transport={(trip as any).transport ?? ""}
    days={trip.days}
    itinerary={trip.itinerary}
  />
</div>

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

" ⭐Favorited"

:

"🤍 Favorite"

}

</button>
<button

onClick={handleLike}

className="rounded-xl bg-rose-600 px-5 py-3 text-white"

>

👍 {trip.likes}

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
<CommentSection

ownerId={auth.currentUser!.uid}

tripId={trip.id}

/>
</div>

</div>

</div>
);

}

export default TripDetails;

