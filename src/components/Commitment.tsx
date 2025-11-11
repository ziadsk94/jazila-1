export default function Commitment() {
  return (
    <section
      className="min-h-screen w-full px-4 py-12 sm:px-6 md:px-8 lg:py-16 xl:py-20"
      style={{ backgroundColor: "#F1CADD" }}
    >
      <div className="max-w-4xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <h2
            className="font-playfair text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal"
            style={{ color: "#E87A7A" }}
          >
            My Commitment to Us
          </h2>
        </div>

        {/* Three Commitments */}
        <div className="space-y-12 sm:space-y-16 md:space-y-20 mb-16 sm:mb-20 md:mb-24">
          {/* Commitment 1 */}
          <div className="text-center space-y-4 sm:space-y-6">
            <h3
              className="font-playfair text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal"
              style={{ color: "#D8AAB7" }}
            >
              My Commitment: To Own My Emotions
            </h3>
            <p
              className="font-lato text-base sm:text-lg md:text-xl leading-relaxed max-w-3xl mx-auto px-4"
              style={{ color: "#444444" }}
            >
              I know my biggest failure was letting my emotions control me. I let my fear or anger build up, and instead of talking to you, I ran. My commitment is to do the hard work. To learn to face my feelings, to control them, and to communicate with you, even when it's hard. Your heart will never again be a casualty of my bad day.
            </p>
          </div>

          {/* Commitment 2 */}
          <div className="text-center space-y-4 sm:space-y-6">
            <h3
              className="font-playfair text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal"
              style={{ color: "#D8AAB7" }}
            >
              My Commitment: To Choose 'Us' Over 'Me'
            </h3>
            <p
              className="font-lato text-base sm:text-lg md:text-xl leading-relaxed max-w-3xl mx-auto px-4"
              style={{ color: "#444444" }}
            >
              My decision to leave was selfish. I thought only about myself in that moment, and in doing so, I shattered us. My commitment is to be a partner. That means your feelings are my priority. That means we face problems together. I will not put my own comfort ahead of your heart again.
            </p>
          </div>

          {/* Commitment 3 */}
          <div className="text-center space-y-4 sm:space-y-6">
            <h3
              className="font-playfair text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal"
              style={{ color: "#D8AAB7" }}
            >
              My Commitment: To Stay
            </h3>
            <p
              className="font-lato text-base sm:text-lg md:text-xl leading-relaxed max-w-3xl mx-auto px-4"
              style={{ color: "#444444" }}
            >
              This is the most important one. I left. It was a choice, and it was the wrong one. My commitment is to stay. To stand by your side when things are hard. To show up, every single day, and prove with my actions that I am not a flight risk. I am here to build a future that you can feel safe in. I am here to be your home, just like you are mine.
            </p>
          </div>
        </div>

        {/* Final Closing */}
        <div className="text-center space-y-4 sm:space-y-6 pt-8 sm:pt-12">
          <div
            className="font-lato text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl mx-auto px-4"
            style={{ color: "#D8AAB7", fontStyle: "italic" }}
          >
            <p className="mb-4 sm:mb-6">
              More than anything in the world, I hope you can feel how sorry I am today and that this is the first step toward healing.
            </p>
            <p className="mb-4 sm:mb-6">
              I'm ready to talk whenever you are.
            </p>
            <p>
              I'm here, and I'm not going anywhere.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

