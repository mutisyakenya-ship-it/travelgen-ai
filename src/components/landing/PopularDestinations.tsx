const cloud = "https://res.cloudinary.com/dxemxzh3/image/upload/w_434,h_576,c_fill,q_auto,f_auto";
const Naivasha = `${cloud}/Naivasha`;
const hero = `${cloud}/hero`;
const Mara = `${cloud}/Mara`;
const nairobi = `${cloud}/nairobi`;
const mombasa = `${cloud}/mombasa`;
const destinations = [

{
id:1,
name:"Naivasha",
image:Naivasha
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

<section className="bg-[var(--color-surface)] py-16 sm:py-20">

<div className="mx-auto max-w-7xl px-6">

<div className="text-center">

<h2 className="text-4xl font-bold">

Popular Destinations

</h2>

<p className="mt-4 text-[var(--color-text-secondary)]">

Explore Kenya's most loved travel experiences.

</p>

</div>

<div className="mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:grid sm:grid-cols-2 sm:gap-6 sm:overflow-visible sm:pb-0 lg:grid-cols-5">

{destinations.map((destination)=>(

<div

key={destination.id}

className="min-w-[11rem] snap-start overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] shadow-[var(--shadow-soft)] transition duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-card)] sm:min-w-0"

>

<img

src={destination.image}

alt={destination.name}

className="h-40 w-full object-cover sm:h-44"

/>

<div className="p-4">

<h3 className="text-lg font-semibold text-[var(--color-text)]">

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