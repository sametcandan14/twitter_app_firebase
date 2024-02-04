import { BiHomeCircle } from "react-icons/bi";
import { AiOutlineBell, AiOutlineMail, AiOutlineUser } from "react-icons/ai";
import { RiBookmarkLine } from "react-icons/ri";

export const navSections = [
  {
    icon: <BiHomeCircle />,
    title: "Home",
  },
  {
    icon: <AiOutlineBell />,
    title: "Notifications",
  },
  {
    icon: <AiOutlineMail />,
    title: "Messages",
  },
  {
    icon: <AiOutlineUser />,
    title: "Profile",
  },
  {
    icon: <RiBookmarkLine />,
    title: "Favs",
  },
];
