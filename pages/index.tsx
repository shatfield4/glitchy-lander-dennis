import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Link from "next/link";
import Header from "./components/Header";
import axios from "axios";
import Loader from "./components/Loader";

const Home: NextPage = () => {
  const router = useRouter();

  const [isApproved, setIsApproved] = useState(true); // False = Dirty active, True = Clean active

  const [offerUrl, setOfferUrl] = useState("");
  const [buttonText, setButtonText] = useState("Claim Card Now");

  const [isLoading, setIsLoading] = useState(false);
  const affiliateUrl = `https://tappgo.co/vplJi2w`;

  const handleClick = () => {
    setIsLoading(true);
    router.push(isApproved ? `https://www.amazon.com/deals` : affiliateUrl);
  };

  useEffect(() => {
    async function fetchData() {
      // const response = await axios.get("/api/get-approved");
      // setIsApproved(!response.data.isApproved);

      if (isApproved) {
        setButtonText("Start Now");
      }

      // const response2 = await axios.get("/api/get-offerurl");
      // setOfferUrl(response2.data.offerUrl);
    }
    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-gray-950 flex flex-col items-center">
      <Head>
        <title>Welcome to ShopBaes</title>
        <meta name="description" content="Get an amazing bonus today only." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="w-full relative mt-4 overflow-hidden mx-4">
        <div className="p-6">
          <img
            src={isApproved ? `/start_now.webp` : `/amazon750.png`}
            alt="girl"
            className="w-full max-w-2xl mx-auto rounded-2xl"
          />
        </div>
        <div className="mt-4 justify-center mx-auto p-6 flex flex-col">
          <p className="text-center text-white text-lg mb-6">
            1. Tap button below ⤵️
            <br />
            2. Enter your email & basic info ✍️
            <br />
            3. Check your email! 💸
          </p>
          <button
            onClick={handleClick}
            className="mt-4 bg-green-500 text-white py-2 px-10 mt-52px mx-auto rounded-2xl font-sans font-bold text-2xl text-center tracking-wider max-w-2xl w-full relative animate-bounce duration-1000"
          >
            {isLoading ? <Loader /> : buttonText}
          </button>
        </div>
        <div className="mt-20 justify-center flex flex-col mx-auto">
          <div className="mt-20 justify-center flex flex-col mx-auto">
            <Link href="/privacy-policy">
              <p className="text-center text-gray-500 text-lg cursor-pointer hover:text-gray-900">
                Privacy Policy
              </p>
            </Link>
            <Link href="/terms-of-service">
              <p className="text-center text-gray-500 text-lg mt-3 cursor-pointer hover:text-gray-900">
                Terms of Service
              </p>
            </Link>
            <p className="text-center text-gray-500 text-lg mt-10">
              © 2023 All Rights Reserved
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
