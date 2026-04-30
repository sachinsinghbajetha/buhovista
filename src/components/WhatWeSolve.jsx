import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useEffect, useRef } from "react";
import MarqueeCard from "../common/MarqueeCard";
import { whatWeSolveCardContent } from "../content/data";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(SplitText);

const WhatWeSolve = () => {
  const titleRef = useRef(null);
  const headingRef = useRef(null);
  const descriptionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const split = new SplitText(titleRef.current, {
        type: "words",
        linesClass: "line",
        wordClass: "word",
      });
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

      const split2 = new SplitText(headingRef.current, {
        type: "words",
        linesClass: "line",
        wordClass: "word",
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 90%",
          toggleActions: "play none none reverse",
        },
      });

      tl.from(split2.words, {
        opacity: 0,
        y: 20,
        filter: "blur(10px)",
        stagger: 0.07,
        ease: "power2.out",
      }).from(
        descriptionRef.current,
        {
          opacity: 0,
          y: 20,
          ease: "power2.out",
        },
        "-=0.3",
      );
    });
    return () => ctx.revert();
  }, []);

  return (
    <section className="lg:py-14 py-8 bg-[#faf7f2] overflow-hidden">
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

      {/* marquee */}
      <div className="relative w-full overflow-hidden">
        {/* Fades */}
        {/* <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-[#faf7f2] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-[#faf7f2] to-transparent z-10 pointer-events-none" /> */}

        <div className="flex animate-marquee gap-4 px-4 pb-40">
          {[...whatWeSolveCardContent, ...whatWeSolveCardContent].map(
            (item, index) => (
              <MarqueeCard key={index} {...item} />
            ),
          )}
        </div>
      </div>

      <div className="max-w-4xl text-center mx-auto px-6 lg:px-8">
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
