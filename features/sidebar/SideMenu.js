import { useState } from "react";

import { BookmarkAltIcon } from "@heroicons/react/outline";
import {
  PlusIcon,
  BriefcaseIcon,
  ChartBarIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  AdjustmentsIcon,
} from "@heroicons/react/solid";

function SideMenu() {
  const [openMenu, setOpenMenu] = useState(false);
  const [ID, setID] = useState("");
  const handleOpenMenu = (id) => {
    setOpenMenu((v) => !v);
    setID(id);
  };
  return (
    <div className="space-y-4">
      <div className="flex space-x-2 cursor-pointer items-center pl-5 py-1 bg-lochmara-500 rounded-xl">
        <BookmarkAltIcon className="h-5 w-5 text-white" />
        <p className="text-md  text-white">Portfel</p>
      </div>
      <div className="flex space-x-2 items-center cursor-pointer pl-5 py-1">
        <PlusIcon className="h-5 w-5 text-lochmara-500" />
        <p className="text-md  text-lochmara-500 ">Zolez Sprawe</p>
      </div>
      <div
        className="flex justify-between items-center"
        onClick={() => handleOpenMenu(2)}
      >
        <div className="flex space-x-2 cursor-pointer items-center pl-5 py-1">
          <BriefcaseIcon className="h-5 w-5 text-lochmara-500" />
          <p className="text-md  text-lochmara-500">Sprawy</p>
        </div>

        {ID === 2 && !openMenu ? (
          <ChevronDownIcon className="h5 w-5 text-lochmara-500 cursor-pointer" />
        ) : (
          <ChevronUpIcon className="h5 w-5 text-lochmara-500 cursor-pointer" />
        )}
      </div>
      {ID === 2 && openMenu && (
        <div className="border-l-lochmara-500 border-l-2 ml-7 pl-4 transition duration-1000 ease-in">
          <p className="text-lochmara-500 text-sm cursor-pointer">Wiemybrak</p>
          <p className="text-lochmara-500 text-sm cursor-pointer py-4">
            #Przycznia
          </p>
          <p className="text-lochmara-500 text-sm cursor-pointer">
            #Wiarygodności
          </p>
        </div>
      )}
      <div className="flex space-x-2 cursor-pointer items-center pl-5 py-1">
        <AdjustmentsIcon className="h-5 w-5 text-lochmara-500" />
        <p className="text-md  text-lochmara-500">Gielda</p>
      </div>
      <div
        className="flex justify-between items-center"
        onClick={() => handleOpenMenu(3)}
      >
        <div className="flex space-x-2 cursor-pointer items-center pl-5 py-1">
          <ChartBarIcon className="h-5 w-5 text-lochmara-500" />
          <p className="text-md  text-lochmara-500">Monitoring</p>
        </div>
        {ID === 3 && !openMenu ? (
          <ChevronDownIcon className="h5 w-5 text-lochmara-500 cursor-pointer" />
        ) : (
          <ChevronUpIcon className="h5 w-5 text-lochmara-500 cursor-pointer" />
        )}
      </div>
      {ID === 3 && openMenu && (
        <div className="border-l-lochmara-500 border-l-2 ml-7 pl-4 transition duration-1000 ease-in">
          <p className="text-lochmara-500 text-sm cursor-pointer">Wiemybrak</p>
          <p className="text-lochmara-500 text-sm cursor-pointer py-4">
            #Przycznia
          </p>
          <p className="text-lochmara-500 text-sm cursor-pointer">
            #Wiarygodności
          </p>
        </div>
      )}
    </div>
  );
}

export default SideMenu;
