import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useEffect, useRef } from "react";
import MarqueeCard from "../common/MarqueeCard";
import { whatWeSolveCardContent } from "../content/data";

gsap.registerPlugin(ScrollTrigger, SplitText);

const WhatWeSolve = () => {
  const titleRef = useRef(null);
  const headingRef = useRef(null);
  const descriptionRef = useRef(null);
  const lineRefs = useRef([]);
  const svgContainerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // ── Text animations ──────────────────────────────────────────────
      const split = new SplitText(titleRef.current, { type: "words" });
      gsap.from(split.words, {
        opacity: 0,
        y: 20,
        filter: "blur(10px)",
        stagger: 0.07,
        ease: "power2.out",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 90%",
          toggleActions: "play none none reverse",
        },
      });

      const split2 = new SplitText(headingRef.current, { type: "words" });
      gsap
        .timeline({
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        })
        .from(split2.words, {
          opacity: 0,
          y: 20,
          filter: "blur(10px)",
          stagger: 0.07,
          ease: "power2.out",
        })
        .from(
          descriptionRef.current,
          { opacity: 0, y: 20, ease: "power2.out" },
          "-=0.3",
        );

      // ── SVG Path continuous animation ────────────────────────────────
      const paths = svgContainerRef.current.querySelectorAll("path");
      paths.forEach((path) => {
        const svg = path.closest("svg");
        const isFast =
          svg.classList.contains("first") || svg.classList.contains("fourth");

        const dashArrayAttr =
          path.getAttribute("stroke-dasharray") ||
          path.getAttribute("strokeDasharray");
        if (!dashArrayAttr) return;

        const dashArray = dashArrayAttr.split(/[\s,]+/).map(parseFloat);
        const dashSum = dashArray.reduce((a, b) => a + b, 0);

        const multiplier = isFast ? 1740 : 1000;
        const speed = isFast ? 87 : 50;
        const infiniteValue = dashSum * multiplier;

        gsap.fromTo(
          path,
          { strokeDashoffset: 0 },
          {
            strokeDashoffset: -infiniteValue,
            duration: infiniteValue / speed,
            repeat: -1,
            ease: "power3.out",
          },
        );
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="lg:py-14 py-8 bg-[#faf7f2] overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <p className="uppercase text-primary mb-4 font-bold text-xs lg:leading-5 leading-normal tracking-widest">
          - what we solve
        </p>
        <h2
          ref={titleRef}
          className="text-dark mb-6 text-3xl lg:text-[42px] font-semibold"
        >
          Build to Work{" "}
          <span className="text-primary font-lora italic">With</span> Your
          <br />
          System -{" "}
          <span className="text-primary font-lora italic">
            Not a Commitment
          </span>
        </h2>
        <p className="text-[rgb(110_110_110)] font-medium text-sm mb-16 max-w-xl">
          BuhoVista sits on top of your existing setup and solves the gaps that
          actually matter.
        </p>
      </div>

      <div className="relative w-full overflow-hidden">
        <div className="flex animate-marquee gap-4 px-4 pb-10 md:pb-40">
          {[...whatWeSolveCardContent, ...whatWeSolveCardContent].map(
            (item, index) => (
              <MarqueeCard key={index} {...item} />
            ),
          )}
        </div>
      </div>

      <div
        ref={svgContainerRef}
        className="svg-lines md:block hidden relative h-[360px] w-full mx-auto pointer-events-none mt-[-180px] z-10 overflow-hidden"
      >
        <svg
          className="second absolute bottom-0 left-1/2 -translate-x-[120px] h-[335px] w-auto"
          role="presentation"
          viewBox="0 0 164 335"
        >
          <path
            d="M 0 0 C 0 122.785 143 79.964 143 204.403 C 143 328.842 143 319.857 143 319.857"
            fill="transparent"
            id="PrFsGnEWg"
            stroke="rgb(124, 204, 207)"
            strokeDasharray="76.3201904296875 286.2007141113281"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeMiterlimit="4"
            strokeWidth="1"
            transform="translate(12 5)"
          ></path>
        </svg>
        <svg
          className="third absolute bottom-0 left-1/2 translate-x-[28px] h-[342px] w-auto"
          role="presentation"
          viewBox="0 0 149 342"
        >
          <path
            d="M 130.5 0 C 130.5 122.785 0 79.964 0 204.403 C 0 328.842 0 319.857 0 319.857"
            fill="transparent"
            id="Gc76d4MT8"
            stroke="rgb(124, 204, 207)"
            strokeDasharray="74.61622314453125 279.8108367919922"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeMiterlimit="4"
            strokeWidth="1"
            transform="translate(7 12)"
          ></path>
        </svg>
        <svg
          className="first absolute -bottom-10 left-1/2 -translate-x-[381px] h-[370px] w-auto"
          role="presentation"
          viewBox="0 0 424 370"
        >
          <path
            d="M 0 0 C 0 136.66 410.5 89 410.5 227.5 C 410.5 366 410.5 356 410.5 356"
            fill="transparent"
            id="orswkqohg"
            stroke="rgb(124, 204, 207)"
            strokeDasharray="126.189208984375 473.20953369140625"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeMiterlimit="4"
            strokeWidth="1"
            transform="translate(6 5)"
          ></path>
        </svg>
        <svg
          className="fourth absolute -bottom-10 left-1/2 translate-x-[26px] h-[377px] w-auto"
          role="presentation"
          viewBox="0 0 420 377"
        >
          <path
            d="M 404 0 C 404 136.66 0 89 0 227.5 C 0 366 0 356 0 356"
            fill="transparent"
            id="Juw4EciKu"
            stroke="rgb(124, 204, 207)"
            strokeDasharray="125.0316650390625 468.8687438964844"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeMiterlimit="4"
            strokeWidth="1"
            transform="translate(9 12)"
          ></path>
        </svg>
        {/* Gradient Overlay for Bottom Fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#faf7f2] via-[#faf7f2]/90 to-transparent z-20 pointer-events-none"></div>
      </div>

      <div className="max-w-4xl text-center mx-auto px-6 lg:px-8 mt-4 relative z-10">
        <h3
          ref={headingRef}
          className="text-3xl lg:text-[42px] mb-6 font-semibold"
        >
          All Through <span className="text-primary-2">Buho</span>
        </h3>
        <p
          ref={descriptionRef}
          className="text-[#6e6e6e] text-base lg:text-[18px] font-medium leading-loose"
        >
          Every one of these workflows is accessible through Buho — the AI
          assistant that understands school operations and helps you execute
          without navigating complex menus.
        </p>
      </div>
    </section>
  );
};

export default WhatWeSolve;
