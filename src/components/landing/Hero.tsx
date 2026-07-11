import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import heroImage from "../../assets/images/hero.jpg";
import safari from "../../assets/images/safari.jpg";
import hotel from "../../assets/images/hotel.jpg";
import food from "../../assets/images/food.jpg";

function Hero() {

  return (

    <section className="bg-slate-50 overflow-hidden">

      <div className="mx-auto max-w-7xl px-6 py-20">

        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* LEFT */}

          <div>

            <motion.h1

              initial={{ opacity: 0, y: 20 }}

              animate={{ opacity: 1, y: 0 }}

              transition={{ duration: 0.6 }}

              className="
              text-5xl
              font-bold
              leading-tight
              text-slate-900
              lg:text-6xl
              "

            >

              Discover Kenya Through

              <span className="block text-green-700">

                AI-Powered Itineraries

              </span>

            </motion.h1>

            <motion.p

              initial={{ opacity: 0 }}

              animate={{ opacity: 1 }}

              transition={{ delay: 0.2 }}

              className="
              mt-6
              max-w-xl
              text-lg
              text-slate-600
              "

            >

              Generate personalized travel plans,

              discover attractions, accommodation,

              restaurants and local experiences

              tailored to your budget.

            </motion.p>

            <div

              className="
              mt-8
              flex
              gap-4
              flex-wrap
              "

            >

              <Link

                to="/planner"

                className="
                rounded-xl
                bg-green-700
                px-6
                py-3
                font-semibold
                text-white
                transition
                hover:bg-green-800
                "

              >

                Start Planning

              </Link>

              <button

                className="
                rounded-xl
                border
                border-slate-300
                px-6
                py-3
                font-semibold
                transition
                hover:bg-slate-100
                "

              >

                Explore Trips

              </button>

            </div>

            <div

              className="
              mt-12
              flex
              gap-10
              "

            >

              <div>

                <h3 className="text-3xl font-bold">

                  50+

                </h3>

                <p className="text-slate-500">

                  Destinations

                </p>

              </div>

              <div>

                <h3 className="text-3xl font-bold">

                  1,000+

                </h3>

                <p className="text-slate-500">

                  Trips

                </p>

              </div>

              <div>

                <h3 className="text-3xl font-bold">

                  24/7

                </h3>

                <p className="text-slate-500">

                  AI Planning

                </p>

              </div>

            </div>

          </div>

          {/* RIGHT */}

          <div className="relative">

            <motion.img

              initial={{ opacity: 0, scale: 0.95 }}

              animate={{ opacity: 1, scale: 1 }}

              transition={{ duration: 0.7 }}

              src={heroImage}

              alt="Kenya Travel"

              className="
              relative
              z-10
              rounded-3xl
              shadow-2xl
              border
              border-white/40
              "

            />

            {/* Safari */}

            <motion.div

              animate={{

                y: [0, -12, 0]

              }}

              transition={{

                duration: 4,

                repeat: Infinity

              }}

              className="
              absolute
              -top-10
              -left-10
              z-20
              w-40
              rounded-2xl
              bg-white
              p-2
              shadow-xl
              rotate-[-8deg]
              "

            >

              <img

                src={safari}

                className="
                h-24
                w-full
                rounded-xl
                object-cover
                "

              />

              <p className="mt-2 font-semibold">

                Maasai Mara

              </p>

              <p className="text-xs text-slate-500">

                Wildlife Safari

              </p>

            </motion.div>

            {/* Hotel */}

            <motion.div

              animate={{

                y: [0, 10, 0]

              }}

              transition={{

                duration: 5,

                repeat: Infinity

              }}

              className="
              absolute
              top-24
              -right-12
              z-20
              w-44
              rounded-2xl
              bg-white
              p-2
              shadow-xl
              rotate-[6deg]
              "

            >

              <img

                src={hotel}

                className="
                h-28
                w-full
                rounded-xl
                object-cover
                "

              />

              <p className="mt-2 font-semibold">

                Luxury Stay

              </p>

              <p className="text-xs text-slate-500">

                Nairobi Hotels

              </p>

            </motion.div>

            {/* Food */}

            <motion.div

              animate={{

                y: [0, -8, 0]

              }}

              transition={{

                duration: 6,

                repeat: Infinity

              }}

              className="
              absolute
              -bottom-10
              left-10
              z-20
              w-36
              rounded-2xl
              bg-white
              p-2
              shadow-xl
              rotate-[8deg]
              "

            >

              <img

                src={food}

                className="
                h-20
                w-full
                rounded-xl
                object-cover
                "

              />

              <p className="mt-2 font-semibold">

                Local Cuisine

              </p>

              <p className="text-xs text-slate-500">

                Kenyan Delicacies

              </p>

            </motion.div>

          </div>

        </div>

      </div>

    </section>

  );

}

export default Hero;