"use client";

import { Anton } from "next/font/google";
import { gql, useQuery } from "@apollo/client";
import React from "react";

const anton = Anton({ weight: "400", subsets: ["latin"] });

const POSTS_QUERY_SEC = gql`
  query {
    page(id: "cG9zdDoxNg==") {
      patnerssection {
        mainheading
        firstsubtitlepatner
        imagefirst {
          node {
            link
          }
        }
        image2 {
          node {
            link
          }
        }
        image3 {
          node {
            link
          }
        }
        image4 {
          node {
            link
          }
        }
        image5 {
          node {
            link
          }
        }
        image6 {
          node {
            link
          }
        }
        image7 {
          node {
            link
          }
        }
        image8 {
          node {
            link
          }
        }
        textninthbox
        linktextninthbox
      }
      homesixthsection {
        heading
        paragraph
        author
        designations
        rightimage {
          node {
            link
          }
        }
      }
    }
  }
`;

export default function Partner() {
  const { data, loading, error } = useQuery(POSTS_QUERY_SEC);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading data: {error.message}</p>;

  const { patnerssection, homesixthsection } = data.page;

  return (
    <div className="container mx-auto max-w-[1280px]" > 
         <section className="md:pt-[150px] pt-[50px] border border-x-0 border-y-stroke py-11 dark:border-y-strokedark dark:bg-black">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <h5 className="md:text-[64px] text-[30px] text-black text-center md:pb-[30px] font-bold pb-2">{data.page.patnerssection.mainheading}</h5>
          <h5 className="text-[15px] text-black text-center">{data.page.patnerssection.firstsubtitlepatner}</h5>
          <div className=" md:hidden grid grid-cols-2 sm:flex sm:flex-wrap justify-center gap-2 md:w-[63%] mx-auto pt-[29px]">
            <img src={data.page.patnerssection.imagefirst?.node?.link} className="w-[150px] h-[150px] p-[33px] border border-[#e3e2e2] object-contain mx-auto" />
            <img src={data.page.patnerssection.image2?.node?.link} className="w-[150px] h-[150px] p-[33px] border border-[#e3e2e2] object-contain mx-auto" />
            <img src={data.page.patnerssection.image3?.node?.link} className="w-[150px] h-[150px] p-[33px] border border-[#e3e2e2] object-contain mx-auto" />
            <img src={data.page.patnerssection.image4?.node?.link} className="w-[150px] h-[150px] p-[33px] border border-[#e3e2e2] object-contain mx-auto" />
            <img src={data.page.patnerssection.image5?.node?.link} className="w-[150px] h-[150px] p-[33px] border border-[#e3e2e2] object-contain mx-auto" />

            <img src={data.page.patnerssection.image6?.node?.link} className="w-[150px] h-[150px] p-[33px] border border-[#e3e2e2] object-contain mx-auto" />
            <img src={data.page.patnerssection.image7?.node?.link} className="w-[150px] h-[150px] p-[33px] border border-[#e3e2e2] object-contain mx-auto" />
            <img src={data.page.patnerssection.image8?.node?.link} className="w-[150px] h-[150px] p-[33px] border border-[#e3e2e2] object-contain mx-auto" />

            <div className=" relative bg-black text-white p-[27px] w-[150px] h-[150px] flex items-center justify-center mx-auto">
              <div className="text-left absolute bottom-[15px] w-[89%]">
                <h5 className="text-[12px] font-bold pb-2">{data.page.patnerssection.textninthbox}</h5>
                <h3 className="text-[10px] font-bold">{data.page.patnerssection.linktextninthbox}</h3>
              </div>
            </div>

          </div>

          {/* desktop div start */}
          <div className="hidden md:block py-10 ">
            <div className="flex justify-center mx-auto w-fit mb-3 gap-3 md:w-10/12">
              <div className="max-w-[257px] w-[100%] h-[240px] p-[33px] border border-[#e3e2e2] flex justify-center items-center hover:border-[#A1CF5F33] ">
              <img  src={data.page.patnerssection.imagefirst?.node?.link} className="w-[80px]"  />
              </div>
              <div className="max-w-[257px] w-[100%] h-[240px] p-[33px] border border-[#e3e2e2] flex justify-center items-center hover:border-[#A1CF5F33]  ">
              <img  src={data.page.patnerssection.image2?.node?.link}  className="w-[80px]" />
              </div>
              <div className="max-w-[257px] w-[100%] h-[240px] p-[33px] border border-[#e3e2e2] flex justify-center items-center hover:border-[#A1CF5F33] ">
              <img  src={data.page.patnerssection.image3?.node?.link}  className="w-[80px]" />
              </div>
              <div className="max-w-[257px] w-[100%]  h-[240px] p-[33px] border border-[#e3e2e2] flex justify-center items-center hover:border-[#A1CF5F33] ">
              <img  src={data.page.patnerssection.image4?.node?.link} className="w-[80px]"/>
              </div>
              <div className="max-w-[257px] w-[100%]  h-[240px] p-[33px] border border-[#e3e2e2] flex justify-center items-center hover:border-[#A1CF5F33] ">
              <img src={data.page.patnerssection.image5?.node?.link}  className="w-[80px]" />
              </div>
            </div>

            <div className="flex justify-center items-center mx-auto w-fit mb-3 gap-3 md:w-8/12">
            <div className="max-w-[257px] w-[100%]  h-[240px] p-[33px] border border-[#e3e2e2] flex justify-center items-center hover:border-[#A1CF5F33] ">
                <img  src={data.page.patnerssection.image6?.node?.link}  className="w-[80px]"  />
                </div>
                <div className="max-w-[257px] w-[100%]  h-[240px] p-[33px] border border-[#e3e2e2] flex justify-center items-center hover:border-[#A1CF5F33] ">
                <img  src={data.page.patnerssection.image7?.node?.link}  className="w-[80px]"  />
                </div>
                <div className="max-w-[257px] w-[100%]  h-[240px] p-[33px] border border-[#e3e2e2] flex justify-center items-center hover:border-[#A1CF5F33] ">
                <img  src={data.page.patnerssection.image8?.node?.link}  className="w-[80px]"   />
                </div>
             
              <div className="relative bg-black text-white p-[27px] w-[100%] max-w-[257px] h-[240px] flex items-center justify-center hover:border-[#A1CF5F33]  ">
                <div className="text-left absolute bottom-[15px] w-[89%]">
                  <h5 className="text-[20px] font-bold pb-2">{data.page.patnerssection.textninthbox}</h5>
                  <a className="text-[16px] underline" href="#">{data.page.patnerssection.linktextninthbox}</a>
                </div>
              </div>
            </div>
          </div>
          {/* Desktop div end */}
          {/* / */}

        

        </div>
      </section>
      </div>
  );
}
