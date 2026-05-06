import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { meetBuhoData } from "../content/data";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(SplitText);

const MeetBuho = () => {
  const [activeTab, setActiveTab] = useState(0);
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const descriptionRef = useRef(null);
  const categoryRef = useRef(null);
  const cardRef = useRef(null);
  const progressRefs = useRef([]);
  const timerRef = useRef(null);
  const startTimeRef = useRef(null);
  const DURATION = 3000;

  // Performant autoplay using requestAnimationFrame
  useEffect(() => {
    const animateProgress = (timestamp) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp;
      const elapsed = timestamp - startTimeRef.current;
      const progress = Math.min((elapsed / DURATION) * 100, 100);

      // Update the active tab's progress bar directly via DOM
      if (progressRefs.current[activeTab]) {
        progressRefs.current[activeTab].style.width = `${progress}%`;
      }

      if (progress >= 100) {
        setActiveTab((prev) => (prev + 1) % meetBuhoData.length);
        startTimeRef.current = null; // Reset for next tab
      } else {
        timerRef.current = requestAnimationFrame(animateProgress);
      }
    };

    // Reset progress bars of inactive tabs
    progressRefs.current.forEach((ref, index) => {
      if (ref && index !== activeTab) {
        ref.style.width = "0%";
      }
    });

    startTimeRef.current = null;
    timerRef.current = requestAnimationFrame(animateProgress);

    return () => {
      if (timerRef.current) cancelAnimationFrame(timerRef.current);
    };
  }, [activeTab]);

  // Tab content GSAP animation
  useEffect(() => {
    gsap.fromTo(
      ".feature-item",
      { opacity: 0, x: 10 },
      { opacity: 1, x: 0, stagger: 0.1, duration: 0.4, ease: "power2.out" },
    );
  }, [activeTab]);

  // Main section GSAP animation
  useEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });

      tl.from(categoryRef.current, {
        opacity: 0,
        x: -20,
        duration: 0.8,
        ease: "power2.out",
      });

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
        "-=0.5",
      );

      tl.from(
        descriptionRef.current,
        {
          opacity: 0,
          y: 20,
          ease: "power2.out",
        },
        "-=0.7",
      );

      tl.from(
        cardRef.current,
        {
          opacity: 0,
          y: 30,
          duration: 1,
          ease: "power3.out",
        },
        "-=0.6",
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
    id="meetBuho"
      ref={sectionRef}
      className="bg-[#1f1f1f] py-16 lg:py-20 px-6 lg:px-24 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        {/* Left Content */}
        <div>
          <p
            ref={categoryRef}
            className="uppercase text-primary-2 mb-4 font-bold text-xs lg:leading-5 tracking-widest"
          >
            - What we solve
          </p>
          <h2
            ref={headingRef}
            className="text-white text-3xl lg:text-4xl xl:text-5xl font-semibold mb-6 leading-tight"
          >
            Meet Buho — Your School's <br />
            <span className="text-primary-2 font-lora italic">
              AI Assistant
            </span>
          </h2>
          <p
            ref={descriptionRef}
            className="text-gray-400 text-lg max-w-lg font-medium leading-relaxed"
          >
            From creating exams to managing communication — Buho helps you get
            work done faster, with accuracy and school-level control.
          </p>
        </div>

        {/* Right Content */}
        <div className="flex flex-col gap-8 mt-8 lg:mt-0">
          {/* Nav Tabs */}
          <div className="grid grid-cols-3 md:grid-cols-4 p-1.5 gap-1 relative z-10 w-fit">
            {meetBuhoData.map((tab, index) => (
              <button
                key={tab.id}
                // onClick={() => setActiveTab(index)}
                className={`tab-button relative px-6 py-2.5 rounded-full text-sm font-semibold transition-colors duration-300 overflow-hidden ${
                  activeTab === index
                    ? "bg-[#168d91] text-white shadow-md"
                    : "text-gray-400 bg-[#333] border border-[#535554]"
                }`}
              >
                <span className="relative z-10">{tab.label}</span>
                {/* <div
                  className={`absolute bottom-0 left-0 h-[3px] bg-white/40 w-full ${
                    activeTab === index ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <div
                    ref={(el) => (progressRefs.current[index] = el)}
                    className="h-full bg-white"
                    style={{ width: "0%" }}
                  ></div>
                </div> */}
              </button>
            ))}
          </div>

          {/* Feature List */}
          <div className="space-y-6 min-h-[240px]">
            {meetBuhoData[activeTab].features.map((feature, i) => (
              <div
                key={i}
                className="feature-item flex items-start gap-4 text-gray-200"
              >
                <span className="text-yellow-500 mt-1 text-xl">✦</span>
                <p className="text-lg lg:text-xl font-medium">{feature}</p>
              </div>
            ))}
          </div>

          {/* Bottom Card */}
          <div
            ref={cardRef}
            className="bg-[#2b2b2d] border border-[#535554] p-8 rounded-2xl relative"
          >
            <p className="text-gray-300 text-lg leading-relaxed">
              <span className="text-white font-bold">
                Built with control, not chaos.
              </span>{" "}
              <span className="text-white/60">
                Every action through Buho is structured, reviewable, and
                controlled by school policies. You stay in control — Buho just
                makes it faster.
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeetBuho;
