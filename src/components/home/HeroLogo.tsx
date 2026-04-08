// 'use client';

// import React, { useState, useEffect } from 'react';
// import Image from 'next/image';

// const HeroLogo = () => {
//     const [isIOS, setIsIOS] = useState(false);

//     useEffect(() => {
//         // eslint-disable-next-line react-hooks/set-state-in-effect
//         setIsIOS(/iPad|iPhone|iPod/.test(navigator.userAgent) && !(window as unknown as { MSStream: unknown }).MSStream);
//     }, []);

//     return (
//         <div
//             className="flex justify-center items-center gap-4 sm:gap-8 group w-full hero-logo-ios"
//             style={{
//                 isolation: "isolate",
//                 transform: "translateZ(0)",
//                 WebkitBackfaceVisibility: "hidden",
//                 backfaceVisibility: "hidden",
//             }}
//         >
//             {/* Mobile version */}
//             {isIOS ? (
//                 /* iOS Safari: native img */
//                 /* eslint-disable-next-line @next/next/no-img-element */
//                 <img
//                     src="/1..gif"
//                     alt="AssetArc Logo"
//                     className="w-28 h-28 xs:w-32 xs:h-32 sm:hidden object-contain"
//                     style={{
//                         backgroundColor: "transparent",
//                         display: "block",
//                         willChange: "transform",
//                     }}
//                 />
//             ) : (
//                 /* Android / Desktop Mobile View: Next Image */
//                 <Image
//                     src="/1..gif"
//                     alt="AssetArc Logo"
//                     className="w-28 h-28 xs:w-32 xs:h-32 sm:hidden object-contain"
//                     width={128}
//                     height={128}
//                     priority
//                     sizes="(max-width: 390px) 112px, (max-width: 640px) 128px, 0px"
//                     quality={90}
//                     placeholder="empty"
//                     unoptimized
//                 />
//             )}

//             {/* Desktop/Laptop version */}
//             <Image
//                 src="/1..gif"
//                 alt="AssetArc Logo"
//                 className="hidden sm:block w-36 h-36 lg:w-48 lg:h-48 group-hover:scale-110 transition-transform duration-500 object-contain"
//                 style={{ background: 'transparent' }}
//                 width={300}
//                 height={300}
//                 priority
//                 sizes="(max-width: 768px) 144px, (max-width: 1024px) 192px, 300px"
//                 quality={90}
//             />
//         </div>
//     );
// };

// export default HeroLogo;
