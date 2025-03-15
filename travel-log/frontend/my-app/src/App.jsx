import React from "react";
import LogForm from "./components/LogForm";
import LogList from "./components/LogList";

function App() {
    return (
        <div style={{ maxWidth: "800px", margin: "0 auto", padding: "20px" }}>
            <h1>Travel Log</h1>
            <LogForm />
            <LogList />
        </div>
    );
}

export default App;