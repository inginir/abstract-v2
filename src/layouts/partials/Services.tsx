"use client";

import ImageFallback from "@/helpers/ImageFallback";
import { markdownify } from "@/lib/utils/textConverter";
import { Service } from "@/types";
import { useState } from "react";
import "swiper/css";

interface PageData {
  notFound?: boolean;
  content?: string;
  frontmatter: {
    enable?: boolean;
    title: string;
    description?: string;
    services: Array<Service>;
  };
}

const ServiceCard = ({ item }: { item: Service }) => {
  return (
    <div
      className={`rounded-lg text-dark dark:text-darkmode-text flex flex-col lg:flex-row w-full h-full lg:w-[450px] lg:h-[450px]
      items-center justify-center service-card mb-12 lg:m-8 overflow-hidden relative`}
    >
      <ImageFallback
        height={800}
        width={800}
        className={`rounded lg:absolute lg:service-card-img  w-full h-[300px] md:h-[400px]  lg:w-[450px] lg:h-[450px]`}
        src={item.image}
        alt={item.title}
        fit="cover"
        style={{ objectFit: "cover" }}
      />
      <div className="flex-col w-full lg:w-4/5 lg:flex mt-5 lg:mt-0 ">
        <div
          className={`lg:service-card-text text-3xl font-bold mb-4 dark:text-light `}
          dangerouslySetInnerHTML={markdownify(item.title)}
        />
        <p
          className={`lg:service-card-text text`}
          dangerouslySetInnerHTML={markdownify(item.description)}
        />
      </div>
    </div>
  );
};

const Services = ({ data }: { data: PageData }) => {
  return (
    <div className="px-4 flex flex-col justify-center md:items-center ">
      <div className="mt-12 mb-12">
        <h2
          className="mb-4"
          dangerouslySetInnerHTML={markdownify(data.frontmatter.title)}
        />
      </div>
      {data.frontmatter.enable && (
        <div className="col-12 flex lg:flex-row flex-col items-center flex-wrap w-full justify-center ">
          {data.frontmatter.services.map((item: Service, index: number) => (
            <ServiceCard item={item} key={index} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Services;
