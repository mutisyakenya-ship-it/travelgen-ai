import { useState } from "react";
import {
  Link,
  useNavigate,
  useSearchParams,
} from "react-router-dom";

import {
  login,
  googleLogin,
} from "../../services/firebase/auth";

function Login() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const requestedRedirect = searchParams.get("redirect");

  const redirect =
    requestedRedirect?.startsWith("/")
      ? requestedRedirect
      : "/dashboard";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    setError("");

    try {
      setLoading(true);

      await login(email, password);

      navigate(redirect);
    } catch (error) {
      console.error(error);

      setError(
        error instanceof Error
          ? error.message
          : "Unable to log in. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  const handleGoogle = async () => {
    try {
      setLoading(true);
      setError("");

      await googleLogin();

      navigate(redirect);
    } catch (error) {
      console.error(error);

      setError(
        error instanceof Error
          ? error.message
          : "Unable to continue with Google."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[var(--color-background)] px-6">
      <div className="w-full max-w-md rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] p-8 shadow-[var(--shadow-card)]">
        <h1 className="text-3xl font-bold text-[var(--color-text)]">
          TravelGen AI
        </h1>

        <p className="mt-2 text-[var(--color-text-secondary)]">
          Welcome back
        </p>

        {error && (
          <div className="mt-6 rounded-xl bg-[var(--color-error)]/10 p-4 text-sm text-[var(--color-error)]">
            {error}
          </div>
        )}

        <form
          onSubmit={handleLogin}
          className="mt-8 space-y-4"
        >
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-3 text-[var(--color-text)] outline-none transition focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary-light)]"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-3 text-[var(--color-text)] outline-none transition focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary-light)]"
          />

          <div className="text-right">
            <Link
              to="/forgot-password"
              className="text-sm font-medium text-[var(--color-primary)] transition hover:text-[var(--color-primary-dark)]"
            >
              Forgot Password?
            </Link>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl bg-[var(--color-primary)] py-3 font-semibold text-white transition hover:bg-[var(--color-primary-dark)] disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        <button
          type="button"
          onClick={handleGoogle}
          disabled={loading}
          className="mt-4 w-full rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] py-3 font-semibold text-[var(--color-text)] transition hover:bg-[var(--color-surface-soft)] disabled:cursor-not-allowed disabled:opacity-60"
        >
          Continue with Google
        </button>

        <p className="mt-6 text-center text-sm text-[var(--color-text-secondary)]">
          No account?

          <Link
            to={
              redirect !== "/dashboard"
                ? `/register?redirect=${encodeURIComponent(redirect)}`
                : "/register"
            }
            className="ml-2 font-medium text-[var(--color-primary)] hover:text-[var(--color-primary-dark)]"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;