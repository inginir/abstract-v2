/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable react/display-name */
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

export default ({ data }: { data: PageData }) => {
  return (
    <div className="px-12 flex flex-col justify-center md:items-center m-5 bg-darkmode-lightbody  rounded-2xl">
      <div className="mt-12 mb-12">
        <h2
          className="mb-4 w-full text-center md:text-left"
          dangerouslySetInnerHTML={markdownify(data.frontmatter.title)}
        />
      </div>
      {data.frontmatter.enable && (
        <div className="col-12 flex lg:flex-row flex-col items-center flex-wrap justify-center mb-8 lg:w-2/3  md:text-left  md:items-start">
          {data.frontmatter.about.map((item, index) => (
            <p key={index} className="mb-2 text-lg text-center ">
              {item.sectionText}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};
