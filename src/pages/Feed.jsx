import { signOut } from "firebase/auth";
import { auth } from "../firebase/config";
import { useNavigate } from "react-router-dom";

const Feed = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    signOut(auth).then(() => navigate("/"));
  };
  return (
    <div>
      <h1>Home</h1>
      <button onClick={handleClick}> Sign Out</button>
    </div>
  );
};

export default Feed;
