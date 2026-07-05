type Props = {
  userName?: string;
};

function WelcomeBanner({
  userName = "Traveler",
}: Props) {

  return (

    <section
      className="rounded-3xl bg-gradient-to-r
      from-green-700 to-emerald-600
      p-8 text-white"
    >

      <h1 className="text-4xl font-bold">

        Welcome back, {userName} 

      </h1>

      <p className="mt-3 opacity-90">

        Ready for your next adventure?

      </p>

    </section>

  );

}

export default WelcomeBanner;