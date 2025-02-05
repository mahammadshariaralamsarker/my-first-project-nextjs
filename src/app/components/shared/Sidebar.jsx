import Link from "next/link";
import React from "react";

const Sidebar = () => {
  return (
    <div className=" h-screen bg-gray-400 w-52   flex flex-col max-h-full">
      <Link className="  text-center  " href="/">
        Home
      </Link>
      <Link className="  text-center my-2" href="/profile">
        Profile
      </Link>
      <Link className="  text-center" href="/setting">
        Setting
      </Link>
    </div>
  );
};

export default Sidebar;
