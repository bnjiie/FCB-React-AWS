import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

function TasksList() {
    return (
        <ul>
            <li className="tasks-item">Follow Edukasyon.ph on Facebook.</li>
            <li className="tasks-item">Follow AWS Siklab Pilipinas on Facebook.</li>
            <li className="tasks-item">Follow Zuitt Coding Bootcamp on Facebook.</li>
        </ul>
    );
}

function App() {
    const paraStyle = {
        "marginBottom": "15px"
    };

    return (
        <div className="app">
            <header className="app-header">
                <h1>My Amazing ToDo-List App</h1>
                <p style={paraStyle} >The most simple and amazing todo-list React app.</p>
                <TasksList />
            </header>
        </div>
    );
}


ReactDOM.render(<App />, document.getElementById("root"));