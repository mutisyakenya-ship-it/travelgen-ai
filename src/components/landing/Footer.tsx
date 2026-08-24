import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-[var(--color-primary-dark)] text-[var(--color-primary-light)]">
      <div className="mx-auto max-w-7xl px-6 py-14">

        <div className="grid gap-10 md:grid-cols-4">

          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold text-white">
              TravelGen AI
            </h2>

            <p className="mt-4 text-sm leading-7 text-[var(--color-primary-light)]">
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
                  className="transition hover:text-[var(--color-accent)]"
                >
                  Planner
                </Link>
              </li>

              <li>
                <Link
                  to="/portfolio"
                  className="transition hover:text-[var(--color-accent)]"
                >
                  Portfolio
                </Link>
              </li>

              <li>
                <Link
                  to="/explore"
                  className="transition hover:text-[var(--color-accent)]"
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
                  className="transition hover:text-[var(--color-accent)]"
                >
                  About
                </Link>
              </li>

              <li>
                <Link
                  to="/contact"
                  className="transition hover:text-[var(--color-accent)]"
                >
                  Contact
                </Link>
              </li>

              <li>
                <Link
                  to="/privacy"
                  className="transition hover:text-[var(--color-accent)]"
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
                  className="transition hover:text-[var(--color-accent)]"
                >
                  Instagram
                </a>
              </li>

              <li>
                <a
                  href="https://x.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:text-[var(--color-accent)]"
                >
                  X (Twitter)
                </a>
              </li>

              <li>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:text-[var(--color-accent)]"
                >
                  LinkedIn
                </a>
              </li>

            </ul>
          </div>

        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-[var(--color-primary-light)]/30 pt-6 md:flex-row">

          <p className="text-sm text-[var(--color-text-muted)]">
            © {new Date().getFullYear()} TravelGen AI. All rights reserved.
          </p>

          <div className="flex gap-6 text-sm">

            <Link
              to="/privacy"
              className="transition hover:text-[var(--color-accent)]"
            >
              Privacy
            </Link>

            <Link
              to="/contact"
              className="transition hover:text-[var(--color-accent)]"
            >
              Contact
            </Link>

            <Link
              to="/about"
              className="transition hover:text-[var(--color-accent)]"
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