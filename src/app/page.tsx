import Image from "next/image";
import ImageFallback from "@/helpers/ImageFallback";
import { getListPage } from "@/lib/contentParser";
import { markdownify } from "@/lib/utils/textConverter";
import CallToAction from "@/partials/CallToAction";
import SeoMeta from "@/partials/SeoMeta";
import Testimonials from "@/partials/Testimonials";
import { Button, Feature } from "@/types";
import Link from "next/link";
import { FaCheck } from "react-icons/fa/index.js";
import AnimationLogo from "@/components/AnimationLogo"

const Home = () => {
  const homepage = getListPage("homepage/_index.md");
  const testimonial = getListPage("sections/testimonial.md");
  const callToAction = getListPage("sections/call-to-action.md");
  const { frontmatter } = homepage;
  const {
    banner,
    features,
  }: {
    banner: { title: string; title_2: string; title_3: string; index_1: string; index_2: string; image: string; content?: string; button?: Button };
    features: Feature[];
  } = frontmatter;

  return (
    <>
      <SeoMeta />
      <section className="h-min-screen bg-[url('/images/grid2.png')]    {/* gradient-to-b from-gray-900 via-slate-900 to-slate-400*9*/}">
        <div className="">
          <div className="">
            

<div className="py-3 grid grid-cols-[ 12vh 14vh 20vh 32vh repeat(14, 1fr)] grid-rows-[ 12vh 14vh 20vh 32vh repeat(14, 1fr)]  lg:grid-cols-[10vw , 20vw, 20vw, 20vw, 20vw, 20vw, 20vw, 20vw, 20vw, 20vw, 20vw,  10vw] lg:grid-rows-[16vh,16vh,18vh,6vh, 24vh, 10vh] gap-1  ">
    <div className="bg-gray-400/20 grid-cols [repeat(12, 1fr);
grid-template-rows: 12vh 14vh 20vh 32vh repeat(14, 1fr);<grid-column-gap: px;
grid-row-gap: 1px;  lg:col-start-1 lg:col-end-9 lg;row-start-1 lg:row-end-2 ">
    <h1
                className="inline-block text-transparent bg-clip-text text-4xl leading-7 uppercase bg-gradient-to-b from-yellow-500 via-amber-500 to-slate-600 lg:py-10 lg:text-[7rem] lg:col-start-0 col-span-8"
                dangerouslySetInnerHTML={markdownify(banner.title)}
              />
    </div>
    <div className="bg-cyan-500/20 lg:col-start-1 lg:col-end-9 lg:row-start-2 lg:row-end-3">
    <h1
                className={"relative leading-11 -top-10 text-[5rem] inline-block text-transparent bg-clip-text uppercase bg-gradient-to-b from-yellow-500 via-orange-300  to-slate-600 lg:text-[14rem]"}
                dangerouslySetInnerHTML={markdownify(banner.title_2)}
              />
    </div>
    <div className="bg-yellow-500/25 lg:col-start-9 lg:col-end-14  lg:row-start-1 lg:row-end-3"> <p
                className="py-2 px-7 text-right text-[.60rem] text-slate-200 lg:py-4 lg:text-3xl lg:w-72"
                dangerouslySetInnerHTML={markdownify(banner.content ?? "")}
              />
              <div className="relative left-16 lg:left-[7vw]  py-1 flex flex-col bg-orange-400 rounded-full w-8 h-8 leading-0 lg:w-28 lg:h-28 lg:py-5 ">
              <h1
                className="text-[.50rem] inline-block text-transparent bg-clip-text text-center mb-0  uppercase bg-gradient-to-b from-gray-50  via-white to-slate-600 lg:text-3xl "
                dangerouslySetInnerHTML={markdownify(banner.index_1)}
              />
              <h1
                className=" text-[.50rem] relative inline-block text-transparent bg-clip-text text-center uppercase bg-gradient-to-b from-gray-50  via-white to-slate-600 lg:text-3xl"
                dangerouslySetInnerHTML={markdownify(banner.index_2)}
              />
              </div>
    </div>
    <div className=" bg-blue-400 w-full lg:col start-2 col-end-3 row-start-3 row-end-4">
    {banner.image && (
              <div className=" ">
                <ImageFallback
                  src={banner.image}
                  className="mx-auto"
                  width="600"
                  height="420"
                  alt="banner image"
                  priority
                />
              </div>
            )}
    </div>
   <div className="w-60 h-36 bg-orange-500 lg:col-start-6 lg:col-end-9 lg:row-start-3 lg-row-end-4">

   </div>


    </div>
</div>
     {/* ==================================== Grid end  */}  
           
             
             
              
            
          
          <div className="">
            
          <video autoPlay loop>
    <source src="/images/animationsLogo.mp4" type="video/mp4" />
</video>

          </div>

          
        </div>
      </section>

      {features.map((feature, index: number) => (
        <section
          key={index}
          className={`section-sm ${index % 2 === 0 && "bg-gradient"}`}
        >
          <div className="container">
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
                <h2
                  className="mb-4"
                  dangerouslySetInnerHTML={markdownify(feature.title)}
                />
                <p
                  className="mb-8 text-lg"
                  dangerouslySetInnerHTML={markdownify(feature.content)}
                />
                <ul>
                  {feature.bulletpoints.map((bullet: string) => (
                    <li className="relative mb-4 pl-6" key={bullet}>
                      <FaCheck className={"absolute left-0 top-1.5"} />
                      <span dangerouslySetInnerHTML={markdownify(bullet)} />
                    </li>
                  ))}
                </ul>
                {feature.button.enable && (
                  <Link
                    className="btn btn-primary mt-5"
                    href={feature.button.link}
                  >
                    {feature.button.label}
                  </Link>
                )}
              </div>
            </div>
          </div>
        </section>
      ))}

      <Testimonials data={testimonial} />
      <CallToAction data={callToAction} />
    </>
  );
};

export default Home;
