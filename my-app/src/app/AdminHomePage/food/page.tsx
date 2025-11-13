import Image from "next/image";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

export default function FoodPage() {
  return (
    <div className="flex flex-col bg-[#E4E4E7] w-full p-4">
      <div className="flex w-full flex-col items-end gap-6 ">
        {/* profile */}
        <Image src={"/Avatar.svg"} width={36} height={36} alt="" />
      </div>

      <div className="flex p-6 flex-col items-start gap-4 bg-white rounded-xl mt-6">
        <p className="text-[20px] font-semibold leading-7 text-foreground">
          Dishes category
        </p>

        <Dialog>
          <DialogTrigger asChild>
            <button className="text-primary-foreground flex bg-red-500 rounded-full w-9 h-9 items-center justify-center">
              +
            </button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add new category</DialogTitle>
            </DialogHeader>
            <div className="flex items-center gap-2">
              <div className="grid flex-1 gap-2">
                <label htmlFor="link" className="sr-only">
                  Link
                </label>
                <Input
                  id="link"
                  defaultValue="https://ui.shadcn.com/docs/installation"
                  readOnly
                />
              </div>
            </div>
            {/* <DialogFooter className="sm:justify-start"> */}
            {/* </DialogHeader> */}
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
