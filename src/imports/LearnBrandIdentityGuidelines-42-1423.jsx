import svgPaths from "./svg-7ofmre0kze";
import clsx from "clsx";

function LinkBackgroundImage({ children }{}>) {
  return (
    <div className="opacity-80 relative shrink-0 size-[24px]">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-[24px]">{children}</div>
    </div>
  );
}

function BackgroundImage2({ children }{}>) {
  return (
    <div className="size-full">
      <div className="content-stretch flex flex-col gap-[12px] h-[220px] items-start pb-px pt-[41px] px-[41px] relative w-full">{children}</div>
    </div>
  );
}

function BackgroundImage1({ children }{}>) {
  return (
    <div className="h-[24px] overflow-clip relative shrink-0 w-full">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        {children}
      </svg>
    </div>
  );
}

function BackgroundImage({ children }{}>) {
  return (
    <div className="absolute h-[28.594px] left-[32px] top-[112px] w-[492px]">
      <p className="absolute font-['General_Sans:Semibold',sans-serif] leading-[28.6px] left-0 not-italic text-[#14212a] text-[22px] text-nowrap top-[0.5px] whitespace-pre">{children}</p>
    </div>
  );
}

function ContainerBackgroundImage({ children }{}>) {
  return (
    <div className="h-[201.484px] relative shrink-0 w-full">
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[12px] h-[201.484px] items-start pb-0 pt-[32px] px-[32px] relative w-full">{children}</div>
      </div>
    </div>
  );
}

function IconBackgroundImage4({ children }{}>) {
  return (
    <div className="relative shrink-0 size-[28px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g id="Icon">{children}</g>
      </svg>
    </div>
  );
}

function IconBackgroundImage3({ children }{}>) {
  return (
    <div className="relative shrink-0 size-[36px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 36">
        <g id="Icon">{children}</g>
      </svg>
    </div>
  );
}
type IconBackgroundImage2Props = {
  additionalClassNames?;
};

function IconBackgroundImage2({ children, additionalClassNames = "" }2Props>) {
  return (
    <div className={clsx("absolute size-[20px]", additionalClassNames)}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">{children}</g>
      </svg>
    </div>
  );
}
type ButtonBackgroundImageAndTextProps = {
  text;
  additionalClassNames?;
};

function ButtonBackgroundImageAndText({ text, additionalClassNames = "" }: ButtonBackgroundImageAndTextProps) {
  return (
    <div className={clsx("absolute h-[21px] left-0 opacity-70 top-[2.5px]", additionalClassNames)}>
      <p className="absolute font-['General_Sans:Regular',sans-serif] leading-[21px] left-0 not-italic text-[14px] text-nowrap text-white top-[0.5px] whitespace-pre">{text}</p>
    </div>
  );
}
type HeadingBackgroundImageAndText2Props = {
  text;
};

function HeadingBackgroundImageAndText2({ text }: HeadingBackgroundImageAndText2Props) {
  return (
    <div className="h-[22.5px] relative shrink-0 w-full">
      <p className="absolute font-['General_Sans:Semibold',sans-serif] leading-[22.5px] left-0 not-italic text-[15px] text-nowrap text-white top-px whitespace-pre">{text}</p>
    </div>
  );
}

