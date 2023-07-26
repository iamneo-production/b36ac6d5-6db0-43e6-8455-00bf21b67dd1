import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaHome } from "react-icons/fa";
import { RiFileAddFill } from "react-icons/ri";
import { CiBadgeDollar } from "react-icons/ci";
import { CiBullhorn } from "react-icons/ci";
import { ImTicket } from "react-icons/im";
import { BiTask } from "react-icons/bi";
import { BiSolidUserCircle } from "react-icons/bi";
import { MdEmail } from "react-icons/md";
import { AnimatePresence, motion } from "framer-motion";

const routes = [
  {
    path: "/",
    name: "Dashboard",
    icon: <FaHome />,
  },
  {
    path: "/email",
    name: "Email",
    icon: <MdEmail className="custom-email-icon" />,
  },
  {
    path: "/lead",
    name: "Leads",
    icon: <RiFileAddFill />,
  },
  {
    path: "/customer",
    name: "Customers",
    icon: <BiSolidUserCircle />,
  },
  {
    path: "/oppo",
    name: "Opportunities",
    icon: <CiBullhorn />,
  },
  {
    path: "/sale",
    name: "Sales",
    icon: <CiBadgeDollar />,
  },
  {
    path: "/task",
    name: "Tasks",
    icon: <BiTask />,
  },
  {
    path: "/ticket",
    name: "Tickets",
    icon: <ImTicket />,
  },
];

const SideBar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);
  const toggle = () => setIsOpen(!isOpen);

  const showAnimation = {
    hidden: {
      width: 0,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
    show: {
      opacity: 1,
      width: "auto",
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="sidebar-container">
      <div className={`sidebar ${isOpen ? "open" : "closed"}`}>
        <div className="top-section">
          <AnimatePresence>
            {isOpen && (
              <motion.h1
                variants={showAnimation}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="logo"
              >
                CRM
              </motion.h1>
            )}
          </AnimatePresence>

          <div className="bars">
            <FaBars onClick={toggle} />
          </div>
        </div>
        
        <section className="routes">
          {routes.map((route) => (
            <NavLink
              activeClassName="active"
              to={route.path}
              key={route.name}
              className="link"
            >
              <div className="icon">{route.icon}</div>
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    variants={showAnimation}
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                    className="link-text"
                  >
                    {route.name}
                  </motion.div>
                )}
              </AnimatePresence>
            </NavLink>
          ))}
        </section>
      </div>
      <main>{children}</main>
    </div>
  );
};

export default SideBar;
