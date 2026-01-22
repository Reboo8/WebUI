import svgPaths from "./svg-awv21g5bua";
import clsx from "clsx";

function Link9({ children }{}>) {
  return (
    <div className="opacity-80 relative shrink-0 size-[24px]">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-[24px]">{children}</div>
    </div>
  );
}

function Link8({ children }{}>) {
  return (
    <div className="bg-gray-200 relative rounded-[1.67772e+07px] shrink-0 size-[40px]">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-[40px]">{children}</div>
    </div>
  );
}
type Wrapper2Props = {
  additionalClassNames?;
};

function Wrapper2({ children, additionalClassNames = "" }2Props>) {
  return (
    <div className={clsx("relative shrink-0", additionalClassNames)}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        {children}
      </svg>
    </div>
  );
}
type Wrapper1Props = {
  additionalClassNames?;
};

function Wrapper1({ children, additionalClassNames = "" }1Props>) {
  return (
    <div className={additionalClassNames}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        {children}
      </svg>
    </div>
  );
}

function Icon12({ children }{}>) {
  return (
    <div className="relative shrink-0 size-[28px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g id="Icon">{children}</g>
      </svg>
    </div>
  );
}
type WrapperProps = {
  additionalClassNames?;
};

function Wrapper({ children, additionalClassNames = "" }) {
  return (
    <Wrapper1 additionalClassNames={additionalClassNames}>
      <g id="Icon">{children}</g>
    </Wrapper1>
  );
}
type ButtonTextProps = {
  text;
  additionalClassNames?;
};

function ButtonText({ text, additionalClassNames = "" }: ButtonTextProps) {
  return (
    <div className={clsx("absolute h-[21px] left-0 opacity-70 top-[2.5px]", additionalClassNames)}>
      <p className="absolute font-['General_Sans:Regular',sans-serif] leading-[21px] left-0 not-italic text-[14px] text-nowrap text-white top-[0.5px] whitespace-pre">{text}</p>
    </div>
  );
}
type HeadingText2Props = {
  text;
};

function HeadingText2({ text }: HeadingText2Props) {
  return (
    <div className="h-[22.5px] relative shrink-0 w-full">
      <p className="absolute font-['General_Sans:Semibold',sans-serif] leading-[22.5px] left-0 not-italic text-[15px] text-nowrap text-white top-px whitespace-pre">{text}</p>
    </div>
  );
}
type HeadingText1Props = {
  text;
};

function HeadingText1({ text }: HeadingText1Props) {
  return (
    <div className="absolute h-[26.594px] left-[32px] top-[96px] w-[298.664px]">
      <p className="absolute font-['General_Sans:Semibold',sans-serif] leading-[26.6px] left-0 not-italic text-[#14212a] text-[19px] text-nowrap top-[0.5px] whitespace-pre">{text}</p>
    </div>
  );
}

function Icon7() {
  return (
    <Wrapper2 additionalClassNames="size-[24px]">
      <g id="Icon">
        <path d={svgPaths.pace200} id="Vector" stroke="var(--stroke-0, #056FD4)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        <path d={svgPaths.pbc79d00} id="Vector_2" stroke="var(--stroke-0, #056FD4)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        <path d="M12 17H12.01" id="Vector_3" stroke="var(--stroke-0, #056FD4)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      </g>
    </Wrapper2>
  );
}
type Icon6Props = {
  additionalClassNames?;
};

function Icon6({ additionalClassNames = "" }: Icon6Props) {
  return (
    <Wrapper additionalClassNames={clsx("absolute size-[20px]", additionalClassNames)}>
      <path d={svgPaths.p6561400} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.08333" />
    </Wrapper>
  );
}
type Text8Props = {
  text;
};

function Text8({ text }: Text8Props) {
  return (
    <div className="h-[58.5px] relative rounded-[14px] shrink-0 w-full">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex h-[58.5px] items-center px-[20px] py-[16px] relative w-full">
          <p className="font-['General_Sans:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[15px] text-[rgba(10,10,10,0.5)] text-nowrap whitespace-pre">{text}</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-2 border-gray-200 border-solid inset-0 pointer-events-none rounded-[14px]" />
    </div>
  );
}
type LabelTextProps = {
  text;
};

function LabelText({ text }: LabelTextProps) {
  return (
    <div className="h-[21px] relative shrink-0 w-full">
      <p className="absolute font-['General_Sans:Semibold',sans-serif] leading-[21px] left-0 not-italic text-[#14212a] text-[14px] text-nowrap top-[0.5px] whitespace-pre">{text}</p>
    </div>
  );
}
type HeadingTextProps = {
  text;
};

function HeadingText({ text }: HeadingTextProps) {
  return (
    <div className="absolute h-[28.594px] left-[40px] top-[120px] w-[282.664px]">
      <p className="absolute font-['General_Sans:Semibold',sans-serif] leading-[28.6px] left-0 not-italic text-[#14212a] text-[22px] text-nowrap top-[0.5px] whitespace-pre">{text}</p>
    </div>
  );
}

function Container() {
  return <div className="absolute blur-3xl filter left-[360px] rounded-[1.67772e+07px] size-[600px] top-[549px]" data-name="Container" />;
}

function Text() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-start left-0 top-[5px] w-[110.766px]" data-name="Text">
      <p className="font-['General_Sans:Semibold',sans-serif] leading-[19.5px] not-italic relative shrink-0 text-[#056fd4] text-[13px] text-nowrap tracking-[1.95px] uppercase whitespace-pre">Get In Touch</p>
    </div>
  );
}

