/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link } from "react-router-dom";
import { Button } from "@/components/UI";
import { AuthContext } from "@/contexts/AuthContext";
import { useContext } from "react";

const MenuItems = [
  {
    id: 1,
    name: "Explore",
    link: "/explore",
  },
  {
    id: 2,
    name: "Create Art",
    link: "/create-art",
  },
];

const Navbar = () => {
  const { user, connectWallet } = useContext(AuthContext);

  return (
    <header className="bg-white">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 xl:px-12">
        <div className="flex items-center justify-between h-16 lg:h-[72px]">
          <Link to="/" title="" className="text-2xl font-bold">
            NfMem
          </Link>

          <div className="hidden lg:flex lg:justify-start lg:ml-16 lg:space-x-8 xl:space-x-14">
            {MenuItems.map((item) => (
              <Link
                to={item.link}
                key={item.id}
                className="text-base font-semibold text-gray-900 transition-all duration-200 hover:text-gray-700"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {user?.address ? (
            <div>
              <p className="border px-3 rounded-full py-1 border-gray-900 text-gray-700 font-medium">
                {user.address.slice(0, 6)}...{user.address.slice(-4)}
              </p>
            </div>
          ) : (
            <Button onClick={connectWallet}>Connect Wallet</Button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
