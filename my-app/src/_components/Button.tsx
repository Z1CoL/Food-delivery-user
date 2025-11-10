import { ButtonType } from "@/lib/type";
import Image from "next/image";

export default function ButtonComponent({
  text,
  disable = false,
  buttonVariant = "inactive",
  onClick,
  buttonImage,
}: ButtonType) {
  const baseStyle =
    "rounded-full py-3 duration-200 flex justify-center items-center gap-2.5 ";
  const variantStyles = {
    active: "bg-black text-white",
    inactive: "",
  };

  return (
    <button
      disabled={disable}
      onClick={onClick}
      className={`${baseStyle} ${variantStyles[buttonVariant]} ${
        disable ? "opacity-60 cursor-not-allowed" : ""
      }`}
    >
      <Image src={`${buttonImage}`} height={16} width={16} alt=""></Image>
      {text}
    </button>
  );
}
