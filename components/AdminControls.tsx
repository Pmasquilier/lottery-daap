import React from "react";
import {
  StarIcon,
  CurrencyDollarIcon,
  ArrowPathIcon,
  ArrowUturnDownIcon,
} from "@heroicons/react/24/solid";
import {
  useContract,
  useContractRead,
  useContractWrite,
} from "@thirdweb-dev/react";
import { ethers } from "ethers";
import { CURRENCY } from "../constants";
import toast from "react-hot-toast";

function AdminControls() {
  const { contract } = useContract(
    process.env.NEXT_PUBLIC_LOTTERY_CONTRACT_ADDRESS
  );
  const { data: commission, isLoading } = useContractRead(
    contract,
    "operatorTotalCommission"
  );

  const { mutateAsync: DrawWinnerTicket } = useContractWrite(
    contract,
    "DrawWinnerTicket"
  );

  const { mutateAsync: restartDraw } = useContractWrite(
    contract,
    "restartDraw"
  );

  const { mutateAsync: WithdrawCommission } = useContractWrite(
    contract,
    "WithdrawCommission"
  );

  const { mutateAsync: RefundAll } = useContractWrite(contract, "RefundAll");

  const withdrawWinner = async () => {
    const notification = toast.loading("Withdrawing winnings ...");

    try {
      const data = await DrawWinnerTicket([{}]);
      toast.success("Winners withdrawn!", {
        id: notification,
      });
      console.info("contract call successs", data);
    } catch (err) {
      toast.error("Whoops something went wrong ...", {
        id: notification,
      });
      console.error("contract call failure", err);
    }
  };

  const onRestartDraw = async () => {
    const notification = toast.loading("restart draw ...");

    try {
      const data = await restartDraw([{}]);
      toast.success("restart drawn!", {
        id: notification,
      });
      console.info("contract call successs", data);
    } catch (err) {
      toast.error("Whoops something went wrong ...", {
        id: notification,
      });
      console.error("contract call failure", err);
    }
  };

  const onWithdrawComission = async () => {
    const notification = toast.loading("withdraw comission ...");

    try {
      const data = await WithdrawCommission([{}]);
      toast.success("comission withdrawn!", {
        id: notification,
      });
      console.info("contract call successs", data);
    } catch (err) {
      toast.error("Whoops something went wrong ...", {
        id: notification,
      });
      console.error("contract call failure", err);
    }
  };

  const onRefundAll = async () => {
    const notification = toast.loading("Refunding all...");

    try {
      const data = await RefundAll([{}]);
      toast.success("All refound!", {
        id: notification,
      });
      console.info("contract call successs", data);
    } catch (err) {
      toast.error("Whoops something went wrong ...", {
        id: notification,
      });
      console.error("contract call failure", err);
    }
  };

  return (
    <div className="text-white text-center px-5 py-3 rounded-md border-emerald-300/2 border">
      <h2 className="font-bold">Admin controls</h2>
      <p className="mb-5">
        Total comission to be withdrawn:{" "}
        {commission && ethers.utils.formatEther(commission?.toString())}{" "}
        {CURRENCY}
      </p>
      <div className="flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2">
        <button onClick={withdrawWinner} className="admin-button">
          <StarIcon className="h-6 mx-auto mb-2"></StarIcon>
          Draw a Winner
        </button>
        <button onClick={onWithdrawComission} className="admin-button">
          <CurrencyDollarIcon className="h-6 mx-auto mb-2"></CurrencyDollarIcon>
          Withdraw Commission
        </button>
        <button onClick={onRestartDraw} className="admin-button">
          <ArrowPathIcon className="h-6 mx-auto mb-2"></ArrowPathIcon>
          Restart Draws
        </button>
        <button onClick={onRefundAll} className="admin-button">
          <ArrowUturnDownIcon className="h-6 mx-auto mb-2"></ArrowUturnDownIcon>
          Refund All
        </button>
      </div>
    </div>
  );
}

export default AdminControls;
