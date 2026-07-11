import naivasha from "../../assets/images/naivasha.jpg";
import hero from "../../assets/images/hero.jpg";
import Mara from "../../assets/images/Mara.jpg";
import nairobi from "../../assets/images/nairobi.jpg";
import mombasa from "../../assets/images/mombasa.jpg";

const destinations = [

{
id:1,
name:"Naivasha",
image:naivasha
},

{
id:2,
name:"Diani",
image:hero
},

{
id:3,
name:"Maasai Mara",
image:Mara
},

{
id:4,
name:"Nairobi",
image:nairobi
},

{
id:5,
name:"Mombasa",
image:mombasa
}

]

function PopularDestinations(){

return(

<section className="py-24 bg-white">

<div className="mx-auto max-w-7xl px-6">

<div className="text-center">

<h2 className="text-4xl font-bold">

Popular Destinations

</h2>

<p className="mt-4 text-slate-600">

Explore Kenya's most loved travel experiences.

</p>

</div>

<div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-5">

{destinations.map((destination)=>(

<div

key={destination.id}

className="overflow-hidden rounded-3xl shadow-md transition hover:-translate-y-2 hover:shadow-xl"

>

<img

src={destination.image}

alt={destination.name}

className="h-72 w-full object-cover"

/>

<div className="p-5">

<h3 className="font-semibold text-xl">

{destination.name}

</h3>

</div>

</div>

))}

</div>

</div>

</section>

)

}

export default PopularDestinations