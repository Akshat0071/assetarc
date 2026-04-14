'use client';

import React, { useState, useEffect } from 'react';

type Review = {
    id: number;
    created_at: string;
    name: string;
    company: string | null;
    position: string;
    comment: string;
    rating: number;
};

const TestimonialsSectionComponent = () => {
    const [currentTestimonial, setCurrentTestimonial] = useState(0);
    const [testimonials] = useState<Review[]>([
        {
            id: 1,
            created_at: new Date().toISOString(),
            name: "Olivia Carter",
            company: "Financial Services",
            position: "Financial Analyst",
            comment: "One of the best investment firms in Sydney with highly knowledgeable, professional and friendly staff.",
            rating: 4,
        },
        {
            id: 2,
            created_at: new Date().toISOString(),
            name: "Sarah Johnson",
            company: "Investment Group",
            position: "Long-term Investor",
            comment: "AssetArc helped me build a diversified portfolio that has consistently outperformed my expectations. Their expertise in mutual funds is unmatched.",
            rating: 4.5,
        },
        {
            id: 3,
            created_at: new Date().toISOString(),
            name: "Michael Chen",
            company: "Tech Solutions",
            position: "Business Owner",
            comment: "The team's personalized approach and transparent communication made me feel confident about my financial decisions. Highly recommended!",
            rating: 5,
        },
        {
            id: 4,
            created_at: new Date().toISOString(),
            name: "Priya Sharma",
            company: "Software Corp",
            position: "Software Engineer",
            comment: "From SIP planning to tax optimization, AssetArc covers all aspects of financial planning. Their calculators are incredibly helpful.",
            rating: 4.5,
        },
        {
            id: 5,
            created_at: new Date().toISOString(),
            name: "Rajesh Kumar",
            company: "Retirement Planning",
            position: "Retired Professional",
            comment: "The fixed deposit rates offered through AssetArc are competitive, and the process is completely hassle-free. Great service!",
            rating: 4,
        },
    ]);
    const [dragStartX, setDragStartX] = useState<number | null>(null);
    const [dragDelta, setDragDelta] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const dragging = React.useRef(false);
    const lastWheelTs = React.useRef(0);
    const sectionRef = React.useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            { threshold: 0.3 }
        );

        const currentRef = sectionRef.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
            observer.disconnect();
        };
    }, []);

    useEffect(() => {
        // Only run interval when section is visible
        if (testimonials.length === 0 || !isVisible) return;

        const intervalId = setInterval(() => {
            setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
        }, 3000);

        return () => clearInterval(intervalId);
    }, [testimonials.length, isVisible]);

    const renderStars = (rating: number) => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            if (i <= Math.floor(rating)) {
                stars.push(
                    <svg
                        key={i}
                        className="w-6 h-6 text-AssetArc-green-light"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                    >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                );
            } else if (i - 0.5 === rating) {
                stars.push(
                    <svg
                        key={i}
                        className="w-6 h-6 text-AssetArc-green-light"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <defs>
                            <linearGradient id={`half-${i}`}>
                                <stop offset="50%" stopColor="currentColor" />
                                <stop offset="50%" stopColor="#3f3f3f" />
                            </linearGradient>
                        </defs>
                        <path
                            fill={`url(#half-${i})`}
                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                        />
                    </svg>
                );
            } else {
                stars.push(
                    <svg
                        key={i}
                        className="w-6 h-6 text-gray-500 opacity-50"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                    >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                );
            }
        }
        return stars;
    };

    return (
        <section className="py-12 px-4 sm:px-6 lg:px-8 relative" ref={sectionRef}>
            {/* Background Effects - MINIMAL to reduce main-thread work */}
            <div className="absolute inset-0">
                <div className="absolute top-20 right-20 w-4 h-4 bg-AssetArc-green-light/20 rounded-full"></div>
                <div className="absolute bottom-20 left-20 w-3 h-3 bg-AssetArc-green-accent/30 rounded-full"></div>
                <div className="absolute top-1/2 right-10 w-2 h-2 bg-white/20 rounded-full"></div>
            </div>

            <div className="max-w-6xl mx-auto text-center">
                <div className="text-center mb-16">
                    <h2 className="font-product-sans text-2xl sm:text-4xl lg:text-6xl font-normal uppercase mb-6">
                        <span className="text-white">What Our </span>
                        <span className="gradient-text">Clients Say</span>
                    </h2>
                </div>

                <div className="relative">
                    {/* Testimonial Card with slide animation & touch support */}
                    <div
                        className="bg-white/5 backdrop-blur-lg rounded-2xl max-w-2xl mx-auto hover:bg-white/10 hover:scale-105 transition-all duration-500 overflow-hidden select-none outline-none"
                        onTouchStart={e => { dragging.current = true; setDragStartX(e.touches[0].clientX); }}
                        onTouchMove={e => {
                            if (dragging.current && dragStartX !== null) {
                                setDragDelta(e.touches[0].clientX - dragStartX);
                            }
                        }}
                        onTouchEnd={() => {
                            dragging.current = false;
                            if (Math.abs(dragDelta) > 60) {
                                if (dragDelta > 0) {
                                    setCurrentTestimonial((prev) =>
                                        testimonials.length > 0 ? (prev - 1 + testimonials.length) % testimonials.length : prev
                                    );
                                } else {
                                    setCurrentTestimonial((prev) =>
                                        testimonials.length > 0 ? (prev + 1) % testimonials.length : prev
                                    );
                                }
                            }
                            setDragStartX(null);
                            setDragDelta(0);
                        }}
                        onMouseDown={e => {
                            dragging.current = true; setDragStartX(e.clientX);
                        }}
                        onMouseMove={e => {
                            if (dragging.current && dragStartX !== null) {
                                setDragDelta(e.clientX - dragStartX);
                            }
                        }}
                        onMouseUp={() => {
                            dragging.current = false;
                            if (Math.abs(dragDelta) > 60) {
                                if (dragDelta > 0) {
                                    setCurrentTestimonial((prev) =>
                                        testimonials.length > 0 ? (prev - 1 + testimonials.length) % testimonials.length : prev
                                    );
                                } else {
                                    setCurrentTestimonial((prev) =>
                                        testimonials.length > 0 ? (prev + 1) % testimonials.length : prev
                                    );
                                }
                            }
                            setDragStartX(null);
                            setDragDelta(0);
                        }}
                        onMouseLeave={() => { dragging.current = false; setDragStartX(null); setDragDelta(0); }}
                        onWheel={(e) => {
                            const now = Date.now();
                            if (lastWheelTs.current && now - lastWheelTs.current < 500) return;
                            if (Math.abs(e.deltaX) > 10) {
                                lastWheelTs.current = now;
                                if (e.deltaX > 0) {
                                    setCurrentTestimonial((prev) =>
                                        testimonials.length > 0 ? (prev + 1) % testimonials.length : prev
                                    );
                                } else {
                                    setCurrentTestimonial((prev) =>
                                        testimonials.length > 0 ? (prev - 1 + testimonials.length) % testimonials.length : prev
                                    );
                                }
                            }
                        }}
                        onKeyDown={(e) => {
                            if (e.key === 'ArrowRight') {
                                e.preventDefault();
                                setCurrentTestimonial((prev) =>
                                    testimonials.length > 0 ? (prev + 1) % testimonials.length : prev
                                );
                            }
                            if (e.key === 'ArrowLeft') {
                                e.preventDefault();
                                setCurrentTestimonial((prev) =>
                                    testimonials.length > 0 ? (prev - 1 + testimonials.length) % testimonials.length : prev
                                );
                            }
                        }}
                        tabIndex={0}
                        style={{ cursor: dragStartX !== null ? 'grabbing' : 'grab', touchAction: 'pan-y' }}
                    >
                        <div
                            className="flex transition-transform duration-500 ease-in-out"
                            style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
                        >
                            {testimonials.map((t, idx) => (
                                <div key={idx} className="min-w-full shrink-0 basis-full">
                                    <div className="p-8">
                                        {/* ⭐ Dynamic Star Ratings */}
                                        <div className="flex items-center justify-center mb-6 space-x-1">
                                            {renderStars(t?.rating || 0)}
                                        </div>

                                        <blockquote className="text-white text-lg leading-relaxed mb-6">
                                            &quot;{t?.comment || ''}&quot;
                                        </blockquote>

                                        <div className="text-white/70 text-sm">
                                            — {t?.name || ''}, {t?.position || ''}
                                            {t?.company && (
                                                <span className="text-white/50"> at {t?.company}</span>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Dots Indicator */}
                    <div className="flex justify-center mt-6 space-x-2">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentTestimonial(index)}
                                aria-label={`Go to testimonial ${index + 1}`}
                                className="w-12 h-12 flex items-center justify-center focus:outline-none group"
                            >
                                <span
                                    className={`block w-3 h-3 rounded-full transition-all duration-300 ${index === currentTestimonial
                                        ? "bg-AssetArc-green-light scale-125"
                                        : "bg-white/30 group-hover:bg-white/50"
                                        }`}
                                />
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSectionComponent;