function IconBackgroundImage1() {
  return (
    <div className="relative shrink-0 size-[16px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M3.33333 8H12.6667" id="Vector" stroke="var(--stroke-0, #056FD4)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p1d405500} id="Vector_2" stroke="var(--stroke-0, #056FD4)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}
type TextBackgroundImageAndText4Props = {
  text;
};

function TextBackgroundImageAndText4({ text }: TextBackgroundImageAndText4Props) {
  return (
    <div className="h-[22.5px] relative shrink-0 w-[71.047px]">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid h-[22.5px] relative w-[71.047px]">
        <p className="absolute font-['General_Sans:Semibold',sans-serif] leading-[22.5px] left-0 not-italic text-[#056fd4] text-[15px] text-nowrap top-px whitespace-pre">{text}</p>
      </div>
    </div>
  );
}
type BackgroundImageAndTextProps = {
  text;
};

function BackgroundImageAndText({ text }: BackgroundImageAndTextProps) {
  return <BackgroundImage>{text}</BackgroundImage>;
}
type HeadingBackgroundImageAndText1Props = {
  text;
};

function HeadingBackgroundImageAndText1({ text }: HeadingBackgroundImageAndText1Props) {
  return (
    <div className="h-[28.594px] relative shrink-0 w-full">
      <p className="absolute font-['General_Sans:Semibold',sans-serif] leading-[28.6px] left-0 not-italic text-[#14212a] text-[22px] text-nowrap top-[0.5px] whitespace-pre">{text}</p>
    </div>
  );
}
type TextBackgroundImageAndText3Props = {
  text;
  additionalClassNames?;
};

function TextBackgroundImageAndText3({ text, additionalClassNames = "" }: TextBackgroundImageAndText3Props) {
  return (
    <div className={clsx("absolute h-[21px] opacity-60", additionalClassNames)}>
      <p className="absolute font-['General_Sans:Semibold',sans-serif] leading-[21px] left-0 not-italic text-[#6a7282] text-[14px] text-nowrap top-[0.5px] whitespace-pre">{text}</p>
    </div>
  );
}
type ParagraphBackgroundImageAndTextProps = {
  text;
  additionalClassNames?;
};

function ParagraphBackgroundImageAndText({ text, additionalClassNames = "" }: ParagraphBackgroundImageAndTextProps) {
  return (
    <div className={clsx("absolute h-[30.594px] top-0", additionalClassNames)}>
      <p className="absolute font-['General_Sans:Medium',sans-serif] leading-[30.6px] left-0 not-italic text-[#14212a] text-[18px] text-nowrap top-px whitespace-pre">{text}</p>
    </div>
  );
}

function IconBackgroundImage() {
  return (
    <div className="absolute left-0 size-[24px] top-[2px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g clipPath="url(#clip0_42_1467)" id="Icon">
          <path d={svgPaths.pace200} id="Vector" stroke="var(--stroke-0, #056FD4)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
          <path d="M9 12L11 14L15 10" id="Vector_2" stroke="var(--stroke-0, #056FD4)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
        </g>
        <defs>
          <clipPath id="clip0_42_1467">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}
type HeadingBackgroundImageAndTextProps = {
  text;
};

function HeadingBackgroundImageAndText({ text }: HeadingBackgroundImageAndTextProps) {
  return (
    <div className="absolute h-[36.398px] left-0 top-[112px] w-[278.664px]">
      <p className="absolute font-['General_Sans:Semibold',sans-serif] leading-[36.4px] left-0 not-italic text-[#14212a] text-[28px] text-nowrap top-[1.5px] whitespace-pre">{text}</p>
    </div>
  );
}
type TextBackgroundImageAndText2Props = {
  text;
  additionalClassNames?;
};

function TextBackgroundImageAndText2({ text, additionalClassNames = "" }: TextBackgroundImageAndText2Props) {
  return (
    <div className={clsx("absolute content-stretch flex h-[16px] items-start top-[5px]", additionalClassNames)}>
      <p className="font-['General_Sans:Semibold',sans-serif] leading-[19.5px] not-italic relative shrink-0 text-[#056fd4] text-[13px] text-center text-nowrap tracking-[1.95px] uppercase whitespace-pre">{text}</p>
    </div>
  );
}
type TextBackgroundImageAndText1Props = {
  text;
  additionalClassNames?;
};

function TextBackgroundImageAndText1({ text, additionalClassNames = "" }: TextBackgroundImageAndText1Props) {
  return (
    <div className={clsx("absolute h-[24px] opacity-60", additionalClassNames)}>
      <p className="absolute font-['General_Sans:Semibold',sans-serif] leading-[24px] left-0 not-italic text-[#6a7282] text-[16px] text-nowrap top-px whitespace-pre">{text}</p>
    </div>
  );
}
type TextBackgroundImageAndTextProps = {
  text;
  additionalClassNames?;
};

function TextBackgroundImageAndText({ text, additionalClassNames = "" }: TextBackgroundImageAndTextProps) {
  return (
    <div className={clsx("absolute content-stretch flex h-[16px] items-start left-0 top-[5px]", additionalClassNames)}>
      <p className="font-['General_Sans:Semibold',sans-serif] leading-[19.5px] not-italic relative shrink-0 text-[#056fd4] text-[13px] text-nowrap tracking-[1.95px] uppercase whitespace-pre">{text}</p>
    </div>
  );
}

function Container() {
  return <div className="absolute blur-3xl filter left-[740px] rounded-[1.67772e+07px] size-[700px] top-0" data-name="Container" />;
}

function Container1() {
  return <div className="absolute blur-3xl filter left-0 rounded-[1.67772e+07px] size-[500px] top-[466.99px]" data-name="Container" />;
}

function Text() {
  return (
    <div className="absolute bg-[rgba(5,111,212,0.1)] content-stretch flex h-[32px] items-start left-0 px-[16px] py-[8px] rounded-[1.67772e+07px] top-[-3px] w-[120.859px]" data-name="Text">
      <p className="font-['General_Sans:Semibold',sans-serif] leading-[19.5px] not-italic relative shrink-0 text-[#056fd4] text-[13px] text-nowrap tracking-[1.95px] uppercase whitespace-pre">Solutions</p>
    </div>
  );
}

function Heading() {
  return (
    <div className="absolute h-[277.195px] left-0 top-[64px] w-[645.328px]" data-name="Heading 1">
      <p className="absolute font-['General_Sans:Semibold',sans-serif] leading-[92.4px] left-0 not-italic text-[#14212a] text-[88px] top-[4px] tracking-[-3.52px] w-[709px]">Tools and Workflows for the Future of Work.</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="absolute h-[74.797px] left-0 opacity-75 top-[381.2px] w-[576px]" data-name="Paragraph">
      <p className="absolute font-['General_Sans:Regular',sans-serif] leading-[37.4px] left-0 not-italic text-[#14212a] text-[22px] top-[0.5px] w-[544px]">Reboo8 delivers intelligent, human-centered workflows that blend capability, agility, and AI-driven insight.</p>
    </div>
  );
}

function Icon() {
  return (
    <IconBackgroundImage2 additionalClassNames="left-[166.98px] top-[3.5px]">
      <path d={svgPaths.p6561400} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.08333" />
    </IconBackgroundImage2>
  );
}

function Text1() {
  return (
    <div className="h-[27px] relative shrink-0 w-full" data-name="Text">
      <p className="absolute font-['General_Sans:Semibold',sans-serif] leading-[27px] left-[77.5px] not-italic text-[18px] text-center text-nowrap text-white top-px translate-x-[-50%] whitespace-pre">Explore Capabilities</p>
      <Icon />
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#056fd4] h-[67px] relative rounded-[14px] shrink-0 w-[266.984px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col h-[67px] items-start pb-0 pt-[20px] px-[40px] relative w-[266.984px]">
        <Text1 />
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-white h-[71px] relative rounded-[14px] shrink-0 w-[159.063px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-2 border-[#14212a] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid h-[71px] relative w-[159.063px]">
        <p className="absolute font-['General_Sans:Semibold',sans-serif] leading-[27px] left-[80.5px] not-italic text-[#14212a] text-[18px] text-center text-nowrap top-[23px] translate-x-[-50%] whitespace-pre">Talk to Us</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute content-stretch flex gap-[20px] h-[87px] items-start left-0 pb-0 pt-[16px] px-0 top-[495.99px] w-[645.328px]" data-name="Container">
      <Button />
      <Button1 />
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute h-[582.992px] left-0 top-0 w-[645.328px]" data-name="Container">
      <Text />
      <Heading />
      <Paragraph />
      <Container2 />
    </div>
  );
}

function Container4() {
  return <div className="absolute bg-[rgba(5,111,212,0.1)] blur-2xl filter left-[186.66px] rounded-[24px] size-[288px] top-[-32px]" data-name="Container" />;
}

function Container5() {
  return <div className="absolute bg-gradient-to-t from-[rgba(20,33,42,0.1)] h-[553.328px] left-0 to-[rgba(0,0,0,0)] top-0 w-[442.664px]" data-name="Container" />;
}

function Container6() {
  return (
    <div className="absolute h-[553.328px] left-[60.67px] overflow-clip rounded-[24px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] top-[0.17px] w-[442.664px]" data-name="Container">
      <TextBackgroundImageAndText1 text="Solutions Hero" additionalClassNames="left-[169.68px] top-[264.66px] w-[103.297px]" />
      <Container5 />
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute h-[553.328px] left-[709.33px] top-[14.83px] w-[442.664px]" data-name="Container">
      <Container4 />
      <Container6 />
    </div>
  );
}

function Container8() {
  return (
    <div className="absolute h-[582.992px] left-[144px] top-[192px] w-[1152px]" data-name="Container">
      <Container3 />
      <Container7 />
    </div>
  );
}

function SolutionsHero() {
  return (
    <div className="h-[966.992px] overflow-clip relative shrink-0 w-full" data-name="SolutionsHero">
      <Container />
      <Container1 />
      <Container8 />
    </div>
  );
}

function Container9() {
  return <div className="absolute blur-3xl filter left-[420px] rounded-[1.67772e+07px] size-[600px] top-[210.14px]" data-name="Container" />;
}

function Heading1() {
  return (
    <div className="absolute h-[128.797px] left-[192px] top-[40px] w-[768px]" data-name="Heading 2">
      <p className="absolute font-['General_Sans:Semibold',sans-serif] leading-[64.4px] left-[384.19px] not-italic text-[#14212a] text-[56px] text-center top-[3px] tracking-[-1.4px] translate-x-[-50%] w-[695px]">Three Pillars Powering Modern Work</p>
    </div>
  );
}

function Container10() {
  return (
    <div className="h-[168.797px] relative shrink-0 w-full" data-name="Container">
      <TextBackgroundImageAndText2 text="Core Solutions" additionalClassNames="left-[507.55px] w-[136.891px]" />
      <Heading1 />
    </div>
  );
}

function Container11() {
  return <div className="absolute h-[367.492px] left-0 opacity-0 rounded-[24px] top-0 w-[358.664px]" data-name="Container" />;
}

function Container12() {
  return <div className="absolute left-[262.66px] opacity-0 rounded-tl-[24px] size-[96px] top-[271.49px]" data-name="Container" />;
}

function Icon1() {
  return (
    <IconBackgroundImage3>
      <path d={svgPaths.p1c287f00} id="Vector" stroke="var(--stroke-0, #056FD4)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
    </IconBackgroundImage3>
  );
}

function Container13() {
  return (
    <div className="absolute bg-[rgba(5,111,212,0.1)] content-stretch flex items-center justify-center left-0 rounded-[16px] size-[80px] top-0" data-name="Container">
      <Icon1 />
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="absolute h-[57.797px] left-0 opacity-75 top-[164.4px] w-[278.664px]" data-name="Paragraph">
      <p className="absolute font-['General_Sans:Regular',sans-serif] leading-[28.9px] left-0 not-italic text-[#14212a] text-[17px] top-[0.5px] w-[212px]">AI-powered orchestration + contextual automation</p>
    </div>
  );
}

function Container14() {
  return (
    <div className="absolute h-[222.195px] left-[40px] top-[40px] w-[278.664px]" data-name="Container">
      <Container13 />
      <HeadingBackgroundImageAndText text="Intelligent Workflows" />
      <Paragraph1 />
    </div>
  );
}

function Container15() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.8)] border-2 border-gray-100 border-solid h-[371.492px] left-0 rounded-[24px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] top-0 w-[362.664px]" data-name="Container">
      <Container11 />
      <Container12 />
      <Container14 />
    </div>
  );
}

function Container16() {
  return <div className="absolute h-[367.492px] left-0 opacity-0 rounded-[24px] top-0 w-[358.664px]" data-name="Container" />;
}

function Container17() {
  return <div className="absolute left-[262.66px] opacity-0 rounded-tl-[24px] size-[96px] top-[271.49px]" data-name="Container" />;
}

function Icon2() {
  return (
    <IconBackgroundImage3>
      <path d={svgPaths.pcddb400} id="Vector" stroke="var(--stroke-0, #056FD4)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
      <path d={svgPaths.p3336b200} id="Vector_2" stroke="var(--stroke-0, #056FD4)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
      <path d={svgPaths.p17b39380} id="Vector_3" stroke="var(--stroke-0, #056FD4)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
      <path d={svgPaths.p2d4d6480} id="Vector_4" stroke="var(--stroke-0, #056FD4)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
    </IconBackgroundImage3>
  );
}

function Container18() {
  return (
    <div className="absolute bg-[rgba(5,111,212,0.1)] content-stretch flex items-center justify-center left-0 rounded-[16px] size-[80px] top-0" data-name="Container">
      <Icon2 />
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="absolute h-[57.797px] left-0 opacity-75 top-[164.4px] w-[278.664px]" data-name="Paragraph">
      <p className="absolute font-['General_Sans:Regular',sans-serif] leading-[28.9px] left-0 not-italic text-[#14212a] text-[17px] top-[0.5px] w-[232px]">Flexible, skilled professionals available for diverse workflows</p>
    </div>
  );
}

function Container19() {
  return (
    <div className="absolute h-[222.195px] left-[40px] top-[40px] w-[278.664px]" data-name="Container">
      <Container18 />
      <HeadingBackgroundImageAndText text="Agility Network" />
      <Paragraph2 />
    </div>
  );
}

function Container20() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.8)] border-2 border-gray-100 border-solid h-[371.492px] left-[394.66px] rounded-[24px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] top-[20px] w-[362.664px]" data-name="Container">
      <Container16 />
      <Container17 />
      <Container19 />
    </div>
  );
}

function Container21() {
  return <div className="absolute h-[367.492px] left-0 opacity-0 rounded-[24px] top-0 w-[358.664px]" data-name="Container" />;
}

function Container22() {
  return <div className="absolute left-[262.66px] opacity-0 rounded-tl-[24px] size-[96px] top-[271.49px]" data-name="Container" />;
}

function Icon3() {
  return (
    <IconBackgroundImage3>
      <path d={svgPaths.p13a3ff0} id="Vector" stroke="var(--stroke-0, #056FD4)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
      <path d={svgPaths.p34ca8680} id="Vector_2" stroke="var(--stroke-0, #056FD4)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
      <path d={svgPaths.p10491680} id="Vector_3" stroke="var(--stroke-0, #056FD4)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
    </IconBackgroundImage3>
  );
}

function Container23() {
  return (
    <div className="absolute bg-[rgba(5,111,212,0.1)] content-stretch flex items-center justify-center left-0 rounded-[16px] size-[80px] top-0" data-name="Container">
      <Icon3 />
    </div>
  );
}

function Heading2() {
  return (
    <div className="absolute h-[72.797px] left-0 top-[112px] w-[278.664px]" data-name="Heading 3">
      <p className="absolute font-['General_Sans:Semibold',sans-serif] leading-[36.4px] left-0 not-italic text-[#14212a] text-[28px] top-[1.5px] w-[167px]">Elastic Work Infrastructure</p>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="absolute h-[86.695px] left-0 opacity-75 top-[200.8px] w-[278.664px]" data-name="Paragraph">
      <p className="absolute font-['General_Sans:Regular',sans-serif] leading-[28.9px] left-0 not-italic text-[#14212a] text-[17px] top-[0.5px] w-[240px]">Scalable execution layer for CX, digital ops, annotation, data labeling, RLHF, evaluation</p>
    </div>
  );
}

