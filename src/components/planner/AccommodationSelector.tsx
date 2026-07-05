type Props={

value:string;

onChange:(value:string)=>void;

}

function AccommodationSelector({

value,

onChange

}:Props){

return(

<div>

<label

className="mb-2 block font-medium"

>

Accommodation

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

Hotel

</option>

<option>

Resort

</option>

<option>

Airbnb

</option>

<option>

Camping

</option>

</select>

</div>

)

}

export default AccommodationSelector