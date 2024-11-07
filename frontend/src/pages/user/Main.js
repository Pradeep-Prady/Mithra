// import React, { useState } from "react";
// import { Outlet } from "react-router-dom";
// import Navbar from "../../components/user/Navbar";
// import Footer from "../../components/user/Footer";
// import { FaWhatsapp } from "react-icons/fa6";
// import Launch from "./launch/Launch";
// import Fireworks from "@fireworks-js/react";
// import FireworksDisplay from "./launch/FireWorks";
// export default function Main() {
//   const [showLaunch, setShowLaunch] = useState(true);

//   const handleLaunchClose = () => {
//     setShowLaunch(false);
//   };
//   return (
//     <>
//       {showLaunch ? (
//         <Launch onClose={handleLaunchClose} />
//       ) : (
//         <div className="relative">
//           <FireworksDisplay />
//           <Navbar />
//           <Outlet />
//           <Footer />

//           <div className="fixed z-[9999999999] text-white bottom-0 right-0 p-5">
//             <a
//               href="https://wa.me/8762763829"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="bg-green-500 flex items-center gap-2 px-3 py-2"
//             >
//               <FaWhatsapp />
//               <p className="text-[14px]">Chat With Us</p>
//             </a>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }

import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../components/user/Navbar";
import Footer from "../../components/user/Footer";
import { FaWhatsapp } from "react-icons/fa6";
 
export default function Main() {
  const [showLaunch, setShowLaunch] = useState(true);

  const handleLaunchClose = () => {
    setShowLaunch(false);
  };
  return (
    <>
      <div className="relative">
        {/* <FireworksDisplay /> */}
        <Navbar />
        <Outlet />
        <Footer />

        <div className="fixed z-[9999999999] text-white bottom-0 right-0 p-5">
          <a
            href="https://wa.me/8762763829"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 flex items-center gap-2 px-3 py-2"
          >
            <FaWhatsapp />
            <p className="text-[14px]">Chat With Us</p>
          </a>
        </div>
      </div>
    </>
  );
}
