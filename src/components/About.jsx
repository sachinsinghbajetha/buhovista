import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

const About = () => {
  const headingRef = useRef(null);
  const missionRef = useRef(null);
  const labelRef = useRef(null);
  const descriptionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 90%",
          toggleActions: "play none none reverse",
        },
      });

      if (missionRef.current) {
        const splitMission = new SplitText(missionRef.current, {
          type: "words",
          linesClass: "line",
          wordClass: "word",
        });

        gsap.from(splitMission.words, {
          opacity: 0,
          y: 20,
          filter: "blur(10px)",
          stagger: 0.05,
          ease: "power2.out",
          scrollTrigger: {
            trigger: missionRef.current,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        });
      }

      if (labelRef.current) {
        tl.from(labelRef.current, {
          opacity: 0,
          x: -20,
          duration: 0.8,
          ease: "power2.out",
        });
      }

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
          "-=0.6",
        );
      }

      if (descriptionRef.current) {
        tl.from(
          descriptionRef.current,
          {
            opacity: 0,
            y: 20,
            duration: 0.8,
            ease: "power2.out",
          },
          "-=0.4",
        );
      }
    });
    return () => ctx.revert();
  }, []);

  return (
    <section id="about" className="py-24 px-6 md:px-12 lg:px-24 bg-[#FFFDF9]">
      <div className="mx-auto flex flex-col lg:flex-row gap-16 items-center">
        {/* Left Side: Mission Card */}
        <div className="w-full lg:w-[55%]">
          <div
            style={{
              background: "linear-gradient(106deg,#e8f0f2 0%,#b2dbe0 100%)",
            }}
            className="rounded-[60px] p-12 md:p-20 flex flex-col justify-center items-center text-center aspect-[1.1/1] md:aspect-auto md:h-[520px]"
          >
            <h2
              ref={missionRef}
              className="text-2xl md:text-3xl italic lg:text-5xl font-lora text-[#164243] leading-[1.3] mb-12"
            >
              Make schools run smarter, safer, and more responsive.
            </h2>
            <div className="text-primary font-bold tracking-[0.2em] text-xs md:text-sm flex items-center gap-3">
              <span className="w-4 h-[1.5px] bg-primary"></span>
              OUR MISSION
            </div>
          </div>
        </div>

        {/* Right Side: Content */}
        <div className="w-full lg:w-[45%] flex flex-col gap-8">
          <div
            ref={labelRef}
            className="flex items-center gap-3 text-primary font-bold tracking-[0.2em] text-xs uppercase"
          >
            <span className="w-4 h-[1.5px] bg-primary"></span>
            About
          </div>

          <h2
            ref={headingRef}
            className="text-4xl md:text-5xl font-lora text-[#1a1a1a] font-semibold leading-tight tracking-tight"
          >
            Why <span className="text-primary italic">choose</span> us
          </h2>

          <div
            ref={descriptionRef}
            className="space-y-6 text-gray-500 text-lg leading-relaxed font-dmsans max-w-[95%]"
          >
            <p>
              BuhoVista is built to solve real operational problems in schools,
              not just digitize them.
            </p>
            <p>
              It focuses on reducing workload, improving communication, and
              helping schools work better through practical technology that fits
              how schools actually work.
            </p>
            <p>
              We&apos;re not here to replace what works. We&apos;re here to fix
              what doesn&apos;t — with a deep respect for the people who run
              India&apos;s schools every day.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 mt-4">
            <span className="px-5 py-2 bg-[#E2F5F5] text-primary rounded-full text-xs font-semibold tracking-wide">
              School-first Design
            </span>
            <span className="px-5 py-2 bg-[#FFF0E6] text-[#FF8A3D] rounded-full text-xs font-semibold tracking-wide">
              Built with educators
            </span>
            <span className="px-5 py-2 bg-[#EBF5FF] text-[#3D9BFF] rounded-full text-xs font-semibold tracking-wide">
              Privacy-first
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
