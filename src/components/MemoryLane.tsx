"use client";

import Image from "next/image";

// Polaroid photo component with actual images
const PolaroidPhoto = ({
  src,
  alt,
  caption,
  rotation,
  top,
  left,
  isSpecial = false,
  isAbsolute = false,
}: {
  src: string;
  alt: string;
  caption: string;
  rotation: number;
  top: string;
  left: string;
  isSpecial?: boolean;
  isAbsolute?: boolean;
}) => {
  const styleProps: React.CSSProperties = {
    transform: `rotate(${rotation}deg)`,
    transformOrigin: "center",
  };

  if (isAbsolute) {
    styleProps.position = "absolute";
    styleProps.top = top;
    styleProps.left = left;
  }

  return (
    <div
      className="relative group cursor-pointer w-full max-w-[280px] sm:max-w-[300px] md:max-w-[320px] mx-auto"
      style={styleProps}
    >
      <div className="relative bg-white p-3 sm:p-4 shadow-lg hover:shadow-xl transition-shadow duration-300">
        {/* Photo */}
        <div className="relative w-full aspect-square overflow-hidden bg-gray-100">
          <Image
            src={src}
            alt={alt}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 280px, (max-width: 768px) 300px, 320px"
            priority={isSpecial}
          />
        </div>
        
        {/* Caption */}
        <p
          className="font-dancing-script text-sm sm:text-base md:text-lg mt-2 text-center px-2 min-h-[3.5rem] flex items-center justify-center"
          style={{ color: "#444444" }}
        >
          {caption}
        </p>
        
        {/* Special Accent (heart or star) */}
        {isSpecial && (
          <div
            className="absolute -top-2 -right-2 text-2xl sm:text-3xl z-10"
            style={{ color: "#FADDAF" }}
          >
            ♥
          </div>
        )}
      </div>
    </div>
  );
};

