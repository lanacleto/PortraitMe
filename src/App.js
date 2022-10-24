import "./App.scss";
import Sidebar from "./components/sidebar/Sidebar.js";
import Main from "./components/main/Main";
import React, { useEffect } from "react";

function App() {
    useEffect(() => {}, []);

    return (
        <div className="App">
            <Sidebar></Sidebar>
            <Main></Main>
        </div>
    );
}

export default App;
