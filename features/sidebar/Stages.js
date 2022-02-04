import { CheckCircleIcon } from "@heroicons/react/solid";
import { CheckCircleIcon as CircleIcon } from "@heroicons/react/outline";

function Stages() {
  return (
    <div className="mt-7">
      <h3 className="uppercase text-xs text-black-haze-800 font-semibold mb-2">
        etapy sprawy
      </h3>
      <div className="flex space-x-4 py-2">
        <CheckCircleIcon className="h-7 w-7 cursor-pointer text-emerald-500" />
        <div>
          <p className="text-lg cursor-pointer">Otwarcie Sprawy</p>
          <div className="rounded-full bg-emerald-100 w-fit py-1 px-2">
            <p className="text-xs text-emerald-500 font-semibold text-center ">
              Gotowe
            </p>
          </div>
        </div>
      </div>
      <div className="flex space-x-4 py-2">
        <CheckCircleIcon className="h-7 w-7 cursor-pointer text-emerald-500" />
        <div>
          <p className="text-lg cursor-pointer">Zarządzanie środkami</p>
          <div className="rounded-full bg-emerald-100 w-fit py-1 px-2">
            <p className="text-xs text-emerald-500 font-semibold text-center ">
              Gotowe
            </p>
          </div>
        </div>
      </div>
      <div className="flex space-x-4 py-2">
        <CheckCircleIcon className="h-7 w-7 cursor-pointer text-emerald-500" />
        <div>
          <p className="text-lg cursor-pointer">Uznanie Ulugu</p>
          <div className="rounded-full bg-emerald-100 w-fit py-1 px-2">
            <p className="text-xs text-emerald-500 font-semibold text-center ">
              Gotowe
            </p>
          </div>
        </div>
      </div>
      <div className="flex space-x-4 py-2">
        <CircleIcon className="h-7 w-7 cursor-pointer text-black-haze-900" />
        <div>
          <p className="text-lg cursor-pointer">Splata</p>
          <div className="rounded-full bg-emerald-100 w-fit py-1 px-2"></div>
        </div>
      </div>
      <div className="flex space-x-4 py-2">
        <CircleIcon className="h-7 w-7 cursor-pointer text-black-haze-900" />
        <div>
          <p className="text-lg cursor-pointer">Zabezpiecz Sprawy</p>
          <div className="rounded-full bg-emerald-100 w-fit py-1 px-2"></div>
        </div>
      </div>
    </div>
  );
}

export default Stages;
