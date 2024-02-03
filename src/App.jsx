import { Routes, Route, useNavigate } from "react-router-dom";
import Auth from "./pages/Auth";
import Feed from "./pages/Feed";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { auth } from "./firebase/config";

function App() {
  const navigate = useNavigate();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate("/home");
      } else {
        navigate("/");
      }
    });
  }, []);
  return (
    <Routes>
      <Route path="/" element={<Auth />} />
      <Route path="/home" element={<Feed />} />
    </Routes>
  );
}

export default App;
