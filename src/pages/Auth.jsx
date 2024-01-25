import googleLogo from "../assets/google.png";

const Auth = () => {
  return (
    <div className="h-[100vh] bg-zinc-800 grid place-items-center">
      <div className="bg-black text-white flex flex-col gap-10 py-16">
        <div>
          <img className="h-[60px]" src="../public/logo.png" alt="" />
        </div>
        <h1> Sign In Twitter</h1>

        <div>
          <img className="h-[20px]" src={googleLogo} alt="" />
          <p>Sign in with Google</p>
        </div>

        <form action="">
          <label htmlFor="">Email</label>
          <input type="email" />

          <label htmlFor="">Password</label>
          <input type="password" />

          <button>Sign In</button>

          <p>
            <span>Don't have account</span>
            <button>Sign Up</button>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Auth;
