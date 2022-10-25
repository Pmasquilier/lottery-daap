import {
  useAddress,
  useContract,
  useContractRead,
  useContractWrite,
} from "@thirdweb-dev/react";
import { ethers } from "ethers";
import React from "react";
import toast from "react-hot-toast";
import { CURRENCY } from "../constants";

function YouWin() {
  const address = useAddress();
  const { contract } = useContract(
    process.env.NEXT_PUBLIC_LOTTERY_CONTRACT_ADDRESS
  );
  const { data: winning, isLoading } = useContractRead(
    contract,
    "getWinningsForAddress",
    address
  );

  const { mutateAsync: WithdrawWinnings } = useContractWrite(
    contract,
    "WithdrawWinnings"
  );

  const withdrawRewards = async () => {
    const notification = toast.loading("Withdrawing rewards ...");
    try {
      const data = await WithdrawWinnings([]);
      console.info("contract call successs", data);
      toast.success("Rewards withdrawn!", {
        id: notification,
      });
    } catch (err) {
      console.error("contract call failure", err);
      toast.error("Whoops something went wrong ...", {
        id: notification,
      });
    }
  };

  return (
    <div>
      {winning > 0 && (
        <div className="max-w-md md:max-w-2xl lg:max-w-4xl mx-auto mt-5">
          <button
            onClick={withdrawRewards}
            className="p-5 bg-gradient-to-b from-orange-500 to-emerald-600 animate-pulse text-center rounded-xl w-full"
          >
            <p className="font-bold">You win!</p>
            <p>
              Total Winning : {ethers.utils.formatEther(winning.toString())}{" "}
              {CURRENCY}
            </p>
            <br />
            <p>Click here to withdraw</p>
          </button>
        </div>
      )}
    </div>
  );
}

export default YouWin;
