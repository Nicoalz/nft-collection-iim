import React from "react";

function Footer() {
  return (
    <footer className="w-full bg-slate-400 text-white py-6 px-4">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center">
        <h2 className="text-lg font-semibold mb-2">IIM groupe 3</h2>
        <p className="text-sm text-center">par</p>
        <ul className="list-none mt-2 flex">
          <li className="mx-2">Thomas AUBERT</li>
          <li className="mx-2">Nicolas BORDEAUX</li>
          <li className="mx-2">Giovani LABAT</li>
          <li className="mx-2">Sasha ATTAL</li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
