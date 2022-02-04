import { CheckCircleIcon } from "@heroicons/react/solid";
import HorizontalLine from "./HorizontalLine";

function Forms() {
  return (
    <div>
      <h3 className="text-lg pb-4">Budujemy podstawy </h3>
      <form>
        <div className="flex items-center space-x-4">
          <label className="block">
            <span className="block  uppercase text-xs  font-medium text-slate-400">
              kraj
            </span>
            <input
              type="text"
              placeholder="Polska"
              size={20}
              className="mt-1 block w-full px-3 py-2 border bg-[#F7F7F7] border-slate-200 rounded-md text-sm shadow-sm placeholder-slate-800 focus:outline-none"
            />
          </label>
          <label className="block">
            <span className="block  uppercase text-xs  font-medium text-slate-400">
              nip
            </span>
            <input
              type="text"
              placeholder="365 156 5339"
              size={20}
              className="mt-1 block w-full px-3 py-2 border bg-[#F7F7F7] border-slate-200 rounded-md text-sm shadow-sm placeholder-slate-800 focus:outline-none"
            />
          </label>
        </div>
        <div className="flex items-center space-x-4 py-4">
          <label className="block">
            <span className="block  uppercase text-xs  font-medium text-slate-400">
              nazwa frimy
            </span>
            <input
              type="text"
              placeholder="Na etapie"
              size={20}
              className="mt-1 block w-full px-3 py-2 border bg-[#F7F7F7] border-slate-200 rounded-md text-sm shadow-sm placeholder-slate-800 focus:outline-none"
            />
          </label>
          <label className="block">
            <span className="block  uppercase text-xs  font-medium text-slate-400">
              regon
            </span>
            <input
              type="text"
              placeholder="65358952"
              size={20}
              className="mt-1 block w-full px-3 py-2 border bg-[#F7F7F7] border-slate-200 rounded-md text-sm shadow-sm placeholder-slate-800 focus:outline-none"
            />
          </label>
          <label className="block">
            <span className="block  uppercase text-xs  font-medium text-slate-400">
              krs
            </span>
            <input
              type="text"
              placeholder="000002239"
              size={20}
              className="mt-1 block w-full px-3 py-2 border bg-[#F7F7F7] border-slate-200 rounded-md text-sm shadow-sm placeholder-slate-800 focus:outline-none"
            />
          </label>
        </div>
        <div className="flex items-center space-x-4 py-4">
          <label className="block">
            <span className="block  uppercase text-xs  font-medium text-slate-400">
              wojewodztyo
            </span>
            <input
              type="text"
              placeholder="Mazowchie"
              size={20}
              className="mt-1 block w-full px-3 py-2 border bg-[#F7F7F7] border-slate-200 rounded-md text-sm shadow-sm placeholder-slate-800 focus:outline-none"
            />
          </label>
          <label className="block">
            <span className="block  uppercase text-xs  font-medium text-slate-400">
              kod pcztowy
            </span>
            <input
              type="text"
              placeholder="01-106"
              size={20}
              className="mt-1 block w-full px-3 py-2 border bg-[#F7F7F7] border-slate-200 rounded-md text-sm shadow-sm placeholder-slate-800 focus:outline-none"
            />
          </label>
          <label className="block">
            <span className="block  uppercase text-xs  font-medium text-slate-400">
              miasto
            </span>
            <input
              type="text"
              placeholder="Warsaw"
              size={20}
              className="mt-1 block w-full px-3 py-2 border bg-[#F7F7F7] border-slate-200 rounded-md text-sm shadow-sm placeholder-slate-800 focus:outline-none"
            />
          </label>
        </div>
        <div className="flex items-center space-x-4">
          <label className="block">
            <span className="block  uppercase text-xs  font-medium text-slate-400">
              ulica
            </span>
            <input
              type="text"
              placeholder="Niepodleg"
              size={20}
              className="mt-1 block w-full px-3 py-2 border bg-[#F7F7F7] border-slate-200 rounded-md text-sm shadow-sm placeholder-slate-800 focus:outline-none"
            />
          </label>
          <label className="block">
            <span className="block  uppercase text-xs  font-medium text-slate-400">
              NR Budynku
            </span>
            <input
              type="text"
              placeholder="230a"
              size={20}
              className="mt-1 block w-full px-3 py-2 border bg-[#F7F7F7] border-slate-200 rounded-md text-sm shadow-sm placeholder-slate-800 focus:outline-none"
            />
          </label>
          <label className="block">
            <span className="block  uppercase text-xs  font-medium text-slate-400">
              nr lokalu
            </span>
            <input
              type="text"
              placeholder="60"
              size={20}
              className="mt-1 block w-full px-3 py-2 border bg-[#F7F7F7] border-slate-200 rounded-md text-sm shadow-sm placeholder-slate-800 focus:outline-none"
            />
          </label>
        </div>
      </form>
      <div className="flex items-center space-x-3 mt-4">
        <div className="flex space-x-1 items-center">
          <CheckCircleIcon className="h-5 w-5 text-emerald-500" />
          <p className="text-emerald-500 font-semibold text-sm">
            Wiemybrak należytego zabezpieczenia
          </p>
        </div>
        <p className="text-lochmara-500 text-sm font-semibold">Zobacz report</p>
      </div>
      <HorizontalLine />
    </div>
  );
}

export default Forms;
