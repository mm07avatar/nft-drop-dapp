import React from "react";
import { useMetamask, useDisconnect, useAddress } from "@thirdweb-dev/react";

function NFTDropPage() {
  //Authentication
  const conWithMetamask = useMetamask();
  const address = useAddress();
  const disconnect = useDisconnect();

  console.log(address);

  return (
    <div className="flex h-screen flex-col lg:grid lg:grid-cols-10">
      {/* Left */}
      <div className="bg-gradient-to-br from-cyan-800 to-rose-500 lg:col-span-4">
        <div className="flex flex-col items-center justify-center py-2 lg:min-h-screen">
          <div className="bg-gradient-to-br from-yellow-400 to-purple-600 p-2 rounded-xl">
            <img
              className="w-44 rounded-xl object-cover lg:h-96 lg:w-72"
              src="https://links.papareact.com/8sg"
              alt=""
            />
          </div>
          <div className="p-5 text-center space-y-2">
            <h1 className="text-4xl font-bold text-white">MAXTR Apes</h1>
            <h2 className="text-xl text-gray-300">
              A collection of MAXTR Apes who live & breathe React!
            </h2>
          </div>
        </div>
      </div>

      {/* Right */}
      <div className="flex flex-1 flex-col p-12 lg:col-span-6">
        {/* Header */}
        <header className="flex items-center justify-between">
          <h1 className="w-52 cursor-pointer text-xl font-extralight sm:w-80">
            The{" "}
            <span className="font-extrabold underline decoration-pink-600/50">
              MAXTR
            </span>{" "}
            NFT Market Place
          </h1>
          <button
            onClick={() => (address ? disconnect() : conWithMetamask())}
            className="rounded-full bg-rose-400 text-white px-4 py-2 text-xs font-bold lg:px-5 lg:py-3"
          >
            {address ? "Sign Out" : "Sign In"}
          </button>
        </header>

        <hr className="my-2 border" />
        { address && 
          <p className="text-center text-sm text-rose-400 font-bold">You're logged in with wallet {address.substring(0, 5)}...{address.substring(address.length - 5)}</p>
        }

        {/* Content */}
        <div className="mt-10 flex flex-1 flex-col items-center space-y-6 text-center lg:space-y-0 lg:justify-center">
          <img
            className="w-80 object-cover pb-10 lg:h-40"
            src="https://links.papareact.com/bdy"
            alt=""
          />
          <h1 className="text-3xl font-bold lg:text-5xl lg:font-extrabold">
            The MAXTR Ape Coding Club | NFT Drop
          </h1>
          <p className="pt-2 text-xl text-green-500">13 / 21 NFT's claimed</p>
        </div>

        {/* Mint Button */}
        <button className="h-16 bg-red-600 text-white rounded-full w-full mt-10 font-bold">
          Mint NFT (0.01 ETH)
        </button>
      </div>
    </div>
  );
}

export default NFTDropPage;
