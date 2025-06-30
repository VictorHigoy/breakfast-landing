import { Menu } from "lucide-react";

export default function UpperRightBox() {
  return (
    <div className="absolute top-0 right-0 flex flex-col items-end justify-end">
      {/* This is the width and height of black box */}
      <div className="bg-primary-bg relative h-[60px] w-[50px] rounded-bl-2xl lg:h-[100px] lg:w-[100px] lg:rounded-bl-4xl">
        <div className="absolute inset-0 flex cursor-pointer items-center justify-center lg:hidden">
          <Menu className="text-white" />
        </div>
        <div className="bg-primary-bg absolute top-0 right-full">
          <div className="bg-yellow-bg h-[50px] w-[50px] rounded-tr-2xl lg:rounded-tr-4xl" />
        </div>
        <div className="bg-primary-bg absolute top-full right-0">
          <div className="bg-yellow-bg h-[50px] w-[50px] rounded-tr-2xl lg:rounded-tr-4xl" />
        </div>
      </div>
    </div>
  );
}
