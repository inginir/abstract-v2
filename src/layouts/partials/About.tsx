"use client";

import ImageFallback from "@/helpers/ImageFallback";
import { markdownify } from "@/lib/utils/textConverter";
import { About, Service } from "@/types";
import { useState } from "react";
import "swiper/css";

interface PageData {
  notFound?: boolean;
  content?: string;
  frontmatter: {
    enable?: boolean;
    title: string;
    description?: string;
    about: Array<About>;
  };
}

const About = ({ data }: { data: PageData }) => {
  return (
    <div className="px-12 flex flex-col justify-center md:items-center m-5 bg-darkmode-lightbody  rounded-2xl">
      <div className="mt-12 mb-12">
        <h2
          className="mb-4"
          dangerouslySetInnerHTML={markdownify(data.frontmatter.title)}
        />
      </div>
      {data.frontmatter.enable && (
        <div className="col-12 flex lg:flex-row flex-col items-center flex-wrap w-full justify-center mb-8 w-2/3">
          {data.frontmatter.about.map((item, index) => (
            <p key={index} className="mb-2 text-lg text-center">
              {item.sectionText}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export default About;
