import { useState } from "react";
import googleLogo from "../assets/google.png";

const Auth = () => {
  const [signUp, setSignUp] = useState(false);

  return (
    <div className="h-[100vh] bg-zinc-800 grid place-items-center">
      <div className="bg-black text-white flex flex-col gap-10 py-16 px-32 rounded-lg">
        <div className="flex justify-center">
          <img className="h-[60px]" src="../public/logo.png" alt="" />
        </div>
        <h1 className="text-center font-bold text-xl "> Sign In Twitter</h1>

        <div className="flex items-center gap-3 bg-white text-black py-2 px-10 rounded-full cursor-pointer hover:bg-gray-200 ">
          <img className="h-[20px]" src={googleLogo} alt="" />
          <p className="whitespace-nowrap">Sign in with Google</p>
        </div>

        <form className="flex flex-col">
          <label htmlFor="">Email</label>
          <input className="text-black rounded p-2 shadow-lg outline focus:shadow-[#ffffff48]" />

          <label className="mt-5">Password</label>
          <input className="text-black rounded p-2 shadow-lg outline focus:shadow-[#ffffff48]" />

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
        </form>
      </div>
    </div>
  );
};

export default Auth;
