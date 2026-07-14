import { useNavigate } from "react-router-dom";
import { sendPasswordResetEmail } from "firebase/auth";

import { auth } from "../../services/firebase/firebase";
import { logout } from "../../services/firebase/auth";

function AccountActions() {
  const navigate = useNavigate();

  async function handleResetPassword() {
    const user = auth.currentUser;

    if (!user?.email) return;

    try {
      await sendPasswordResetEmail(auth, user.email);
      alert("Password reset email sent.");
    } catch (error) {
      console.error(error);
    }
  }

  async function handleLogout() {
    await logout();
    navigate("/login");
  }

  return (
    <div className="rounded-3xl bg-white p-8 shadow-xl">

      <h2 className="text-2xl font-bold">
        Account
      </h2>

      <div className="mt-8 flex flex-col gap-4">

        <button
          onClick={handleResetPassword}
          className="rounded-xl border border-green-700 px-6 py-3 font-semibold text-green-700 hover:bg-green-50"
        >
          Reset Password
        </button>

        <button
          onClick={handleLogout}
          className="rounded-xl bg-red-600 px-6 py-3 font-semibold text-white hover:bg-red-700"
        >
          Logout
        </button>

      </div>

    </div>
  );
}

export default AccountActions;