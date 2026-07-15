import { useLocation } from "react-router-dom";
import ChatButton from "./ChatButton";

function ChatWidget() {
  const location = useLocation();

  const hiddenRoutes = [
    "/login",
    "/register",
    "/forgot-password",
  ];

  if (hiddenRoutes.includes(location.pathname)) {
    return null;
  }

  return <ChatButton />;
}

export default ChatWidget;