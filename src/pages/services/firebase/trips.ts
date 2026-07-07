
import {

  addDoc,

  collection,
  collectionGroup,
  deleteDoc,
  where,
  doc,

  getDoc,

  getDocs,

  orderBy,
arrayRemove,
arrayUnion,
  query,
 increment,
  serverTimestamp,
  updateDoc

}

from "firebase/firestore";

import { db } from "./firebase";
export async function updateTrip(

uid:string,

tripId:string,

tripData:object

){

return await updateDoc(

doc(

db,

"users",

uid,

"trips",

tripId

),

tripData

);

}
export async function toggleFavorite(

uid:string,

tripId:string,

favorite:boolean

){

return await updateDoc(

doc(

db,

"users",

uid,

"trips",

tripId

),

{

favorite

}

);

}
export async function likeTrip(

uid:string,

tripId:string,

userId:string

){

return updateDoc(

doc(

db,

"users",

uid,

"trips",

tripId

),

{

likedBy:

arrayUnion(

userId

),

likes:

increment(1)

}

);

}
export async function unlikeTrip(

uid:string,

tripId:string,

userId:string

){

return updateDoc(

doc(

db,

"users",

uid,

"trips",

tripId

),

{

likedBy:

arrayRemove(

userId

),

likes:

increment(-1)

}

);

}
export async function makeTripShareable(

uid:string,

tripId:string

){

return await updateDoc(

doc(

db,

"users",

uid,

"trips",

tripId

),

{

shareable:true

}

);

}

export async function saveTrip(

  uid: string,
  tripData: object

){

  return await addDoc(

    collection(

      db,

      "users",

      uid,

      "trips"

    ),

    {

      ...tripData,
      favorite: false,
      shareable: false,
      views: 0,
      likes: 0,
      likedBy:[],
      createdAt: 

      serverTimestamp()

    }

  );

}
export async function incrementViews(

tripId:string

){

const q = query(

collectionGroup(

db,

"trips"

),

where(

"shareable",

"==",

true

)

);

const snapshot = await getDocs(q);

const docRef = snapshot.docs.find(

doc => doc.id === tripId

);

if(

docRef

){

await updateDoc(

docRef.ref,

{

views:increment(1)

}

);

}

}
export async function getTrips(

  uid: string

){

  const q = query(

    collection(

      db,

      "users",

      uid,

      "trips"

    ),

    orderBy(

      "createdAt",

      "desc"

    )

  );

  const snapshot = await getDocs(

    q

  );

  return snapshot.docs.map(

    trip => ({

      id:

      trip.id,

      ...trip.data()

    })

  );

}
export async function getSharedTrip(

tripId:string

){

const q = query(

collectionGroup(

db,

"trips"

),

where(

"shareable",

"==",

true

)

);

const snapshot = await getDocs(q);

const trip = snapshot.docs.find(

doc => doc.id === tripId

);

if(

trip

){

return{

id:trip.id,

...trip.data()

};

}

return null;

}





export async function getTrip(

  uid: string,

  tripId: string

){

  const ref = doc(

    db,

    "users",

    uid,

    "trips",

    tripId

  );

  const snapshot = await getDoc(

    ref

  );

  if(

    snapshot.exists()

  ){

    return {

      id:

      snapshot.id,

      ...snapshot.data()

    };

  }

  return null;

}



export async function deleteTrip(

  uid: string,

  tripId: string

){

  return await deleteDoc(

    doc(

      db,

      "users",

      uid,

      "trips",

      tripId

    )

  );

}

