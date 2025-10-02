import svgPaths from "./svg-mm8uj1gqdm";
import imgImage from "figma:asset/f2f5123cf9e66431edd3697e20336ef308182706.png";

function AssetsMindstudioIcon() {
  return (
    <div className="h-[30.711px] relative shrink-0 w-[51.441px]" data-name="Assets/MindstudioIcon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 52 31">
        <g id="Assets/MindstudioIcon">
          <path clipRule="evenodd" d={svgPaths.p312ce400} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector" />
          <path clipRule="evenodd" d={svgPaths.p32b8100} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector_2" />
          <path clipRule="evenodd" d={svgPaths.p1088c080} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function Icon() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[54px]" data-name="icon">
      <AssetsMindstudioIcon />
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center leading-[0] not-italic relative shrink-0 text-center text-white w-full" data-name="Text">
      <div className="flex flex-col font-['Inter:Bold',_sans-serif] font-bold justify-center relative shrink-0 text-[44px] w-full">
        <h2 className="block leading-[1.33]">At Mindstudio, I transformed design complexity into a systematic approach that facilitated the scaling of AI-driven applications.</h2>
      </div>
      <div className="flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center relative shrink-0 text-[22px] w-full">
        <p className="leading-[1.5]">As the lead designer at MindSet DS, I developed a robust design system from inception, ensuring alignment between design and development, implementing dark mode theming, and optimizing the design, deployment, and evolution of AI-powered tools.</p>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[12px] relative rounded-[32px] shrink-0" data-name="Button">
      <div className="flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-black text-center text-nowrap tracking-[-0.09px]">
        <p className="leading-[1.45] whitespace-pre">View Project</p>
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex flex-col gap-[48px] items-center justify-center max-w-[960px] relative shrink-0 w-full" data-name="Content">
      <Icon />
      <Text />
      <Button />
    </div>
  );
}

function Imagebox() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center justify-center max-w-[1440px] relative shrink-0 w-full" data-name="Imagebox">
      <div className="aspect-[1155/722] relative shrink-0 w-full" data-name="Image">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full" src={imgImage} />
      </div>
    </div>
  );
}

function Row1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Row 1">
      <div className="flex flex-col items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-col gap-[64px] items-center justify-center pb-[80px] pt-[120px] px-[64px] relative w-full">
          <Content />
          <Imagebox />
        </div>
      </div>
    </div>
  );
}

export default function ProjectSection() {
  return (
    <div className="bg-[#255fb3] content-stretch flex flex-col items-center justify-center relative size-full" data-name="Project-section">
      <Row1 />
    </div>
  );
}