function Container1() {
  return <div className="absolute bg-[#056fd4] h-[4px] left-0 rounded-[1.67772e+07px] top-[36px] w-[64px]" data-name="Container" />;
}

function Container2() {
  return (
    <div className="absolute h-[40px] left-0 top-0 w-[536px]" data-name="Container">
      <Text />
      <Container1 />
    </div>
  );
}

function Heading() {
  return (
    <div className="absolute h-[184.797px] left-0 top-[72px] w-[536px]" data-name="Heading 1">
      <p className="absolute font-['General_Sans:Semibold',sans-serif] leading-[92.4px] left-0 not-italic text-[#14212a] text-[88px] top-[4px] tracking-[-3.52px] w-[472px]">{`Let's start a conversation.`}</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="absolute h-[102px] left-0 opacity-75 top-[288.8px] w-[512px]" data-name="Paragraph">
      <p className="absolute font-['General_Sans:Regular',sans-serif] leading-[34px] left-0 not-italic text-[#14212a] text-[20px] top-[0.5px] w-[505px]">{`Whether you have a question, want to explore opportunities, or are curious about how Reboo8 works — we're here to help.`}</p>
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute h-[390.797px] left-0 top-[129.6px] w-[536px]" data-name="Container">
      <Container2 />
      <Heading />
      <Paragraph />
    </div>
  );
}

function Container4() {
  return <div className="absolute blur-2xl filter left-[280px] rounded-[24px] size-[288px] top-[-32px]" data-name="Container" />;
}

function Text1() {
  return (
    <div className="absolute h-[24px] left-[238.8px] opacity-60 top-[323px] w-[58.391px]" data-name="Text">
      <p className="absolute font-['General_Sans:Semibold',sans-serif] leading-[24px] left-0 not-italic text-[#6a7282] text-[16px] text-nowrap top-px whitespace-pre">Contact</p>
    </div>
  );
}

function Container5() {
  return <div className="absolute bg-gradient-to-t from-[rgba(20,33,42,0.1)] h-[670px] left-0 to-[rgba(5,111,212,0.05)] top-0 via-50% via-[rgba(0,0,0,0)] w-[536px]" data-name="Container" />;
}

function Container6() {
  return (
    <div className="absolute h-[670px] left-0 overflow-clip rounded-[20px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)] top-[-20px] w-[536px]" data-name="Container">
      <Text1 />
      <Container5 />
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute h-[650px] left-[616px] top-0 w-[536px]" data-name="Container">
      <Container4 />
      <Container6 />
    </div>
  );
}

function Container8() {
  return (
    <div className="absolute h-[650px] left-[144px] top-[224px] w-[1152px]" data-name="Container">
      <Container3 />
      <Container7 />
    </div>
  );
}

function ContactHero() {
  return (
    <div className="bg-white h-[1098px] overflow-clip relative shrink-0 w-full" data-name="ContactHero">
      <Container />
      <Container8 />
    </div>
  );
}

function Icon() {
  return (
    <Icon12>
      <path d={svgPaths.p31cdb480} id="Vector" stroke="var(--stroke-0, #056FD4)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
      <path d={svgPaths.p3ea83200} id="Vector_2" stroke="var(--stroke-0, #056FD4)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
    </Icon12>
  );
}

function Container9() {
  return (
    <div className="absolute bg-[rgba(5,111,212,0.1)] content-stretch flex items-center justify-center left-[40px] rounded-[16px] size-[56px] top-[40px]" data-name="Container">
      <Icon />
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="absolute h-[24px] left-[40px] opacity-70 top-[172.59px] w-[282.664px]" data-name="Paragraph">
      <p className="absolute font-['General_Sans:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#14212a] text-[15px] text-nowrap top-[0.5px] whitespace-pre">For general inquiries and support.</p>
    </div>
  );
}

function Link() {
  return (
    <div className="absolute content-stretch flex h-[22.5px] items-start left-[40px] top-[230.59px] w-[150.469px]" data-name="Link">
      <p className="font-['General_Sans:Semibold',sans-serif] leading-[27px] not-italic relative shrink-0 text-[#056fd4] text-[18px] text-nowrap whitespace-pre">hello@reboo8.com</p>
    </div>
  );
}

function Container10() {
  return (
    <div className="absolute bg-white h-[346.984px] left-0 rounded-[20px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] top-0 w-[362.664px]" data-name="Container">
      <Container9 />
      <HeadingText text="Email Us" />
      <Paragraph1 />
      <Link />
    </div>
  );
}