function Container24() {
  return (
    <div className="absolute h-[287.492px] left-[40px] top-[40px] w-[278.664px]" data-name="Container">
      <Container23 />
      <Heading2 />
      <Paragraph3 />
    </div>
  );
}

function Container25() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.8)] border-2 border-gray-100 border-solid h-[371.492px] left-[789.33px] rounded-[24px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] top-0 w-[362.664px]" data-name="Container">
      <Container21 />
      <Container22 />
      <Container24 />
    </div>
  );
}

function Container26() {
  return (
    <div className="h-[371.492px] relative shrink-0 w-full" data-name="Container">
      <Container15 />
      <Container20 />
      <Container25 />
    </div>
  );
}

function Container27() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[96px] h-[1020.29px] items-start left-[120px] pb-0 pt-[192px] px-[24px] top-0 w-[1200px]" data-name="Container">
      <Container10 />
      <Container26 />
    </div>
  );
}

function SolutionPillars() {
  return (
    <div className="bg-white h-[1020.29px] overflow-clip relative shrink-0 w-full" data-name="SolutionPillars">
      <Container9 />
      <Container27 />
    </div>
  );
}

function Container28() {
  return <div className="absolute bg-[#056fd4] h-[4px] left-0 rounded-[1.67772e+07px] top-[36px] w-[64px]" data-name="Container" />;
}

function Container29() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="Container">
      <TextBackgroundImageAndText text="Intelligent Workflows" additionalClassNames="w-[199.5px]" />
      <Container28 />
    </div>
  );
}

function Heading3() {
  return (
    <div className="h-[184.781px] relative shrink-0 w-full" data-name="Heading 2">
      <p className="absolute font-['General_Sans:Semibold',sans-serif] leading-[61.6px] left-0 not-italic text-[#14212a] text-[56px] top-[3.5px] tracking-[-1.4px] w-[508px]">Smarter systems that augment human capability.</p>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="h-[136.781px] opacity-75 relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['General_Sans:Regular',sans-serif] leading-[34.2px] left-0 not-italic text-[#14212a] text-[19px] top-px w-[509px]">Our intelligent workflows combine AI-powered automation with human expertise, creating adaptive systems that learn, route, and optimize in real-time while maintaining ethical oversight.</p>
    </div>
  );
}

function Container30() {
  return (
    <div className="h-[30.594px] relative shrink-0 w-full" data-name="Container">
      <IconBackgroundImage />
      <ParagraphBackgroundImageAndText text="Model-assisted decision-making" additionalClassNames="left-[40px] opacity-[0.85] w-[256.234px]" />
    </div>
  );
}

function Container31() {
  return (
    <div className="h-[30.594px] relative shrink-0 w-full" data-name="Container">
      <IconBackgroundImage />
      <ParagraphBackgroundImageAndText text="Real-time task routing" additionalClassNames="left-[40px] opacity-[0.85] w-[172.586px]" />
    </div>
  );
}

function Container32() {
  return (
    <div className="h-[30.594px] relative shrink-0 w-full" data-name="Container">
      <IconBackgroundImage />
      <ParagraphBackgroundImageAndText text="Contextual reasoning layers" additionalClassNames="left-[40px] opacity-[0.85] w-[217.641px]" />
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="absolute h-[30.594px] left-[40px] opacity-[0.85] top-0 w-[315.109px]" data-name="Paragraph">
      <p className="absolute font-['General_Sans:Medium',sans-serif] leading-[30.6px] left-0 not-italic text-[#14212a] text-[18px] text-nowrap top-px whitespace-pre">{`Ethical & human-in-the-loop governance`}</p>
    </div>
  );
}

function Container33() {
  return (
    <div className="h-[30.594px] relative shrink-0 w-full" data-name="Container">
      <IconBackgroundImage />
      <Paragraph5 />
    </div>
  );
}

function Container34() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] h-[198.375px] items-start pb-0 pt-[16px] px-0 relative shrink-0 w-full" data-name="Container">
      <Container30 />
      <Container31 />
      <Container32 />
      <Container33 />
    </div>
  );
}

function Container35() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[32px] h-[655.938px] items-start left-0 top-0 w-[536px]" data-name="Container">
      <Container29 />
      <Heading3 />
      <Paragraph4 />
      <Container34 />
    </div>
  );
}

function Container36() {
  return <div className="absolute blur-2xl filter left-[264px] rounded-[24px] size-[320px] top-[-48px]" data-name="Container" />;
}

function Container37() {
  return <div className="absolute bg-gradient-to-t from-[rgba(5,111,212,0.1)] h-[402px] left-0 to-[rgba(0,0,0,0)] top-0 via-50% via-[rgba(0,0,0,0)] w-[536px]" data-name="Container" />;
}

function Container38() {
  return <div className="absolute bg-gradient-to-t from-[rgba(20,33,42,0.05)] h-[128px] left-0 to-[rgba(0,0,0,0)] top-[274px] w-[536px]" data-name="Container" />;
}

function Container39() {
  return (
    <div className="absolute h-[402px] left-0 overflow-clip rounded-[24px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] top-0 w-[536px]" data-name="Container">
      <TextBackgroundImageAndText1 text="Workflow Visualization" additionalClassNames="left-[190.51px] top-[189px] w-[154.977px]" />
      <Container37 />
      <Container38 />
    </div>
  );
}

function Container40() {
  return (
    <div className="absolute h-[402px] left-[616px] top-[126.97px] w-[536px]" data-name="Container">
      <Container36 />
      <Container39 />
    </div>
  );
}

function Container41() {
  return (
    <div className="h-[655.938px] relative shrink-0 w-full" data-name="Container">
      <Container35 />
      <Container40 />
    </div>
  );
}

function IntelligentWorkflows() {
  return (
    <div className="bg-gradient-to-b from-[#ffffff] h-[1039.94px] relative shrink-0 to-[#ffffff] via-50% via-[rgba(249,250,251,0.4)] w-full" data-name="IntelligentWorkflows">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col h-[1039.94px] items-start pb-0 pt-[192px] px-[144px] relative w-full">
          <Container41 />
        </div>
      </div>
    </div>
  );
}

function Container42() {
  return <div className="absolute bg-[#056fd4] h-[4px] left-0 rounded-[1.67772e+07px] top-[36px] w-[64px]" data-name="Container" />;
}

function Container43() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="Container">
      <TextBackgroundImageAndText text="Agility Network" additionalClassNames="w-[138.664px]" />
      <Container42 />
    </div>
  );
}

function Heading4() {
  return (
    <div className="h-[184.781px] relative shrink-0 w-full" data-name="Heading 2">
      <p className="absolute font-['General_Sans:Semibold',sans-serif] leading-[61.6px] left-0 not-italic text-[#14212a] text-[56px] top-[3.5px] tracking-[-1.4px] w-[406px]">A diverse, flexible, AI-ready talent network.</p>
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="h-[102.586px] opacity-75 relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['General_Sans:Regular',sans-serif] leading-[34.2px] left-0 not-italic text-[#14212a] text-[19px] top-px w-[412px]">Access a global network of trained professionals who bring specialized skills, cultural fluency, and adaptive intelligence to every workflow.</p>
    </div>
  );
}

function Container44() {
  return <div className="absolute bg-[#056fd4] left-0 rounded-[1.67772e+07px] size-[8px] top-[10px]" data-name="Container" />;
}

function Container45() {
  return (
    <div className="h-[30.594px] relative shrink-0 w-full" data-name="Container">
      <Container44 />
      <ParagraphBackgroundImageAndText text="Skilled professionals across industries" additionalClassNames="left-[24px] opacity-80 w-[297.617px]" />
    </div>
  );
}

function Container46() {
  return <div className="absolute bg-[#056fd4] left-0 rounded-[1.67772e+07px] size-[8px] top-[10px]" data-name="Container" />;
}

function Container47() {
  return (
    <div className="h-[30.594px] relative shrink-0 w-full" data-name="Container">
      <Container46 />
      <ParagraphBackgroundImageAndText text="Workflow-specific talent pools" additionalClassNames="left-[24px] opacity-80 w-[236.414px]" />
    </div>
  );
}

function Container48() {
  return <div className="absolute bg-[#056fd4] left-0 rounded-[1.67772e+07px] size-[8px] top-[10px]" data-name="Container" />;
}

function Container49() {
  return (
    <div className="h-[30.594px] relative shrink-0 w-full" data-name="Container">
      <Container48 />
      <ParagraphBackgroundImageAndText text="Flexible engagement models" additionalClassNames="left-[24px] opacity-80 w-[226.281px]" />
    </div>
  );
}

function Container50() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[131.781px] items-start pb-0 pt-[8px] px-0 relative shrink-0 w-full" data-name="Container">
      <Container45 />
      <Container47 />
      <Container49 />
    </div>
  );
}

function Container51() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[32px] h-[483.148px] items-start left-0 top-[8.42px] w-[442.664px]" data-name="Container">
      <Heading4 />
      <Paragraph6 />
      <Container50 />
    </div>
  );
}

function Container52() {
  return <div className="absolute blur-3xl filter left-[-64px] rounded-[1.67772e+07px] size-[256px] top-[-64px]" data-name="Container" />;
}

function Container53() {
  return <div className="absolute bg-gradient-to-t from-[rgba(20,33,42,0.05)] h-[190.406px] left-0 to-[rgba(0,0,0,0)] top-0 w-[334.664px]" data-name="Container" />;
}

