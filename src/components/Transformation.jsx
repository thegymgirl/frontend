import Image from "next/image";
const TRANSFORMATION_IMAGES = [
   {
      src: "/images/homepage/blurred-orb/50.jpg",
      alt: "Before transformation",
    },
    {
      src: "/images/homepage/blurred-orb/three.jpg",
      alt: "After transformation",
    },
    {
      src: "/images/homepage/blurred-orb/30.jpg",
      alt: "After transformation",
    },
];
const Transformation = () => {
  return (
    <div className="bg-black">
      <div className="mx-auto w-full max-w-[1689px]  px-6 pb-16 md:pb-24 sani">
        <div className="flex w-full flex-col items-center gap-3 md:gap-4 pt-[50px] max-w-full">
          <h3 className="text-center font-[family-name:seasonMix] text-[1.5rem] leading-none tracking-[-0.84px] text-[#ffffff] md:text-[1.75rem] pb-9">
            Lost 50 lbs of fat, built muscle, and competed nationally—all natural
          </h3>
          <div className="grid w-full grid-cols-1 md:grid-cols-3 gap-2 md:gap-3">
            {TRANSFORMATION_IMAGES.map((image) => (
              <div
                key={image.src}
                className="relative aspect-[3/4] overflow-hidden rounded-[18px] md:rounded-[22px]"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  loading="lazy"
                  sizes="(max-width: 768px) 45vw, 320px"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transformation;
