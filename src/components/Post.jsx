import { BsThreeDots } from "react-icons/bs";
import { BiMessageRounded } from "react-icons/bi";
import { AiOutlineHeart } from "react-icons/ai";
import { FcLike } from "react-icons/fc";
import { FaRetweet } from "react-icons/fa";
import { FiShare2 } from "react-icons/fi";
import { arrayRemove, arrayUnion, doc, updateDoc } from "firebase/firestore";
import { auth, db } from "../firebase/config";
import { useEffect, useState } from "react";

const Post = ({ tweet }) => {
  const [isLiked, setIsLiked] = useState(false);
  useEffect(() => {
    const found = tweet.likes.find((userId) => userId === auth.currentUser.uid);

    setIsLiked(found);
  }, [tweet]);

  const toogleLike = () => {
    const tweetRef = doc(db, "tweets", tweet.id);

    updateDoc(tweetRef, {
      likes: isLiked
        ? arrayRemove(auth.currentUser.uid)
        : arrayUnion(auth.currentUser.uid),
    });
  };
  return (
    <div className="flex gap-3 p-3 border-b-[0.5px] border-gray-600">
      <div>
        <img className="w-14 h-14 rounded-full" src={tweet.user.picture} />
      </div>
      <div className="w-full">
        <div className="flex justify-between">
          <div className="flex items-center gap-3">
            <p className="font-bold">{tweet?.user?.name}</p>
            <p className="text-gray-400">@{tweet?.user?.name?.toLowerCase()}</p>
            <p className="text-gray-400">1 saat önce</p>
          </div>
          <div className="p-2 rounded-full transition cursor-pointer hover:bg-gray-700">
            <BsThreeDots />
          </div>
        </div>
        <div className="my-3">
          <p>{tweet.textContent}</p>
        </div>
        <div className="flex justify-between">
          <div className="p-2 rounded-full transition cursor-pointer hover:bg-gray-700">
            <BiMessageRounded />
          </div>
          <div className="p-2 rounded-full transition cursor-pointer hover:bg-gray-700">
            <FaRetweet />
          </div>
          <div
            onClick={toogleLike}
            className="p-2 flex items-center gap-3 rounded-full transition cursor-pointer hover:bg-gray-700"
          >
            {isLiked ? <FcLike /> : <AiOutlineHeart />}
            <span> {tweet.likes.length}</span>
          </div>
          <div className="p-2 rounded-full transition cursor-pointer hover:bg-gray-700">
            <FiShare2 />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
