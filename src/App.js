import "./App.scss";
import Sidebar from "./components/sidebar/Sidebar.js";
import Main from "./components/sidebar/Main";

function App() {
    return (
        <div className="App">
            <Sidebar></Sidebar>
            <Main></Main>
        </div>
    );
}

export default App;