function Container54() {
  return (
    <div className="absolute h-[190.406px] left-[310.66px] overflow-clip rounded-[24px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] top-[309.59px] w-[334.664px]" data-name="Container">
      <TextBackgroundImageAndText3 text="Talent 3" additionalClassNames="left-[143.11px] top-[84.7px] w-[48.445px]" />
      <Container53 />
    </div>
  );
}

function Container55() {
  return <div className="absolute bg-gradient-to-t from-[rgba(20,33,42,0.05)] h-[285.594px] left-0 to-[rgba(0,0,0,0)] top-0 w-[422.219px]" data-name="Container" />;
}

function Container56() {
  return (
    <div className="absolute h-[285.594px] left-0 overflow-clip rounded-[24px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)] top-0 w-[422.219px]" data-name="Container">
      <TextBackgroundImageAndText1 text="Talent 1" additionalClassNames="left-[185.74px] top-[130.8px] w-[50.727px]" />
      <Container55 />
    </div>
  );
}

function Container57() {
  return <div className="absolute h-[158.406px] left-0 top-0 w-[334.664px]" data-name="Container" />;
}

function Container58() {
  return (
    <div className="absolute h-[158.406px] left-[-24px] overflow-clip rounded-[24px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] top-[341.59px] w-[334.664px]" data-name="Container">
      <TextBackgroundImageAndText3 text="Talent 2" additionalClassNames="left-[143.69px] top-[68.7px] w-[47.281px]" />
      <Container57 />
    </div>
  );
}

function Container59() {
  return (
    <div className="absolute h-[500px] left-0 top-0 w-[645.328px]" data-name="Container">
      <Container54 />
      <Container56 />
      <Container58 />
    </div>
  );
}

function Container60() {
  return (
    <div className="absolute h-[500px] left-[506.66px] top-0 w-[645.328px]" data-name="Container">
      <Container52 />
      <Container59 />
    </div>
  );
}

function Container61() {
  return (
    <div className="h-[500px] relative shrink-0 w-full" data-name="Container">
      <Container51 />
      <Container60 />
    </div>
  );
}

function Container62() {
  return (
    <div className="h-[972px] relative shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[48px] h-[972px] items-start pb-0 pt-[192px] px-[24px] relative w-full">
          <Container43 />
          <Container61 />
        </div>
      </div>
    </div>
  );
}

function AgilityNetwork() {
  return (
    <div className="bg-white h-[972px] relative shrink-0 w-full" data-name="AgilityNetwork">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col h-[972px] items-start px-[120px] py-0 relative w-full">
          <Container62 />
        </div>
      </div>
    </div>
  );
}

function Heading5() {
  return (
    <div className="absolute h-[128.797px] left-[128px] top-[40px] w-[896px]" data-name="Heading 2">
      <p className="absolute font-['General_Sans:Semibold',sans-serif] leading-[64.4px] left-[448.31px] not-italic text-[#14212a] text-[56px] text-center top-[3px] tracking-[-1.4px] translate-x-[-50%] w-[781px]">Scalable Execution Across Critical Workflows</p>
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="absolute h-[68.391px] left-[240px] opacity-75 top-[192.8px] w-[672px]" data-name="Paragraph">
      <p className="absolute font-['General_Sans:Regular',sans-serif] leading-[34.2px] left-[336.33px] not-italic text-[#14212a] text-[19px] text-center top-px translate-x-[-50%] w-[629px]">From customer experience to AI training, our infrastructure adapts to your needs with precision and scale.</p>
    </div>
  );
}

function Container63() {
  return (
    <div className="absolute h-[261.188px] left-[24px] top-[192px] w-[1152px]" data-name="Container">
      <TextBackgroundImageAndText2 text="Elastic Work Infrastructure" additionalClassNames="left-[449.81px] w-[252.375px]" />
      <Heading5 />
      <Paragraph7 />
    </div>
  );
}

function Icon4() {
  return (
    <IconBackgroundImage4>
      <path d={svgPaths.pcd14e00} id="Vector" stroke="var(--stroke-0, #056FD4)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
    </IconBackgroundImage4>
  );
}

function Container64() {
  return (
    <div className="absolute bg-[rgba(5,111,212,0.1)] content-stretch flex items-center justify-center left-[32px] rounded-[14px] size-[56px] top-[32px]" data-name="Container">
      <Icon4 />
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="absolute h-[54.391px] left-[32px] opacity-75 top-[152.59px] w-[492px]" data-name="Paragraph">
      <p className="absolute font-['General_Sans:Regular',sans-serif] leading-[27.2px] left-0 not-italic text-[#14212a] text-[16px] top-[0.5px] w-[454px]">End-to-end support operations with AI-assisted routing, quality monitoring, and sentiment analysis.</p>
    </div>
  );
}

function Container65() {
  return <div className="absolute bg-[#056fd4] h-[4px] left-[32px] rounded-bl-[1.67772e+07px] rounded-br-[1.67772e+07px] top-0 w-[64px]" data-name="Container" />;
}

function Container66() {
  return <div className="absolute bg-gradient-to-r from-[rgba(0,0,0,0)] h-px left-0 to-[rgba(0,0,0,0)] top-[237.98px] via-50% via-[#e5e7eb] w-[556px]" data-name="Container" />;
}

function Container67() {
  return (
    <div className="absolute bg-white border-2 border-gray-100 border-solid h-[242.984px] left-0 rounded-[16px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] top-0 w-[560px]" data-name="Container">
      <Container64 />
      <BackgroundImageAndText text="Customer Experience Workflows" />
      <Paragraph8 />
      <Container65 />
      <Container66 />
    </div>
  );
}

function Icon5() {
  return (
    <IconBackgroundImage4>
      <path d={svgPaths.p2382cc00} id="Vector" stroke="var(--stroke-0, #056FD4)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
      <path d={svgPaths.p25c6f00} id="Vector_2" stroke="var(--stroke-0, #056FD4)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
    </IconBackgroundImage4>
  );
}

function Container68() {
  return (
    <div className="absolute bg-[rgba(5,111,212,0.1)] content-stretch flex items-center justify-center left-[32px] rounded-[14px] size-[56px] top-[32px]" data-name="Container">
      <Icon5 />
    </div>
  );
}

function Paragraph9() {
  return (
    <div className="absolute h-[54.391px] left-[32px] opacity-75 top-[152.59px] w-[492px]" data-name="Paragraph">
      <p className="absolute font-['General_Sans:Regular',sans-serif] leading-[27.2px] left-0 not-italic text-[#14212a] text-[16px] top-[0.5px] w-[433px]">Process automation, data entry, verification, and back-office workflow management at scale.</p>
    </div>
  );
}

function Container69() {
  return <div className="absolute bg-[#056fd4] h-[4px] left-[32px] rounded-bl-[1.67772e+07px] rounded-br-[1.67772e+07px] top-0 w-[64px]" data-name="Container" />;
}

function Container70() {
  return <div className="absolute bg-gradient-to-r from-[rgba(0,0,0,0)] h-px left-0 to-[rgba(0,0,0,0)] top-[237.98px] via-50% via-[#e5e7eb] w-[556px]" data-name="Container" />;
}

function Container71() {
  return (
    <div className="absolute bg-white border-2 border-gray-100 border-solid h-[242.984px] left-[592px] rounded-[16px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] top-0 w-[560px]" data-name="Container">
      <Container68 />
      <BackgroundImageAndText text="Digital Operations" />
      <Paragraph9 />
      <Container69 />
      <Container70 />
    </div>
  );
}

function Icon6() {
  return (
    <IconBackgroundImage4>
      <path d={svgPaths.p16055240} id="Vector" stroke="var(--stroke-0, #056FD4)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
      <path d={svgPaths.p3021b780} fill="var(--fill-0, #056FD4)" id="Vector_2" stroke="var(--stroke-0, #056FD4)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
    </IconBackgroundImage4>
  );
}

function Container72() {
  return (
    <div className="absolute bg-[rgba(5,111,212,0.1)] content-stretch flex items-center justify-center left-[32px] rounded-[14px] size-[56px] top-[32px]" data-name="Container">
      <Icon6 />
    </div>
  );
}

function Heading6() {
  return <BackgroundImage>{`Annotation & Data Labeling`}</BackgroundImage>;
}

function Paragraph10() {
  return (
    <div className="absolute h-[54.391px] left-[32px] opacity-75 top-[152.59px] w-[492px]" data-name="Paragraph">
      <p className="absolute font-['General_Sans:Regular',sans-serif] leading-[27.2px] left-0 not-italic text-[#14212a] text-[16px] top-[0.5px] w-[437px]">High-precision data annotation for computer vision, NLP, and multimodal AI training datasets.</p>
    </div>
  );
}

function Container73() {
  return <div className="absolute bg-[#056fd4] h-[4px] left-[32px] rounded-bl-[1.67772e+07px] rounded-br-[1.67772e+07px] top-0 w-[64px]" data-name="Container" />;
}

function Container74() {
  return <div className="absolute bg-gradient-to-r from-[rgba(0,0,0,0)] h-px left-0 to-[rgba(0,0,0,0)] top-[266.58px] via-50% via-[#e5e7eb] w-[556px]" data-name="Container" />;
}

function Container75() {
  return (
    <div className="absolute bg-white border-2 border-gray-100 border-solid h-[271.578px] left-0 rounded-[16px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] top-[274.98px] w-[560px]" data-name="Container">
      <Container72 />
      <Heading6 />
      <Paragraph10 />
      <Container73 />
      <Container74 />
    </div>
  );
}

