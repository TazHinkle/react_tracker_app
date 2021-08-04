import React from "react";
import './App.css';
import LoginButton from "./Components/LoginButton";
import LogoutButton from "./Components/LogoutButton";
import Buglist from "./Components/Buglist";
import { useAuth0 } from "@auth0/auth0-react";

function App() {
    const {
        isLoading,
        isAuthenticated,
    } = useAuth0();
    if(isLoading) {
        return <div>Loading...</div>
    }
    return (
        <>
            <LoginButton />
            { isAuthenticated && (<LogoutButton />) }
            { isAuthenticated && (<Buglist />) }
        </>
  );
}

export default App;
