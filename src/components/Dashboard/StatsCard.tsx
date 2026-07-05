import type { ReactNode } from "react";

type Props = {

  title: string;

  value: string | number;

  icon?: ReactNode;

};

function StatsCard({

  title,

  value,

  icon

}: Props) {

  return (

    <div

      className="
      rounded-3xl
      bg-white
      p-6
      shadow-md
      border
      border-slate-100
      hover:shadow-xl
      transition
      "

    >

      <div

        className="
        flex
        items-center
        justify-between
        "

      >

        <h3

          className="
          text-sm
          font-medium
          uppercase
          tracking-wide
          text-slate-500
          "

        >

          {title}

        </h3>

        {

          icon && (

            <div

              className="
              rounded-xl
              bg-green-100
              p-2
              text-green-700
              "

            >

              {icon}

            </div>

          )

        }

      </div>

      <p

        className="
        mt-4
        text-4xl
        font-bold
        text-slate-900
        "

      >

        {value}

      </p>

    </div>

  );

}

export default StatsCard;