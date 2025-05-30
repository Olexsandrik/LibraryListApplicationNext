import Link from "next/link";
import React from "react";

export const Header = () => {
  return (
    <header className="my-10 flex justify-between gap-5 ">
      <Link href="/">BookWise</Link>
      <ul className="flex flex-row items-center gap-8">
        <li>
          <Link href="/library" className="text-base bg-red-500">
            Library
          </Link>
        </li>
      </ul>
    </header>
  );
};
