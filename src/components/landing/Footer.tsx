import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="mx-auto max-w-7xl px-6 py-14">

        <div className="grid gap-10 md:grid-cols-4">

          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold text-white">
              TravelGen AI
            </h2>

            <p className="mt-4 text-sm leading-7 text-slate-400">
              AI-powered travel planning built to help travelers discover,
              organize and share unforgettable adventures across Kenya.
            </p>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-lg font-semibold text-white">
              Product
            </h3>

            <ul className="mt-5 space-y-3">

              <li>
                <Link
                  to="/planner"
                  className="hover:text-green-400 transition"
                >
                  Planner
                </Link>
              </li>

              <li>
                <Link
                  to="/portfolio"
                  className="hover:text-green-400 transition"
                >
                  Portfolio
                </Link>
              </li>

              <li>
                <Link
                  to="/explore"
                  className="hover:text-green-400 transition"
                >
                  Explore Trips
                </Link>
              </li>

            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold text-white">
              Company
            </h3>

            <ul className="mt-5 space-y-3">

              <li>
                <Link
                  to="/about"
                  className="hover:text-green-400 transition"
                >
                  About
                </Link>
              </li>

              <li>
                <Link
                  to="/contact"
                  className="hover:text-green-400 transition"
                >
                  Contact
                </Link>
              </li>

              <li>
                <Link
                  to="/privacy"
                  className="hover:text-green-400 transition"
                >
                  Privacy Policy
                </Link>
              </li>

            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-lg font-semibold text-white">
              Connect
            </h3>

            <ul className="mt-5 space-y-3">

              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-pink-400 transition"
                >
                  Instagram
                </a>
              </li>

              <li>
                <a
                  href="https://x.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-sky-400 transition"
                >
                  X (Twitter)
                </a>
              </li>

              <li>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition"
                >
                  LinkedIn
                </a>
              </li>

            </ul>
          </div>

        </div>

        {/* Bottom */}
        <div className="mt-12 border-t border-slate-700 pt-6 flex flex-col items-center justify-between gap-4 md:flex-row">

          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} TravelGen AI. All rights reserved.
          </p>

          <div className="flex gap-6 text-sm">

            <Link
              to="/privacy"
              className="hover:text-green-400 transition"
            >
              Privacy
            </Link>

            <Link
              to="/contact"
              className="hover:text-green-400 transition"
            >
              Contact
            </Link>

            <Link
              to="/about"
              className="hover:text-green-400 transition"
            >
              About
            </Link>

          </div>

        </div>

      </div>
    </footer>
  );
}

export default Footer;