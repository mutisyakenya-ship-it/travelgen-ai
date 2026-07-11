import {

useEffect,
useState

}

from "react";

import {

formatDistanceToNow

}

from "date-fns";

import {

auth

}

from "../../pages/services/firebase/firebase";

import {

addComment,
removeComment,
subscribeComments

}

from "../../pages/services/firebase/trips";

import type {

Comment

}

from "../../pages/types/comment";
type Props={

ownerId:string;

tripId:string;

};
function CommentSection({

ownerId,

tripId

}:Props){

const [

comments,

setComments

]

=

useState<Comment[]>([]);

const [

text,

setText

]

=

useState("");

useEffect(()=>{

const unsubscribe=

subscribeComments(

ownerId,

tripId,

setComments

);

return unsubscribe;

},

[

ownerId,

tripId

]);

async function handleSubmit(){

const user=

auth.currentUser;

if(

!user ||

!text.trim()

)return;

await addComment(

ownerId,

tripId,

user.uid,

user.displayName ??

"Traveler",

text

);

setText("");

}

async function handleDelete(

id:string

){

await removeComment(

ownerId,

tripId,

id

);

}
return(

<div

className="mt-12"

>

<h2

className="text-2xl font-bold"

>

Comments

</h2>

<textarea

value={text}

onChange={(e)=>

setText(

e.target.value

)

}

placeholder="Share your experience..."

className="
mt-5
w-full
rounded-2xl
border
p-4
"

/>

<button

onClick={handleSubmit}

className="
mt-4
rounded-xl
bg-green-600
px-5
py-3
text-white
"

>

Post Comment

</button>

<div

className="
mt-8
space-y-5
"

>

{

comments.map(

comment=>(

<div

key={comment.id}

className="
rounded-2xl
bg-white
p-5
shadow
"

>

<div

className="
flex
items-center
justify-between
"

>

<div

className="
flex
items-center
gap-3
"

>

<div

className="
h-10
w-10
rounded-full
bg-green-600
text-white
flex
items-center
justify-center
font-bold
"

>

{

comment.authorName[0]

}

</div>

<div>

<p

className="font-semibold"

>

{

comment.authorName

}

</p>

<p

className="
text-sm
text-slate-500
"

>

{

comment.createdAt

?

formatDistanceToNow(

comment.createdAt.toDate(),

{

addSuffix:true

}

)

:

"Just now"

}

</p>

</div>

</div>

{

auth.currentUser?.uid===

comment.authorId

&&(

<button

onClick={()=>

handleDelete(

comment.id

)

}

className="
text-red-500
"

>

Delete

</button>

)

}

</div>

<p

className="
mt-4
text-slate-700
"

>

{

comment.text

}

</p>

</div>

)

)

}

</div>

</div>

);

}
export default CommentSection;