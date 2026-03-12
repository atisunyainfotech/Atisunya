// "use client";

// import { motion } from "framer-motion";
// import { useState } from "react";

// interface Testimonial {
//   name: string;
//   title: string;
//   company: string;
//   image: string;
//   text: string;
// }

// const testimonials: Testimonial[] = [
//   {
//     name: "Zahir Mirza",
//     title: "Marketing Director",
//     company: "AtiSunya Infotech",
//     image: "https://randomuser.me/api/portraits/men/32.jpg",
//     text: "AtiSunya Infotech helped streamline our ERP workflows and significantly improved our operational efficiency.",
//   },
//   {
//     name: "Emily Rogers",
//     title: "Head of Product",
//     company: "AtiSunya Infotech",
//     image: "https://randomuser.me/api/portraits/women/44.jpg",
//     text: "The team delivered a powerful ERP implementation tailored perfectly to our business requirements.",
//   },
//   {
//     name: "Michael Lee",
//     title: "Operations Manager",
//     company: "AtiSunya Infotech",
//     image: "https://randomuser.me/api/portraits/men/46.jpg",
//     text: "From planning to execution, AtiSunya Infotech ensured the entire ERP journey was seamless.",
//   },
//   {
//     name: "Sophia Carter",
//     title: "Finance Director",
//     company: "AtiSunya Infotech",
//     image: "https://randomuser.me/api/portraits/women/65.jpg",
//     text: "Their ERP expertise gave us real-time financial insights and better operational visibility.",
//   },
//   {
//     name: "Daniel Kim",
//     title: "CEO",
//     company: "AtiSunya Infotech",
//     image: "https://randomuser.me/api/portraits/men/75.jpg",
//     text: "AtiSunya Infotech proved to be a reliable technology partner delivering consistent results.",
//   },
// ];

// export default function TestimonialCarousel() {

//   const [pause, setPause] = useState(false);

//   return (
//     <section className="py-28 bg-gray-100 overflow-hidden">
//       <div className="max-w-7xl mx-auto px-6">

//         {/* Heading */}
//         <div className="text-center mb-16">
//           <p className="uppercase text-sm font-semibold tracking-widest text-[#2F7F78]">
//             Testimonials
//           </p>

//           <h2 className="text-4xl font-bold text-[#002050] mt-3">
//             What our clients say
//           </h2>

//           <div className="w-24 h-[3px] bg-[#fbc02d] mx-auto mt-6 rounded-full"></div>
//         </div>

//         {/* Carousel */}
//         <motion.div
//           className="flex gap-8"
//           animate={!pause ? { x: ["0%", "-50%"] } : {}}
//           transition={{
//             repeat: Infinity,
//             duration: 30,
//             ease: "linear",
//           }}
//           onMouseEnter={() => setPause(true)}
//           onMouseLeave={() => setPause(false)}
//         >
//           {[...testimonials, ...testimonials].map((t, index) => (

//             <motion.div
//               key={index}
//               whileHover={{ y: -10 }}
//               transition={{ type: "spring", stiffness: 200 }}
//               className="min-w-[320px] md:min-w-[380px] bg-white rounded-2xl 
//               border-2 border-[#fbc02d] shadow-md hover:shadow-xl p-8
//               hover:border-[#2F7F78] transition-all duration-300"
//             >

//               {/* Quote */}
//               <div className="text-4xl text-[#fbc02d] mb-4">
//                 ❝
//               </div>

//               {/* Text */}
//               <p className="text-gray-600 leading-relaxed">
//                 {t.text}
//               </p>

//               {/* Stars */}
//               <div className="flex gap-1 mt-4 text-[#fbc02d]">
//                 ⭐ ⭐ ⭐ ⭐ ⭐
//               </div>

//               {/* Profile */}
//               <div className="flex items-center gap-4 mt-6">

//                 <img
//                   src={t.image}
//                   alt={t.name}
//                   className="w-11 h-11 rounded-full object-cover border-2 border-[#2F7F78]"
//                 />

//                 <div>
//                   <h4 className="font-semibold text-[#002050]">
//                     {t.name}
//                   </h4>

//                   <p className="text-sm text-gray-600">
//                     {t.title}
//                   </p>

//                   <p className="text-sm text-gray-600">
//                     {t.company}
//                   </p>
//                 </div>

//               </div>

//             </motion.div>

//           ))}
//         </motion.div>

//       </div>
//     </section>
//   );
// }