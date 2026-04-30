import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useEffect, useRef } from "react";
import GradientCard from "../common/GradientCard";
import { cardContent } from "../content/data";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(SplitText);

const GetStarted = () => {
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
      className="lg:py-14 py-8"
      style={{
        background: "linear-gradient(#387275 0%,#060e29 100%)",
      }}
    >
      <div className="text-center px-4">
        <p className="uppercase text-[rgb(199_227_228)] mb-4 font-bold text-xs lg:leading-5 leading-normal">
          - get started
        </p>
        <h2
          ref={titleRef}
          className="text-white mb-4 text-3xl lg:text-[42px] lg:leading-12 leading-normal font-semibold"
        >
          Start With a Pilot.
          <br />
          <span className="text-primary-2 font-lora italic">
            Not a Commitment
          </span>
        </h2>
        <p className="text-[rgb(199_227_228)] font-medium lg:leading-5 leading-normal text-sm mb-10 max-w-md mx-auto">
          We don't expect you to switch systems blindly. A controlled 30-day
          pilot with measurable outcomes — zero disruption.
        </p>
        {/* cards container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 max-w-6xl mx-auto text-left">
          {cardContent.map((card) => (
            <GradientCard
              key={card.id}
              id={card.id}
              title={card.title}
              desc={card.desc}
            />
          ))}
        </div>

        {/* buttons */}
        <div className="flex flex-wrap justify-center flex-row gap-4 mb-16 text-sm items-center">
          <button className="cursor-pointer px-5 min-h-[35px] bg-white hover:bg-white/90 text-black font-semibold rounded-full transition-colors">
            Request a Demo
          </button>
          <button className="cursor-pointer px-5 min-h-[35px] bg-transparent border hover:border-gray-400 text-white font-medium rounded-full transition-colors flex items-center justify-center gap-2">
            Talk To Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
