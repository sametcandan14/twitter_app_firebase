import { useEffect, useState } from "react";
import TweetForm from "./TweetForm";
import { onSnapshot, collection } from "firebase/firestore";
import { db } from "../firebase/config";
import Post from "./Post";

const Main = () => {
  const [tweets, setTweets] = useState(null);
  const tweetsCol = collection(db, "tweets");
  useEffect(() => {
    onSnapshot(tweetsCol, (snapshot) => {
      const liveTweets = [];
      snapshot.forEach((doc) => liveTweets.push({ ...doc.data(), id: doc.id }));
      setTweets(liveTweets);
    });
  }, []);
  return (
    <main className="col-span-4 md:col-span-3 border border-gray-800">
      <header className="font-bold p-4 border-b-2 border-[#4746466f] ">
        Home
      </header>
      <TweetForm />
      <div className="text-center mt-[200px] ">
        {!tweets && <p>Loading...</p>}
      </div>

      <div>
        {tweets?.map((tweet) => (
          <Post key={tweet.id} tweet={tweet} />
        ))}
      </div>
    </main>
  );
};

export default Main;
