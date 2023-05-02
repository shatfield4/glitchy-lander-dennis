import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const CustomHeader = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    router.push("https://amazon.com/deals");
    setIsOpen(false);
  };

  return (
    <header className="bg-gray-900 w-full py-4">
      <div className="container mx-auto px-4">
        <nav className="relative flex items-center justify-between">
          <div className="text-white font-semibold text-2xl ml-3">
            Shop<span className="text-green-500">Baes</span>
          </div>
          <button
            aria-label="Toggle navigation"
            className={`hamburger hamburger--collapse relative ${
              isOpen ? "is-active" : ""
            } lg:hidden`}
            type="button"
            onClick={handleClick}
          >
            <span className="hamburger-box">
              <span className="hamburger-inner"></span>
            </span>
          </button>
          <div
            className={`${
              isOpen ? "block" : "hidden"
            } lg:hidden absolute top-full left-0 w-full bg-gray-900 z-10 py-4`}
          >
            <ul className="container mx-auto px-4 space-y-4 text-center">
              <li>
                <Link href="#">
                  <p onClick={handleLinkClick} className="text-white">
                    Home
                  </p>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <p onClick={handleLinkClick} className="text-white">
                    About
                  </p>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <p onClick={handleLinkClick} className="text-white">
                    Contact
                  </p>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default CustomHeader;
