import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

const Results = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const categoryRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });

      // Category animation
      if (categoryRef.current) {
        tl.from(categoryRef.current, {
          opacity: 0,
          x: -20,
          duration: 0.8,
          ease: "power2.out",
        });
      }

      // Heading animation using SplitText
      if (headingRef.current) {
        const split = new SplitText(headingRef.current, {
          type: "words",
          linesClass: "line",
          wordClass: "word",
        });

        tl.from(
          split.words,
          {
            opacity: 0,
            y: 20,
            filter: "blur(10px)",
            stagger: 0.07,
            ease: "power2.out",
          },
          "-=0.5"
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const resultsData = [
    {
      title: "Communication Becomes Controlled",
      description:
        "No more teachers being contacted personally at all hours. Parents get structured, trackable updates through an official channel.",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
        </svg>
      ),
    },
    {
      title: "Students Actually Practice",
      description:
        "AI-driven practice adapts to each student. No more one-size-fits-all worksheets — every student gets what they actually need.",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
          <line x1="12" y1="6" x2="12" y2="12"></line>
          <line x1="8" y1="10" x2="16" y2="10"></line>
        </svg>
      ),
    },
    {
      title: "Teachers Save Hours",
      description:
        "Generate exams, worksheets, and tests in minutes. Less manual work every week means more time for actual teaching.",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10"></circle>
          <polyline points="12 6 12 12 16 14"></polyline>
        </svg>
      ),
    },
    {
      title: "Real Performance Visibility",
      description:
        "Identify weak students early. Track trends across subjects and time — not just scores on a single exam day.",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
        </svg>
      ),
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="bg-[#F5F4F0] py-20 lg:py-32 px-6 lg:px-24 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <div
            ref={categoryRef}
            className="flex items-center justify-center gap-3 mb-6"
          >
            <div className="h-[2px] w-4 bg-[#168d91]"></div>
            <span className="uppercase text-[#168d91] font-bold text-[10px] tracking-[0.2em]">
              Results
            </span>
          </div>
          <h2
            ref={headingRef}
            className="text-[#1f1f1f] text-4xl lg:text-5xl font-semibold leading-[1.1] max-w-4xl mx-auto tracking-tight"
          >
            What Changes After <br className="hidden md:block" />
            You Use{" "}
            <span className="text-[#168d91] font-lora italic font-semibold">
              BuhoVista
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {resultsData.map((item, index) => (
            <div
              key={index}
              className="bg-[#fffdf9] p-6 lg:p-8 rounded-[1.5rem] flex items-start gap-6 border border-[#f9ebdf] shadow-[0_16px_65px_#0000000d]"
            >
              <div className="flex-shrink-0 w-12 h-12 lg:w-14 lg:h-14 rounded-xl bg-[#f5f5f5] flex items-center justify-center text-[#666]">
                {item.icon}
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-lg lg:text-xl font-bold text-[#1f1f1f] leading-tight">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm lg:text-[15px] leading-relaxed font-medium opacity-90">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Results;