function Icon1() {
  return (
    <Icon12>
      <path d={svgPaths.p41ed200} id="Vector" stroke="var(--stroke-0, #056FD4)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
      <path d={svgPaths.p2c5ba380} id="Vector_2" stroke="var(--stroke-0, #056FD4)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
    </Icon12>
  );
}

function Container11() {
  return (
    <div className="absolute bg-[rgba(5,111,212,0.1)] content-stretch flex items-center justify-center left-[40px] rounded-[16px] size-[56px] top-[40px]" data-name="Container">
      <Icon1 />
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="absolute h-[48px] left-[40px] opacity-70 top-[172.59px] w-[282.664px]" data-name="Paragraph">
      <p className="absolute font-['General_Sans:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#14212a] text-[15px] top-[0.5px] w-[247px]">Our digital HQ is everywhere, but our roots are here.</p>
    </div>
  );
}

function LineBreak() {
  return <div className="absolute h-[20px] left-[134.68px] top-[3.5px] w-0" data-name="Line Break" />;
}

function Address() {
  return (
    <div className="absolute h-[54.391px] left-[40px] opacity-[0.85] top-[252.59px] w-[282.664px]" data-name="Address">
      <p className="absolute font-['General_Sans:Medium',sans-serif] leading-[27.2px] left-0 not-italic text-[#14212a] text-[16px] text-nowrap top-[0.5px] whitespace-pre">123 Innovation Drive</p>
      <LineBreak />
      <p className="absolute font-['General_Sans:Medium',sans-serif] leading-[27.2px] left-0 not-italic text-[#14212a] text-[16px] text-nowrap top-[27.7px] whitespace-pre">San Francisco, CA 94103</p>
    </div>
  );
}

function Container12() {
  return (
    <div className="absolute bg-white h-[346.984px] left-[394.66px] rounded-[20px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] top-0 w-[362.664px]" data-name="Container">
      <Container11 />
      <HeadingText text="Visit Us" />
      <Paragraph2 />
      <Address />
    </div>
  );
}

function Icon2() {
  return (
    <Icon12>
      <path d={svgPaths.p119215f2} id="Vector" stroke="var(--stroke-0, #056FD4)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
      <path d={svgPaths.p3896b840} id="Vector_2" stroke="var(--stroke-0, #056FD4)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
      <path d={svgPaths.p2c82940} id="Vector_3" stroke="var(--stroke-0, #056FD4)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
      <path d={svgPaths.p3a86ba80} id="Vector_4" stroke="var(--stroke-0, #056FD4)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
      <path d={svgPaths.p20f54000} id="Vector_5" stroke="var(--stroke-0, #056FD4)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
    </Icon12>
  );
}

function Container13() {
  return (
    <div className="absolute bg-[rgba(5,111,212,0.1)] content-stretch flex items-center justify-center left-[40px] rounded-[16px] size-[56px] top-[40px]" data-name="Container">
      <Icon2 />
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="absolute h-[48px] left-[40px] opacity-70 top-[172.59px] w-[282.664px]" data-name="Paragraph">
      <p className="absolute font-['General_Sans:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#14212a] text-[15px] top-[0.5px] w-[202px]">Follow our journey and join the conversation.</p>
    </div>
  );
}

function Icon3() {
  return (
    <Wrapper additionalClassNames="relative shrink-0 size-[20px]">
      <path d={svgPaths.p2beff240} fill="var(--fill-0, #0A0A0A)" id="Vector" />
    </Wrapper>
  );
}

function Link1() {
  return (
    <Link8>
      <Icon3 />
    </Link8>
  );
}

function Icon4() {
  return (
    <Wrapper1 additionalClassNames="relative shrink-0 size-[20px]">
      <g clipPath="url(#clip0_42_2438)" id="Icon">
        <path d={svgPaths.p72dbc10} fill="var(--fill-0, #0A0A0A)" id="Vector" />
      </g>
      <defs>
        <clipPath id="clip0_42_2438">
          <rect fill="white" height="20" width="20" />
        </clipPath>
      </defs>
    </Wrapper1>
  );
}

function Link2() {
  return (
    <Link8>
      <Icon4 />
    </Link8>
  );
}

function Icon5() {
  return (
    <Wrapper1 additionalClassNames="relative shrink-0 size-[20px]">
      <g clipPath="url(#clip0_42_2460)" id="Icon">
        <path d={svgPaths.p3b36a980} fill="var(--fill-0, #0A0A0A)" id="Vector" />
      </g>
      <defs>
        <clipPath id="clip0_42_2460">
          <rect fill="white" height="20" width="20" />
        </clipPath>
      </defs>
    </Wrapper1>
  );
}

function Link3() {
  return (
    <Link8>
      <Icon5 />
    </Link8>
  );
}

function Container14() {
  return (
    <div className="absolute content-stretch flex gap-[16px] h-[48px] items-center left-[40px] top-[252.59px] w-[282.664px]" data-name="Container">
      <Link1 />
      <Link2 />
      <Link3 />
    </div>
  );
}

