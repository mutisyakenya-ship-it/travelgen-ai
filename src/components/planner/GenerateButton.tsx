
type Props = {

  loading?: boolean;

};

function GenerateButton({

  loading = false

}: Props) {

  return (

    <button

      type="submit"

      disabled={loading}

      className="
      w-full
      rounded-xl
      bg-green-700
      py-3
      font-semibold
      text-white
      transition
      hover:bg-green-800
      disabled:opacity-60
      disabled:cursor-not-allowed
      "

    >

      {

        loading

        ?

        "AI is planning your trip..."

        :

        "Generate Itinerary"

      }

    </button>

  );

}

export default GenerateButton;

