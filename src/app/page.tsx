import ImageFallback from "@/helpers/ImageFallback";
import { getListPage } from "@/lib/contentParser";
import { markdownify } from "@/lib/utils/textConverter";
import About from "@/partials/About";
import CallToAction from "@/partials/CallToAction";
import SeoMeta from "@/partials/SeoMeta";
import Services from "@/partials/Services";
import Testimonials from "@/partials/Testimonials";
import { Button, Feature } from "@/types";
import Link from "next/link";
import { FaCheck } from "react-icons/fa";

const Home = () => {
  const homepage = getListPage("homepage/_index.md");
  const testimonial = getListPage("sections/testimonial.md");
  const service = getListPage("sections/services.md");
  const about = getListPage("sections/about.md");
  const callToAction = getListPage("sections/call-to-action.md");
  const { frontmatter } = homepage;
  const {
    banner,
    features,
  }: {
    banner: { title: string; image: string; content?: string; button?: Button };
    features: Feature[];
  } = frontmatter;

  return (
    <>
      <SeoMeta />
      <section className="section pt-0">
        <div className="container">
          <div className="row justify-center">
            <div className="lg:col-7 md:col-9 mb-8 text-center">
              {/* <h1
                className="mb-4 text-h3 lg:text-h1"
                dangerouslySetInnerHTML={markdownify(banner.title)}
              /> */}
              {banner?.image && (
                <div className="col-12">
                  <ImageFallback
                    src={banner.image}
                    className="mx-auto"
                    width="600"
                    height="120"
                    alt="banner image"
                    priority
                  />
                </div>
              )}
              <h4
                className="mb-8 md:text-xl lg:text-2xl text-lg"
                dangerouslySetInnerHTML={markdownify(banner?.content ?? "")}
              />
              {banner?.button!.enable && (
                <Link
                  className="btn btn-primary text-xs"
                  href={banner?.button!.link}
                  target={
                    banner?.button!.link.startsWith("http") ? "_blank" : "_self"
                  }
                >
                  {banner?.button!.label}
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>

      {features?.map((feature, index: number) => (
        <section
          key={index}
          className={`section-sm ${index % 2 === 0 && "bg-gradient"}`}
        >
          <div className="container" id={feature.sectionhref}>
            <div className="row items-center justify-between">
              <div
                className={`mb:md-0 mb-6 md:col-5 ${
                  index % 2 !== 0 && "md:order-2"
                }`}
              >
                <ImageFallback
                  src={feature.image}
                  height={480}
                  width={520}
                  alt={feature.title}
                />
              </div>
              <div
                className={`md:col-7 lg:col-6 ${
                  index % 2 !== 0 && "md:order-1"
                }`}
              >
                {feature.sections.map((section, index) => (
                  <div key={index} className="mb-16 ">
                    {Array.isArray(section.title) ? (
                      section.title.map((title, index) => (
                        <h3
                          key={index}
                          className={`${index % 2 !== 0 ? "dark:text-darkmode-secondary" : ""} inline mb-4`}
                          dangerouslySetInnerHTML={markdownify(title)}
                        />
                      ))
                    ) : (
                      <h3
                        className="mb-4"
                        dangerouslySetInnerHTML={markdownify(section.title)}
                      />
                    )}
                    <p
                      className="mb-8 mt-4 text-lg"
                      dangerouslySetInnerHTML={markdownify(section.content)}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      ))}

      <Services data={service} />
      <About data={about} />
      {/* <Testimonials data={testimonial} /> */}
      <CallToAction data={callToAction} />
    </>
  );
};

export default Home;
