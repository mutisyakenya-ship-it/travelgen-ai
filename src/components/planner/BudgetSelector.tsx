import type { Budget } from "../../types/itinerary";

type Props = {
  value: Budget;
  onChange: (value: Budget) => void;
};

function BudgetSelector({

value,

onChange

}:Props){

return(

<div>

<label

className="mb-2 block font-medium"

>

Budget

</label>

<select

value={value}
onChange={(e) => onChange (e.target.value as Budget)}

className="
w-full
rounded-xl
border
p-3
"

>

<option>

Low

</option>

<option>

Medium

</option>

<option>

High

</option>

</select>

</div>

)

}

export default BudgetSelector