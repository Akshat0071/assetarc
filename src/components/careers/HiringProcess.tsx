'use client';

const STEPS = [
  {
    num: 1,
    title: 'Apply Online',
    desc: 'Submit your resume and tell us why you want to join AssetArc.',
  },
  {
    num: 2,
    title: 'Screening Call',
    desc: 'A 15-minute introductory call with our team to understand your aspirations.',
  },
  {
    num: 3,
    title: 'Team Interview',
    desc: 'Meet the team leads and discuss your experience, skills, and culture fit.',
  },
  {
    num: 4,
    title: 'Task Round',
    desc: 'A real-world case study or assignment relevant to the role you applied for.',
  },
  {
    num: 5,
    title: 'Offer Letter',
    desc: 'Welcome to AssetArc! You receive your offer and onboarding begins.',
  },
];

export default function HiringProcess() {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="font-product-sans text-4xl sm:text-5xl font-normal uppercase mb-4">
            <span className="text-white">How We </span>
            <span className="gradient-text">Hire</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto font-work-sans">
            Transparent, respectful, and straightforward — our hiring process is designed
            to bring out the best in you.
          </p>
        </div>

        {/* Desktop horizontal timeline */}
        <div className="hidden lg:block">
          {/* Connecting line */}
          <div className="relative flex items-start justify-between max-w-5xl mx-auto">
            {/* Line behind circles */}
            <div className="absolute top-5 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-AssetArc-green-light/10 via-AssetArc-green-light/40 to-AssetArc-green-light/10" />

            {STEPS.map((step) => (
              <div key={step.num} className="relative flex flex-col items-center text-center w-1/5 px-2">
                {/* Number circle */}
                <div className="w-10 h-10 rounded-full bg-AssetArc-green-light text-AssetArc-bg flex items-center justify-center font-product-sans font-bold text-lg z-10 shadow-[0_0_20px_rgba(0,255,151,0.3)]">
                  {step.num}
                </div>
                {/* Card */}
                <div className="mt-6 bg-white/5 backdrop-blur border border-white/10 rounded-xl p-5 hover:border-AssetArc-green-light/40 transition-colors duration-300 w-full">
                  <h3 className="font-product-sans text-white text-base font-semibold mb-2">
                    {step.title}
                  </h3>
                  <p className="text-white/60 text-sm font-work-sans leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile vertical timeline */}
        <div className="lg:hidden space-y-0">
          {STEPS.map((step, i) => (
            <div key={step.num} className="flex gap-4">
              {/* Timeline line + circle */}
              <div className="flex flex-col items-center">
                <div className="w-9 h-9 rounded-full bg-AssetArc-green-light text-AssetArc-bg flex items-center justify-center font-product-sans font-bold text-sm shrink-0 shadow-[0_0_15px_rgba(0,255,151,0.25)]">
                  {step.num}
                </div>
                {i < STEPS.length - 1 && (
                  <div className="w-0.5 flex-1 bg-gradient-to-b from-AssetArc-green-light/40 to-AssetArc-green-light/10 my-1" />
                )}
              </div>
              {/* Card */}
              <div className="bg-white/5 backdrop-blur border border-white/10 rounded-xl p-5 mb-4 flex-1 hover:border-AssetArc-green-light/40 transition-colors duration-300">
                <h3 className="font-product-sans text-white text-base font-semibold mb-1">
                  {step.title}
                </h3>
                <p className="text-white/60 text-sm font-work-sans leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
