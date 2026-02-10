// 'use client';
// // app/page.tsx
// import Link from "next/link";
// import { Shield, AlertTriangle, Users, Clock } from "lucide-react";
// import Button from "@/components/ui/Button";

// export default function Home() {
//   return (
//     <div className="min-h-screen bg-gradient-to-b from-background to-background2">
//       {/* Hero Section */}
//       <div className="container mx-auto px-4 pt-16 pb-24">
//         <div className="max-w-6xl mx-auto">
//           {/* Header */}
//           <div className="flex items-center justify-center gap-3 mb-8">
//             <Shield className="w-12 h-12 text-primary" />
//             <h1 className="text-4xl md:text-5xl font-bold text-center">
//               Scam<span className="text-primary">Guard</span>
//             </h1>
//           </div>
          
//           {/* Main Hero */}
//           <div className="text-center mb-16">
//             <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
//               Can you spot a scam <span className="text-primary">before</span> it spots you?
//             </h2>
//             <p className="text-xl text-text2 max-w-3xl mx-auto mb-10">
//               An interactive, safe simulator that teaches you how to identify and avoid online scams.
//               No real data collected. No real risks. Just pure education.
//             </p>
            
//             <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
//               <Link href="/simulator">
//                 <Button size="lg" className="text-lg px-8 py-4">
//                   Start Learning
//                 </Button>
//               </Link>
//               <Link href="/about">
//                 <Button variant="outline" size="lg" className="text-lg px-8 py-4">
//                   Learn More
//                 </Button>
//               </Link>
//             </div>
            
//             {/* Safety Badge */}
//             <div className="inline-flex items-center gap-2 bg-surface px-6 py-3 rounded-full border border-border">
//               <Shield className="w-5 h-5 text-success" />
//               <span className="font-medium">100% Safe & Educational</span>
//             </div>
//           </div>
          
//           {/* Features Grid */}
//           <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-20">
//             <div className="bg-surface p-8 rounded-2xl border border-border shadow-medium">
//               <div className="w-12 h-12 bg-primary-10 rounded-lg flex items-center justify-center mb-4">
//                 <AlertTriangle className="w-6 h-6 text-primary" />
//               </div>
//               <h3 className="text-xl font-bold mb-3">Spot Red Flags</h3>
//               <p className="text-text2">
//                 Learn to identify common scam tactics like urgency, fake authority, and too-good-to-be-true offers.
//               </p>
//             </div>
            
//             <div className="bg-surface p-8 rounded-2xl border border-border shadow-medium">
//               <div className="w-12 h-12 bg-primary-10 rounded-lg flex items-center justify-center mb-4">
//                 <Clock className="w-6 h-6 text-primary" />
//               </div>
//               <h3 className="text-xl font-bold mb-3">Practice Safely</h3>
//               <p className="text-text2">
//                 Interact with realistic scam scenarios in a controlled environment. No real data ever leaves your device.
//               </p>
//             </div>
            
//             <div className="bg-surface p-8 rounded-2xl border border-border shadow-medium">
//               <div className="w-12 h-12 bg-primary-10 rounded-lg flex items-center justify-center mb-4">
//                 <Users className="w-6 h-6 text-primary" />
//               </div>
//               <h3 className="text-xl font-bold mb-3">Protect Loved Ones</h3>
//               <p className="text-text2">
//                 Perfect for parents, grandparents, and anyone who wants to stay safe online.
//               </p>
//             </div>
//           </div>
          
//           {/* Disclaimer */}
//           <div className="max-w-3xl mx-auto text-center">
//             <div className="bg-surface border border-border rounded-2xl p-8">
//               <div className="flex items-center justify-center gap-3 mb-4">
//                 <Shield className="w-6 h-6 text-success" />
//                 <h3 className="text-lg font-bold">Important Disclaimer</h3>
//               </div>
//               <p className="text-text2">
//                 This is an educational simulator. No personal data is collected, stored, or transmitted. 
//                 All interactions are fake and designed purely for learning purposes. 
//                 We do not impersonate real companies or organizations.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
export default function Page() {
  return <h1>IT WORKS</h1>;
}
