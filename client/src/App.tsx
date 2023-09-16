import React from 'react';
import './App.css';
import Home from './pages/Home';
import { Button } from '@mui/material';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { useMetaMask } from './hooks/useMetaMask';
import { useContract } from './hooks/useContract';

function App() {
  const { hasProvider, isConnecting, errorMessage, connectMetaMask } = useMetaMask();
  const contract = useContract();

  if (isConnecting) return <div> Trying to connect to MetaMask. Please wait. </div>;
  if (!hasProvider)
    return (
      <div>
        Please download the Metamask browser extension and sign up on the same to continue.{' '}
        {errorMessage !== '' && errorMessage}
        <br />
        After downloading Metamask, click here to try connecting!
        <Button onClick={connectMetaMask}>Connect me to MetaMask!</Button>
      </div>
    );

  if (!contract || contract.loading)
    return <div>Trying to load the DChess deployed contract. Please wait.</div>;
  if (!contract.contract)
    return <div>Can't find the deployed contract. Please check the logs. </div>;

  return (
    <div className="App">
      <Home />
      <ToastContainer />
    </div>
  );
}

export default App;
