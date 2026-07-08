
import { useState } from "react";

import DestinationField from "./DestinationField";
import BudgetSelector from "./BudgetSelector";
import DurationSelector from "./DurationSelector";
import TravelStyleSelector from "./TravelStyleSelector";
import GenerateButton from "./GenerateButton";
import AccommodationSelector from "./AccommodationSelector";
import TransportSelector from "./TransportSelector"
import GeneratedItinerary from "./GeneratedItinerary";
import type {Day} from "../../pages/types/itinerary";
import { auth } from "../../pages/services/firebase/firebase";
import { saveTrip } from "../../pages/services/firebase/trips";
import {
  generateItinerary
} from "../../pages/services/gemini/itineraryServices";

function PlannerForm() {

  const [

    destination,

    setDestination

  ] = useState("");

  const [

    budget,

    setBudget

  ] = useState("Medium");

  const [

    days,

    setDays

  ] = useState(3);

  const [

    travelStyle,

    setTravelStyle

  ] = useState("Adventure");
const [
  accommodation,
  setAccommodation
] = useState("Hotel");

const [
  transport,
  setTransport
] = useState("Flight");
const [

itinerary,

setItinerary

]

=

useState<Day[]>([]);
  const [

    loading,

    setLoading

  ] = useState(false);

  const [

    error,

    setError

  ] = useState("");

  const [

    success,

    setSuccess

  ] = useState("");



  const handleSubmit = async (

    e: React.FormEvent

  ) => {

    e.preventDefault();

    setError("");

    setSuccess("");

     

    if (

      !destination.trim()

    ) {

      setError(

        "Please enter a destination."

      );

      return;

    }



    try {

      setLoading(true);
     setItinerary([])
     const result = await generateItinerary(
  destination,
  budget,
  days,
  travelStyle,
  accommodation,
  transport
);

setItinerary(result);
setTimeout(() => {
  document
    .getElementById("generated-itinerary")
    ?.scrollIntoView({
      behavior: "smooth"
    });
}, 300);

const user = auth.currentUser;

if (!user) {
  throw new Error("User not authenticated");
}

await saveTrip(user.uid, {
  destination,
  budget,
  days,
  travelStyle,
  accommodation,
  transport,
  itinerary: result,
});


      setSuccess(

        "Trip generated and saved successfully."

      );



    }

    catch (

      err

    ) {

      console.error(

        err

      );



      if (

        err instanceof Error

      ) {

        setError(

          err.message

        );

      }

      else {

        setError(

          "Something went wrong."

        );

      }

    }

    finally {

      setLoading(false);

    }

  };



  return (

    <div

      className="
      max-w-4xl
      mx-auto
      space-y-8
      "

    >

      <form

        onSubmit={handleSubmit}

        className="
        rounded-3xl
        bg-white
        p-8
        shadow-xl
        space-y-6
        "

      >

        <h2

          className="
          text-3xl
          font-bold
          text-slate-800
          "

        >

          Plan Your Journey

        </h2>



        {

          error && (

            <div

              className="
              rounded-xl
              bg-red-100
              p-4
              text-red-700
              "

            >

              {error}

            </div>

          )

        }



        {

          success && (

            <div

              className="
              rounded-xl
              bg-green-100
              p-4
              text-green-700
              "

            >

              {success}

            </div>

          )

        }



        <DestinationField

          value={destination}

          onChange={setDestination}

        />



        <BudgetSelector

          value={budget}

          onChange={setBudget}

        />



        <DurationSelector

          value={days}

          onChange={setDays}

        />



        <TravelStyleSelector

          value={travelStyle}

          onChange={setTravelStyle}

        />
        <AccommodationSelector
  value={accommodation}
  onChange={setAccommodation}
/>

<TransportSelector
  value={transport}
  onChange={setTransport}
/>



        <GenerateButton

          loading={loading}

        />

      </form>



      <GeneratedItinerary
  destination={destination}
  budget={budget}
  days={days}
  travelStyle={travelStyle}
  accommodation={accommodation}
  transport={transport}
  itinerary={itinerary}
/>
    </div>

  );

}

export default PlannerForm;

