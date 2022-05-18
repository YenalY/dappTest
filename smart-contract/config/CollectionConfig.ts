import CollectionConfigInterface from '../lib/CollectionConfigInterface';
import * as Networks from '../lib/Networks';
import * as Marketplaces from '../lib/Marketplaces';
import whitelistAddresses from './whitelist.json';

const CollectionConfig: CollectionConfigInterface = {
  testnet: Networks.ethereumTestnet,
  mainnet: Networks.ethereumMainnet,
  // The contract name can be updated using the following command:
  // yarn rename-contract NEW_CONTRACT_NAME
  // Please DO NOT change it manually!
  contractName: 'Bears',
  tokenName: '2Bears Nft',
  tokenSymbol: 'HNY',
  hiddenMetadataUri: 'https://gateway.pinata.cloud/ipfs/QmNuFbJQA7HGfmRXYdAv4URFBTiDrJQ3VmDmR2mopV9WmZ/metaUnreaveled.json',
  maxSupply: 12,
  whitelistSale: {
    price: 0.05,
    maxMintAmountPerTx: 2,
  },
  preSale: {
    price: 0.07,
    maxMintAmountPerTx: 0,
  },
  publicSale: {
    price: 0.09,
    maxMintAmountPerTx: 5,
  },
  contractAddress: "0x6e2f7E7a3187272303e4e3f93550fc4193b11AB3",
  marketplaceIdentifier: 'my-nft-token',
  marketplaceConfig: Marketplaces.openSea,
  whitelistAddresses,
};

export default CollectionConfig;