function Container15() {
  return (
    <div className="absolute bg-white h-[346.984px] left-[789.33px] rounded-[20px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] top-0 w-[362.664px]" data-name="Container">
      <Container13 />
      <HeadingText text="Social" />
      <Paragraph3 />
      <Container14 />
    </div>
  );
}

function Container16() {
  return (
    <div className="h-[346.984px] relative shrink-0 w-full" data-name="Container">
      <Container10 />
      <Container12 />
      <Container15 />
    </div>
  );
}

function ContactInfo() {
  return (
    <div className="bg-gradient-to-b from-[#ffffff] h-[666.984px] relative shrink-0 to-[#ffffff] via-50% via-[rgba(249,250,251,0.3)] w-full" data-name="ContactInfo">
      <div className="size-full">
        <div className="content-stretch flex flex-col h-[666.984px] items-start pb-0 pt-[160px] px-[144px] relative w-full">
          <Container16 />
        </div>
      </div>
    </div>
  );
}

function Heading1() {
  return (
    <div className="h-[52.797px] relative shrink-0 w-full" data-name="Heading 2">
      <p className="absolute font-['General_Sans:Semibold',sans-serif] leading-[52.8px] left-[345.21px] not-italic text-[#14212a] text-[48px] text-center text-nowrap top-[2px] tracking-[-0.96px] translate-x-[-50%] whitespace-pre">Send a Message</p>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="h-[25.594px] opacity-70 relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['General_Sans:Regular',sans-serif] leading-[25.6px] left-[345.4px] not-italic text-[#14212a] text-[16px] text-center text-nowrap top-[0.5px] translate-x-[-50%] whitespace-pre">We typically respond within 24 hours.</p>
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[94.391px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading1 />
      <Paragraph4 />
    </div>
  );
}

function Container18() {
  return (
    <div className="[grid-area:1_/_1] content-stretch flex flex-col gap-[8px] items-start place-self-stretch relative shrink-0" data-name="Container">
      <LabelText text="First Name" />
      <Text8 text="John" />
    </div>
  );
}

function Container19() {
  return (
    <div className="[grid-area:1_/_2] content-stretch flex flex-col gap-[8px] items-start place-self-stretch relative shrink-0" data-name="Container">
      <LabelText text="Last Name" />
      <Text8 text="Doe" />
    </div>
  );
}

function Container20() {
  return (
    <div className="absolute gap-[24px] grid grid-cols-[repeat(2,_minmax(0px,_1fr))] grid-rows-[repeat(1,_minmax(0px,_1fr))] h-[87.5px] left-0 top-0 w-[690px]" data-name="Container">
      <Container18 />
      <Container19 />
    </div>
  );
}

function Container21() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[87.5px] items-start left-0 top-[111.5px] w-[690px]" data-name="Container">
      <LabelText text="Email Address" />
      <Text8 text="john.doe@example.com" />
    </div>
  );
}

function Container22() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[87.5px] items-start left-0 top-[223px] w-[690px]" data-name="Container">
      <LabelText text="Subject" />
      <Text8 text="How can we help you?" />
    </div>
  );
}

function TextArea() {
  return (
    <div className="h-[171px] relative rounded-[14px] shrink-0 w-full" data-name="Text Area">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex h-[171px] items-start px-[20px] py-[16px] relative w-full">
          <p className="font-['General_Sans:Regular',sans-serif] leading-[22.5px] not-italic relative shrink-0 text-[15px] text-[rgba(10,10,10,0.5)] text-nowrap whitespace-pre">Tell us more about your inquiry...</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-2 border-gray-200 border-solid inset-0 pointer-events-none rounded-[14px]" />
    </div>
  );
}

function Container23() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[206px] items-start left-0 top-[334.5px] w-[690px]" data-name="Container">
      <LabelText text="Message" />
      <TextArea />
    </div>
  );
}

function Text2() {
  return (
    <div className="h-[25.5px] relative shrink-0 w-full" data-name="Text">
      <p className="absolute font-['General_Sans:Semibold',sans-serif] leading-[25.5px] left-[56px] not-italic text-[17px] text-center text-nowrap text-white top-px translate-x-[-50%] whitespace-pre">Send Message</p>
      <Icon6 additionalClassNames="left-[123.55px] top-[2.75px]" />
    </div>
  );
}

function Button() {
  return (
    <div className="absolute bg-[#14212a] content-stretch flex flex-col h-[65.5px] items-start left-[225.22px] pb-0 pt-[20px] px-[48px] rounded-[14px] top-[580.5px] w-[239.555px]" data-name="Button">
      <Text2 />
    </div>
  );
}

function Form() {
  return (
    <div className="h-[646px] relative shrink-0 w-full" data-name="Form">
      <Container20 />
      <Container21 />
      <Container22 />
      <Container23 />
      <Button />
    </div>
  );
}

