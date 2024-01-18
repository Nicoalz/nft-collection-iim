import { ConnectWallet } from "@thirdweb-dev/react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <footer className="flex w-full justify-between items-center px-16 py-5 bg-slate-400">
      <h2>GROUPE 3</h2>
      <ul className="flex items-center">
        <li className="mx-10">
          <Link to="/mint">Mint</Link>
        </li>
        <li className="mx-10">
          <Link to="/collection">Collection</Link>
        </li>
        <li className="mx-10">
          <ConnectWallet />
        </li>
      </ul>
    </footer>
  );
}

export default Header;
