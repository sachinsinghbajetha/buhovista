import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(SplitText);

const Ready = () => {
  const titleRef = useRef(null);

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
    });
    return () => ctx.revert();
  }, []);

  return (
    <section
    id="ready"
      className="lg:py-14 py-8"
      style={{
        background: "radial-gradient(53% 64%,#353557 0%,#1e1e29 100%)",
      }}
    >
      <div className="text-center px-4">
        <p className="uppercase text-primary-2 mb-4 font-bold text-xs lg:leading-5 leading-normal">
          - ready?
        </p>
        <h2
          ref={titleRef}
          className="text-white mb-4 text-3xl lg:text-[42px] lg:leading-12 leading-normal font-semibold"
        >
          Don't Replace Your System
          <br />
          <span className="text-primary-2 font-lora italic">Fix It.</span>
        </h2>
        <p className="text-white font-medium lg:leading-5 leading-normal text-sm mb-10 max-w-md mx-auto">
          See the difference a 30-day pilot makes — for teachers, students,
          parents, and your admin team.
        </p>
        <div className="flex flex-wrap justify-center flex-row gap-4 mb-16 text-sm items-center">
          <button className="cursor-pointer px-5 min-h-[35px] bg-primary-2/80 hover:bg-primary/90 text-white font-semibold rounded-full transition-colors">
            Book a Pilot
          </button>
          <button className="cursor-pointer px-5 min-h-[35px] bg-transparent border hover:border-gray-400 text-white font-medium rounded-full transition-colors flex items-center justify-center gap-2">
            Talk To Us
          </button>
        </div>
      </div>
      <div className="relative">
        <div className="tab">
          <img
            src="/images/tab.png"
            alt="tab"
            className="w-[95vw] object-contain"
          />
        </div>
        <div className="mobile absolute right-0 top-[20%]">
          <img
            src="/images/mobile.png"
            alt="mobile"
            className="w-[20vw] h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Ready;
