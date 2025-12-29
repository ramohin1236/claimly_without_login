import React from "react";
import Button from "../shared/Button";
import HeroImage from "../../../public/hero_imge.png";
import Image from "next/image";
import { InfoIcon } from "../icons-svg/customIcons";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="container mx-auto  py-5 lg:py-16">
      {/* Hero Section */}
      <div className="lg:flex justify-around items-center mx-auto">
        {/* Left side */}
        <div className="flex flex-col flex-1 gap-2 md:gap-8">


          <div className="flex flex-col gap-6 md:gap-9 ">
            <h1 className="font-bold text-3xl md:text-[44px] leading-[120%]">
              Understand your{" "}
              <span className="text-brand">insurance claim </span> before you
              accept or complain.
            </h1>
            <div className="flex flex-col gap-4">
              <p className="default-text leading-normal!">
                Fill out a short form, upload your documents and Claimly will
                provide you with a plain-English report on how your insurer may
                view your claim, what information usually matters most, and how
                similar situations may typically be treated. Prepared and
                delivered within 24 to 48 hours.
              </p>
              <p className="default-text">
                Prepared and delivered within 24 to 48 hours.
              </p>
            </div>

            <div>
             <Link href='/my_claims'>
                 <Button variant="primary" size="lg" className="font-medium">
                Analyse My Claim
              </Button>
             </Link>
            </div>

            <div className="flex items-center gap-1">
              <InfoIcon fill="var(--secondary_text)" width={14} height={14} />
              <p className="default-text">
                Prepared and delivered within 24 to 48 hours.
              </p>
            </div>
          </div>
        </div>
        {/* Right side */}
        <div className="flex-1 flex items-center justify-center lg:justify-end">
          <Image src={HeroImage} alt="Hero Image" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
