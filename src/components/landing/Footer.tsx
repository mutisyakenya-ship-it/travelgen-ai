function Footer() {
  return (

    <footer className="bg-slate-900 py-12">

      <div className="mx-auto max-w-7xl px-6">

        <div className="grid gap-8 md:grid-cols-4">

          <div>

            <h3 className="text-xl font-bold text-white">

              TravelGen AI

            </h3>

            <p className="mt-3 text-slate-400">

              Explore Kenya smarter with AI-powered travel planning.

            </p>

          </div>

          <div>

            <h4 className="font-semibold text-white">

              Product

            </h4>

            <ul className="mt-4 space-y-2 text-slate-400">

              <li>Planner</li>
              <li>Portfolio</li>
              <li>Destinations</li>

            </ul>

          </div>

          <div>

            <h4 className="font-semibold text-white">

              Company

            </h4>

            <ul className="mt-4 space-y-2 text-slate-400">

              <li>About</li>
              <li>Contact</li>
              <li>Privacy</li>

            </ul>

          </div>

          <div>

            <h4 className="font-semibold text-white">

              Follow Us

            </h4>

            <ul className="mt-4 space-y-2 text-slate-400">

              <li>Instagram</li>
              <li>X</li>
              <li>LinkedIn</li>

            </ul>

          </div>

        </div>

        <div className="mt-10 border-t border-slate-700 pt-6 text-center text-slate-500">

          © 2026 TravelGen AI

        </div>

      </div>

    </footer>

  );
}

export default Footer;