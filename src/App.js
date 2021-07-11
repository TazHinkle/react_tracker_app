import React from "react";
import './App.css';
import LoginButton from "./Components/LoginButton";
import LogoutButton from "./Components/LogoutButton";
import Profile from "./Components/Profile";
import { useAuth0 } from "@auth0/auth0-react";

function App() {
    const { isLoading } = useAuth0();
    if(isLoading) {
        return <div>Loading...</div>
    }
    return (
        <>
            <LoginButton />
            <LogoutButton />
            <Profile />
        </>
  );
}

export default App;
