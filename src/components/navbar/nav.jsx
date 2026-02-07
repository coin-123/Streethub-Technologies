import React from "react";
import Logo from "../../assets/Vector2.png";
import Arrow from "../../assets/arrow-down.png";
import { Link } from "react-scroll";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Nav = () => {
  // ✅ State to control dropdown visibility
  const [isOpen, setIsOpen] = useState(false);

  // ✅ Function to toggle menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

   // Animation variants
  const menuVariants = {
    hidden: { opacity: 0, x: -80 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        staggerChildren: 0.1, // delay between each child
        when: "beforeChildren",
        duration: 0.3,
      },
    },
    exit: { opacity: 0, x: -80 },
  };

  // const itemVariants = {
  //   hidden: { opacity: 0, y: -10 },
  //   visible: { opacity: 1, y: 0 },
  // };



  return (
    <section className="flex items-center justify-center w-fulll h-24 my-custom-bg ">
      <div className="flex items-center justify-between h-full w-4/5 desktop">
        <div className="flex items-center justify-center gap-3.5 h-4/5 w-52">
          <div className="logos">
            <img src={Logo} alt="" className="logo " />
          </div>
          <div className="logotexts">
            <h1 className="text-white font-semibold text-2xl logodes">
              StreetHub
            </h1>
            <p className="text-white text-2xl technologies">Technologies</p>
            {/* <p className="text-white text-sm logodes">Technologies</p> */}
          </div>
        </div>

       
        <div
        
        className="flex items-center justify-between h-full w-[480px] text-white  ">
          <Link
            to="footer"
            smooth={true}
            duration={500}
            className=" cursor-pointer "
          >
            About Us
          </Link>
          <Link to="#" smooth={true} duration={500} className=" dropdown">
            <p className="flex items-center justify-center cursor-pointer gap-[5px]">
              Courses <img src={Arrow} alt="" className="" />
            </p>
            <div className="dropdown-content">
              <a href="#">Frontend Development</a>
              <a href="#">Backend Development</a>
              <a href="#">UI/UX Design</a>
              <a href="#">Cyber Security</a>
              <a href="#">Data Analysis</a>
            </div>
          </Link>
          <Link
            to="testimonials"
            smooth={true}
            duration={500}
            className=" cursor-pointer "
          >
            Testimonials
          </Link>
          <Link to="#" smooth={true} duration={500} className=" dropdown">
            <p className="flex items-center justify-center cursor-pointer gap-[5px]">
              Portal <img src={Arrow} alt="" className="" />
            </p>
            <div className="dropdown-content">
              <a href="#">Student</a>
              <a href="#">Facilitator</a>
              <a href="#">Admin</a>
            </div>
          </Link>
          <Link
            to="contact-us"
            smooth={true}
            duration={500}
            className=" cursor-pointer "
          >
            Contact Us
          </Link>
        </div>

        <div className="flex w-[250px] h-full items-center justify-between">
          <button className="greenbtn text-white w-27 h-1/2 items-center justify-center rounded-lg cursor-pointer borders-box border-0">
            Sign In
          </button>
          <button className="text-white w-27 h-1/2 items-center justify-center rounded-lg borders-box cursor-pointer border-[1px] border-gray-100">
            Sign Up
          </button>
        </div>
      </div>

      {/* mobile section */}

      <div className="flex items-center justify-between w-[95%] h-full  ham-bugger ">
        {/* logo section */}

        <div className="flex items-center justify-center">
          <img src={Logo} alt="" className="w-[28%]" />
          <div className="logotexts">
            <h1 className="text-white font-semibold text-xl">StreetHub</h1>
            <p className="text-white text-l ">Technologies</p>
          </div>
        </div>

         {/* hambugger section */}

        <div>
          <button
            onClick={toggleMenu}
            className="flex flex-col items-center justify-center w-[25px] h-[50px] cursor-pointer gap-[5px] "
            
          >

             {/* ☰ */}
            <span className="w-full h-[2px] bg-white"></span>
            <span className="w-full h-[2px] bg-white"></span>
            <span className="w-full h-[2px] bg-white"></span>
          </button>
          
        </div>
        {/* ✅ Dropdown menu (shows when clicked) */}
        <AnimatePresence>
      {isOpen && (
         <motion.div 
          variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
         className="text-white mt-3 flex flex-col  bg-[#293628] p-3 gap-[0.7rem] rounded md:hidden absolute top-[4rem] z-[1000] h-[fit-conten] min-w-[10rem] right-[0.5rem]"
        >

        <Link
            to="footer"
            smooth={true}
            duration={500}
            className=" cursor-pointer "
          >
            About Us
          </Link>
          <Link to="#" smooth={true} duration={500} className=" dropdown">
            <p className="flex cursor-pointer gap-[5px]">
              Courses <img src={Arrow} alt="" className="" />
            </p>
            <div className="dropdown-content">
              <a href="#">Frontend Development</a>
              <a href="#">Backend Development</a>
              <a href="#">UI/UX Design</a>
              <a href="#">Cyber Security</a>
              <a href="#">Data Analysis</a>
            </div>
          </Link>
          <Link
            to="testimonials"
            smooth={true}
            duration={500}
            className=" cursor-pointer "
          >
            Testimonials
          </Link>
          <Link to="#" smooth={true} duration={500} className=" dropdown">
            <p className="flex items-cente cursor-pointer gap-[5px]">
              Portal <img src={Arrow} alt="" className="" />
            </p>
            <div className="dropdown-content">
              <a href="#">Student</a>
              <a href="#">Facilitator</a>
              <a href="#">Admin</a>
            </div>
          </Link>
          <Link
            to="contact-us"
            smooth={true}
            duration={500}
            className=" cursor-pointer "
          >
            Contact Us
          </Link>
        </motion.div>
      )}
      </AnimatePresence>

       
      </div>
    </section>
  );
};

export default Nav;
