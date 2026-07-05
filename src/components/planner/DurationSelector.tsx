type Props={

value:number

onChange:(value:number)=>void

}

function DurationSelector({

value,

onChange

}:Props){

return(

<div>

<label

className="mb-2 block font-medium"

>

Days

</label>

<input

type="number"

min={1}

max={14}

value={value}

onChange={(e)=>

onChange(

Number(

e.target.value

)

)

}

className="
w-full
rounded-xl
border
p-3
"

/>

</div>

)

}

export default DurationSelector