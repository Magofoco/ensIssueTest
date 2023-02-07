import { ethers } from 'ethers';
import { ENS } from '@ensdomains/ensjs';

const INFURA_API_KEY = 'ADD_YOUR_API_KEY_HERE';
const INFURA_NODE_MAINNET = `https://mainnet.infura.io/v3/${INFURA_API_KEY}`;

const provider = new ethers.providers.JsonRpcProvider(INFURA_NODE_MAINNET);
const ENSInstance = new ENS();

const POLLING_INTERVAL_MILLISECONDS = 5000;

const main = async () => {
  await ENSInstance.setProvider(provider);
  console.log("### INSIDE ###")
  const polledFunction = async () => {
    const existingEns = await ENSInstance.getOwner('vitalik.eth');
    const nonExistingEns = await ENSInstance.getOwner(
      'thisisnotregisteredens.eth'
    );
    console.log("This should return an object: ", existingEns);
    console.log("This should return undefined: ", nonExistingEns);
  };

  setInterval(polledFunction, POLLING_INTERVAL_MILLISECONDS);
};

main();
