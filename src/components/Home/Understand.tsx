import React from "react";
import Button from "../shared/Button";
import right_icon from "../../../public/icon_right.svg";
import Image from "next/image";

const Understand = () => {
  return (
    <div className="pt-10 md:pt-28">
      <div className="flex flex-col py-10 px-7 lg:py-20 lg:px-24 bg-linear-to-br from-[#DBEAFE] to-[#F9FAFB] rounded-[40px] outline-[1px] outline-[#0000001A] xl:flex-row justify-between items-center  gap-10">
        {/* left section */}
        <div className="flex-1 flex flex-col gap-4">
          <h2 className="text-2xl lg:text-[40px] leading-[120%] font-semibold">
            Want to understand your own{" "}
            <span className="text-brand"> Claimly</span>
          </h2>
          <p className="default-list-text">
            If you’d like help understanding how these principles apply to your
            situation, you can submit your documents to Claimly for a
            structured, plain-English report.
          </p>
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 bg-[#22C55E] rounded-full"></div>
            <p className="text-[14px] text-[#64748B] italic font-semibold">
              Motor insurance claims only during early access.
            </p>
          </div>
        </div>

        {/* right section */}
        <div className="flex-1 text-center">
          <Button
            rightIcon={
              <Image
                src={right_icon}
                alt="arrow icon"
                width={16}
                height={16}
                className="transition-transform duration-200 group-hover:translate-x-1 w-4 h-4 ml-2.5"
              />
            }
            variant="primary"
            size="lg"
            className="font-medium"
          >
            Analyse My Claim
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Understand;
