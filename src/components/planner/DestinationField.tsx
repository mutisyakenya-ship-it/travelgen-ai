type Props = {

value:string

onChange:(value:string)=>void

}

function DestinationField({

value,

onChange

}:Props){

return(

<div>

<label

className="mb-2 block font-medium"

>

Destination

</label>

<input

type="text"

placeholder="Naivasha"

value={value}

onChange={(e)=>

onChange(

e.target.value

)

}

className="
w-full
rounded-xl
border
p-3
focus:outline-none
focus:ring-2
focus:ring-green-700
"

/>

</div>

)

}

export default DestinationField