function Icon7() {
  return (
    <IconBackgroundImage4>
      <path d="M14 21V5.83333" id="Vector" stroke="var(--stroke-0, #056FD4)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
      <path d={svgPaths.p3536b5c0} id="Vector_2" stroke="var(--stroke-0, #056FD4)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
      <path d={svgPaths.p23e3cc00} id="Vector_3" stroke="var(--stroke-0, #056FD4)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
      <path d={svgPaths.p7350600} id="Vector_4" stroke="var(--stroke-0, #056FD4)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
      <path d={svgPaths.p3fb109e0} id="Vector_5" stroke="var(--stroke-0, #056FD4)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
      <path d={svgPaths.p2c743e0} id="Vector_6" stroke="var(--stroke-0, #056FD4)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
      <path d={svgPaths.p2ef2bc80} id="Vector_7" stroke="var(--stroke-0, #056FD4)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
      <path d={svgPaths.p3b76c800} id="Vector_8" stroke="var(--stroke-0, #056FD4)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
    </IconBackgroundImage4>
  );
}

function Container76() {
  return (
    <div className="absolute bg-[rgba(5,111,212,0.1)] content-stretch flex items-center justify-center left-[32px] rounded-[14px] size-[56px] top-[32px]" data-name="Container">
      <Icon7 />
    </div>
  );
}

function Heading7() {
  return (
    <div className="absolute h-[57.188px] left-[32px] top-[112px] w-[492px]" data-name="Heading 3">
      <p className="absolute font-['General_Sans:Semibold',sans-serif] leading-[28.6px] left-0 not-italic text-[#14212a] text-[22px] top-[0.5px] w-[419px]">RLHF (Reinforcement Learning from Human Feedback)</p>
    </div>
  );
}

function Paragraph11() {
  return (
    <div className="absolute h-[54.391px] left-[32px] opacity-75 top-[181.19px] w-[492px]" data-name="Paragraph">
      <p className="absolute font-['General_Sans:Regular',sans-serif] leading-[27.2px] left-0 not-italic text-[#14212a] text-[16px] top-[0.5px] w-[480px]">Expert human feedback loops to fine-tune and align AI models with human values and preferences.</p>
    </div>
  );
}

function Container77() {
  return <div className="absolute bg-[#056fd4] h-[4px] left-[32px] rounded-bl-[1.67772e+07px] rounded-br-[1.67772e+07px] top-0 w-[64px]" data-name="Container" />;
}

function Container78() {
  return <div className="absolute bg-gradient-to-r from-[rgba(0,0,0,0)] h-px left-0 to-[rgba(0,0,0,0)] top-[266.58px] via-50% via-[#e5e7eb] w-[556px]" data-name="Container" />;
}

function Container79() {
  return (
    <div className="absolute bg-white border-2 border-gray-100 border-solid h-[271.578px] left-[592px] rounded-[16px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] top-[274.98px] w-[560px]" data-name="Container">
      <Container76 />
      <Heading7 />
      <Paragraph11 />
      <Container77 />
      <Container78 />
    </div>
  );
}

function Icon8() {
  return (
    <IconBackgroundImage4>
      <path d={svgPaths.pcdd3800} id="Vector" stroke="var(--stroke-0, #056FD4)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
      <path d="M21 19.8333V10.5" id="Vector_2" stroke="var(--stroke-0, #056FD4)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
      <path d="M15.1667 19.8333V5.83333" id="Vector_3" stroke="var(--stroke-0, #056FD4)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
      <path d="M9.33333 19.8333V16.3333" id="Vector_4" stroke="var(--stroke-0, #056FD4)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
    </IconBackgroundImage4>
  );
}

function Container80() {
  return (
    <div className="absolute bg-[rgba(5,111,212,0.1)] content-stretch flex items-center justify-center left-[32px] rounded-[14px] size-[56px] top-[32px]" data-name="Container">
      <Icon8 />
    </div>
  );
}

function Paragraph12() {
  return (
    <div className="absolute h-[54.391px] left-[32px] opacity-75 top-[152.59px] w-[492px]" data-name="Paragraph">
      <p className="absolute font-['General_Sans:Regular',sans-serif] leading-[27.2px] left-0 not-italic text-[#14212a] text-[16px] top-[0.5px] w-[462px]">Systematic testing, benchmarking, and quality assessment of AI model outputs and performance.</p>
    </div>
  );
}

function Container81() {
  return <div className="absolute bg-[#056fd4] h-[4px] left-[32px] rounded-bl-[1.67772e+07px] rounded-br-[1.67772e+07px] top-0 w-[64px]" data-name="Container" />;
}

function Container82() {
  return <div className="absolute bg-gradient-to-r from-[rgba(0,0,0,0)] h-px left-0 to-[rgba(0,0,0,0)] top-[237.98px] via-50% via-[#e5e7eb] w-[556px]" data-name="Container" />;
}

function Container83() {
  return (
    <div className="absolute bg-white border-2 border-gray-100 border-solid h-[242.984px] left-0 rounded-[16px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] top-[578.56px] w-[560px]" data-name="Container">
      <Container80 />
      <BackgroundImageAndText text="Model Evaluation" />
      <Paragraph12 />
      <Container81 />
      <Container82 />
    </div>
  );
}

function Container84() {
  return (
    <div className="absolute h-[821.547px] left-[24px] top-[549.19px] w-[1152px]" data-name="Container">
      <Container67 />
      <Container71 />
      <Container75 />
      <Container79 />
      <Container83 />
    </div>
  );
}

function Container85() {
  return <div className="absolute bg-[#056fd4] left-[24px] opacity-[0.949] rounded-[1.67772e+07px] size-[8px] top-[19.25px]" data-name="Container" />;
}

function Text2() {
  return (
    <div className="absolute h-[22.5px] left-[40px] opacity-80 top-[12px] w-[440.813px]" data-name="Text">
      <p className="absolute font-['General_Sans:Semibold',sans-serif] leading-[22.5px] left-[220px] not-italic text-[#14212a] text-[15px] text-center text-nowrap top-px translate-x-[-50%] whitespace-pre">Enterprise-grade infrastructure powered by intelligent orchestration</p>
    </div>
  );
}

function Container86() {
  return (
    <div className="absolute bg-[rgba(5,111,212,0.05)] border border-[rgba(5,111,212,0.2)] border-solid h-[48.5px] left-[346.59px] rounded-[1.67772e+07px] top-[1434.73px] w-[506.813px]" data-name="Container">
      <Container85 />
      <Text2 />
    </div>
  );
}

function Container87() {
  return (
    <div className="h-[1675.23px] relative shrink-0 w-full" data-name="Container">
      <Container63 />
      <Container84 />
      <Container86 />
    </div>
  );
}

function ElasticInfrastructure() {
  return (
    <div className="bg-gradient-to-b from-[#ffffff] h-[1675.23px] relative shrink-0 to-[#ffffff] via-50% via-[rgba(249,250,251,0.4)] w-full" data-name="ElasticInfrastructure">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col h-[1675.23px] items-start px-[120px] py-0 relative w-full">
          <Container87 />
        </div>
      </div>
    </div>
  );
}

function Container88() {
  return <div className="absolute bg-gradient-to-b from-[rgba(5,111,212,0.05)] h-[256px] left-0 to-[rgba(0,0,0,0)] top-0 w-[1440px]" data-name="Container" />;
}

function Container89() {
  return <div className="absolute blur-3xl filter left-[360px] rounded-[1.67772e+07px] size-[600px] top-[488.8px]" data-name="Container" />;
}

function Container90() {
  return <div className="absolute bg-[#056fd4] h-[4px] left-0 rounded-[1.67772e+07px] top-[36px] w-[64px]" data-name="Container" />;
}

function Container91() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="Container">
      <TextBackgroundImageAndText text="Impact" additionalClassNames="w-[57.438px]" />
      <Container90 />
    </div>
  );
}

function Heading8() {
  return (
    <div className="h-[140.797px] relative shrink-0 w-full" data-name="Heading 2">
      <p className="absolute font-['General_Sans:Semibold',sans-serif] leading-[70.4px] left-0 not-italic text-[#14212a] text-[64px] top-[3px] tracking-[-1.92px] w-[549px]">Why These Solutions Matter.</p>
    </div>
  );
}

function Paragraph13() {
  return (
    <div className="h-[144px] opacity-75 relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['General_Sans:Regular',sans-serif] leading-[36px] left-0 not-italic text-[#14212a] text-[20px] top-[0.5px] w-[629px]">Traditional work structures were built for a different era. Rigid hierarchies, inflexible systems, and processes that prioritize efficiency over humanity have left millions without access to meaningful opportunity.</p>
    </div>
  );
}

function Paragraph14() {
  return (
    <div className="h-[180px] opacity-75 relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['General_Sans:Regular',sans-serif] leading-[36px] left-0 not-italic text-[#14212a] text-[20px] top-[0.5px] w-[639px]">{`Reboo8's solutions represent a fundamental shift: intelligent workflows that adapt to human needs, flexible infrastructure that scales with demand, and systems designed with empathy at their core. This isn't just about better technology—it's about restoring dignity and agency to work itself.`}</p>
    </div>
  );
}

function Paragraph15() {
  return (
    <div className="h-[72px] opacity-[0.85] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['General_Sans:Medium',sans-serif] leading-[36px] left-0 not-italic text-[#14212a] text-[20px] top-[0.5px] w-[554px]">{`We're building the infrastructure for a future where work creates opportunity, not barriers.`}</p>
    </div>
  );
}

function Container92() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] h-[444px] items-start relative shrink-0 w-full" data-name="Container">
      <Paragraph13 />
      <Paragraph14 />
      <Paragraph15 />
    </div>
  );
}

