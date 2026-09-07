import {
  useState,
  type FormEvent,
  type ChangeEvent,
} from "react";
import {
  Link,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import { Eye, EyeOff, Mail, Lock, User, ArrowRight } from "lucide-react";

import { createUserProfile } from "../../services/firebase/user";
import {
  register,
  googleLogin,
} from "../../services/firebase/auth";

function Register() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  // ----------------------------------------
  // Redirect
  // ----------------------------------------

  const requestedRedirect = searchParams.get("redirect");

  const redirect = requestedRedirect?.startsWith("/")
    ? requestedRedirect
    : "/dashboard";

  // ----------------------------------------
  // Form state
  // ----------------------------------------

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // ----------------------------------------
  // UI state
  // ----------------------------------------

  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);
  const [error, setError] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    useState(false);

  // ----------------------------------------
  // Input handler
  // ----------------------------------------

  const handleInput =
    (setter: React.Dispatch<React.SetStateAction<string>>) =>
    (e: ChangeEvent<HTMLInputElement>) => {
      setter(e.target.value);

      if (error) {
        setError("");
      }
    };

  // ----------------------------------------
  // Firebase error messages
  // ----------------------------------------

  const getFirebaseErrorMessage = (error: any) => {
    switch (error?.code) {
      case "auth/email-already-in-use":
        return "An account already exists with this email.";

      case "auth/invalid-email":
        return "Please enter a valid email address.";

      case "auth/weak-password":
        return "Your password is too weak. Please choose a stronger password.";

      case "auth/network-request-failed":
        return "Network error. Please check your internet connection.";

      case "auth/operation-not-allowed":
        return "Email registration is currently unavailable.";

      case "auth/popup-closed-by-user":
        return "Google sign-in was cancelled.";

      default:
        return (
          error?.message ||
          "Something went wrong. Please try again."
        );
    }
  };

  // ----------------------------------------
  // Form validation
  // ----------------------------------------

  const validateForm = () => {
    const trimmedName = name.trim();
    const trimmedEmail = email.trim();

    if (!trimmedName) {
      return "Please enter your full name.";
    }

    if (trimmedName.length < 2) {
      return "Your name must contain at least 2 characters.";
    }

    if (!trimmedEmail) {
      return "Please enter your email address.";
    }

    if (!password) {
      return "Please enter a password.";
    }

    if (password.length < 6) {
      return "Password must be at least 6 characters.";
    }

    if (!confirmPassword) {
      return "Please confirm your password.";
    }

    if (password !== confirmPassword) {
      return "Passwords do not match.";
    }

    return null;
  };

  // ----------------------------------------
  // Email registration
  // ----------------------------------------

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (loading || googleLoading) return;

    setError("");

    const validationError = validateForm();

    if (validationError) {
      setError(validationError);
      return;
    }

    try {
      setLoading(true);

      const trimmedName = name.trim();
      const trimmedEmail = email.trim().toLowerCase();

      // Create Firebase authentication account
      const userCredential = await register(
        trimmedName,
        trimmedEmail,
        password
      );

      const user = userCredential.user;

      // Create TravelGen user profile
      await createUserProfile({
        uid: user.uid,
        name: trimmedName,
        email: trimmedEmail,
        photoURL: user.photoURL || "",
        bio: "",
        country: "",
      });

      console.log("User created successfully:", user.uid);

      // Send user to intended destination
      navigate(redirect, {
        replace: true,
      });
    } catch (err: any) {
      console.error("Registration error:", err);

      setError(getFirebaseErrorMessage(err));
    } finally {
      setLoading(false);
    }
  };

  // ----------------------------------------
  // Google registration
  // ----------------------------------------

  const handleGoogle = async () => {
    if (loading || googleLoading) return;

    setError("");

    try {
      setGoogleLoading(true);

      await googleLogin();

      navigate(redirect, {
        replace: true,
      });
    } catch (err: any) {
      console.error("Google registration error:", err);

      setError(getFirebaseErrorMessage(err));
    } finally {
      setGoogleLoading(false);
    }
  };

  // ----------------------------------------
  // Render
  // ----------------------------------------

  return (
    <main className="min-h-screen bg-[var(--color-background)] px-4 py-8 sm:px-6">
      <div className="mx-auto flex min-h-[calc(100vh-4rem)] w-full max-w-6xl items-center justify-center">

        {/* Main Card */}
        <div className="grid w-full max-w-5xl overflow-hidden rounded-[2rem] bg-[var(--color-surface)] shadow-[var(--shadow-card)] lg:grid-cols-2">

          {/* --------------------------------
              Left / Brand Panel
          -------------------------------- */}

          <section className="relative hidden min-h-[700px] overflow-hidden bg-[var(--color-primary)] p-10 text-white lg:flex lg:flex-col lg:justify-between">

            {/* Decorative shapes */}
            <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[var(--color-accent)] opacity-20 blur-3xl" />

            <div className="absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-white opacity-10 blur-3xl" />

            {/* Brand */}
            <div className="relative z-10">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[var(--color-accent)] text-[var(--color-primary-dark)]">
                  <span className="text-lg font-bold">T</span>
                </div>

                <span className="text-xl font-bold tracking-tight">
                  TravelGen AI
                </span>
              </div>
            </div>

            {/* Hero Copy */}
            <div className="relative z-10 max-w-md">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-accent)]">
                Your journey starts here
              </p>

              <h2 className="text-4xl font-bold leading-tight xl:text-5xl">
                Discover Kenya.
                <br />
                Travel differently.
              </h2>

              <p className="mt-6 text-base leading-7 text-white/70">
                Create personalized journeys, discover incredible
                destinations, and experience Kenya your way.
              </p>
            </div>

            {/* Bottom message */}
            <div className="relative z-10">
              <div className="flex items-center gap-3 text-sm text-white/60">
                <div className="h-px w-10 bg-[var(--color-accent)]" />
                <span>
                  Your journey, beautifully planned.
                </span>
              </div>
            </div>
          </section>

          {/* --------------------------------
              Right / Registration Form
          -------------------------------- */}

          <section className="flex items-center justify-center p-6 sm:p-10 lg:p-14">
            <div className="w-full max-w-md">

              {/* Mobile Logo */}
              <div className="mb-8 flex items-center gap-3 lg:hidden">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--color-primary)] text-white">
                  <span className="font-bold">T</span>
                </div>

                <span className="text-lg font-bold text-[var(--color-primary)]">
                  TravelGen AI
                </span>
              </div>

              {/* Heading */}
              <div>
                <p className="mb-2 text-sm font-semibold text-[var(--color-accent-dark)]">
                  Start your journey
                </p>

                <h1 className="text-3xl font-bold tracking-tight text-[var(--color-text)] sm:text-4xl">
                  Create your account
                </h1>

                <p className="mt-3 text-sm leading-6 text-[var(--color-text-secondary)]">
                  Join TravelGen and start creating personalized
                  travel experiences.
                </p>
              </div>

              {/* Error */}
              {error && (
                <div
                  role="alert"
                  className="mt-6 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
                >
                  {error}
                </div>
              )}

              {/* Form */}
              <form
                onSubmit={handleSubmit}
                className="mt-8 space-y-5"
              >

                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium text-[var(--color-text)]"
                  >
                    Full name
                  </label>

                  <div className="relative">
                    <User
                      size={18}
                      className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[var(--color-text-muted)]"
                    />

                    <input
                      id="name"
                      type="text"
                      autoComplete="name"
                      placeholder="Enter your full name"
                      value={name}
                      onChange={handleInput(setName)}
                      disabled={loading || googleLoading}
                      className="w-full rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] py-3.5 pl-11 pr-4 text-sm text-[var(--color-text)] outline-none transition placeholder:text-[var(--color-text-muted)] focus:border-[var(--color-primary)] focus:ring-4 focus:ring-[var(--color-primary-light)] disabled:cursor-not-allowed disabled:opacity-60"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-[var(--color-text)]"
                  >
                    Email address
                  </label>

                  <div className="relative">
                    <Mail
                      size={18}
                      className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[var(--color-text-muted)]"
                    />

                    <input
                      id="email"
                      type="email"
                      autoComplete="email"
                      placeholder="you@example.com"
                      value={email}
                      onChange={handleInput(setEmail)}
                      disabled={loading || googleLoading}
                      className="w-full rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] py-3.5 pl-11 pr-4 text-sm text-[var(--color-text)] outline-none transition placeholder:text-[var(--color-text-muted)] focus:border-[var(--color-primary)] focus:ring-4 focus:ring-[var(--color-primary-light)] disabled:cursor-not-allowed disabled:opacity-60"
                    />
                  </div>
                </div>

                {/* Password */}
                <div>
                  <label
                    htmlFor="password"
                    className="mb-2 block text-sm font-medium text-[var(--color-text)]"
                  >
                    Password
                  </label>

                  <div className="relative">
                    <Lock
                      size={18}
                      className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[var(--color-text-muted)]"
                    />

                    <input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      autoComplete="new-password"
                      placeholder="Create a password"
                      value={password}
                      onChange={handleInput(setPassword)}
                      disabled={loading || googleLoading}
                      className="w-full rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] py-3.5 pl-11 pr-12 text-sm text-[var(--color-text)] outline-none transition placeholder:text-[var(--color-text-muted)] focus:border-[var(--color-primary)] focus:ring-4 focus:ring-[var(--color-primary-light)] disabled:cursor-not-allowed disabled:opacity-60"
                    />

                    <button
                      type="button"
                      onClick={() =>
                        setShowPassword((prev) => !prev)
                      }
                      className="absolute right-3 top-1/2 -translate-y-1/2 rounded-lg p-1.5 text-[var(--color-text-muted)] transition hover:text-[var(--color-primary)]"
                      aria-label={
                        showPassword
                          ? "Hide password"
                          : "Show password"
                      }
                    >
                      {showPassword ? (
                        <EyeOff size={18} />
                      ) : (
                        <Eye size={18} />
                      )}
                    </button>
                  </div>
                </div>

                {/* Confirm Password */}
                <div>
                  <label
                    htmlFor="confirmPassword"
                    className="mb-2 block text-sm font-medium text-[var(--color-text)]"
                  >
                    Confirm password
                  </label>

                  <div className="relative">
                    <Lock
                      size={18}
                      className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[var(--color-text-muted)]"
                    />

                    <input
                      id="confirmPassword"
                      type={
                        showConfirmPassword
                          ? "text"
                          : "password"
                      }
                      autoComplete="new-password"
                      placeholder="Confirm your password"
                      value={confirmPassword}
                      onChange={handleInput(setConfirmPassword)}
                      disabled={loading || googleLoading}
                      className="w-full rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] py-3.5 pl-11 pr-12 text-sm text-[var(--color-text)] outline-none transition placeholder:text-[var(--color-text-muted)] focus:border-[var(--color-primary)] focus:ring-4 focus:ring-[var(--color-primary-light)] disabled:cursor-not-allowed disabled:opacity-60"
                    />

                    <button
                      type="button"
                      onClick={() =>
                        setShowConfirmPassword((prev) => !prev)
                      }
                      className="absolute right-3 top-1/2 -translate-y-1/2 rounded-lg p-1.5 text-[var(--color-text-muted)] transition hover:text-[var(--color-primary)]"
                      aria-label={
                        showConfirmPassword
                          ? "Hide password"
                          : "Show password"
                      }
                    >
                      {showConfirmPassword ? (
                        <EyeOff size={18} />
                      ) : (
                        <Eye size={18} />
                      )}
                    </button>
                  </div>
                </div>

                {/* Create Account */}
                <button
                  type="submit"
                  disabled={loading || googleLoading}
                  className="group flex w-full items-center justify-center gap-2 rounded-xl bg-[var(--color-primary)] py-3.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[var(--color-primary-dark)] hover:shadow-md disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {loading ? (
                    <>
                      <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                      Creating account...
                    </>
                  ) : (
                    <>
                      Create account
                      <ArrowRight
                        size={17}
                        className="transition-transform group-hover:translate-x-1"
                      />
                    </>
                  )}
                </button>
              </form>

              {/* Divider */}
              <div className="my-6 flex items-center gap-4">
                <div className="h-px flex-1 bg-[var(--color-border)]" />

                <span className="text-xs font-medium text-[var(--color-text-muted)]">
                  OR
                </span>

                <div className="h-px flex-1 bg-[var(--color-border)]" />
              </div>

              {/* Google */}
              <button
                type="button"
                onClick={handleGoogle}
                disabled={loading || googleLoading}
                className="flex w-full items-center justify-center gap-3 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] py-3.5 text-sm font-semibold text-[var(--color-text)] transition hover:border-[var(--color-primary)] hover:bg-[var(--color-surface-soft)] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {googleLoading ? (
                  <>
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-[var(--color-primary)]/30 border-t-[var(--color-primary)]" />
                    Connecting...
                  </>
                ) : (
                  <>
                    <span className="flex h-5 w-5 items-center justify-center font-bold">
                      G
                    </span>

                    Continue with Google
                  </>
                )}
              </button>

              {/* Login */}
              <p className="mt-7 text-center text-sm text-[var(--color-text-secondary)]">
                Already have an account?

                <Link
                  to="/login"
                  className="ml-1.5 font-semibold text-[var(--color-primary)] transition hover:text-[var(--color-primary-dark)]"
                >
                  Log in
                </Link>
              </p>

              {/* Footer */}
              <p className="mt-8 text-center text-xs leading-5 text-[var(--color-text-muted)]">
                By creating an account, you agree to our
                terms and privacy policy.
              </p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}

export default Register;
