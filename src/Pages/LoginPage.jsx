import { useNavigate, useLocation } from "react-router-dom";
import loginImage from "../assets/SL_100820_36440_08.jpg";
import useAxiosUser from "../Hooks/useAxiosUser";
import useAuth from "../hooks/useAuth";
import { FcGoogle } from "react-icons/fc";
import Swal from "sweetalert2";

const LoginPage = () => {
  const axiosuser = useAxiosUser();
  const { signInWithGoogle } = useAuth(); // Correct function name
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleGoogleSignin = async () => {
    try {
      const res = await signInWithGoogle();
      const userInfo = {
        name: res.user?.displayName,
        email: res.user?.email,
        photoURL: res.user?.photoURL,
      };

      if (userInfo.email) {
        Swal.fire({
          icon: "success",
          title: "Welcome Back!",
          text: "You have successfully signed in.",
          timer: 2000,
          showConfirmButton: false,
        });
        navigate(from, { replace: true });
      }

      await axiosuser.post("/accounts", userInfo);
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops!",
        text: "Google Sign-In failed. Please try again!",
      });
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-[#0f172a] to-[#1e293b] p-6">
      <div className="flex w-full max-w-4xl bg-white shadow-xl rounded-3xl overflow-hidden">
        {/* Left Side - Image */}
        <div className="hidden sm:flex w-1/2 items-center justify-center bg-gray-100 p-6">
          <img
            src={loginImage}
            alt="Login"
            className="object-cover w-full max-h-[350px] rounded-lg shadow-md"
          />
        </div>

        {/* Right Side - Login */}
        <div className="w-full sm:w-1/2 p-10 flex flex-col items-center text-center">
          <h2 className="text-4xl font-extrabold text-blue-700">Welcome to TaskMate</h2>
          <p className="text-gray-500 mt-2 text-lg">Your productivity partner</p>

          <button
            onClick={handleGoogleSignin}
            className="mt-6 flex items-center justify-center px-6 py-3 border border-gray-300 rounded-full shadow-md text-lg font-semibold text-gray-800 bg-white hover:bg-gray-200 transition-all duration-300"
          >
            <FcGoogle className="mr-3 text-2xl" />
            Continue with Google
          </button>

          <p className="mt-6 text-sm text-gray-400">
            By signing in, you agree to our{" "}
            <span className="text-blue-500 cursor-pointer hover:underline">Terms of Service</span> and{" "}
            <span className="text-blue-500 cursor-pointer hover:underline">Privacy Policy</span>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
