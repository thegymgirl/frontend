"use client";

import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import Image from "next/image";
import { useEffect } from "react";

const GALLERY_IMAGES = [
  {
    src: "/images/homepage/blurred-orb/4.jpg",
    alt: "Gallery image 1",
  },
  {
    src: "/images/homepage/blurred-orb/5.jpg",
    alt: "Gallery image 2",
  },
  {
    src: "/images/homepage/blurred-orb/6.jpg",
    alt: "Gallery image 3",
  },
  
  // {
  //   src: "/images/homepage/blurred-orb/3.jpg",
  //   alt: "Gallery image 4",
  // },
];

export default function ImageGallerySection() {
  useEffect(() => {
    Fancybox.bind('[data-fancybox="gallery"]', {
      Toolbar: {
        display: {
          left: [],
          middle: [],
          right: ["close"],
        },
      },
    });

    return () => {
      Fancybox.unbind('[data-fancybox="gallery"]');
      Fancybox.close();
    };
  }, []);

  return (
    <div className=" bg-black">
      <div className="relative z-20 mx-auto w-full max-w-[1649px] px-4 pb-10 pt-6 md:px-6 md:pb-14 md:pt-8">
      {/* <h3 className="text-center font-[family-name:seasonMix] text-[1.5rem] leading-none tracking-[-0.84px] text-[#ffffff] md:text-[1.75rem] pb-9">
        Gallery
      </h3> */}
      <div className="grid grid-cols-3 gap-3 pb-2 md:gap-4 scroll-smooth">
        {GALLERY_IMAGES.map((image) => (
          <a
            key={image.src}
            href={image.src}
            data-fancybox="gallery"
            data-caption={image.alt}
            className="relative block aspect-[3/4] w-full overflow-hidden rounded-2xl"
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(max-width: 640px) 85vw, (max-width: 768px) 48vw, 32vw"
              className="object-cover"
            />
          </a>
        ))}
      </div>
    </div>
    </div>
    
  );
}
