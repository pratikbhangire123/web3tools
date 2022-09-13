import Head from "next/head";
import { useContext, useEffect } from "react";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import TypeConverter from "../components/typeConverter";
import UnitConverter from "../components/unitConverter";
import { ToolContext } from "../states/toolSelected";

export default function Home() {
  const [toolSelected, setToolSelected] = useContext(ToolContext);

  useEffect(() => {
    console.log(window.innerWidth);
  });

  return (
    <div className="font-poppins">
      <Head>
        <title>Web3Tools</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className="flex flex-col p-12 lg:p-16 xl:p-20 items-center">
        {toolSelected === "type" ? <TypeConverter /> : <UnitConverter />}
      </main>
      <Footer />
    </div>
  );
}
