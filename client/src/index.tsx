import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ToastContainer } from "react-toastify";
import { MetaMaskContextProvider } from "./hooks/useMetaMask";
import { ContractContextProvider } from "./hooks/useContract";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

root.render(
	<React.StrictMode>
		<MetaMaskContextProvider>
			<ContractContextProvider>
				<App />
				<ToastContainer />
			</ContractContextProvider>
		</MetaMaskContextProvider>
	</React.StrictMode>
);
