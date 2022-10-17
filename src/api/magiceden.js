import axios from 'axios';


export const fetchNft = async (walletAddress) => {
  let response = {};
  await axios({
    url:
      'https://api-mainnet.magiceden.dev/v2/wallets/' +
      walletAddress +
      '/tokens?offset=0&limit=100&listStatus=both',
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((res) => {
      
      response = res.data;
    })
    .catch((err) => {
      response = {
        error: err,
        message: 'Something went wrong please try again',
      };
    });

  return response;
};