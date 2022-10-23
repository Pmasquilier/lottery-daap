import {
  useContract,
  useContractRead,
  useContractWrite,
} from "@thirdweb-dev/react";
import { ethers } from "ethers";
import React, { useState } from "react";
import { CURRENCY } from "../constants";
import toast from "react-hot-toast";

function Tickets() {
  const { contract } = useContract(
    process.env.NEXT_PUBLIC_LOTTERY_CONTRACT_ADDRESS
  );
  const { data: ticketPrice } = useContractRead(contract, "ticketPrice");
  const { data: ticketCommission } = useContractRead(
    contract,
    "ticketCommission"
  );
  const { data: expiration } = useContractRead(contract, "expiration");
  const { data: RemainingTickets } = useContractRead(
    contract,
    "RemainingTickets"
  );

  const { mutateAsync: BuyTickets, isLoading } = useContractWrite(
    contract,
    "BuyTickets"
  );

  let [quantity, setQuantity] = useState(1);

  function getTotalCostOfTickets(): Number {
    return (
      ticketPrice &&
      Number(ethers.utils.formatEther(ticketPrice.toString())) * quantity
    );
  }

  const handleClick = async () => {
    const notification = toast.loading("Buying your ticket(s) ...");
    try {
      const data = await BuyTickets([
        {
          value: ethers.utils.parseEther(
            (
              Number(ethers.utils.formatEther(ticketPrice)) * quantity
            ).toString()
          ),
        },
      ]);
      toast.success("Tickets purchased successfully!", {
        id: notification,
      });
      console.info("contract call successs", data);
    } catch (error) {
      toast.error("Whoops something went wrong ...", {
        id: notification,
      });
      console.info("contract call error", error);
    }
  };

  return (
    <div className="w-72 m-2 border-2 border-[#004337] text-white rounded-lg">
      <div className="p-2 border-2 border-[#004337] m-2 rounded-lg">
        <div className="flex flex-row justify-between px-2">
          <p className="text-sm">Price per Ticket</p>
          <p className="text-sm">
            {ticketPrice && ethers.utils.formatEther(ticketPrice.toString())}{" "}
            {CURRENCY}
          </p>
        </div>
        <div className="flex flex-row justify-between p-2 border-2 border-[#004337] m-2">
          <p>TICKETS</p>
          <input
            className="flex bg-transparent text-lg outline-none w-full text-right"
            value={quantity}
            min={1}
            max={10}
            type="number"
            onChange={(e) => setQuantity(Number(e.target.value))}
          ></input>
        </div>
        <div className="flex py-1 flex-row justify-between px-2 font-bold">
          <p className="text-xs">TOTAL COST OF TICKETS:</p>
          <p className="text-xs">
            {ticketPrice && getTotalCostOfTickets()} {CURRENCY}
          </p>
        </div>
        <div className="flex pt-1 flex-row justify-between px-2">
          <p className="text-xs">Service Fees</p>
          <p className="text-xs">
            {ticketCommission &&
              ethers.utils.formatEther(ticketCommission.toString())}{" "}
            {CURRENCY}
          </p>
        </div>
        <div className="flex flex-row justify-between px-2">
          <p className="text-xs">+ Network fees</p>
          <p className="text-xs">TBC</p>
        </div>
        <div className="py-2 flex">
          <button
            onClick={handleClick}
            /* disabled={
              expiration?.toString() < Date.now().toString() ||
              RemainingTickets?.toNumber() === 0
            } */
            className="bg-gradient-to-br from-orange-500 to-emerald-400 m-auto p-2 disabled:from-gray-600 to:from-gray-600 disabled:text-gray-100 disabled:cursor-not-allowed"
          >
            Buy {quantity} ticket(s)
          </button>
        </div>
      </div>
    </div>
  );
}

export default Tickets;