function ContactForm() {
  return (
    <div className="bg-white h-[1334.39px] relative rounded-[20px] shrink-0 w-full" data-name="ContactForm">
      <div aria-hidden="true" className="absolute border border-gray-100 border-solid inset-0 pointer-events-none rounded-[20px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)]" />
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[48px] h-[1334.39px] items-start pb-px pt-[273px] px-[375px] relative w-full">
          <Container17 />
          <Form />
        </div>
      </div>
    </div>
  );
}

function Text3() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-start left-[527.55px] top-[5px] w-[96.883px]" data-name="Text">
      <p className="font-['General_Sans:Semibold',sans-serif] leading-[19.5px] not-italic relative shrink-0 text-[#056fd4] text-[13px] text-center text-nowrap tracking-[1.95px] uppercase whitespace-pre">Questions?</p>
    </div>
  );
}

function Heading2() {
  return (
    <div className="absolute h-[55.195px] left-0 top-[40px] w-[1152px]" data-name="Heading 2">
      <p className="absolute font-['General_Sans:Semibold',sans-serif] leading-[55.2px] left-[575.65px] not-italic text-[#14212a] text-[48px] text-center text-nowrap top-[2.5px] tracking-[-1.2px] translate-x-[-50%] whitespace-pre">Frequently Asked Questions</p>
    </div>
  );
}

function Container24() {
  return (
    <div className="h-[95.195px] relative shrink-0 w-full" data-name="Container">
      <Text3 />
      <Heading2 />
    </div>
  );
}

function Container25() {
  return (
    <div className="absolute bg-[rgba(5,111,212,0.1)] content-stretch flex items-center justify-center left-[32px] rounded-[14px] size-[48px] top-[32px]" data-name="Container">
      <Icon7 />
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="absolute h-[127.5px] left-[32px] opacity-75 top-[138.59px] w-[298.664px]" data-name="Paragraph">
      <p className="absolute font-['General_Sans:Regular',sans-serif] leading-[25.5px] left-0 not-italic text-[#14212a] text-[15px] top-[0.5px] w-[255px]">{`Simply click "Become an Agent" and complete our streamlined onboarding process. You'll be matched with opportunities based on your skills and preferences.`}</p>
    </div>
  );
}

function Container26() {
  return (
    <div className="absolute bg-white h-[324.688px] left-0 rounded-[20px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] top-0 w-[362.664px]" data-name="Container">
      <Container25 />
      <HeadingText1 text="How do I get started agent?" />
      <Paragraph5 />
    </div>
  );
}

function Container27() {
  return (
    <div className="absolute bg-[rgba(5,111,212,0.1)] content-stretch flex items-center justify-center left-[32px] rounded-[14px] size-[48px] top-[32px]" data-name="Container">
      <Icon7 />
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="absolute h-[102px] left-[32px] opacity-75 top-[138.59px] w-[298.664px]" data-name="Paragraph">
      <p className="absolute font-['General_Sans:Regular',sans-serif] leading-[25.5px] left-0 not-italic text-[#14212a] text-[15px] top-[0.5px] w-[287px]">Our onboarding process typically takes 24-48 hours. We review your profile and connect you with suitable opportunities.</p>
    </div>
  );
}

function Container28() {
  return (
    <div className="absolute bg-white h-[324.688px] left-[394.66px] rounded-[20px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] top-0 w-[362.664px]" data-name="Container">
      <Container27 />
      <HeadingText1 text="How long does onboarding take?" />
      <Paragraph6 />
    </div>
  );
}

function Container29() {
  return (
    <div className="absolute bg-[rgba(5,111,212,0.1)] content-stretch flex items-center justify-center left-[32px] rounded-[14px] size-[48px] top-[32px]" data-name="Container">
      <Icon7 />
    </div>
  );
}

function Heading3() {
  return (
    <div className="absolute h-[53.188px] left-[32px] top-[96px] w-[298.664px]" data-name="Heading 3">
      <p className="absolute font-['General_Sans:Semibold',sans-serif] leading-[26.6px] left-0 not-italic text-[#14212a] text-[19px] top-[0.5px] w-[250px]">What services can businesses request?</p>
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="absolute h-[127.5px] left-[32px] opacity-75 top-[165.19px] w-[298.664px]" data-name="Paragraph">
      <p className="absolute font-['General_Sans:Regular',sans-serif] leading-[25.5px] left-0 not-italic text-[#14212a] text-[15px] top-[0.5px] w-[297px]">Businesses can access a wide range of services including technical support, content moderation, data annotation, customer experience, and more through our flexible platform.</p>
    </div>
  );
}

function Container30() {
  return (
    <div className="absolute bg-white h-[324.688px] left-[789.33px] rounded-[20px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] top-0 w-[362.664px]" data-name="Container">
      <Container29 />
      <Heading3 />
      <Paragraph7 />
    </div>
  );
}

function Container31() {
  return (
    <div className="h-[324.688px] relative shrink-0 w-full" data-name="Container">
      <Container26 />
      <Container28 />
      <Container30 />
    </div>
  );
}

