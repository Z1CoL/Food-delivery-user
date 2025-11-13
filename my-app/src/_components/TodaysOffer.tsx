import Image from "next/image";

export default function TodaysOffer() {
  return (
    <section className="relative w-full h-[717px] overflow-hidden bg-[#fdfdfd]">
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-[100px] font-bold uppercase text-[#e5e5e5] opacity-40 -rotate-6">
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

      <div className="relative w-full h-[917px]">
        <div className="flex flex-col items-center justify-center z-30">
          <Image src={"/aimrTomZurag.svg"} width={918} height={917} alt="" />
        </div>

        <div className="w-[1662px] bg-black h-[311px] rounded-full absolute -left-40 -top-20 z-20   ">

        </div>
      </div>
    </section>
  );
}
