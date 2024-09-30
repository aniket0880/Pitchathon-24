/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    version: '0.8.9',
    networks: {
      hardhat: {},
      sepolia:{
        url: 'https://sepolia.infura.io/v3/7ddbcdadbb934297a9894e2836e4db63',
        accounts: [process.env.PRIVATE_KEY]
      }
    },
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
};
