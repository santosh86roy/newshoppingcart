import React from "react";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <>
      <div className="bg-neutral-100 flex flex-col sticky top-12 items-center h-[calc(100vh-48px)] w-72">
        <p className=" self-start mt-4 px-4 text-xl font-semibold">
          Categories
        </p>
        <div className="text-neutral-600 self-start mt-2 px-4 ">
          <p>
            <Link to="/laptops" className="hover:font-medium">
              Laptops
            </Link>
          </p>

          <p>
            <Link to="/mobiles" className="hover:font-medium">
              Mobiles
            </Link>
          </p>
          <p>
            <Link to="/Tablets" className="hover:font-medium">
              Tablets
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
