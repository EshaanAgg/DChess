import React, { Contract, ethers } from 'ethers';
import {
  useState,
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useCallback
} from 'react';
import contractAddress from '../data/contracts/DChess/address.json';
import contractArtifact from '../data/contracts/DChess/artifact.json';
import { useMetaMask } from './useMetaMask';

interface ContractContextData {
  contract: Contract | null;
  loading: boolean;
}

const ContractContext = createContext<ContractContextData | null>(null);

export const ContractContextProvider = ({ children }: PropsWithChildren) => {
  const [contract, setContract] = useState<null | Contract>(null);
  const [loading, setLoading] = useState(false);

  const { hasProvider } = useMetaMask();

  const getContract = useCallback(async () => {
    if (hasProvider) {
      setLoading(true);

      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const contract = new ethers.Contract(contractAddress.address, contractArtifact.abi, signer);
      setContract(contract);
      console.log(contract);
      setLoading(false);
    }
  }, [hasProvider]);

  useEffect(() => {
    getContract();
  }, [getContract]);

  return (
    <ContractContext.Provider
      value={{
        contract,
        loading
      }}>
      {children}
    </ContractContext.Provider>
  );
};

export const useContract = () => {
  const context = useContext(ContractContext);
  if (context === undefined) {
    throw new Error('useContract must be used within a "ContextContextProvider"');
  }
  return context;
};
