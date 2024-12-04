"use client";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Keyboard, Mousewheel, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { gql } from "@apollo/client";
import client from "apollo-client";

const POSTS_QUERY = gql`
  query {
    posts {
      nodes {
        featuredImage {
          node {
            link
          }
        }
        title
      }
    }
  }
`;

interface Post {
  featuredImage?: {
    node?: {
      link: string;
    };
  };
  title: string;
}

const SwiperSection = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  // Fetch data with Apollo client
  useEffect(() => {
    async function fetchData() {
      try {
        const { data } = await client.query({
          query: POSTS_QUERY,
        });
        // Limit posts to the first 4
        setPosts(data?.posts?.nodes?.slice(0, 4) || []);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <>
      <section className="max-w-[1480px] mx-auto bg-gray-100 flex items-center justify-center">
        <div className="w-full h-auto">
          <Swiper
            modules={[Navigation, Pagination, Keyboard, Mousewheel, Autoplay]}
         
            pagination={{
              clickable: true,
            }}
            keyboard={{ enabled: true }}
            mousewheel={{ forceToAxis: true }}
            loop={true}
            cssMode
            className="w-full h-auto"
          >
            {posts.map((post, index) => (
              <SwiperSlide
                key={index}
                className="flex justify-center items-center text-lg bg-white"
              >
                <div className="flex">
                  <div className="w-1/3">
                    <img
                      src={post.featuredImage?.node?.link || "placeholder.png"}
                      alt={post.title}
                    />
                  </div>
                  <div className="w-2/3 grid p-2">
                    <div>
                      <p className="w-[38%] text-[11px] bg-[#000000] h-auto text-white font-bold text-center rounded-[20px] ">
                        Latest Stories
                      </p>
                    </div>
                    <p className="text-[14px] font-bold uppercase text-black">{post.title || "Untitled"}</p>
                    <p className="text-[13px] underline uppercase text-black">Read more</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Custom CSS for pagination */}
      <style>
        {`
         
          .swiper-pagination {
            bottom: -20px; 
          }

          .swiper-pagination-bullet {
            background: #000; 
            opacity: 0.6;
          }

          .swiper-pagination-bullet-active {
            background: #ff5722;
            opacity: 1;
          }
        `}
      </style>
    </>
  );
};

export default SwiperSection;