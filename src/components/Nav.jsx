import { signOut } from "firebase/auth";
import { auth } from "../firebase/config";
import { navSections } from "../utils/constant";
import defaultProfile from "../assets/default.png";

const Nav = () => {
  return (
    <nav className="flex flex-col justify-between h-[100vh]  ">
      <div>
        <img src="./logo.png" className="w-14 m-3" />
        {navSections.map((sec, i) => (
          <div
            className="flex items-center gap-3 text-lg p-3 cursor-pointer transition hover:bg-gray-900"
            key={i}
          >
            {sec.icon}
            <span>{sec.title}</span>
          </div>
        ))}
      </div>
      <div className="flex flex-wrap items-center gap-2 mb-4 p-2">
        <img
          src={
            auth.currentUser.photoURL
              ? auth.currentUser.photoURL
              : defaultProfile
          }
          className="rounded-full w-14"
        />
        <div className="flex flex-col gap-2">
          <span>{auth?.currentUser?.displayName}</span>
          <span>@{auth?.currentUser?.displayName?.toLowerCase()}</span>
        </div>
        <button
          className="mx-2  hover:bg-gray-800 p-2 rounded-lg"
          onClick={() => signOut(auth)}
        >
          Sign Out
        </button>
      </div>
    </nav>
  );
};

export default Nav;
