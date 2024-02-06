import { auth } from "../firebase/config";
import defaultProfile from "../assets/default.png";
import { BsCardImage } from "react-icons/bs";

const TweetForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="flex gap-3 p-4 border-b-2 border-gray-900 "
    >
      <img
        className="rounded-full h-[50px]"
        src={
          auth?.currentUser?.photoURL
            ? auth.currentUser.photoURL
            : defaultProfile
        }
      />
      <div className="w-full">
        <input
          className="w-full my-2 text-gray-400 bg-black outline-none placeholder:text-lg"
          placeholder="What's Happening?"
          type="text"
        />
        <div className="flex justify-between h-[45px]">
          <div className="hover:bg-gray-800 transition px-4 cursor-pointer rounded-full grid items-center">
            <label htmlFor="file-inp" className="cursor-pointer  ">
              <BsCardImage />
            </label>

            <input className="hidden" id="file-inp" type="file" />
          </div>
          <button className="bg-blue-600 px-4  rounded-full transition hover:bg-blue-500">
            Tweet
          </button>
        </div>
      </div>
    </form>
  );
};

export default TweetForm;
