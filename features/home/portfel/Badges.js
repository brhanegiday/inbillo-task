import clsx from "clsx";

function Badges() {
  const badges = ["1H", "1D", "1W", "1M", "1Y"];
  return (
    <div className="flex items-center space-x-2 ml-12">
      {badges.map((badge, index) => (
        <div
          key={index}
          className={clsx(
            "rounded-full w-fit py-1 px-4 cursor-pointer",
            index === 2 ? "bg-lochmara-500 " : "bg-[#E6E6E6] "
          )}
        >
          <p
            className={clsx(
              "text-xs  text-center",
              index === 2 ? "text-white " : "text-black-haze-900 "
            )}
          >
            {badge}
          </p>
        </div>
      ))}
    </div>
  );
}

export default Badges;
