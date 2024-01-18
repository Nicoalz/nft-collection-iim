import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThirdwebProvider, metamaskWallet } from "@thirdweb-dev/react";
import Header from "./components/Header";
import Mint from "./components/Mint";
import Collection from "./components/Collection";
import Home from "./components/Home";
import Footer from "./components/Footer";

export default function App() {
  return (
    <ThirdwebProvider
      activeChain={"mumbai"}
      supportedWallets={[
        metamaskWallet({
          recommended: true,
        }),
      ]}
      clientId="4d7caa4d6d086c30a3d6cedcf2c571f7"
    >
      <Router>
        <Header />
        <Routes>
          <Route path="/mint" element={<Mint />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/" element={<Home />} /> {/* Optional: Home component */}
        </Routes>
        <Footer />
      </Router>
    </ThirdwebProvider>
  );
}
