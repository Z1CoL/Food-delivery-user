import Image from "next/image";

export default function TodaysOffer() {
  return (
    <section className="relative w-full h-[717px] overflow-hidden bg-[#fdfdfd]">
      <div className="absolute inset-0 z-2 flex flex-col items-center justify-center text-[100px] font-bold uppercase text-[#e5e5e5] opacity-40 -rotate-6">
        {[...Array(7)].map((_, i) => (
          <div key={i} className="flex gap-5">
            <span className="text-[#71717A]">Say</span>
            <span className="text-[#71717A]">cheese</span>
            <span className="text-[#FD543F]">·</span>
            <span className="text-[#FD543F]">Fresh</span>
            <span className="text-[#71717A]">Fast</span>
            <span className="text-[#FD543F]">Delivered!</span>
          </div>
        ))}
      </div>

      <div className="relative w-full h-[917px] z-10">
        <div className="flex w-[417px] h-[190px] flex-col absolute items-start gap-14px top-35 left-30 z-30 ">
          <span className="font-normal uppercase text-white text-[158px] ">
            TODAY'S{" "}
          </span>
        </div>

        <div className="flex w-[417px] h-[190px] flex-col absolute items-start gap-14px top-70 right-90 z-50 ">
          <span className="font-normal uppercase text-white text-[120px] ">
            Offer!
          </span>
        </div>

        <div className="flex gap-[9px] px-4 flex-col absolute items-start top-91.5 left-106.5 z-50 bg-white rounded-full">
          <span className="font-bold uppercase text-white text-[39px] ">
            Steak Society
          </span>
        </div>

        <div className="flex gap-[9px] px-4 flex-col absolute items-start top-90 left-105 z-50 bg-[#FD543F] rounded-full">
          <span className="font-bold uppercase text-white text-[39px] ">
            Steak Society
          </span>
        </div>

        <div className="absolute right-90 top-25 flex flex-col z-60 w-[403px]">
          <Image
            src={"/tavag.svg"}
            height={403}
            width={162}
            alt=""
            className="flex z-60 w-[402px]"
          />
        </div>

        <div className="absolute right-65 top-13 flex flex-col z-60 w-[403px]">
          <Image
            src={"/cake.svg"}
            height={192}
            width={192}
            alt=""
            className="flex z-60 w-48"
          />
        </div>

        <div className="w-[1662px] bg-black h-[311px] rounded-full absolute -left-60 top-40 z-20   "></div>
        <div className="w-[1662px] bg-[#FD543F] h-[311px] rounded-full absolute -left-55 top-45 z-15   "></div>

        <div className="flex flex-col items-center justify-center">
          <Image
            src={"/aimrTomZurag.svg"}
            width={818}
            height={917}
            alt=""
            className="absolute top-10 z-30  "
          />
        </div>
      </div>
    </section>
  );
}
