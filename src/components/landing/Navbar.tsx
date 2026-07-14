import {Link} from 'react-router-dom'
import { ROUTES } from '../../constants/routes'
function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur-md">

      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        <div className="text-2xl font-bold text-green-800">
          TravelGen AI
        </div>

        <ul className="hidden gap-8 md:flex">

          <li>
           <Link
  to={ROUTES.HOME}
  className="text-slate-700 transition hover:text-green-700"
>
  Home
</Link>
          </li>

          <li>
           <Link
  to={ROUTES.PLANNER}
  className="text-slate-700 transition hover:text-green-700"
>
  Planner
</Link>
          </li>

          <li>
           <Link
  to={ROUTES.POPULAR_DESTINATIONS}
  className="text-slate-700 transition hover:text-green-700"
>
  Destinations
</Link>
          </li>

          <li>
           <Link
  to={ROUTES.LOGIN}
  className="text-slate-700 transition hover:text-green-700"
>
  Portfolio
</Link>
          </li>

        </ul>

        <div className="flex gap-4">

          <Link to="/login" className="rounded-xl border border-slate-300 px-4 py-2 text-slate-700 hover:text-green-700">
            Login
          </Link>

          <Link to="/register" className="rounded-xl bg-green-700 px-5 py-2 font-semibold text-white hover:bg-green-800">
            Get Started
          </Link>

        </div>

      </div>

    </nav>
  )
}

export default Navbar