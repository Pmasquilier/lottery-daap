import { useAddress, useContract } from "@thirdweb-dev/react";
import Head from "next/head";
import { NextPage } from "next/types";
import Header from "../components/Header";
import History from "../components/History";
import Loading from "../components/Loading";
import Login from "../components/Login";
import NextDraw from "../components/NextDraw";
import Tickets from "../components/Tickets";

const Home: NextPage = () => {
  const address = useAddress();
  const { contract, isLoading } = useContract(
    process.env.NEXT_PUBLIC_LOTTERY_CONTRACT_ADDRESS
  );

  if (!address) {
    return <Login></Login>;
  }

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div className="bg-[#091B18] min-h-screen flex flex-col">
      <Head>
        <title>Dapp Lottery</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header></Header>
      <History></History>
      <div className="flex flex-col md:flex-row justify-center items-center py-5 px-5 space-y-3 space-x-3">
        <NextDraw></NextDraw>
        <Tickets></Tickets>
      </div>
    </div>
  );
};

export default Home;
