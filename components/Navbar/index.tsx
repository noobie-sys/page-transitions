import Link from "next/link";
import React from "react";

const Navbar = () => {
  const nav_items = ["about", "contact"];
  return (
    <div className="w-full fixed top-0 h-fit p-4 border-b-2 border-gray-500 text-black uppercase font-semibold flex justify-between gap-5 backdrop-blur-md z-50">
      <div>
        <Link href={'/'}>Aman</Link>
      </div>

      <div className="flex gap-5">
        {nav_items.map((el, i) => (
          <div key={i}>
            <Link href={`/${el}`}>{el}</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
