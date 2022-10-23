import { useContract, useContractRead } from "@thirdweb-dev/react";
import React from "react";
import Countdown from "react-countdown";

interface Props {
  hours: string;
  minutes: string;
  seconds: string;
  completed: boolean;
}

function CountdownTimer() {
  const { contract } = useContract(
    process.env.NEXT_PUBLIC_LOTTERY_CONTRACT_ADDRESS
  );
  const { data: expiration } = useContractRead(contract, "expiration");

  const renderer = ({ hours, minutes, seconds, completed }: any) => {
    if (completed) {
      // Render a completed state
      return (
        <div>
          <p className="text-l pt-2 pb-1 animate-bounce">
            Ticket Sales have now CLOSED for this draw!
          </p>
        </div>
      );
    } else {
      // Render a countdown
      return (
        <div>
          <div className="flex justify-evenly">
            <div>
              <div className="w-24 h-16 flex bg-[#004337] animate-pulse">
                <p className="m-auto text-4xl text-white">{hours}</p>
              </div>
              <p className="text-xs m-1 font-bold">HOURS</p>
            </div>
            <div>
              <div className="w-24 h-16 flex bg-[#004337] animate-pulse">
                <p className="m-auto text-4xl text-white">{minutes}</p>
              </div>
              <p className="text-xs m-1 font-bold">MINUTES</p>
            </div>
            <div>
              <div className="w-24 h-16 flex bg-[#004337] animate-pulse">
                <p className="m-auto text-4xl text-white">{seconds}</p>
              </div>
              <p className="text-xs m-1 font-bold">SECONDS</p>
            </div>
          </div>
        </div>
      );
    }
  };

  return (
    <div>
      <Countdown
        renderer={renderer}
        date={new Date(expiration * 1000)}
      ></Countdown>
    </div>
  );
}

export default CountdownTimer;
