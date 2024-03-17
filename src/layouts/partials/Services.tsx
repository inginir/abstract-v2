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
      className={`rounded-lg text-dark dark:text-white  flex h-[300px] w-[450px]
      items-center justify-center service-card m-8 overflow-hidden relative`}
    >
      <ImageFallback
        height={450}
        width={450}
        className={`rounded absolute service-card-img`}
        src={item.image}
        alt={item.title}
        fit="cover"
        // make it fit in dimenasiona
        style={{ objectFit: "cover" }}
      />
      <div className="flex flex-col w-4/5">
        <div
          className={`service-card-text text-3xl font-bold mb-4 text-white`}
          dangerouslySetInnerHTML={markdownify(item.title)}
        />
        <div
          className={`service-card-text `}
          dangerouslySetInnerHTML={markdownify(item.description)}
        />
      </div>
    </div>
  );
};

const Services = ({ data }: { data: PageData }) => {
  return (
    <div className="px-4">
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
