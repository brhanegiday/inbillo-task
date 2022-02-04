import { ReplyIcon, DotsHorizontalIcon } from "@heroicons/react/solid";
import { InformationCircleIcon, BookmarkIcon } from "@heroicons/react/outline";
import Charts from "./Chart";
import Badges from "./Badges";
import Tagi from "./Tagi";
import Forms from "./Forms";
function Portfel() {
  return (
    <div className="py-5 px-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <h1 className="py-1">Budujemy podstawy merytoryczne</h1>
          <InformationCircleIcon className="text-lochmara-500 h-4 w-4 cursor-pointer" />
        </div>
        <div className="flex items-center space-x-3">
          <BookmarkIcon className="text-black-haze-800 h-5 w-5 cursor-pointer" />
          <ReplyIcon className="text-black-haze-800 h-5 w-5 cursor-pointer" />
          <DotsHorizontalIcon className="text-black-haze-800 h-5 w-5 cursor-pointer" />
        </div>
      </div>
      <p className="text-xs">Wdrożeniowe</p>
      <p className=" text-xs text-black-haze-800 pt-5 tracking-wider">
        Saldo biezace sprawy
      </p>
      <h2 className="text-3xl mt-1 font-medium text-lochmara-500">
        12 500 <span className="text-lg">PLN</span>
      </h2>
      <div className="mt-5">
        <Charts />
        <Badges />
      </div>
      <Tagi />
      <Forms />
    </div>
  );
}

export default Portfel;
