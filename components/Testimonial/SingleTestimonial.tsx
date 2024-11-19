import { Testimonial } from "@/types/testimonial";
import Image from "next/image";

const SingleTestimonial = ({ review }: { review: Testimonial }) => {
  const { name, designation, image, content } = review;
  return (
    <figure className="max-w-screen-md mx-auto">
    <div className="flex mx-auto justify-center"> <svg width="49" height="68" viewBox="0 0 49 68" fill="none" xmlns="http://www.w3.org/2000/svg">
         <path d="M27.8447 48.4616C35.4569 47.1326 41.1628 43.5686 45.1734 37.4192C50.3845 29.4184 50.2592 18.7133 44.8831 10.7654C39.3686 2.61253 29.441 -1.49366 20.028 0.496619C10.3445 2.54641 2.71904 10.0116 1.09632 19.5795C-0.565964 29.3457 1.7032 38.5301 6.38004 47.0995C12.3959 58.1154 21.9937 64.5557 33.8144 67.9676C34.2102 68.08 34.6983 67.8751 35.1403 67.8156C34.9952 67.3395 34.9754 66.7576 34.6851 66.4072C31.6178 62.7837 29.2233 58.8031 28.3262 54.0886C27.9832 52.2769 27.9964 50.399 27.8381 48.4682L27.8447 48.4616ZM31.5387 65.6269C30.2787 65.1376 29.0056 64.6814 27.7589 64.1524C10.9249 57.0443 0.212414 38.9533 2.37603 21.3053C3.48422 12.2664 10.2785 4.58297 19.1572 2.34143C28.2668 0.033764 37.7327 3.48534 43.1879 11.1092C48.5771 18.6273 48.8542 28.9357 43.8211 36.5927C40.1206 42.2263 34.9292 45.6316 28.2734 46.6895C27.0069 46.8879 26.3869 47.3838 26.4528 48.6864C26.5452 50.4982 26.4528 52.3298 26.7167 54.1084C27.3368 58.2808 29.3421 61.8844 31.5387 65.6203V65.6269Z" fill="#A1CF5F"/>
         </svg>
         <svg width="49" height="68" viewBox="0 0 49 68" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M27.8447 48.4616C35.4569 47.1326 41.1628 43.5686 45.1734 37.4192C50.3845 29.4184 50.2592 18.7133 44.8831 10.7654C39.3686 2.61253 29.441 -1.49366 20.028 0.496619C10.3445 2.54641 2.71904 10.0116 1.09632 19.5795C-0.565964 29.3457 1.7032 38.5301 6.38004 47.0995C12.3959 58.1154 21.9937 64.5557 33.8144 67.9676C34.2102 68.08 34.6983 67.8751 35.1403 67.8156C34.9952 67.3395 34.9754 66.7576 34.6851 66.4072C31.6178 62.7837 29.2233 58.8031 28.3262 54.0886C27.9832 52.2769 27.9964 50.399 27.8381 48.4682L27.8447 48.4616ZM31.5387 65.6269C30.2787 65.1376 29.0056 64.6814 27.7589 64.1524C10.9249 57.0443 0.212414 38.9533 2.37603 21.3053C3.48422 12.2664 10.2785 4.58297 19.1572 2.34143C28.2668 0.033764 37.7327 3.48534 43.1879 11.1092C48.5771 18.6273 48.8542 28.9357 43.8211 36.5927C40.1206 42.2263 34.9292 45.6316 28.2734 46.6895C27.0069 46.8879 26.3869 47.3838 26.4528 48.6864C26.5452 50.4982 26.4528 52.3298 26.7167 54.1084C27.3368 58.2808 29.3421 61.8844 31.5387 65.6203V65.6269Z" fill="#A1CF5F"/>
</svg></div>

         <blockquote>
             <p className="text-2xl font-medium text-gray-900 dark:text-white text-center p-[10px]">Leadership Circle has affected my understanding of my journey. It didn’t bring a dramatic change because I was already on the road, but it helped me understand the journey that I was on. </p>
         </blockquote>
         <figcaption className="flex items-center justify-center mt-6 space-x-3">
             <div className=" items-center ">
                 <div className="md:pr-3  text-gray-900 font-extrabold dark:text-white  text-center md:text-left"> Mona D.</div>
                 <div className=" text-sm font-light text-gray-500 dark:text-gray-400  text-center md:text-left">(Education Sphere, Egypt)</div>
             </div>
         </figcaption>
     </figure>
  );
};

export default SingleTestimonial;