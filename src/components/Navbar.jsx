import { useState } from "react";
import {
  PaperAirplaneIcon,
  MoonIcon,
  SunIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

function App() {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="app">
      <nav>
        <div className="max-w-7xl mx-auto">
          <div className="flex mx-auto justify-between items-center w-5/6 border-2 border-gray-600 bg-gray-900 mt-4">
            {/* Primary menu and logo */}
            <div className="flex items-center gap-16 my-4 mt-2">
              {/* logo */}
              <div>
                <a
                  href="/"
                  className="flex gap-1 font-semibold text-gray-100 items-center "
                >
                  <div className="h-6 w-6" />
                  <span>portfolio</span>
                </a>
              </div>
              {/* primary */}
              <div className="hidden lg:flex gap-8 ">
                <a href="#" className="">
                  Home
                </a>
                <a href="#">Benefits</a>
                <a href="#">Our Classes</a>
                <a href="#">Contact Us</a>
              </div>
            </div>
            {/* secondary */}
            <div className="flex gap-6">
              <div className="hidden xs:flex items-center gap-10">
                <div className="hidden lg:flex items-center gap-2">
                  <MoonIcon className="h-6 w-6" />
                  <SunIcon className="h-6 w-6" />
                </div>
                <div>
                  <button className="rounded-full border-solid border-2 border-gray-300 py-2 px-4 hover:bg-gray-700 hover:text-gray-100">
                    Free Trial
                  </button>
                </div>
              </div>
              {/* Mobile navigation toggle */}
              <div className="lg:hidden flex items-center mr-6">
                <button onClick={() => setToggleMenu(!toggleMenu)}>
                  <Bars3Icon className="h-6 invert" />
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* mobile navigation */}
        <div
          className={`fixed z-40 w-60 right-[60px] bg-gray-900 text-gray-100  overflow-hidden flex flex-col items-center justify-center lg:hidden gap-12  origin-top duration-700 ${
            !toggleMenu ? "h-0" : "h-1/3"
          }`}
        >
          <div className="px-8">
            <div className="flex flex-col gap-8 font-semibold tracking-wider">
              <a href="#" className="mt-2">
                Features
              </a>
              <a href="#">Pricing</a>
              <a href="#">Download</a>
              <a href="#">Classic</a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default App;