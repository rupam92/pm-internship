
// "use client";

// import React, { useState } from "react";

// const tabs = [
//   "Overview",
//   "Internships",
//   "Jobs",
//   "About",
//   "Reviews",
// ];

// const Page = () => {
//   const [activeTab, setActiveTab] = useState("Overview");

//   return (
//     <div className="min-h-screen bg-[#0f172a] text-white">

//       {/* COMPANY HERO */}
//       <div className="relative h-[300px] w-full">

//         {/* COVER IMAGE */}
//         <img
//           src="/company/banner.jpg"
//           alt="company"
//           className="w-full h-full object-cover"
//         />

//         {/* OVERLAY */}
//         <div className="absolute inset-0 bg-black/50" />

//         {/* COMPANY INFO */}
//         <div className="absolute bottom-0 left-0 w-full px-4 md:px-10 pb-6">

//           <div className="flex flex-col md:flex-row md:items-end gap-4">

//             {/* LOGO */}
//             <img
//               src="/company/logo.png"
//               alt="logo"
//               className="w-[90px] h-[90px] rounded-3xl border-4 border-white object-cover bg-white"
//             />

//             {/* TEXT */}
//             <div>
//               <h1 className="text-3xl md:text-5xl font-bold">
//                 Google
//               </h1>

//               <p className="text-white/80 mt-1">
//                 Technology • AI • Cloud • Software
//               </p>
//             </div>

//           </div>

//         </div>

//       </div>

//       {/* TOP TABS */}
//       <div className="sticky top-0 z-50 bg-[#111827] border-b border-white/10">

//         <div className="max-w-7xl mx-auto px-3 overflow-x-auto">

//           <div className="flex gap-2 md:gap-4 min-w-max">

//             {tabs.map((tab) => (
//               <button
//                 key={tab}
//                 onClick={() => setActiveTab(tab)}
//                 className={`px-5 py-4 text-sm md:text-base transition-all duration-300 border-b-2 ${
//                   activeTab === tab
//                     ? "border-white text-white font-semibold"
//                     : "border-transparent text-white/60 hover:text-white"
//                 }`}
//               >
//                 {tab}
//               </button>
//             ))}

//           </div>

//         </div>

//       </div>

//       {/* PAGE CONTENT */}
//       <div className="max-w-7xl mx-auto px-3 py-5">

//         {activeTab === "Overview" && (
//           <div className="bg-white/5 border border-white/10 rounded-4 p-5">
//             <h2 className="text-2xl font-bold mb-3">
//               Company Overview
//             </h2>

//             <p className="text-white/70 leading-relaxed">
//               Google is one of the world’s leading technology companies,
//               focused on AI, search engines, cloud computing, software,
//               and digital innovation.
//             </p>
//           </div>
//         )}

//         {activeTab === "Internships" && (
//           <div className="bg-white/5 border border-white/10 rounded-4 p-5">
//             <h2 className="text-2xl font-bold mb-4">
//               Open Internships
//             </h2>

//             <div className="space-y-4">

//               <div className="bg-white/5 rounded-3xl p-4">
//                 <h3 className="font-semibold text-xl">
//                   Frontend Developer Intern
//                 </h3>

//                 <p className="text-white/60 mt-1">
//                   Remote • 6 Months • Paid
//                 </p>
//               </div>

//               <div className="bg-white/5 rounded-3xl p-4">
//                 <h3 className="font-semibold text-xl">
//                   AI/ML Intern
//                 </h3>

//                 <p className="text-white/60 mt-1">
//                   Bangalore • Full Time
//                 </p>
//               </div>

//             </div>
//           </div>
//         )}

//         {activeTab === "Jobs" && (
//           <div className="bg-white/5 border border-white/10 rounded-4 p-5">
//             <h2 className="text-2xl font-bold mb-4">
//               Jobs
//             </h2>

//             <div className="space-y-4">

//               <div className="bg-white/5 rounded-3xl p-4">
//                 <h3 className="font-semibold text-xl">
//                   Software Engineer
//                 </h3>

//                 <p className="text-white/60 mt-1">
//                   Hyderabad • Full Time
//                 </p>
//               </div>

//             </div>
//           </div>
//         )}

//         {activeTab === "About" && (
//           <div className="bg-white/5 border border-white/10 rounded-4 p-5">
//             <h2 className="text-2xl font-bold mb-3">
//               About Company
//             </h2>

//             <p className="text-white/70 leading-relaxed">
//               Founded in 1998, Google has transformed the way people
//               access information online and continues to innovate in
//               artificial intelligence and cloud technology.
//             </p>
//           </div>
//         )}

//         {activeTab === "Reviews" && (
//           <div className="bg-white/5 border border-white/10 rounded-4 p-5">

//             <h2 className="text-2xl font-bold mb-4">
//               Reviews
//             </h2>

//             <div className="space-y-4">

//               <div className="bg-white/5 rounded-3xl p-4">
//                 <h3 className="font-semibold">
//                   Amazing Work Culture ⭐⭐⭐⭐⭐
//                 </h3>

//                 <p className="text-white/70 mt-2">
//                   Great learning opportunities and supportive mentors.
//                 </p>
//               </div>

//               <div className="bg-white/5 rounded-3xl p-4">
//                 <h3 className="font-semibold">
//                   Great Internship Experience ⭐⭐⭐⭐
//                 </h3>

//                 <p className="text-white/70 mt-2">
//                   Worked on real projects with experienced engineers.
//                 </p>
//               </div>

//             </div>

//           </div>
//         )}

//       </div>

//     </div>
//   );
// };

// export default Page;
