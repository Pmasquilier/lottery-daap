import { useContract, useContractRead } from "@thirdweb-dev/react";
import React from "react";
import { CURRENCY } from "../constants";
import { ethers } from "ethers";
import Marquee from "react-fast-marquee";

function History() {
  const { contract } = useContract(
    process.env.NEXT_PUBLIC_LOTTERY_CONTRACT_ADDRESS
  );
  const { data: lastWinner } = useContractRead(contract, "lastWinner");
  const { data: lastWinningAmount } = useContractRead(
    contract,
    "lastWinnerAmount"
  );

  return (
    <Marquee className="bg-[#0A1F1C] p-5 mb-5" gradient={false} speed={100}>
      <div className="flex flex-col md:flex-row ml-auto md:space-x-2 mr-2">
        <p className="text-white">Last Winner: {lastWinner}</p>
        <p className="text-white">
          Previous Winnings:{" "}
          {lastWinningAmount &&
            ethers.utils.formatEther(lastWinningAmount.toString())}{" "}
          {CURRENCY}
        </p>
      </div>
    </Marquee>
  );
}

export default History;
