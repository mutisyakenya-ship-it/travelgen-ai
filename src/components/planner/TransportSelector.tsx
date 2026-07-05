type Props={

value:string;

onChange:(value:string)=>void;

}

function TransportSelector({

value,

onChange

}:Props){

return(

<div>

<label

className="mb-2 block font-medium"

>

Transport

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

Private Car

</option>

<option>

Bus

</option>

<option>

Flight

</option>

<option>

Train

</option>

</select>

</div>

)

}

export default TransportSelector