import ImageFallback from "@/helpers/ImageFallback";
import MDXContent from "@/helpers/MDXContent";
import { getListPage } from "@/lib/contentParser";
import { markdownify } from "@/lib/utils/textConverter";
import SeoMeta from "@/partials/SeoMeta";
import { RegularPage } from "@/types";

const ThankYou = () => {
  const data: RegularPage = getListPage("thankyou/_index.md");
  const { frontmatter, content } = data;
  const { title, meta_title, description, image } = frontmatter;

  return (
    <>
      <SeoMeta
        title={title}
        meta_title={meta_title}
        description={description}
        image={image}
      />
      <section className="section-sm">
        <div className="container">
          <div className="flex  justify-center">
              {image && (
                <ImageFallback
                  className=" flex-1 mr-16 mb-6 rounded-lg w-50%"
                  src={image}
                  width={500}
                  height={500}
                  alt={title}
                />
              )}
            <div className=" flex-1 ">
              <h2
                dangerouslySetInnerHTML={markdownify(title)}
                className="h3 mb-6"
              />
              <p 
               dangerouslySetInnerHTML={markdownify(description||"")}
                className="text-lg mb-6"
                />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ThankYou;
