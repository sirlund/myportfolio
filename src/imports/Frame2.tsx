import imgTl24 from "figma:asset/1ea56dc0450f32017fd843d2d38452e6a1fe772a.png";
import imgTl12 from "figma:asset/ff77b8dc65684693f8721fbd3dbfdaf812401f5e.png";
import imgTl5 from "figma:asset/4f578de95eb58c0b76d9e967452f4fa56aafd83f.png";
import imgTl3 from "figma:asset/d4e7b3633789abe8f492e654cc1a4617814e0987.png";

function Tl24() {
  return (
    <div className="relative size-full" data-name="tl(24)">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgTl24} />
    </div>
  );
}

function Tl12() {
  return (
    <div className="relative size-full" data-name="tl(12)">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgTl12} />
    </div>
  );
}

function Tl5() {
  return (
    <div className="relative size-full" data-name="tl(5)">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgTl5} />
    </div>
  );
}

function Tl3() {
  return (
    <div className="relative size-full" data-name="tl(3)">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgTl3} />
    </div>
  );
}

export default function Frame2() {
  return (
    <div className="content-stretch flex gap-[419px] items-end relative size-full">
      <div className="h-[477px] relative shrink-0 w-[550px]" data-name="tl(24)">
        <Tl24 />
      </div>
      <div className="h-[484px] relative shrink-0 w-[550px]" data-name="tl(12)">
        <Tl12 />
      </div>
      <div className="h-[550px] relative shrink-0 w-[422px]" data-name="tl(5)">
        <Tl5 />
      </div>
      <div className="relative shrink-0 size-[550px]" data-name="tl(3)">
        <Tl3 />
      </div>
    </div>
  );
}