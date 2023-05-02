import type { NextPage } from "next";
import Link from "next/link";

const Footer: NextPage = () => {
  return (
    <footer className="w-full bg-gray-200 py-4 mt-auto">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center px-4">
        <div className="flex flex-col md:flex-row gap-4">
          <Link href="/privacy-policy">
            <p className="text-gray-700 hover:text-gray-900">Privacy Policy</p>
          </Link>
          <Link href="/terms-of-service">
            <p className="text-gray-700 hover:text-gray-900">
              Terms of Service
            </p>
          </Link>
        </div>
        <div className="text-gray-700">© 2022 All Rights Reserved By SHEIN</div>
      </div>
    </footer>
  );
};

export default Footer;
