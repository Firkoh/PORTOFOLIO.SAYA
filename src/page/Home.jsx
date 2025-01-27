import React from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { Link, Outlet } from "react-router-dom";


function Home() {
const menus = [{ name: "Dashboard" }];
  return (
    <section className="flex gap-6">
      <div className="bg-yellow-500 min-h-screen w-72 text-gray-100 px-4">
        <div className="py-3 flex justify-end">
          <HiMenuAlt3 size={26} className="cursor-pointer" />
        </div>
        <div className="mt-4 flex flex-col gap-4 relative">
          {menus.map((menu) => (
            <Link key={menu.name} to={menu.name.toLowerCase()}>
              <div>
                {React.createElement(HiMenuAlt3, { size: 20 })}
              </div>
              <h2>{menu.name}</h2>
            </Link>
          ))}
        </div>
      </div>
      <div className="flex-1">
        <Outlet />
      </div>
    </section>
  );
}
export default Home;

