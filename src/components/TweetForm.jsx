import { auth, db } from "../firebase/config";
import defaultProfile from "../assets/default.png";
import { BsCardImage } from "react-icons/bs";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "../firebase/config";
import { toast } from "react-toastify";

const TweetForm = () => {
  const tweetsCol = collection(db, "tweets");

  const upLoadImage = async (image) => {
    if (!image) return null;

    const storageRef = ref(storage, `${new Date().getTime()}${image.name}`);

    const url = await uploadBytes(storageRef, image).then((response) =>
      getDownloadURL(response.ref)
    );

    return url;
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    const textContent = e.target[0].value;
    const imageContent = e.target[1].files[0];

    if (!textContent) {
      toast.info("Add tweet content");
      return;
    }
    const url = await upLoadImage(imageContent);

    addDoc(tweetsCol, {
      textContent,
      imageContent: url,
      createdAt: serverTimestamp(),
      user: {
        id: auth.currentUser.uid,
        name: auth.currentUser.displayName,
        picture: auth.currentUser.photoURL
          ? auth.currentUser.photoURL
          : defaultProfile,
      },
      likes: [],
    });

    e.target[0].value = "";
    e.target[1].value = null;
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
