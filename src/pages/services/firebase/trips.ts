
import {

  addDoc,

  collection,

  deleteDoc,

  doc,

  getDoc,

  getDocs,

  orderBy,

  query,

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
      createdAt:

      serverTimestamp()

    }

  );

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

