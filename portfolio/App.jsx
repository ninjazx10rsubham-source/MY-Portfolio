import { useState } from "react";
import Login from "./components/Login";
import Profile from "./components/Profile";
import QR from "./components/QR";
import ChatBot from "./components/ChatBot";

function App() {
  const [user, setUser] = useState(null);
  const [dark, setDark] = useState(true);

  if (!user) return <Login setUser={setUser} />;

  return (
    <div className={dark ? "dark" : "light"}>
      <button onClick={() => setDark(!dark)}>Toggle Theme</button>

      <Profile />
      <QR />
      <ChatBot />
    </div>
  );
}

export default App;
