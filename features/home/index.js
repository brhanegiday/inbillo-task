import SideMenu from "../sidebar/SideMenu";
import Stages from "../sidebar/Stages";
import Portfel from "./portfel/Portfel";
import { ArrowNarrowLeftIcon } from "@heroicons/react/solid";

function Home() {
  return (
    <div className="xl:container py-8 px-10 mx-auto flex gap-x-10">
      <div className="w-[20%] h-screen sticky top-0">
        <SideMenu />
      </div>
      <div className="w-6/12">
        <div className="flex items-center space-x-2 cursor-pointer">
          <ArrowNarrowLeftIcon className="h-5 w-5 text-lochmara-500" />
          <h3 className="uppercase text-xs text-black-haze-800 font-semibold py-2">
            podglad sprawy
          </h3>
        </div>
        <div className="bg-white rounded-lg shadow-md">
          <Portfel />
        </div>
      </div>
      <div className="w-3/16 h-screen sticky top-0">
        <Stages />
      </div>
    </div>
  );
}

export default Home;
