import { useState } from "react";
import googleLogo from "../assets/google.png";
import { auth, provider } from "../firebase/config";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  signInWithEmailAndPassword,
  signInWithRedirect,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const [signUp, setSignUp] = useState(false);
  const [email, setEmail] = useState("");
  const [isError, setIsError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    if (signUp) {
      createUserWithEmailAndPassword(auth, email, password).catch((err) =>
        alert(err.code)
      );
    } else {
      signInWithEmailAndPassword(auth, email, password).catch((err) => {
        alert(err.code);
        if (
          err.code == "auth/wrong-password" ||
          err.code == "auth/invalid-credential"
        ) {
          setIsError(true);
        }
      });
    }
  };

  const handleReset = () => {
    sendEmailVerification(auth, email)
      .then(() => alert("check your email"))
      .catch((err) => alert(err.code));
  };

  const handleGoogle = () => {
    signInWithRedirect(auth, provider).catch((err) => alert(err.code));
  };

  return (
    <div className="h-[100vh] bg-zinc-800 grid place-items-center">
      <div className="bg-black text-white flex flex-col gap-10 py-16 px-32 rounded-lg">
        <div className="flex justify-center">
          <img className="h-[60px]" src="../logo.png" alt="" />
        </div>
        <h1 className="text-center font-bold text-xl "> Sign In Twitter</h1>

        <div
          onClick={handleGoogle}
          className="flex items-center gap-3 bg-white text-black py-2 px-10 rounded-full cursor-pointer hover:bg-gray-200 "
        >
          <img className="h-[20px]" src={googleLogo} alt="" />
          <p className="whitespace-nowrap">Sign in with Google</p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col">
          <label htmlFor="">Email</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            className="text-black rounded p-2 shadow-lg outline focus:shadow-[#ffffff48]"
          />

          <label className="mt-5">Password</label>
          <input
            type="password"
            className="text-black rounded p-2 shadow-lg outline focus:shadow-[#ffffff48]"
          />

          <button
            className="bg-white transition text-black mt-10 rounded-full p-1 font-bold hover:bg-gray-200"
            type="submit"
          >
            {signUp ? "Sign Up" : "Sign In"}
          </button>

          <p className="text-gray-500 mt-5">
            <span>Don't have an account?</span>
            <button
              onClick={() => setSignUp(!signUp)}
              className="mx-3 text-blue-500"
              type="button"
            >
              {signUp ? "Sign In" : "Sign Up"}
            </button>
          </p>
          {!signUp && isError && (
            <button
              type="button"
              className="text-red-400 mt-5 "
              onClick={handleReset}
            >
              Forget Your Password?
            </button>
          )}
        </form>
      </div>
    </div>
  );
};

export default Auth;
