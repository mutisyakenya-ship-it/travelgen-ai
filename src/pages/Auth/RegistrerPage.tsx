
import { useState, type FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createUserProfile } from "../../services/firebase/user";
import {
  register,
  googleLogin
} from "../../services/firebase/auth";

function Register() {

  const navigate = useNavigate();

  const [name, setName] = useState("");

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [confirmPassword, setConfirmPassword] = useState("");

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  const handleSubmit = async (
    e: FormEvent
  ) => {

    e.preventDefault();

    setError("");

    if (password !== confirmPassword) {

      setError("Passwords do not match");

      return;

    }

    try {

      setLoading(true);

      const userCredential = await register(
        name,
        email,
        password

      );
      await createUserProfile({
  uid: userCredential.user.uid,
  name,
  email,
  photoURL: "",
  bio: "",
  country: "",
});

      console.log(

        "User created:",

        userCredential.user

      );

      navigate("/dashboard");

    }

    catch (err: any) {

      console.error(err);

      console.log(

        "Firebase Code:",

        err.code

      );

      console.log(

        "Firebase Message:",

        err.message

      );

      setError(

        err.message

      );

    }

    finally {

      setLoading(false);

    }

  };

  const handleGoogle = async () => {

    try {

      await googleLogin();

      navigate("/dashboard");

    }

    catch (err: any) {

      console.error(err);

      console.log(err.code);

      console.log(err.message);

    }

  };

  return (

    <div className="min-h-screen flex items-center justify-center bg-slate-50 px-6">

      <div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-xl">

        <h1 className="text-3xl font-bold">

          TravelGen AI

        </h1>

        <p className="mt-2 text-slate-500">

          Create your account

        </p>

        {

          error && (

            <div className="mt-4 rounded-lg bg-red-100 p-3 text-red-600">

              {error}

            </div>

          )

        }

        <form

          onSubmit={handleSubmit}

          className="mt-8 space-y-4"

        >

          <input

            type="text"

            placeholder="Full Name"

            value={name}

            onChange={(e) =>

              setName(

                e.target.value

              )

            }

            className="w-full rounded-xl border p-3"

          />

          <input

            type="email"

            placeholder="Email"

            value={email}

            onChange={(e) =>

              setEmail(

                e.target.value

              )

            }

            className="w-full rounded-xl border p-3"

          />

          <input

            type="password"

            placeholder="Password"

            value={password}

            onChange={(e) =>

              setPassword(

                e.target.value

              )

            }

            className="w-full rounded-xl border p-3"

          />

          <input

            type="password"

            placeholder="Confirm Password"

            value={confirmPassword}

            onChange={(e) =>

              setConfirmPassword(

                e.target.value

              )

            }

            className="w-full rounded-xl border p-3"

          />

          <button

            disabled={loading}

            className="w-full rounded-xl bg-green-700 py-3 font-semibold text-white transition hover:bg-green-800"

          >

            {

              loading

                ?

                "Creating Account..."

                :

                "Create Account"

            }

          </button>

        </form>

        <button

          onClick={handleGoogle}

          className="mt-4 w-full rounded-xl border border-slate-300 py-3 font-semibold"

        >

          Continue with Google

        </button>

        <p className="mt-6 text-center text-sm">

          Already have an account?

          <Link

            to="/login"

            className="ml-2 text-green-700 font-medium"

          >

            Login

          </Link>

        </p>

      </div>

    </div>

  );

}

export default Register;