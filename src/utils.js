const origin = "https://deep-index.moralis.io";
const apiKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub25jZSI6IjY3OGE3YTM1LTJlODEtNDNkZC1hYTM0LTA0NDhhNjc1ZjU3ZCIsIm9yZ0lkIjoiMzUzODIzIiwidXNlcklkIjoiMzYzNjUzIiwidHlwZUlkIjoiMDk1NmU4YWYtZmM1Yy00MTA2LWE0YjgtOWI2NTgwNmVmNjc0IiwidHlwZSI6IlBST0pFQ1QiLCJpYXQiOjE2OTI0NjQwODIsImV4cCI6NDg0ODIyNDA4Mn0.9ZQN7UdD39dqp2xcfUt2e4B5iDgJoAI1WLFmZGIlt0w";

export const getContractNFTs = async (tokenAddress) => {
  const url = new URL(`${origin}/api/v2/nft/${tokenAddress}`);
  url.searchParams.append("chain", "eth");
  url.searchParams.append("format", "decimal");
  url.searchParams.append("limit", "20");


  const response = await fetch(url, {
    headers: {
      accept: "application/json",//接受的response需要时json文件
      "X-API-KEY": apiKey,
    },
  });
  return response.json();
};


export const getContractTrades = async (tokenAddress) => {
  const url = new URL(`${origin}/api/v2/nft/${tokenAddress}/trades`);
  url.searchParams.append("chain", "eth");
  url.searchParams.append("marketplace", "opensea");
  url.searchParams.append("limit", "20");


  const response = await fetch(url, {
    headers: {
      accept: "application/json",
      "X-API-KEY": apiKey,
    },
  });
  return response.json();
};


export const getNFTTransfers = async (tokenAddress, tokenId) => {
  const url = new URL(
    `${origin}/api/v2/nft/${tokenAddress}/${tokenId}/transfers`
  );
  url.searchParams.append("chain", "eth");
  url.searchParams.append("format", "decimal");
  url.searchParams.append("limit", "20");


  const response = await fetch(url, {
    headers: {
      accept: "application/json",
      "X-API-KEY": apiKey,
    },
  });
  return response.json();
};
