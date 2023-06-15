import { useState, useRef } from "react";
import "./App.css";
import Authentication from "./components/Authentication";
import Cookies from "universal-cookie";
import Chat from "./components/Chat";
import { signOut } from "firebase/auth";
import { auth } from "./firebase-config";
const cookies = new Cookies();

function App() {
  const [isAuth, setIsAuth] = useState(cookies.get("auth-token"));
  const [room, setRoom] = useState(null);

  const roomInputRef = useRef(null);

  if (!isAuth) {
    return (
      <div className="App">
        <Authentication setIsAuth={setIsAuth}></Authentication>
      </div>
    );
  }

  async function signUserOut() {
    await signOut(auth);
    cookies.remove("auth-token");
    setIsAuth(false);
    setRoom(null);
  }

  return (
    <>
      {room ? (
        <Chat room={room}></Chat>
      ) : (
        <div className="room">
          <label>Enter Room Name</label>
          <input ref={roomInputRef} type="text" />
          <button onClick={() => setRoom(roomInputRef.current.value)}>
            Enter Chat
          </button>
        </div>
      )}

      <div className="sign-out">
        <button onClick={signUserOut}>sign out</button>
      </div>
    </>
  );
}

export default App;
