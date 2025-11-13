import Image from "next/image";

export default function UserNavigation() {
  return (
    <div className="flex flex-col items-start z-10 ">
      <div className="flex h-[172px] px-[88px] w-full py-3 bg-[#18181B] justify-between">
        {/* LOGO */}

        <div className="flex items-center gap-3">
          <Image src={"/logo.svg"} height={37} width={46} alt="" />

          <div className="flex flex-col items-start">
            <div className="flex">
              <h4 className="font-semibold text-[20px] space-x-[-0.5px] text-white">
                Nom
              </h4>
              <h4 className="font-semibold text-[20px] space-x-[-0.5px] text-[#EF4444]">
                Nom
              </h4>
            </div>
            <span className="text-white">Swift delivery</span>
          </div>
        </div>

        {/* SEARCH AND CARD */}

        <div className="flex items-center gap-[13px] ">
          <div className="flex px-3 py-2 items-center gap-1 relative">
            <Image
              src={"/Location.svg"}
              height={20}
              width={20}
              alt=""
              className="left-4 absolute"
            />

            <span className="absolute left-10 text-[#EF4444]">
              Delivery address:
            </span>

            <input
              type="input"
              className="bg-[#FFFFFF] text-[#71717A] rounded-full px-15 py-1 placeholder:translate-x-24 "
              placeholder="Add Location"
            />

            <Image
              src={"/Chevron-right.svg"}
              className="absolute right-4"
              height={20}
              width={20}
              alt=""
            />
          </div>

          <div className="flex w-9 h-9 px-2 py-4 justify-center items-center gap-2 rounded-full bg-white">
            <Image src={"/shopping-cart.svg"} height={16} width={16} alt="" />
          </div>

          <div className="flex w-9 h-9 px-2 py-4 justify-center items-center gap-2 rounded-full bg-[#EF4444]">
            <button>
              <Image src={"/user.svg"} height={16} width={16} alt="" />
            </button>
          </div>
        </div>
      </div>

      <div className="w-full -z-10">
        {[...Array(7)].map((_, index) => (
          <div
            key={index}
            className="inline-flex -rotate-6 flex-col justify-center items-start gap-[-42px]"
          >
            <div className="flex items-center gap-35 opacity-40">
              <span className="w-[161px] items-center text-[129px] font-normal text-[#71717A]">
                Say
              </span>

              <span className="w-[161px] items-center text-[129px] font-normal text-[#71717A]">
                cheese
              </span>

              <span className="w-[161px] items-center text-[129px] font-normal text-[#FD543F]">
                ·
              </span>

              <div className="flex items-center gap-35 opacity-40">
                <span className="w-[161px] items-center text-[129px] font-normal text-[#FD543F]">
                  Fresh
                </span>

                <span className="w-[161px] items-center text-[129px] font-normal text-[#71717A]">
                  Fast
                </span>

                <span className="w-[161px] items-center text-[129px] font-normal text-[#FD543F]">
                  Delivered!
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
