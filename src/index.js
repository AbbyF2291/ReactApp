import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
const DATA = [
  { id: "todo-0", name: "Go to Gym", completed: true },
  { id: "todo-1", name: "Walk Max", completed: false },
  { id: "todo-2", name: "Send email to Cathy", completed: false }
]

ReactDOM.render(<App tasks={DATA} />, document.getElementById("root"));

reportWebVitals();
