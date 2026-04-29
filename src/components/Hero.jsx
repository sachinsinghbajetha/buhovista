import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(SplitText);

const Hero = () => {
  const containerRef = useRef(null);
  const laptopRef = useRef(null);
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline();
      gsap.to(laptopRef.current, {
        yPercent: -20,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      const split = new SplitText(titleRef.current, {
        type: "words",
        linesClass: "line",
        wordClass: "word",
      });

      tl.from(split.words, {
        opacity: 0,
        y: 20,
        filter: "blur(10px)",
        stagger: 0.07,
        ease: "easeout",
      }).from(
        descriptionRef.current,
        {
          opacity: 0,
          y: 20,
          ease: "easeout",
        },
        "-=.7",
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);
  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center bg-white overflow-hidden pt-32 pb-16 px-6 lg:px-12 lg:px-24"
      style={{
        background:
          "radial-gradient(53% 100% at 94.2% 67.2%,#aee2e4 0%,#fff 100%)",
      }}
    >
      <div
        ref={laptopRef}
        className="absolute lg:top-[30%] xl:top-[35%] md:right-[-90%] lg:right-[-70%] xl:right-[-40%] h-full rotate-[10deg] hidden lg:block"
      >
        <img
          src="/images/laptop.png"
          alt="laptop"
          className="w-full h-full object-contain"
        />
      </div>

      <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-center relative">
        {/* Left Content */}
        <div className="z-10 w-full xl:w-[55%] pr-0 lg:pr-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#E5F7F6] text-primary text-[9px] font-bold uppercase mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-[#1E8A85]"></span>
            For schools across Delhi NCR
          </div>

          <h1
            ref={titleRef}
            className="text-5xl leading-14 font-bold font-lora text-[#1A1A1A] mb-6"
          >
            Your School Already Has <br className="hidden lg:block" />
            a System. <br />
            <span className="text-[#2A9D8F]">We Fix What It Doesn't.</span>
          </h1>

          <p
            ref={descriptionRef}
            className="text-sm leading-6 text-[#6e6e6e] mb-10 max-w-[28rem] font-medium font-dmsans"
          >
            Fix WhatsApp chaos, reduce teacher workload, and get real visibility
            into student performance — without replacing your existing ERP.
          </p>

          <div className="flex flex-wrap flex-row gap-4 mb-16 text-sm">
            <button className="px-5 py-1 bg-primary/80 hover:bg-primary/90 text-white font-semibold rounded-full transition-colors">
              Book a Demo
            </button>
            <button className="px-5 py-1 bg-white border hover:border-gray-400 text-[#374151] font-semibold rounded-full transition-colors flex items-center justify-center gap-2">
              See How It Works
              <span className="text-lg font-normal">&gt;</span>
            </button>
          </div>

          <div className="flex items-end gap-2 text-[#6B7280] text-sm font-medium font-dmsans">
            <span className="text-base">🏫</span>
            <p>Pilot programs open · Working with schools across NCR</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