function Container32() {
  return (
    <div className="h-[803.883px] relative shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[64px] h-[803.883px] items-start pb-0 pt-[160px] px-[24px] relative w-full">
          <Container24 />
          <Container31 />
        </div>
      </div>
    </div>
  );
}

function FaQs() {
  return (
    <div className="bg-gradient-to-b from-[rgba(249,250,251,0.4)] h-[803.883px] relative shrink-0 to-[#ffffff] w-full" data-name="FAQs">
      <div className="size-full">
        <div className="content-stretch flex flex-col h-[803.883px] items-start px-[120px] py-0 relative w-full">
          <Container32 />
        </div>
      </div>
    </div>
  );
}

function Container33() {
  return <div className="absolute blur-3xl filter left-[420px] rounded-[1.67772e+07px] size-[600px] top-[67.9px]" data-name="Container" />;
}

function Heading4() {
  return (
    <div className="absolute h-[140.797px] left-0 top-0 w-[768px]" data-name="Heading 2">
      <p className="absolute font-['General_Sans:Semibold',sans-serif] leading-[70.4px] left-[384.32px] not-italic text-[#14212a] text-[64px] text-center top-[3px] tracking-[-1.92px] translate-x-[-50%] w-[754px]">{`Let's Build the Future of Work — Together.`}</p>
    </div>
  );
}

function Text4() {
  return (
    <div className="h-[27px] relative shrink-0 w-full" data-name="Text">
      <p className="absolute font-['General_Sans:Semibold',sans-serif] leading-[27px] left-[50px] not-italic text-[18px] text-center text-nowrap text-white top-px translate-x-[-50%] whitespace-pre">Get in Touch</p>
      <Icon6 additionalClassNames="left-[111.96px] top-[3.5px]" />
    </div>
  );
}

function Button1() {
  return (
    <div className="absolute bg-[#056fd4] content-stretch flex flex-col h-[75px] items-start left-[270.02px] pb-0 pt-[24px] px-[48px] rounded-[14px] top-[196.8px] w-[227.961px]" data-name="Button">
      <Text4 />
    </div>
  );
}

function Icon8() {
  return (
    <div className="absolute left-[191.92px] size-[16px] top-[4px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p43eff00} id="Vector" stroke="var(--stroke-0, #14212A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Link4() {
  return (
    <div className="absolute h-[24px] left-[280.04px] top-[327.8px] w-[207.922px]" data-name="Link">
      <p className="absolute font-['General_Sans:Semibold',sans-serif] leading-[24px] left-[92.5px] not-italic text-[#14212a] text-[16px] text-center text-nowrap top-px translate-x-[-50%] whitespace-pre">Learn More About Reboo8</p>
      <Icon8 />
    </div>
  );
}

function Container34() {
  return (
    <div className="absolute h-[351.797px] left-[336px] top-[192px] w-[768px]" data-name="Container">
      <Heading4 />
      <Button1 />
      <Link4 />
    </div>
  );
}

function ContactCta() {
  return (
    <div className="bg-white h-[735.797px] overflow-clip relative shrink-0 w-full" data-name="ContactCTA">
      <Container33 />
      <Container34 />
    </div>
  );
}

function Container35() {
  return <div className="absolute bg-[rgba(255,255,255,0.08)] h-px left-0 top-0 w-[1440px]" data-name="Container" />;
}

function Text5() {
  return (
    <div className="h-[27px] relative shrink-0 w-[21.711px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid h-[27px] relative w-[21.711px]">
        <p className="absolute font-['General_Sans:Semibold',sans-serif] leading-[27px] left-[11.5px] not-italic text-[18px] text-center text-nowrap text-white top-px translate-x-[-50%] whitespace-pre">R8</p>
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="bg-[#056fd4] relative rounded-[10px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center pl-0 pr-[0.008px] py-0 relative size-[40px]">
        <Text5 />
      </div>
    </div>
  );
}

function Text6() {
  return (
    <div className="basis-0 grow h-[33px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid h-[33px] relative w-full">
        <p className="absolute font-['General_Sans:Semibold',sans-serif] leading-[33px] left-[38.5px] not-italic text-[22px] text-center text-nowrap text-white top-[0.5px] translate-x-[-50%] whitespace-pre">Reboo8</p>
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div className="absolute content-stretch flex gap-[12px] h-[40px] items-center left-0 top-0 w-[127.445px]" data-name="Container">
      <Container36 />
      <Text6 />
    </div>
  );
}

function Button2() {
  return (
    <div className="absolute h-[40px] left-0 top-0 w-[127.445px]" data-name="Button">
      <Container37 />
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="absolute h-[71.391px] left-0 opacity-80 top-[64px] w-[240px]" data-name="Paragraph">
      <p className="absolute font-['General_Sans:Regular',sans-serif] leading-[23.8px] left-0 not-italic text-[14px] text-white top-px w-[216px]">Harmonizing human potential with intelligent systems to reshape the future of work.</p>
    </div>
  );
}

function Container38() {
  return (
    <div className="absolute h-[174.5px] left-0 top-0 w-[240px]" data-name="Container">
      <Button2 />
      <Paragraph8 />
    </div>
  );
}

function ListItem() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <ButtonText text="Solutions" additionalClassNames="w-[59.641px]" />
    </div>
  );
}

