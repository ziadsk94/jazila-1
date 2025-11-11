"use client";

import { useState } from "react";

export default function Letter() {
  const [isRevealed, setIsRevealed] = useState(false);

  return (
    <section
      className="min-h-screen w-full px-4 py-12 sm:px-6 md:px-8 lg:py-16 xl:py-20"
      style={{ backgroundColor: "#F1CADD" }}
    >
      <div className="max-w-[700px] mx-auto">
        {/* Section Title */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <h2
            className="font-playfair text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal mb-4 sm:mb-6"
            style={{ color: "#E87A7A" }}
          >
            My Letter to You, Jazila
          </h2>
          
          {/* Arabic Heart with Slider Reveal */}
          <div className="flex flex-col items-center mt-4 sm:mt-6">
            <div
              className="relative cursor-pointer w-full max-w-md"
              onMouseEnter={() => setIsRevealed(true)}
              onMouseLeave={() => setIsRevealed(false)}
              onClick={() => setIsRevealed(!isRevealed)}
            >
              <div className="relative h-16 sm:h-20 md:h-24 overflow-hidden">
                {/* Arabic Text */}
                <div
                  className={`absolute inset-0 flex items-center justify-center font-cairo text-2xl sm:text-3xl md:text-4xl transition-all duration-500 ease-in-out ${
                    isRevealed 
                      ? "-translate-y-full opacity-0" 
                      : "translate-y-0 opacity-100"
                  }`}
                  style={{ color: "#FADDAF" }}
                  dir="rtl"
                >
                  أنا آسف يا حياتي
                </div>
                
                {/* English Translation */}
                <div
                  className={`absolute inset-0 flex items-center justify-center font-lato text-xl sm:text-2xl md:text-3xl font-light italic transition-all duration-500 ease-in-out ${
                    isRevealed 
                      ? "translate-y-0 opacity-100" 
                      : "translate-y-full opacity-0"
                  }`}
                  style={{ color: "#FADDAF" }}
                >
                  I am sorry, my life
                </div>
              </div>
            </div>
            
            {/* Subtle hint */}
            <p 
              className="text-xs sm:text-sm mt-3 opacity-50 transition-opacity duration-300" 
              style={{ color: "#D8AAB7" }}
            >
              {isRevealed ? "Tap or hover to see Arabic" : "Tap or hover to see translation"}
            </p>
          </div>
        </div>

        {/* Letter Body */}
        <div
          className="font-lato text-base sm:text-lg md:text-xl leading-[1.8] sm:leading-[1.9] space-y-6 sm:space-y-8 md:space-y-10"
          style={{ color: "#444444" }}
        >
          {/* Opening Paragraph */}
          <div className="space-y-4 sm:space-y-5">
            <p>
              Jazila,
            </p>
            <p>
              I have been sitting here trying to find the words to explain myself, but the only ones that matter are these: I am so, so sorry. What I did was wrong. It was selfish. And I regret it more than anything in my life.
            </p>
            <p>
              The last thing I ever want to be is the source of your pain. And right now, I know I am. I built this because I can't stand the thought of my biggest mistake being the end of our story.
            </p>
          </div>

          {/* I Was Selfish */}
          <div className="space-y-4 sm:space-y-5">
            <h3
              className="font-playfair text-2xl sm:text-3xl md:text-4xl font-normal mb-3 sm:mb-4"
              style={{ color: "#D8AAB7" }}
            >
              I Was Selfish.
            </h3>
            <div className="space-y-4 sm:space-y-5">
              <p>
                I'm not going to make any excuses. I was selfish. I got overwhelmed by my own emotions, and instead of stopping and thinking, instead of talking to you, I made a decision for both of us.
              </p>
              <p>
                I didn't control my emotions. I let them control me. And in that moment of fear, or anger, or whatever I was feeling, I thought only about myself. I thought about my escape, not your heart. I broke it off, and I left. That was a selfish, cowardly, and impulsive act, and you deserved none of it.
              </p>
            </div>
          </div>

          {/* I Know I Made You Feel... */}
          <div className="space-y-4 sm:space-y-5">
            <h3
              className="font-playfair text-2xl sm:text-3xl md:text-4xl font-normal mb-3 sm:mb-4"
              style={{ color: "#D8AAB7" }}
            >
              I Know I Made You Feel...
            </h3>
            <div className="space-y-4 sm:space-y-5">
              <p>
                I can't stop thinking about how you must have felt. In one second, I made you feel blindsided, abandoned, and hurt. I made you feel like us, like everything we built, meant nothing.
              </p>
              <p>
                I made you feel like you weren't worth fighting for. And that is the worst part of all, because you are worth everything. I know I shattered your trust. I know I made you question everything. I took your safety and your partner, and I just... walked away. I am so sorry for the pain I put you through.
              </p>
            </div>
          </div>

          {/* My Promise */}
          <div className="space-y-4 sm:space-y-5">
            <h3
              className="font-playfair text-2xl sm:text-3xl md:text-4xl font-normal mb-3 sm:mb-4"
              style={{ color: "#D8AAB7" }}
            >
              My Promise
            </h3>
            <div className="space-y-4 sm:space-y-5">
              <p>
                I know 'sorry' is just a word. It doesn't fix what I broke. I know I have no right to ask for anything. But I need you to know that the second I left, I knew I had made the worst mistake of my life.
              </p>
              <p>
                You are the most important person in my life, Jazila. And I am going to spend every single day, if you'll let me, earning back your trust and proving that I can be the man you deserve. The man who stays.
              </p>
            </div>
          </div>

          {/* Separator Line */}
          <div className="py-8 sm:py-10 md:py-12 flex justify-center">
            <div
              className="h-[2px] w-32 sm:w-40"
              style={{ backgroundColor: "#FADDAF" }}
            ></div>
          </div>

          {/* Closing Paragraph */}
          <div className="space-y-4 sm:space-y-5">
            <p>
              I know I have a lot of work to do. I love you. I have always loved you, even when I was acting at my worst.
            </p>
            <p>
              I'm not asking you to forget. I'm just asking for a chance to talk, whenever you're ready.
            </p>
          </div>

          {/* Signature */}
          <div className="pt-8 sm:pt-10 md:pt-12">
            <p
              className="font-dancing-script text-2xl sm:text-3xl md:text-4xl text-right leading-relaxed"
              style={{ color: "#E87A7A" }}
            >
              Yours, with all my love and deepest regrets,<br />
              <span className="text-3xl sm:text-4xl md:text-5xl">Ziad</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

