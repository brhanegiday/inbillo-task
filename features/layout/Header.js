import NextLink from "next/link";
import Image from "next/image";
import {
  ChatAlt2Icon,
  BellIcon,
  ChevronDownIcon,
  SearchIcon,
} from "@heroicons/react/outline";

import { BadgeCheckIcon } from "@heroicons/react/solid";

function Header() {
  return (
    <header className="py-4 sticky top-0 z-50 drop-shadow-sm bg-white">
      <div className="xl:container flex items-center px-10 mx-auto">
        <div>
          <NextLink href="/">
            <a className="font-semi-bold cursor-pointer">
              <img
                src="/header/logo-inbillo.svg"
                alt="inBillo Logo"
                width="150px"
                height="15px"
              />
            </a>
          </NextLink>
        </div>
        <div className="ml-auto mr-7 relative flex items-center w-1/2">
          <SearchIcon className="text-black-haze-700 absolute left-4 w-4 h-4" />
          <input
            type="text"
            placeholder="Search..."
            className="border-black-haze-600 border-[1px] focus:outline-none w-full rounded-lg py-2 pl-10 text-sm"
          />
        </div>
        <div className="flex space-x-4 items-center">
          <ChatAlt2Icon className="h-6 w-6 cursor-pointer text-black-haze-700" />
          <BellIcon className="h-6 w-6 cursor-pointer text-black-haze-700" />
          <div className="rounded-full h-[40px] w-[40px] border-2 border-emerald-500">
            <Image
              src="/header/avatar.png"
              alt="inBillo Logo"
              width={40}
              height={40}
              className="rounded-full"
            />
          </div>
          <div>
            <p className="text-sm0">Adam Kowalski</p>
            <div className="flex space-x-1">
              <BadgeCheckIcon className="h-4 w-4 text-emerald-500" />
              <p className="text-xs">Zweryflokowany</p>
            </div>
          </div>
          <div className="cursor-pointer">
            <ChevronDownIcon className="h-5 w-5 text-black-haze-700" />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