function Container93() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[40px] h-[704.797px] items-start left-0 top-0 w-[638.664px]" data-name="Container">
      <Container91 />
      <Heading8 />
      <Container92 />
    </div>
  );
}

function Container94() {
  return (
    <div className="h-[72px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['General_Sans:Semibold',sans-serif] leading-[72px] left-0 not-italic text-[#056fd4] text-[72px] text-nowrap top-[3px] tracking-[-1.44px] whitespace-pre">50M+</p>
    </div>
  );
}

function Paragraph16() {
  return (
    <div className="h-[54px] opacity-80 relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['General_Sans:Semibold',sans-serif] leading-[27px] left-0 not-italic text-[#14212a] text-[18px] top-px w-[269px]">Workers Seeking New Pathways to Meaningful Work</p>
    </div>
  );
}

function Container95() {
  return (
    <div className="h-[220px] relative rounded-[24px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(5,111,212,0.1)] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <BackgroundImage2>
        <Container94 />
        <Paragraph16 />
      </BackgroundImage2>
    </div>
  );
}

function Container96() {
  return (
    <div className="h-[72px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['General_Sans:Semibold',sans-serif] leading-[72px] left-0 not-italic text-[#14212a] text-[72px] text-nowrap top-[3px] tracking-[-1.44px] whitespace-pre">Global</p>
    </div>
  );
}

function Paragraph17() {
  return (
    <div className="h-[54px] opacity-80 relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['General_Sans:Semibold',sans-serif] leading-[27px] left-0 not-italic text-[#14212a] text-[18px] top-px w-[333px]">Workflows Improved Across Industries and Geographies</p>
    </div>
  );
}

function Container97() {
  return (
    <div className="h-[220px] relative rounded-[24px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none rounded-[24px]" />
      <BackgroundImage2>
        <Container96 />
        <Paragraph17 />
      </BackgroundImage2>
    </div>
  );
}

function Container98() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[40px] h-[480px] items-start left-[718.66px] top-[112.4px] w-[433.328px]" data-name="Container">
      <Container95 />
      <Container97 />
    </div>
  );
}

function Container99() {
  return (
    <div className="absolute h-[704.797px] left-[144px] top-[192px] w-[1152px]" data-name="Container">
      <Container93 />
      <Container98 />
    </div>
  );
}

function WhyItMatters() {
  return (
    <div className="bg-white h-[1088.8px] overflow-clip relative shrink-0 w-full" data-name="WhyItMatters">
      <Container88 />
      <Container89 />
      <Container99 />
    </div>
  );
}

function Heading9() {
  return (
    <div className="absolute h-[128.797px] left-[192px] top-[40px] w-[768px]" data-name="Heading 2">
      <p className="absolute font-['General_Sans:Semibold',sans-serif] leading-[64.4px] left-[384.08px] not-italic text-[#14212a] text-[56px] text-center top-[3px] tracking-[-1.4px] translate-x-[-50%] w-[645px]">See How Organizations Use Reboo8</p>
    </div>
  );
}

function Container100() {
  return (
    <div className="absolute h-[168.797px] left-[24px] top-[192px] w-[1152px]" data-name="Container">
      <TextBackgroundImageAndText2 text="Case Studies" additionalClassNames="left-[520.97px] w-[110.063px]" />
      <Heading9 />
    </div>
  );
}

function Text3() {
  return (
    <div className="absolute h-[21px] left-[142.12px] opacity-60 top-[125.49px] w-[78.43px]" data-name="Text">
      <p className="absolute font-['General_Sans:Semibold',sans-serif] leading-[21px] left-0 not-italic text-[#6a7282] text-[14px] top-[0.5px] w-[79px]">Case Study 1</p>
    </div>
  );
}

function Container101() {
  return <div className="absolute bg-[rgba(0,0,0,0)] h-[271.992px] left-0 top-0 w-[362.664px]" data-name="Container" />;
}

function Container102() {
  return (
    <div className="h-[271.992px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <Text3 />
      <Container101 />
    </div>
  );
}

function Paragraph18() {
  return (
    <div className="h-[81.586px] opacity-75 relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['General_Sans:Regular',sans-serif] leading-[27.2px] left-0 not-italic text-[#14212a] text-[16px] top-[0.5px] w-[256px]">How a Fortune 500 company scaled customer support with AI-assisted workflows</p>
    </div>
  );
}

function Container103() {
  return (
    <div className="content-stretch flex gap-[8px] h-[30.5px] items-center opacity-0 relative shrink-0 w-full" data-name="Container">
      <TextBackgroundImageAndText4 text="Read More" />
      <IconBackgroundImage1 />
    </div>
  );
}

function Container104() {
  return (
    <div className="h-[228.68px] relative shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[12px] h-[228.68px] items-start pb-0 pt-[32px] px-[32px] relative w-full">
          <HeadingBackgroundImageAndText1 text="Global CX Transformation" />
          <Paragraph18 />
          <Container103 />
        </div>
      </div>
    </div>
  );
}

function Container105() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[500.672px] items-start left-0 overflow-clip rounded-[16px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] top-0 w-[362.664px]" data-name="Container">
      <Container102 />
      <Container104 />
    </div>
  );
}

function Text4() {
  return (
    <div className="absolute h-[21px] left-[140.66px] opacity-60 top-[125.49px] w-[81.328px]" data-name="Text">
      <p className="absolute font-['General_Sans:Semibold',sans-serif] leading-[21px] left-0 not-italic text-[#6a7282] text-[14px] top-[0.5px] w-[82px]">Case Study 2</p>
    </div>
  );
}

function Container106() {
  return <div className="absolute bg-[rgba(0,0,0,0)] h-[271.992px] left-0 top-0 w-[362.664px]" data-name="Container" />;
}

function Container107() {
  return (
    <div className="h-[271.992px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <Text4 />
      <Container106 />
    </div>
  );
}

function Paragraph19() {
  return (
    <div className="h-[54.391px] opacity-75 relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['General_Sans:Regular',sans-serif] leading-[27.2px] left-0 not-italic text-[#14212a] text-[16px] top-[0.5px] w-[278px]">Building high-quality datasets for next-generation language models</p>
    </div>
  );
}

function Container108() {
  return (
    <div className="content-stretch flex gap-[8px] h-[30.5px] items-center opacity-0 relative shrink-0 w-full" data-name="Container">
      <TextBackgroundImageAndText4 text="Read More" />
      <IconBackgroundImage1 />
    </div>
  );
}

function Container109() {
  return (
    <ContainerBackgroundImage>
      <HeadingBackgroundImageAndText1 text="AI Training at Scale" />
      <Paragraph19 />
      <Container108 />
    </ContainerBackgroundImage>
  );
}

function Container110() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[500.672px] items-start left-[394.66px] overflow-clip rounded-[16px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] top-0 w-[362.664px]" data-name="Container">
      <Container107 />
      <Container109 />
    </div>
  );
}

function Text5() {
  return (
    <div className="absolute h-[21px] left-[140.09px] opacity-60 top-[125.49px] w-[82.492px]" data-name="Text">
      <p className="absolute font-['General_Sans:Semibold',sans-serif] leading-[21px] left-0 not-italic text-[#6a7282] text-[14px] top-[0.5px] w-[83px]">Case Study 3</p>
    </div>
  );
}

function Container111() {
  return <div className="absolute bg-[rgba(0,0,0,0)] h-[271.992px] left-0 top-0 w-[362.664px]" data-name="Container" />;
}

function Container112() {
  return (
    <div className="h-[271.992px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <Text5 />
      <Container111 />
    </div>
  );
}

function Paragraph20() {
  return (
    <div className="h-[54.391px] opacity-75 relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['General_Sans:Regular',sans-serif] leading-[27.2px] left-0 not-italic text-[#14212a] text-[16px] top-[0.5px] w-[291px]">Automating back-office processes while maintaining human oversight</p>
    </div>
  );
}

function Container113() {
  return (
    <div className="content-stretch flex gap-[8px] h-[30.5px] items-center opacity-0 relative shrink-0 w-full" data-name="Container">
      <TextBackgroundImageAndText4 text="Read More" />
      <IconBackgroundImage1 />
    </div>
  );
}

function Container114() {
  return (
    <ContainerBackgroundImage>
      <HeadingBackgroundImageAndText1 text="Digital Operations Excellence" />
      <Paragraph20 />
      <Container113 />
    </ContainerBackgroundImage>
  );
}

function Container115() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[500.672px] items-start left-[789.33px] overflow-clip rounded-[16px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] top-0 w-[362.664px]" data-name="Container">
      <Container112 />
      <Container114 />
    </div>
  );
}

function Container116() {
  return (
    <div className="absolute h-[500.672px] left-[24px] top-[456.8px] w-[1152px]" data-name="Container">
      <Container105 />
      <Container110 />
      <Container115 />
    </div>
  );
}

function Icon9() {
  return (
    <IconBackgroundImage2 additionalClassNames="left-[229.65px] top-[23.5px]">
      <path d="M4.16667 10H15.8333" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.08333" />
      <path d={svgPaths.p1ae0b780} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.08333" />
    </IconBackgroundImage2>
  );
}

function Button2() {
  return (
    <div className="absolute bg-[#14212a] h-[67px] left-[455.17px] rounded-[14px] top-[1021.47px] w-[289.648px]" data-name="Button">
      <p className="absolute font-['General_Sans:Semibold',sans-serif] leading-[27px] left-[129.5px] not-italic text-[18px] text-center text-nowrap text-white top-[21px] translate-x-[-50%] whitespace-pre">View Full Case Studies</p>
      <Icon9 />
    </div>
  );
}

