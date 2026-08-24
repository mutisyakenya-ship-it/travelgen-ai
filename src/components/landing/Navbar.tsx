import { Link } from "react-router-dom";
import { ROUTES } from "../../constants/routes";

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-[var(--color-border-light)] bg-[var(--color-surface)]/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* Brand */}
        <Link
          to={ROUTES.HOME}
          className="text-2xl font-bold tracking-tight text-[var(--color-primary)] transition-colors hover:text-[var(--color-primary-dark)]"
        >
          TravelGen AI
        </Link>

        {/* Navigation */}
        <ul className="hidden items-center gap-8 md:flex">
          <li>
            <Link
              to={ROUTES.HOME}
              className="text-sm font-medium text-[var(--color-text-secondary)] transition-colors hover:text-[var(--color-primary)]"
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              to={ROUTES.PLANNER}
              className="text-sm font-medium text-[var(--color-text-secondary)] transition-colors hover:text-[var(--color-primary)]"
            >
              Planner
            </Link>
          </li>

          <li>
            <Link
              to={ROUTES.POPULAR_DESTINATIONS}
              className="text-sm font-medium text-[var(--color-text-secondary)] transition-colors hover:text-[var(--color-primary)]"
            >
              Destinations
            </Link>
          </li>

          <li>
            <Link
              to={ROUTES.LOGIN}
              className="text-sm font-medium text-[var(--color-text-secondary)] transition-colors hover:text-[var(--color-primary)]"
            >
              Portfolio
            </Link>
          </li>
        </ul>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <Link
            to="/login"
            className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-2 text-sm font-medium text-[var(--color-primary)] transition-all hover:border-[var(--color-primary)] hover:text-[var(--color-primary-dark)]"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="rounded-xl bg-[var(--color-primary)] px-5 py-2 text-sm font-semibold text-white shadow-[var(--shadow-soft)] transition-all hover:bg-[var(--color-primary-dark)]"
          >
            Get Started
          </Link>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;