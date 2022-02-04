import { XIcon, PlusCircleIcon } from "@heroicons/react/solid";
import HorizontalLine from "./HorizontalLine";

function Tagi() {
  return (
    <div className="pt-5">
      <HorizontalLine />
      <h3 className="text-lg pb-2">Tagi</h3>
      <div className="flex items-center space-x-2 pt-2">
        <p className="text-lochomara-500 text-sm text-lochmara-500 cursor-pointer">
          #Wiemyżebrak
        </p>
        <XIcon className="w-4 h-5 text-red-500 cursor-pointer" />
        <PlusCircleIcon className="w-5 h-5 text-lochmara-500 cursor-pointer " />
      </div>
      <HorizontalLine />
    </div>
  );
}

export default Tagi;
