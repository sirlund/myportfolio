import svgPaths from "./svg-e4e4492p50";
import imgImage from "figma:asset/e44fcb5bc8dca7effc85f21ee80ed064a838827f.png";

function Group1() {
  return (
    <div className="absolute contents inset-[0.06%_0.11%_0.21%_0.1%]">
      <div className="absolute inset-[0.06%_0.11%_0.4%_85.83%]" data-name="iso">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 25">
          <path d={svgPaths.p331b8100} fill="var(--fill-0, #404040)" fillOpacity="0.48" id="iso" />
        </svg>
      </div>
      <div className="absolute inset-[0.06%_12.55%_0.21%_0.1%]" data-name="logo">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 63 25">
          <g id="logo">
            <path d={svgPaths.p21bad880} fill="var(--fill-0, #404040)" />
            <path d={svgPaths.p22605980} fill="var(--fill-0, #404040)" />
            <path d={svgPaths.p36e3ad00} fill="var(--fill-0, #404040)" />
            <path d={svgPaths.p39d6fb00} fill="var(--fill-0, #404040)" />
            <path d={svgPaths.pf46a0b0} fill="var(--fill-0, #404040)" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function TreezLogo() {
  return (
    <div className="aspect-[72/25] overflow-clip relative shrink-0 w-full" data-name="Treez Logo">
      <Group1 />
    </div>
  );
}

function Icon() {
  return (
    <div className="content-stretch flex flex-col h-[54px] items-center justify-center relative shrink-0 w-[72px]" data-name="icon">
      <TreezLogo />
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center leading-[0] not-italic relative shrink-0 text-center w-full" data-name="Text">
      <div className="flex flex-col font-['Inter:Bold',_sans-serif] font-bold justify-center relative shrink-0 text-[#29292a] text-[44px] w-full">
        <h2 className="block leading-[1.33]">At Treez, I developed a design system that ensured consistent product quality across platforms</h2>
      </div>
      <div className="flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center relative shrink-0 text-[#6d6d6e] text-[22px] w-full">
        <p className="leading-[1.5]">As the Design System Lead, I spearheaded the development of Root DS — a scalable and accessible system that effectively addressed years of design debt, enhancing consistency, clarity, and efficiency.</p>
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

export default function Project3() {
  return (
    <div className="bg-[#f1f6ea] content-stretch flex flex-col items-center justify-center relative size-full" data-name="Project 3">
      <Row1 />
    </div>
  );
}