function Container117() {
  return (
    <div className="h-[1280.47px] relative shrink-0 w-full" data-name="Container">
      <Container100 />
      <Container116 />
      <Button2 />
    </div>
  );
}

function CaseTeaser() {
  return (
    <div className="bg-gradient-to-b from-[#ffffff] h-[1280.47px] relative shrink-0 to-[#ffffff] via-50% via-[rgba(249,250,251,0.4)] w-full" data-name="CaseTeaser">
      <div className="size-full">
        <div className="content-stretch flex flex-col h-[1280.47px] items-start px-[120px] py-0 relative w-full">
          <Container117 />
        </div>
      </div>
    </div>
  );
}

function Container118() {
  return <div className="absolute bg-[rgba(255,255,255,0.05)] blur-3xl filter left-[360px] rounded-[1.67772e+07px] size-[384px] top-0" data-name="Container" />;
}

function Container119() {
  return <div className="absolute bg-[rgba(255,255,255,0.05)] blur-3xl filter left-[696px] rounded-[1.67772e+07px] size-[384px] top-[500.58px]" data-name="Container" />;
}

function Container120() {
  return <div className="absolute h-[884.578px] left-0 opacity-5 top-0 w-[1440px]" data-name="Container" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\\'0 0 1440 884.58\\\' xmlns=\\\'http://www.w3.org/2000/svg\\\' preserveAspectRatio=\\\'none\\\'><rect x=\\\'0\\\' y=\\\'0\\\' height=\\\'100%\\\' width=\\\'100%\\\' fill=\\\'url(%23grad)\\\' opacity=\\\'1\\\'/><defs><radialGradient id=\\\'grad\\\' gradientUnits=\\\'userSpaceOnUse\\\' cx=\\\'0\\\' cy=\\\'0\\\' r=\\\'10\\\' gradientTransform=\\\'matrix(0 -84.5 -84.5 0 720 442.29)\\\'><stop stop-color=\\\'rgba(255,255,255,1)\\\' offset=\\\'0.00069444\\\'/><stop stop-color=\\\'rgba(0,0,0,0)\\\' offset=\\\'0.00069444\\\'/></radialGradient></defs></svg>')" }} />;
}

function Heading10() {
  return (
    <div className="absolute h-[151.188px] left-0 top-0 w-[896px]" data-name="Heading 2">
      <p className="absolute font-['General_Sans:Semibold',sans-serif] leading-[75.6px] left-[448.45px] not-italic text-[72px] text-center text-white top-[2.5px] tracking-[-2.16px] translate-x-[-50%] w-[669px]">Ready to Upgrade Your Workflows?</p>
    </div>
  );
}

function Paragraph21() {
  return (
    <div className="absolute h-[70.391px] left-[112px] opacity-95 top-[191.19px] w-[672px]" data-name="Paragraph">
      <p className="absolute font-['General_Sans:Regular',sans-serif] leading-[35.2px] left-[336.48px] not-italic text-[22px] text-center text-white top-[0.5px] translate-x-[-50%] w-[663px]">{`Let's build intelligent, flexible, human-centered workflows together. Our team is ready to help you transform how work gets done.`}</p>
    </div>
  );
}

function Icon10() {
  return (
    <IconBackgroundImage2 additionalClassNames="left-[144.39px] top-[3.5px]">
      <path d={svgPaths.p2f73500} id="Vector" stroke="var(--stroke-0, #056FD4)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.08333" />
    </IconBackgroundImage2>
  );
}

function Text6() {
  return (
    <div className="h-[27px] relative shrink-0 w-full" data-name="Text">
      <p className="absolute font-['General_Sans:Semibold',sans-serif] leading-[27px] left-[66.5px] not-italic text-[#056fd4] text-[18px] text-center text-nowrap top-px translate-x-[-50%] whitespace-pre">Talk to Our Team</p>
      <Icon10 />
    </div>
  );
}

function Button3() {
  return (
    <div className="bg-white h-[75px] relative rounded-[14px] shrink-0 w-[260.391px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col h-[75px] items-start pb-0 pt-[24px] px-[48px] relative w-[260.391px]">
        <Text6 />
      </div>
    </div>
  );
}

function Button4() {
  return (
    <div className="bg-[rgba(255,255,255,0.1)] h-[79px] relative rounded-[14px] shrink-0 w-[240.875px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-2 border-[rgba(255,255,255,0.4)] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid h-[79px] relative w-[240.875px]">
        <p className="absolute font-['General_Sans:Semibold',sans-serif] leading-[27px] left-[120.5px] not-italic text-[18px] text-center text-nowrap text-white top-[27px] translate-x-[-50%] whitespace-pre">Become an Agent</p>
      </div>
    </div>
  );
}

function Container121() {
  return (
    <div className="absolute content-stretch flex gap-[20px] h-[103px] items-center justify-center left-0 top-[301.58px] w-[896px]" data-name="Container">
      <Button3 />
      <Button4 />
    </div>
  );
}

function Paragraph22() {
  return (
    <div className="absolute h-[56px] left-0 opacity-70 top-[444.58px] w-[896px]" data-name="Paragraph">
      <p className="absolute font-['General_Sans:Medium',sans-serif] leading-[24px] left-[447.87px] not-italic text-[16px] text-center text-nowrap text-white top-[33px] translate-x-[-50%] whitespace-pre">Join thousands of organizations already transforming their workflows with Reboo8</p>
    </div>
  );
}

function Container122() {
  return (
    <div className="absolute h-[500.578px] left-[272px] top-[192px] w-[896px]" data-name="Container">
      <Heading10 />
      <Paragraph21 />
      <Container121 />
      <Paragraph22 />
    </div>
  );
}

function SolutionsCta() {
  return (
    <div className="bg-gradient-to-b from-[#056fd4] h-[884.578px] overflow-clip relative shrink-0 to-[#056fd4] via-50% via-[#0456a8] w-full" data-name="SolutionsCTA">
      <Container118 />
      <Container119 />
      <Container120 />
      <Container122 />
    </div>
  );
}

function Container123() {
  return <div className="absolute bg-[rgba(255,255,255,0.08)] h-px left-0 top-0 w-[1440px]" data-name="Container" />;
}

function Text7() {
  return (
    <div className="h-[27px] relative shrink-0 w-[21.711px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid h-[27px] relative w-[21.711px]">
        <p className="absolute font-['General_Sans:Semibold',sans-serif] leading-[27px] left-[11.5px] not-italic text-[18px] text-center text-nowrap text-white top-px translate-x-[-50%] whitespace-pre">R8</p>
      </div>
    </div>
  );
}

function Container124() {
  return (
    <div className="bg-[#056fd4] relative rounded-[10px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center pl-0 pr-[0.008px] py-0 relative size-[40px]">
        <Text7 />
      </div>
    </div>
  );
}

function Text8() {
  return (
    <div className="basis-0 grow h-[33px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid h-[33px] relative w-full">
        <p className="absolute font-['General_Sans:Semibold',sans-serif] leading-[33px] left-[38.5px] not-italic text-[22px] text-center text-nowrap text-white top-[0.5px] translate-x-[-50%] whitespace-pre">Reboo8</p>
      </div>
    </div>
  );
}

function Container125() {
  return (
    <div className="absolute content-stretch flex gap-[12px] h-[40px] items-center left-0 top-0 w-[127.445px]" data-name="Container">
      <Container124 />
      <Text8 />
    </div>
  );
}

function Button5() {
  return (
    <div className="absolute h-[40px] left-0 top-0 w-[127.445px]" data-name="Button">
      <Container125 />
    </div>
  );
}

function Paragraph23() {
  return (
    <div className="absolute h-[71.391px] left-0 opacity-80 top-[64px] w-[240px]" data-name="Paragraph">
      <p className="absolute font-['General_Sans:Regular',sans-serif] leading-[23.8px] left-0 not-italic text-[14px] text-white top-px w-[216px]">Harmonizing human potential with intelligent systems to reshape the future of work.</p>
    </div>
  );
}

function Container126() {
  return (
    <div className="absolute h-[174.5px] left-0 top-0 w-[240px]" data-name="Container">
      <Button5 />
      <Paragraph23 />
    </div>
  );
}

function ListItem() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <ButtonBackgroundImageAndText text="Solutions" additionalClassNames="w-[59.641px]" />
    </div>
  );
}

function ListItem1() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <ButtonBackgroundImageAndText text="Methodology" additionalClassNames="w-[83.867px]" />
    </div>
  );
}

function ListItem2() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <ButtonBackgroundImageAndText text="Case Studies" additionalClassNames="w-[84.773px]" />
    </div>
  );
}

function ListItem3() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <ButtonBackgroundImageAndText text="Pricing" additionalClassNames="w-[43.18px]" />
    </div>
  );
}

function List() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[132px] items-start relative shrink-0 w-full" data-name="List">
      <ListItem />
      <ListItem1 />
      <ListItem2 />
      <ListItem3 />
    </div>
  );
}

function Container127() {
  return (
    <div className="[grid-area:1_/_1] content-stretch flex flex-col gap-[20px] items-start place-self-stretch relative shrink-0" data-name="Container">
      <HeadingBackgroundImageAndText2 text="Platform" />
      <List />
    </div>
  );
}

function ListItem4() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <ButtonBackgroundImageAndText text="Mission" additionalClassNames="w-[49.102px]" />
    </div>
  );
}

function ListItem5() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <ButtonBackgroundImageAndText text="Team" additionalClassNames="w-[35.211px]" />
    </div>
  );
}

function ListItem6() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <ButtonBackgroundImageAndText text="Careers" additionalClassNames="w-[50.695px]" />
    </div>
  );
}

