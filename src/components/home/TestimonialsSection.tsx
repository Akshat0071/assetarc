'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { Review } from '@/lib/supabase';
import { addReview, getRandomReviews } from '@/lib/database/reviews';

const TestimonialsSectionComponent = () => {
    const [currentTestimonial, setCurrentTestimonial] = useState(0);
    const [testimonials, setTestimonials] = useState<Review[]>([]);
    const [loading, setLoading] = useState(true);
    const [submitting, setSubmitting] = useState(false);
    const [dragStartX, setDragStartX] = useState<number | null>(null);
    const [dragDelta, setDragDelta] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const dragging = React.useRef(false);
    const lastWheelTs = React.useRef(0);
    const sectionRef = React.useRef<HTMLDivElement>(null);

    const defaultTestimonials = useMemo(() => [
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
    ], []);

    useEffect(() => {
        const loadReviews = async () => {
            try {
                setLoading(true);
                const { data, error } = await getRandomReviews(5);

                if (error) {
                    console.error('Error loading reviews:', error);
                    setTestimonials(defaultTestimonials);
                } else if (data && data.length > 0) {
                    setTestimonials(data);
                } else {
                    setTestimonials(defaultTestimonials);
                }
            } catch (error) {
                console.error('Error loading reviews:', error);
                setTestimonials(defaultTestimonials);
            } finally {
                setLoading(false);
            }
        };

        loadReviews();
    }, [defaultTestimonials]);

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
        if (loading || testimonials.length === 0 || !isVisible) return;

        const intervalId = setInterval(() => {
            setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
        }, 3000);

        return () => clearInterval(intervalId);
    }, [loading, testimonials.length, isVisible]);

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

    const [showForm, setShowForm] = useState(false);
    const [form, setForm] = useState({
        name: "",
        company: "",
        position: "",
        comment: "",
        rating: 0,
    });
    const [formError, setFormError] = useState("");

    const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleRatingChange = (value: number) => {
        setForm((prev) => ({ ...prev, rating: value }));
    };

    const handleFormSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!form.name || !form.position || !form.comment || !form.rating) {
            setFormError("Please fill all required fields and select a star rating.");
            return;
        }

        setFormError("");
        setSubmitting(true);

        try {
            const reviewData = {
                name: form.name,
                company: form.company || null,
                position: form.position,
                comment: form.comment,
                rating: form.rating,
            };

            const { error } = await addReview(reviewData);

            if (error) {
                throw error;
            }

            setShowForm(false);
            setForm({ name: "", company: "", position: "", comment: "", rating: 0 });

            const { data: newReviews, error: reloadError } = await getRandomReviews(5);
            if (!reloadError && newReviews && newReviews.length > 0) {
                setTestimonials(newReviews);
            }

            alert("Thank you for your review! Your feedback has been submitted successfully.");

        } catch (error) {
            console.error('Error submitting review:', error);
            setFormError("Failed to submit review. Please try again.");
        } finally {
            setSubmitting(false);
        }
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
                        {loading ? (
                            <div className="flex items-center justify-center py-8">
                                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-AssetArc-green-light"></div>
                            </div>
                        ) : (
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
                        )}
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

                    {/* Add a review button and dropdown form */}
                    <div className="mt-8 flex flex-col items-center">
                        {!showForm && (
                            <button
                                className="inline-flex items-center gap-4 px-8 py-4 bg-transparent border-2 border-white/20 rounded-full text-white hover:border-AssetArc-green-light hover:text-AssetArc-green-light hover:bg-AssetArc-green-light/10 hover:scale-110 hover:shadow-[0_0_30px_rgba(0,255,151,0.4)] transition-all duration-500 font-work-sans font-medium group"
                                onClick={() => { setShowForm(true); setForm(prev => ({ ...prev, rating: 2.5 })); }}
                                style={{ pointerEvents: 'auto' }}
                            >
                                <div className="w-3 h-3 bg-AssetArc-green-accent rounded-full group-hover:scale-125 group-hover:animate-pulse transition-all duration-300"></div>
                                Add a review
                            </button>
                        )}
                        {showForm && (
                            <>
                                <form
                                    className="mt-4 w-full max-w-md bg-white/10 rounded-xl p-6 shadow-lg flex flex-col gap-4 animate-dropdown"
                                    onSubmit={handleFormSubmit}
                                >
                                    <div className="flex flex-col text-left">
                                        <label className="text-white font-medium mb-1">Name<span className="text-red-500">*</span></label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={form.name}
                                            onChange={handleFormChange}
                                            className="px-3 py-2 rounded bg-white/20 text-white border border-white/30 focus:outline-none focus:border-AssetArc-green-light"
                                            required
                                        />
                                    </div>
                                    <div className="flex flex-col text-left">
                                        <label className="text-white font-medium mb-1">Company</label>
                                        <input
                                            type="text"
                                            name="company"
                                            value={form.company}
                                            onChange={handleFormChange}
                                            className="px-3 py-2 rounded bg-white/20 text-white border border-white/30 focus:outline-none focus:border-AssetArc-green-light"
                                        />
                                    </div>
                                    <div className="flex flex-col text-left">
                                        <label className="text-white font-medium mb-1">Position<span className="text-red-500">*</span></label>
                                        <input
                                            type="text"
                                            name="position"
                                            value={form.position}
                                            onChange={handleFormChange}
                                            className="px-3 py-2 rounded bg-white/20 text-white border border-white/30 focus:outline-none focus:border-AssetArc-green-light"
                                            required
                                        />
                                    </div>
                                    <div className="flex flex-col text-left">
                                        <label className="text-white font-medium mb-1">Comment<span className="text-red-500">*</span></label>
                                        <textarea
                                            name="comment"
                                            value={form.comment}
                                            onChange={handleFormChange}
                                            className="px-3 py-2 rounded bg-white/20 text-white border border-white/30 focus:outline-none focus:border-AssetArc-green-light"
                                            rows={3}
                                            required
                                        />
                                    </div>
                                    <div className="flex flex-col text-left">
                                        <label className="text-white font-medium mb-1">Star Rating<span className="text-red-500">*</span></label>
                                        {/* Live preview of selected rating with half-star support */}
                                        <div className="flex items-center gap-3 mt-2">
                                            <div className="flex items-center">
                                                {renderStars(form.rating || 0)}
                                            </div>
                                            <span className="text-white/80 text-sm">{form.rating ? `${form.rating} / 5` : 'Select rating'}</span>
                                        </div>
                                        {/* Slider for 0.5 steps from 0.5 to 5 */}
                                        <input
                                            type="range"
                                            min={0.5}
                                            max={5}
                                            step={0.5}
                                            value={form.rating || 2.5}
                                            onChange={(e) => handleRatingChange(parseFloat(e.target.value))}
                                            className="mt-3 w-full accent-AssetArc-green-light"
                                            aria-label="Select star rating in half-star steps"
                                        />
                                        <span className="text-white/50 text-xs mt-1">Use the slider to pick half stars (e.g., 4.5).</span>
                                    </div>
                                    {formError && <div className="text-red-500 text-sm mt-2">{formError}</div>}
                                    <button
                                        type="submit"
                                        disabled={submitting}
                                        className="mt-4 px-6 py-2 bg-AssetArc-green-light text-black rounded-full font-semibold shadow hover:bg-AssetArc-green-accent transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        {submitting ? (
                                            <div className="flex items-center gap-2">
                                                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-black"></div>
                                                Submitting...
                                            </div>
                                        ) : (
                                            'Submit Review'
                                        )}
                                    </button>
                                </form>
                                <button
                                    className="mt-4 inline-flex items-center gap-4 px-8 py-4 bg-transparent border-2 border-white/20 rounded-full text-white hover:border-AssetArc-green-light hover:text-AssetArc-green-light hover:bg-AssetArc-green-light/10 hover:scale-110 hover:shadow-[0_0_30px_rgba(0,255,151,0.4)] transition-all duration-500 font-work-sans font-medium group"
                                    onClick={() => setShowForm(false)}
                                    style={{ pointerEvents: 'auto' }}
                                >
                                    <div className="w-3 h-3 bg-AssetArc-green-accent rounded-full group-hover:scale-125 group-hover:animate-pulse transition-all duration-300"></div>
                                    Close
                                </button>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSectionComponent;
