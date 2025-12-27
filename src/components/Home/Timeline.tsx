"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

import first_image from "../../../public/target.svg";
import second_image from "../../../public/form.svg";
import third_image from "../../../public/report.svg";
import fourth_image from "../../../public/review.svg";

const Timeline = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [lineHeight, setLineHeight] = useState(0);

  const timelineData = [
    {
      step: "01",
      title: "Create An Account",
      description:
        "Sign up or log in to start your claim analysis. This allows us to securely handle your information and deliver your report.",
      image: first_image,
    },
    {
      step: "02",
      title: "Complete The Multi-Step Form",
      description:
        "Tell us what happened, who you're insured with, and what your insurer has said so far. Upload your PDS, Certificate of Insurance, emails, letters, notes, and photos.",
      image: second_image,
    },
    {
      step: "03",
      title: "Specialist Review",
      description:
        "An insurance specialist reviews your information and compares it against similar situations.",
      image: third_image,
    },
    {
      step: "04",
      title: "Receive Your Report",
      description:
        "You receive a structured PDF within 48 hours, explaining how your claim may be viewed and what information may be relevant if you choose to take things further.",
      image: fourth_image,
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const sectionTop = sectionRef.current.offsetTop;
      const sectionHeight = sectionRef.current.offsetHeight;
      const scrollY = window.scrollY + window.innerHeight / 2;

      const progress = Math.min(
        Math.max((scrollY - sectionTop) / sectionHeight, 0),
        1
      );

      setLineHeight(progress * sectionHeight);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="py-20">
      {/* Heading */}
      <div className="flex flex-col items-center justify-center gap-4 mb-14">
        <h2 className="text-2xl lg:text-[40px] leading-[120%] font-semibold">
          How It <span className="text-brand">Works</span>
        </h2>
        <p className="tracking-[1px] leading-[120%] text-color-secondary text-center">
          A simple, guided process to help you understand your insurance claim.
        </p>
      </div>

      <div ref={sectionRef} className="relative">
        {/* Desktop static line */}
        <div className="absolute left-1/2 top-0 h-full w-[2px] bg-gray-200 -translate-x-1/2 hidden lg:block" />

        {/* Desktop animated line */}
        <div
          className="absolute left-1/2 top-0 w-[2px] bg-gradient-to-b from-[#4E9AF1] to-[#A16BFE] -translate-x-1/2 hidden lg:block transition-all duration-200"
          style={{ height: `${lineHeight}px` }}
        />

        {/* Mobile / Tablet line */}
        <div className="absolute left-4 top-0 h-full w-[2px] bg-gradient-to-b from-[#4E9AF1] to-[#A16BFE] lg:hidden" />

        <div className="max-w-6xl mx-auto space-y-24">
          {timelineData.map((item, index) => {
            const isRight = index % 2 !== 0;

            return (
              <div
                key={index}
                className={`relative flex flex-col lg:flex-row items-start lg:items-center gap-6 lg:gap-12 pl-12 lg:pl-0 ${
                  isRight ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Image */}
                <div className="w-full lg:w-1/2 flex justify-center">
                  <Image
                    src={item.image}
                    alt={item.title}
                    className="w-[140px] h-auto"
                  />
                </div>

                {/* Content */}
                <div
                  className={`w-full lg:w-1/2 relative ${
                    isRight ? "lg:text-right" : "lg:text-left"
                  }`}
                >
                  {/* Step badge */}
                  <span
                    className={`inline-flex w-9 h-9 items-center justify-center mb-3 text-xs font-semibold rounded-full
                    absolute left-[-48px] top-0 lg:static
                    ${
                      index === 0
                        ? "bg-[#DCFCE7] text-[#22C55E]"
                        : index === 1
                        ? "bg-[#FEE2E2] text-[#EF4444]"
                        : index === 2
                        ? "bg-[#DBEAFE] text-[#3B82F6]"
                        : "bg-[#F3E8FF] text-[#A855F7]"
                    }`}
                  >
                    {item.step}
                  </span>

                  <h3 className="text-xl font-semibold mb-2 text-[#1E293B]">
                    {item.title}
                  </h3>

                  <p className="text-color-secondary text-sm leading-[140%]">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
