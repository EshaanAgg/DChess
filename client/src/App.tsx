import React from "react";
import "./App.css";
import Game from "./components/Game";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function App() {
	return (
		<div className="App">
			<Game />
			<ToastContainer />
		</div>
	);
}

export default App;
