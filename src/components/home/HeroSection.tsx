import React from 'react';

const HeroSection = () => {
  return (
    <section
      className="
        relative
        flex
        items-start
        lg:items-center
        justify-center
        min-h-[600px]
        px-6 sm:px-12 md:px-16 
        pt-8 sm:pt-12 md:pt-4
        mt-12 sm:mt-8 md:mt-8
        overflow-hidden
      "
    >
      {/* LCP Content */}
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        {/* Heading */}
        <h1
          className="
             
            text-4xl sm:text-5xl lg:text-6xl
            font-normal
            leading-tight
            text-white
          "
        >
          Embark on Your
          <br />
          Journey to Success
        </h1>

        {/* LCP paragraph — MUST be plain, fast, and paintable */}
        <p
          className="
            mt-4
            text-[#809393]
            text-base sm:text-lg lg:text-xl
            leading-relaxed
            max-w-[880px]
            mx-auto
            mb-8
          "
        >
          Achieve financial independence with AssetArc. Our expert guidance
          and innovative tools help you navigate investing and reach your
          long-term goals. Whether you're a beginner or experienced investor,
          stay ahead and attain.
        </p>

        {/* Subheading */}
        <h2
          className="
            text-4xl sm:text-5xl lg:text-6xl
            font-normal
            mb-8
          "
        >
          <span className="gradient-text inline-block">
            Financial Freedom
          </span>
        </h2>

        {/* CTA */}
        <div className="lg:mb-20 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="/services"
            aria-label="Learn more about our financial services"
            className="
              inline-flex
              items-center
              gap-3 sm:gap-4
              px-4 sm:px-6
              py-3 sm:py-4
              border-2 border-white/20
              rounded-full
              text-white
              hover:border-stockstrail-green-light
              hover:text-stockstrail-green-light
              transition-colors
              duration-300
              font-medium
            "
          >
            <div className="w-2 h-2 sm:w-3 sm:h-3 bg-stockstrail-green-accent rounded-full" />
            Learn More About Our Services
          </a>
          <a
            href="/check-risk-profile"
            aria-label="Check your risk profile"
            className="
              inline-flex
              items-center
              gap-3 sm:gap-4
              px-4 sm:px-6
              py-3 sm:py-4
              bg-transparent
              border-2
              border-white/20
              rounded-full
              text-white
              hover:border-stockstrail-green-light
              hover:text-stockstrail-green-light
              transition-all
              duration-300
              font-medium
              text-sm sm:text-base
            "
          >
            <div className="w-2 h-2 sm:w-3 sm:h-3 bg-stockstrail-green-accent rounded-full" />
            Check Your Risk Profile
          </a>
        </div>
      </div>

      {/* Background — NOT affecting LCP */}
      <div
        className="absolute inset-0 -z-10 pointer-events-none hidden lg:block"
        aria-hidden="true"
      >
        <div
          className="
            absolute
            w-[800px]
            h-[800px]
            rounded-full
            opacity-40
            left-1/2
            top-20
            -translate-x-1/2
          "
          style={{
            background:
              'radial-gradient(circle, rgba(1,65,64,0.8) 0%, transparent 70%)',
          }}
        />
      </div>
    </section>
  );
};

export default HeroSection;