function ListItem1() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <ButtonText text="Methodology" additionalClassNames="w-[83.867px]" />
    </div>
  );
}

function ListItem2() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <ButtonText text="Case Studies" additionalClassNames="w-[84.773px]" />
    </div>
  );
}

function ListItem3() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <ButtonText text="Pricing" additionalClassNames="w-[43.18px]" />
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

function Container39() {
  return (
    <div className="[grid-area:1_/_1] content-stretch flex flex-col gap-[20px] items-start place-self-stretch relative shrink-0" data-name="Container">
      <HeadingText2 text="Platform" />
      <List />
    </div>
  );
}

function ListItem4() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <ButtonText text="Mission" additionalClassNames="w-[49.102px]" />
    </div>
  );
}

function ListItem5() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <ButtonText text="Team" additionalClassNames="w-[35.211px]" />
    </div>
  );
}

function ListItem6() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <ButtonText text="Careers" additionalClassNames="w-[50.695px]" />
    </div>
  );
}

function ListItem7() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <ButtonText text="Contact" additionalClassNames="w-[52.492px]" />
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

function Container40() {
  return (
    <div className="[grid-area:1_/_2] content-stretch flex flex-col gap-[20px] items-start place-self-stretch relative shrink-0" data-name="Container">
      <HeadingText2 text="Company" />
      <List1 />
    </div>
  );
}

function ListItem8() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <ButtonText text="Blog" additionalClassNames="w-[27.852px]" />
    </div>
  );
}

function ListItem9() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <ButtonText text="Community" additionalClassNames="w-[75.297px]" />
    </div>
  );
}

function ListItem10() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <ButtonText text="Impact" additionalClassNames="w-[44.75px]" />
    </div>
  );
}

function ListItem11() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <ButtonText text="Help Center" additionalClassNames="w-[76.531px]" />
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

function Container41() {
  return (
    <div className="[grid-area:1_/_3] content-stretch flex flex-col gap-[20px] items-start place-self-stretch relative shrink-0" data-name="Container">
      <HeadingText2 text="Resources" />
      <List2 />
    </div>
  );
}

function ListItem12() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <ButtonText text="Privacy Policy" additionalClassNames="w-[84.273px]" />
    </div>
  );
}

function ListItem13() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <ButtonText text="Terms of Service" additionalClassNames="w-[105.578px]" />
    </div>
  );
}

function ListItem14() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <ButtonText text="Cookies" additionalClassNames="w-[52.086px]" />
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

function Container42() {
  return (
    <div className="[grid-area:1_/_4] content-stretch flex flex-col gap-[20px] items-start place-self-stretch relative shrink-0" data-name="Container">
      <HeadingText2 text="Legal" />
      <List3 />
    </div>
  );
}

function Container43() {
  return (
    <div className="absolute gap-[48px] grid grid-cols-[repeat(4,_minmax(0px,_1fr))] grid-rows-[repeat(1,_minmax(0px,_1fr))] h-[174.5px] left-[304px] top-0 w-[848px]" data-name="Container">
      <Container39 />
      <Container40 />
      <Container41 />
      <Container42 />
    </div>
  );
}

function Container44() {
  return (
    <div className="h-[238.5px] relative shrink-0 w-full" data-name="Container">
      <Container38 />
      <Container43 />
    </div>
  );
}

function Icon9() {
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

function Link5() {
  return (
    <Link9>
      <Icon9 />
    </Link9>
  );
}

function Icon10() {
  return (
    <Wrapper2 additionalClassNames="h-[24px] overflow-clip w-full">
      <path d={svgPaths.p15102e00} fill="var(--fill-0, white)" id="Vector" />
    </Wrapper2>
  );
}

function Link6() {
  return (
    <Link9>
      <Icon10 />
    </Link9>
  );
}

function Icon11() {
  return (
    <Wrapper2 additionalClassNames="h-[24px] overflow-clip w-full">
      <path d={svgPaths.p1b8f1d00} fill="var(--fill-0, white)" id="Vector" />
    </Wrapper2>
  );
}

function Link7() {
  return (
    <Link9>
      <Icon11 />
    </Link9>
  );
}

function Container45() {
  return (
    <div className="content-stretch flex gap-[24px] h-[104px] items-center relative shrink-0 w-full" data-name="Container">
      <Link5 />
      <Link6 />
      <Link7 />
    </div>
  );
}

function Paragraph9() {
  return (
    <div className="h-[19.5px] opacity-60 relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['General_Sans:Regular',sans-serif] leading-[19.5px] left-0 not-italic text-[13px] text-nowrap text-white top-[0.5px] whitespace-pre">© 2025 Reboo8 Inc. All rights reserved.</p>
    </div>
  );
}

function Container46() {
  return (
    <div className="content-stretch flex flex-col h-[60.5px] items-start pb-0 pt-[41px] px-0 relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1px_0px_0px] border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none" />
      <Paragraph9 />
    </div>
  );
}

function Container47() {
  return (
    <div className="absolute content-stretch flex flex-col h-[627px] items-start left-[120px] pb-0 pt-[112px] px-[24px] top-px w-[1200px]" data-name="Container">
      <Container44 />
      <Container45 />
      <Container46 />
    </div>
  );
}

function Footer() {
  return (
    <div className="bg-[#14212a] h-[628px] relative shrink-0 w-full" data-name="Footer">
      <Container35 />
      <Container47 />
    </div>
  );
}

function ContactPage() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[5348.06px] items-start left-0 pb-0 pt-[81px] px-0 top-0 w-[1440px]" data-name="ContactPage">
      <ContactHero />
      <ContactInfo />
      <ContactForm />
      <FaQs />
      <ContactCta />
      <Footer />
    </div>
  );
}

