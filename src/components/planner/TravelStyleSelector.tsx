type Props={

value:string

onChange:(value:string)=>void

}

function TravelStyleSelector({

value,

onChange

}:Props){

return(

<div>

<label

className="mb-2 block font-medium"

>

Travel Style

</label>

<select

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
"

>

<option>

Adventure

</option>

<option>

Luxury

</option>

<option>

Family

</option>

<option>

Relaxation

</option>

</select>

</div>

)

}

export default TravelStyleSelector