export default function MemoryLane() {
  return (
    <section
      className="relative min-h-screen w-full px-4 py-12 sm:px-6 md:px-8 lg:py-16 xl:py-20 overflow-hidden"
      style={{ backgroundColor: "#FFF5E1" }}
    >
      {/* Arabic Watermark Background */}
      <div className="absolute inset-0 pointer-events-none opacity-15 sm:opacity-20 overflow-hidden">
        <div
          className="absolute top-16 left-4 sm:top-20 sm:left-10 font-cairo font-bold text-4xl sm:text-6xl md:text-7xl lg:text-8xl"
          style={{ color: "#FADDAF" }}
          dir="rtl"
        >
          أجمل أيامي
        </div>
        <div
          className="absolute bottom-32 right-4 sm:bottom-40 sm:right-10 font-cairo font-bold text-3xl sm:text-5xl md:text-6xl lg:text-7xl"
          style={{ color: "#FADDAF" }}
          dir="rtl"
        >
          أحبك
        </div>
        <div
          className="hidden sm:block absolute top-1/2 left-1/4 font-cairo font-bold text-4xl sm:text-5xl md:text-6xl"
          style={{ color: "#FADDAF" }}
          dir="rtl"
        >
          حياتي
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Title */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <h2
            className="font-playfair text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal mb-4 sm:mb-6"
            style={{ color: "#E87A7A" }}
          >
            Remembering Our Good Times
          </h2>
          
          {/* Sub-title */}
          <p
            className="font-lato text-lg sm:text-xl md:text-2xl italic max-w-2xl mx-auto"
            style={{ color: "#D8AAB7", fontStyle: "italic" }}
          >
            The woman I love. The life we built. This is the real us.
          </p>
        </div>

        {/* Scattered Polaroid Photos - Stacked on mobile, grid on desktop */}
        <div className="relative min-h-[600px] mb-12">
          {/* Mobile: Stacked layout */}
          <div className="flex flex-col items-center gap-6 sm:hidden">
            <PolaroidPhoto
              src="/images/1.jpg"
              alt="The day it all began"
              caption="The day it all began. I was so nervous, and you were so perfect. I had no idea my whole life was about to change right here."
              rotation={-2}
              top="0"
              left="0"
              isSpecial={true}
              isAbsolute={false}
            />
            <PolaroidPhoto
              src="/images/2.jpg"
              alt="The day you said yes"
              caption="The day you officially said 'yes' to being mine. I still feel that same butterflies when I think about this moment"
              rotation={1}
              top="0"
              left="0"
              isSpecial={true}
              isAbsolute={false}
            />
            <PolaroidPhoto
              src="/images/3.jpg"
              alt="The moment I realized home"
              caption="This was the day. The moment I realized 'home' wasn't a place or a building. It was this. It was you. It's always been you."
              rotation={-1}
              top="0"
              left="0"
              isSpecial={true}
              isAbsolute={false}
            />
            <PolaroidPhoto
              src="/images/4.jpg"
              alt="Art gallery memory"
              caption="I tried to pay attention to the art, but I was too busy memorizing the way you looked at them. You were (and are) my favorite view."
              rotation={2}
              top="0"
              left="0"
              isAbsolute={false}
            />
            <PolaroidPhoto
              src="/images/5.jpg"
              alt="Perfect day"
              caption="If I get to choose one day to live on a loop for eternity... it's this one. Perfect."
              rotation={-1}
              top="0"
              left="0"
              isSpecial={true}
              isAbsolute={false}
            />
            <PolaroidPhoto
              src="/images/6.jpg"
              alt="Our bubble"
              caption="The whole world just disappeared. No stress, no noise. Just us, in our own little bubble, and absolutely nothing else mattered"
              rotation={1}
              top="0"
              left="0"
              isSpecial={true}
              isAbsolute={false}
            />
          </div>

          {/* Desktop: Scattered layout using grid with staggered positioning */}
          <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 lg:gap-x-12 lg:gap-y-16 auto-rows-max">
            {/* Photo 1 - Row 1, Col 1 */}
            <div className="flex justify-start">
              <PolaroidPhoto
                src="/images/1.jpg"
                alt="The day it all began"
                caption="The day it all began. I was so nervous, and you were so perfect. I had no idea my whole life was about to change right here."
                rotation={-3}
                top="0"
                left="0"
                isSpecial={true}
                isAbsolute={false}
              />
            </div>
            
            {/* Photo 2 - Row 1, Col 2 (staggered down) */}
            <div className="flex justify-end pt-16">
              <PolaroidPhoto
                src="/images/2.jpg"
                alt="The day you said yes"
                caption="The day you officially said 'yes' to being mine. I still feel that same butterflies when I think about this moment"
                rotation={2}
                top="0"
                left="0"
                isSpecial={true}
                isAbsolute={false}
              />
            </div>
            
            {/* Photo 3 - Row 2, Col 1 (or Col 3 on lg) */}
            <div className="flex justify-start pt-8 lg:col-start-3 lg:row-start-1 lg:pt-20">
              <PolaroidPhoto
                src="/images/3.jpg"
                alt="The moment I realized home"
                caption="This was the day. The moment I realized 'home' wasn't a place or a building. It was this. It was you. It's always been you."
                rotation={-2}
                top="0"
                left="0"
                isSpecial={true}
                isAbsolute={false}
              />
            </div>
            
            {/* Photo 4 - Row 2, Col 2 */}
            <div className="flex justify-end pt-12 lg:col-start-1 lg:row-start-2 lg:pt-8">
              <PolaroidPhoto
                src="/images/4.jpg"
                alt="Art gallery memory"
                caption="I tried to pay attention to the art, but I was too busy memorizing the way you looked at them. You were (and are) my favorite view."
                rotation={4}
                top="0"
                left="0"
                isAbsolute={false}
              />
            </div>
            
            {/* Photo 5 - Row 3, Col 1 */}
            <div className="flex justify-start pt-16">
              <PolaroidPhoto
                src="/images/5.jpg"
                alt="Perfect day"
                caption="If I get to choose one day to live on a loop for eternity... it's this one. Perfect."
                rotation={-1}
                top="0"
                left="0"
                isSpecial={true}
                isAbsolute={false}
              />
            </div>
            
            {/* Photo 6 - Row 3, Col 2 (or Col 3 on lg) */}
            <div className="flex justify-end pt-8 lg:col-start-2 lg:row-start-3 lg:pt-12">
              <PolaroidPhoto
                src="/images/6.jpg"
                alt="Our bubble"
                caption="The whole world just disappeared. No stress, no noise. Just us, in our own little bubble, and absolutely nothing else mattered"
                rotation={3}
                top="0"
                left="0"
                isSpecial={true}
                isAbsolute={false}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