function ListItem7() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <ButtonBackgroundImageAndText text="Contact" additionalClassNames="w-[52.492px]" />
    </div>
  );
}

function List1() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[132px] items-start relative shrink-0 w-full" data-name="List">
      <ListItem4 />
      <ListItem5 />
      <ListItem6 />
      <ListItem7 />
    </div>
  );
}

function Container128() {
  return (
    <div className="[grid-area:1_/_2] content-stretch flex flex-col gap-[20px] items-start place-self-stretch relative shrink-0" data-name="Container">
      <HeadingBackgroundImageAndText2 text="Company" />
      <List1 />
    </div>
  );
}

function ListItem8() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <ButtonBackgroundImageAndText text="Blog" additionalClassNames="w-[27.852px]" />
    </div>
  );
}

function ListItem9() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <ButtonBackgroundImageAndText text="Community" additionalClassNames="w-[75.297px]" />
    </div>
  );
}

function ListItem10() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <ButtonBackgroundImageAndText text="Impact" additionalClassNames="w-[44.75px]" />
    </div>
  );
}

function ListItem11() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <ButtonBackgroundImageAndText text="Help Center" additionalClassNames="w-[76.531px]" />
    </div>
  );
}

function List2() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[132px] items-start relative shrink-0 w-full" data-name="List">
      <ListItem8 />
      <ListItem9 />
      <ListItem10 />
      <ListItem11 />
    </div>
  );
}

function Container129() {
  return (
    <div className="[grid-area:1_/_3] content-stretch flex flex-col gap-[20px] items-start place-self-stretch relative shrink-0" data-name="Container">
      <HeadingBackgroundImageAndText2 text="Resources" />
      <List2 />
    </div>
  );
}

function ListItem12() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <ButtonBackgroundImageAndText text="Privacy Policy" additionalClassNames="w-[84.273px]" />
    </div>
  );
}

function ListItem13() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <ButtonBackgroundImageAndText text="Terms of Service" additionalClassNames="w-[105.578px]" />
    </div>
  );
}

function ListItem14() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <ButtonBackgroundImageAndText text="Cookies" additionalClassNames="w-[52.086px]" />
    </div>
  );
}

function List3() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[96px] items-start relative shrink-0 w-full" data-name="List">
      <ListItem12 />
      <ListItem13 />
      <ListItem14 />
    </div>
  );
}

function Container130() {
  return (
    <div className="[grid-area:1_/_4] content-stretch flex flex-col gap-[20px] items-start place-self-stretch relative shrink-0" data-name="Container">
      <HeadingBackgroundImageAndText2 text="Legal" />
      <List3 />
    </div>
  );
}

function Container131() {
  return (
    <div className="absolute gap-[48px] grid grid-cols-[repeat(4,_minmax(0px,_1fr))] grid-rows-[repeat(1,_minmax(0px,_1fr))] h-[174.5px] left-[304px] top-0 w-[848px]" data-name="Container">
      <Container127 />
      <Container128 />
      <Container129 />
      <Container130 />
    </div>
  );
}

function Container132() {
  return (
    <div className="h-[238.5px] relative shrink-0 w-full" data-name="Container">
      <Container126 />
      <Container131 />
    </div>
  );
}

function Icon11() {
  return (
    <div className="h-[24px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[16.66%_8.33%_15.62%_8.33%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 17">
          <path d={svgPaths.p1183f420} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Link() {
  return (
    <LinkBackgroundImage>
      <Icon11 />
    </LinkBackgroundImage>
  );
}

function Icon12() {
  return (
    <BackgroundImage1>
      <path d={svgPaths.p15102e00} fill="var(--fill-0, white)" id="Vector" />
    </BackgroundImage1>
  );
}

function Link1() {
  return (
    <LinkBackgroundImage>
      <Icon12 />
    </LinkBackgroundImage>
  );
}

function Icon13() {
  return (
    <BackgroundImage1>
      <path d={svgPaths.p1b8f1d00} fill="var(--fill-0, white)" id="Vector" />
    </BackgroundImage1>
  );
}

function Link2() {
  return (
    <LinkBackgroundImage>
      <Icon13 />
    </LinkBackgroundImage>
  );
}

function Container133() {
  return (
    <div className="content-stretch flex gap-[24px] h-[104px] items-center relative shrink-0 w-full" data-name="Container">
      <Link />
      <Link1 />
      <Link2 />
    </div>
  );
}

function Paragraph24() {
  return (
    <div className="h-[19.5px] opacity-60 relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['General_Sans:Regular',sans-serif] leading-[19.5px] left-0 not-italic text-[13px] text-nowrap text-white top-[0.5px] whitespace-pre">© 2025 Reboo8 Inc. All rights reserved.</p>
    </div>
  );
}

function Container134() {
  return (
    <div className="content-stretch flex flex-col h-[60.5px] items-start pb-0 pt-[41px] px-0 relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1px_0px_0px] border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none" />
      <Paragraph24 />
    </div>
  );
}

function Container135() {
  return (
    <div className="absolute content-stretch flex flex-col h-[627px] items-start left-[120px] pb-0 pt-[112px] px-[24px] top-px w-[1200px]" data-name="Container">
      <Container132 />
      <Container133 />
      <Container134 />
    </div>
  );
}

function Footer() {
  return (
    <div className="bg-[#14212a] h-[628px] relative shrink-0 w-full" data-name="Footer">
      <Container123 />
      <Container135 />
    </div>
  );
}

function SolutionsPage() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[9637.3px] items-start left-0 pb-0 pt-[81px] px-0 top-0 w-[1440px]" data-name="SolutionsPage">
      <SolutionsHero />
      <SolutionPillars />
      <IntelligentWorkflows />
      <AgilityNetwork />
      <ElasticInfrastructure />
      <WhyItMatters />
      <CaseTeaser />
      <SolutionsCta />
      <Footer />
    </div>
  );
}

function Text9() {
  return (
    <div className="h-[24px] relative shrink-0 w-[54.867px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid h-[24px] relative w-[54.867px]">
        <p className="absolute font-['General_Sans:Semibold',sans-serif] leading-[24px] left-[27.5px] not-italic text-[16px] text-center text-nowrap text-white top-px translate-x-[-50%] whitespace-pre">Reboo8</p>
      </div>
    </div>
  );
}

function Button6() {
  return (
    <div className="bg-[#14212a] h-[36px] relative rounded-[4px] shrink-0 w-[120px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex h-[36px] items-center justify-center pl-0 pr-[0.008px] py-0 relative w-[120px]">
        <Text9 />
      </div>
    </div>
  );
}

function Button7() {
  return (
    <div className="h-[24px] relative shrink-0 w-[65.43px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid h-[24px] relative w-[65.43px]">
        <p className="absolute font-['General_Sans:Medium',sans-serif] leading-[24px] left-[33px] not-italic text-[#14212a] text-[16px] text-center text-nowrap top-px translate-x-[-50%] whitespace-pre">About Us</p>
      </div>
    </div>
  );
}

function Button8() {
  return (
    <div className="h-[24px] relative shrink-0 w-[65.906px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid h-[24px] relative w-[65.906px]">
        <p className="absolute font-['General_Sans:Medium',sans-serif] leading-[24px] left-[33.5px] not-italic text-[#14212a] text-[16px] text-center text-nowrap top-px translate-x-[-50%] whitespace-pre">Solutions</p>
      </div>
    </div>
  );
}

function Button9() {
  return (
    <div className="h-[24px] relative shrink-0 w-[49.555px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid h-[24px] relative w-[49.555px]">
        <p className="absolute font-['General_Sans:Medium',sans-serif] leading-[24px] left-[25.5px] not-italic text-[#14212a] text-[16px] text-center text-nowrap top-px translate-x-[-50%] whitespace-pre">Impact</p>
      </div>
    </div>
  );
}

function Button10() {
  return (
    <div className="basis-0 grow h-[24px] min-h-px min-w-px relative shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid h-[24px] relative w-full">
        <p className="absolute font-['General_Sans:Medium',sans-serif] leading-[24px] left-[42px] not-italic text-[#14212a] text-[16px] text-center text-nowrap top-px translate-x-[-50%] whitespace-pre">Community</p>
      </div>
    </div>
  );
}

function Container136() {
  return (
    <div className="h-[24px] relative shrink-0 w-[408.828px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[48px] h-[24px] items-center relative w-[408.828px]">
        <Button7 />
        <Button8 />
        <Button9 />
        <Button10 />
      </div>
    </div>
  );
}

function Button11() {
  return (
    <div className="bg-[#056fd4] h-[52px] relative rounded-[10px] shrink-0 w-[128.242px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid h-[52px] relative w-[128.242px]">
        <p className="absolute font-['General_Sans:Medium',sans-serif] leading-[24px] left-[64.5px] not-italic text-[16px] text-center text-nowrap text-white top-[15px] translate-x-[-50%] whitespace-pre">Contact Us</p>
      </div>
    </div>
  );
}

function Container137() {
  return (
    <div className="h-[80px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex h-[80px] items-center justify-between pl-[24px] pr-[24.008px] py-0 relative w-full">
          <Button6 />
          <Container136 />
          <Button11 />
        </div>
      </div>
    </div>
  );
}

function Navbar() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.95)] content-stretch flex flex-col h-[81px] items-start left-0 pb-px pt-0 px-[120px] top-0 w-[1440px]" data-name="Navbar">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-gray-200 border-solid inset-0 pointer-events-none shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
      <Container137 />
    </div>
  );
}

export default function LearnBrandIdentityGuidelines() {
  return (
    <div className="bg-white relative size-full" data-name="Learn Brand Identity Guidelines">
      <SolutionsPage />
      <Navbar />
    </div>
  );
}