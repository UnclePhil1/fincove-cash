"use client";
import React, { useState } from "react";
import Image from "next/image";

const coins = [
  { name: "Bitcoin", symbol: "BTC", imgSrc: "/Image/logo.png" },
  // Add more coins
];

const networks = ["Mainnet", "Testnet", "Custom Network"];

const generateRandomAddress = () => {
  // Implement your logic to generate a random address here
  return "0x1234567890abcdef1234567890abcdef12345678";
};
const Deposit = () => {
  const [selectedCoin, setSelectedCoin] = useState(coins[0]);
  const [selectedNetwork, setSelectedNetwork] = useState(networks[0]);
  const [randomAddress, setRandomAddress] = useState("");

  const handleCoinChange = (event) => {
    const selectedCoinSymbol = event.target.value;
    const coin = coins.find((c) => c.symbol === selectedCoinSymbol);
    setSelectedCoin(coin);
  };

  const handleNetworkChange = (event) => {
    const selectedNetwork = event.target.value;
    setSelectedNetwork(selectedNetwork);

    // Generate a random address when the network is changed
    const randomAddr = generateRandomAddress();
    setRandomAddress(randomAddr);
  };

  return (
    <div>
      <div className="flex flex-col gap-8 justify-start items-center w-[400px] mx-auto">
        <div className="flex flex-col justify-start items-start w-full">
          {" "}
          <label>Select Coin</label>
          <select onChange={handleCoinChange} value={selectedCoin.symbol} className="w-[100%] py-2 px-4 rounded-md focus:outline-primarydark bg-transparent border-2 border-primary">
            {coins.map((coin) => (
              <option key={coin.symbol} value={coin.symbol} className="p-4">
                {coin.name}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col justify-start items-start w-full">
          <label>Network:</label>
          <select onChange={handleNetworkChange} value={selectedNetwork} className="w-[100%] py-2 px-4 rounded-md focus:outline-primarydark bg-transparent border-2 border-primary">
            {networks.map((network) => (
              <option key={network} value={network}>
                {network}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col justify-start items-start w-full">
          {" "}
          <div>
            <label>Random Address:</label>
            <div>
              <Image
                src={selectedCoin.imgSrc}
                alt={selectedCoin.name}
                width={50}
                height={50}
              />
              <span>{randomAddress}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Deposit;
