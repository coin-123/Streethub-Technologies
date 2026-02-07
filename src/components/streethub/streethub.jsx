import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import frame1 from "../../assets/Vector2.png";
// import Intro from "./intro/intro.jsx";
// import Intro from "./Intro";

const Streethub = () => {
  const [loading, setLoading] = useState(true);
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    // Show text after logo finishes animation
    const textTimer = setTimeout(() => {
      setShowText(true);
    }, 1000); // after 1s

    // End loading after full sequence
    const timer = setTimeout(() => {
      setLoading(false);
      document.body.style.overflow = "auto";
    }, 4000); // total 4s

    return () => {
      clearTimeout(timer);
      clearTimeout(textTimer);
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <>
      <AnimatePresence>
        {loading && (
          <motion.section
            className="flex items-center justify-center w-full h-screen intro fixed top-0 left-0 z-50 animated "
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            
            <div className="flex items-center gap-4">
              {/* Logo animation */}
              <motion.div
                initial={{ rotate: -90, scale: -7, opacity: 0 }}
                animate={{ rotate: 0, scale: 1, opacity: 1 }}
                transition={{ duration: 1 }}
              >
                <img src={frame1} alt="Loading Logo" className="streetimg"/>
              </motion.div>

              {/* Typing animation for text */}
              {showText && (
                <motion.p
                  initial={{ width: 0 }}
                  animate={{ width: "auto" }}
                  transition={{ duration: 2, ease: "linear" }}
                  className="streettext text-white overflow-hidden whitespace-nowrap border-r-2 border-white pr-1 text-[2rem] font-semibold"
                >
                  Welcome To StreetHub Technologies
                 
                </motion.p>
              )}
            </div>
          </motion.section>
        )}
      </AnimatePresence>

      {/* Main content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: loading ? 0 : 1 }}
        transition={{ duration: 0.8, ease: "easeInOut", delay: loading ? 0.8 : 0 }}
      >
        <intro />
      </motion.div>
    </>
  );
};

export default Streethub;
