// "use client";
// import { WorldMap } from "../ui/worldMap";

// export function MapDemo() {
//   return (
//     // Mobile adjustments:
//     // • Reduced vertical padding (py-1).
//     // • Increased width slightly (w-[155%] on mobile).
//     // • Mobile view: map shifted left using translate-x-[-10px].
//     // • Larger screens: transforms remain as sm:translate-x-[24px] sm:translate-y-[-90px].
//     <div
//       className="
//         py-1 dark:bg-[#F6F5FF] bg-[#F6F5FF]
//         h-40 sm:h-64 md:h-72 lg:h-80 xl:h-96  
//         w-[155%] sm:w-full transform
//         translate-x-[-10px] translate-y-0   
//         sm:translate-x-[24px] sm:translate-y-[-90px] 
//         mt-1  
//       "
//     >
//       <WorldMap
//         dots={[
//           {
//             start: { lat: 64.2008, lng: -149.4937 },
//             end: { lat: 34.0522, lng: -118.2437 },
//           },
//           {
//             start: { lat: 64.2008, lng: -149.4937 },
//             end: { lat: -15.7975, lng: -47.8919 },
//           },
//           {
//             start: { lat: -15.7975, lng: -47.8919 },
//             end: { lat: 38.7223, lng: -9.1393 },
//           },
//           {
//             start: { lat: 51.5074, lng: -0.1278 },
//             end: { lat: 28.6139, lng: 77.209 },
//           },
//           {
//             start: { lat: 28.6139, lng: 77.209 },
//             end: { lat: 43.1332, lng: 131.9113 },
//           },
//           {
//             start: { lat: 28.6139, lng: 77.209 },
//             end: { lat: -1.2921, lng: 36.8219 },
//           },
//           {
//             start: { lat: 13.0843007, lng: 80.2704622 },
//             end: { lat: 14.0522, lng: -8.24 },
//           },
//         ]}
//       />
//     </div>
//   );
// }