function Text7() {
  return (
    <div className="h-[24px] relative shrink-0 w-[54.867px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid h-[24px] relative w-[54.867px]">
        <p className="absolute font-['General_Sans:Semibold',sans-serif] leading-[24px] left-[27.5px] not-italic text-[16px] text-center text-nowrap text-white top-px translate-x-[-50%] whitespace-pre">Reboo8</p>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="bg-[#14212a] h-[36px] relative rounded-[4px] shrink-0 w-[120px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex h-[36px] items-center justify-center pl-0 pr-[0.008px] py-0 relative w-[120px]">
        <Text7 />
      </div>
    </div>
  );
}

function Button4() {
  return (
    <div className="h-[24px] relative shrink-0 w-[65.43px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid h-[24px] relative w-[65.43px]">
        <p className="absolute font-['General_Sans:Medium',sans-serif] leading-[24px] left-[33px] not-italic text-[#14212a] text-[16px] text-center text-nowrap top-px translate-x-[-50%] whitespace-pre">About Us</p>
      </div>
    </div>
  );
}

function Button5() {
  return (
    <div className="h-[24px] relative shrink-0 w-[65.906px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid h-[24px] relative w-[65.906px]">
        <p className="absolute font-['General_Sans:Medium',sans-serif] leading-[24px] left-[33.5px] not-italic text-[#14212a] text-[16px] text-center text-nowrap top-px translate-x-[-50%] whitespace-pre">Solutions</p>
      </div>
    </div>
  );
}

function Button6() {
  return (
    <div className="h-[24px] relative shrink-0 w-[49.555px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid h-[24px] relative w-[49.555px]">
        <p className="absolute font-['General_Sans:Medium',sans-serif] leading-[24px] left-[25.5px] not-italic text-[#14212a] text-[16px] text-center text-nowrap top-px translate-x-[-50%] whitespace-pre">Impact</p>
      </div>
    </div>
  );
}

function Button7() {
  return (
    <div className="basis-0 grow h-[24px] min-h-px min-w-px relative shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid h-[24px] relative w-full">
        <p className="absolute font-['General_Sans:Medium',sans-serif] leading-[24px] left-[42px] not-italic text-[#14212a] text-[16px] text-center text-nowrap top-px translate-x-[-50%] whitespace-pre">Community</p>
      </div>
    </div>
  );
}

function Container48() {
  return (
    <div className="h-[24px] relative shrink-0 w-[408.828px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[48px] h-[24px] items-center relative w-[408.828px]">
        <Button4 />
        <Button5 />
        <Button6 />
        <Button7 />
      </div>
    </div>
  );
}

function Button8() {
  return (
    <div className="bg-[#056fd4] h-[52px] relative rounded-[10px] shrink-0 w-[128.242px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid h-[52px] relative w-[128.242px]">
        <p className="absolute font-['General_Sans:Medium',sans-serif] leading-[24px] left-[64.5px] not-italic text-[16px] text-center text-nowrap text-white top-[15px] translate-x-[-50%] whitespace-pre">Contact Us</p>
      </div>
    </div>
  );
}

function Container49() {
  return (
    <div className="h-[80px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex h-[80px] items-center justify-between pl-[24px] pr-[24.008px] py-0 relative w-full">
          <Button3 />
          <Container48 />
          <Button8 />
        </div>
      </div>
    </div>
  );
}

function Navbar() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.95)] content-stretch flex flex-col h-[81px] items-start left-0 pb-px pt-0 px-[120px] top-0 w-[1440px]" data-name="Navbar">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-gray-200 border-solid inset-0 pointer-events-none shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
      <Container49 />
    </div>
  );
}

export default function LearnBrandIdentityGuidelines() {
  return (
    <div className="bg-white relative size-full" data-name="Learn Brand Identity Guidelines">
      <ContactPage />
      <Navbar />
    </div>
  );
}