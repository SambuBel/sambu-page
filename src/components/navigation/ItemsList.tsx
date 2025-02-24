"use client";
import { FaHome, FaUser, FaBriefcase, FaCode, FaEnvelope, FaEllipsisH } from "react-icons/fa";
import { useState, useEffect } from "react";

export default function ItemsList() {
  const menuItems = [
    { name: "Inicio", id: "home", icon: <FaHome /> },
    { name: "Sobre mí", id: "about", icon: <FaUser /> },
    { name: "Experiencia", id: "experience", icon: <FaBriefcase /> },
    { name: "Portfolio", id: "portfolio", icon: <FaCode /> },
    { name: "Contacto", id: "contact", icon: <FaEnvelope /> },
  ];

  const [visibleItems, setVisibleItems] = useState(menuItems);
  const [hiddenItems, setHiddenItems] = useState([]);

  useEffect(() => {
    function updateMenu() {
      const width = window.innerWidth;
      if (width < 1024) {
        setVisibleItems([]);
        setHiddenItems(menuItems);
      } else if (width < 1280) {
        setVisibleItems(menuItems.slice(0, 3));
        setHiddenItems(menuItems.slice(3));
      } else {
        setVisibleItems(menuItems);
        setHiddenItems([]);
      }
    }

    updateMenu();
    window.addEventListener("resize", updateMenu);
    return () => window.removeEventListener("resize", updateMenu);
  }, []);

  // Función para hacer scroll suave
  const handleSmoothScroll = (id: string) => {
    if (id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <div className="flex items-center">
      <ul className="menu menu-horizontal hidden lg:flex bg-gradient-to-r from-[#0a192f] to-[#6a0dad] text-white rounded-md px-4">
        {visibleItems.map((item, index) => (
          <li key={index} className="h-8 flex items-center">
            <button
              onClick={() => handleSmoothScroll(item.id)}
              className="flex items-center gap-2 hover:bg-white/20 px-3 py-1 rounded-md transition-all"
            >
              {item.icon} {item.name}
            </button>
          </li>
        ))}
      </ul>

      {hiddenItems.length > 0 && (
        <div className="dropdown dropdown-end lg:flex hidden">
          <label tabIndex={0} className="btn btn-ghost">
            <FaEllipsisH className="text-xl text-white" />
          </label>
          <ul
            tabIndex={0}
            className="menu dropdown-content z-[1] p-2 shadow bg-gradient-to-r from-[#0a192f] to-[#6a0dad] text-white rounded-box w-44"
          >
            {hiddenItems.map((item, index) => (
              <li key={index}>
                <button
                  onClick={() => handleSmoothScroll(item.id)}
                  className="flex items-center gap-2 hover:bg-white/20 px-3 py-1 rounded-md transition-all"
                >
                  {item.icon} {item.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="dropdown lg:hidden">
        <label tabIndex={0} className="btn btn-ghost text-white">
          ☰
        </label>
        <ul
          tabIndex={0}
          className="menu dropdown-content z-[1] p-2 shadow bg-gradient-to-r from-[#0a192f] to-[#6a0dad] text-white rounded-box w-44"
        >
          {menuItems.map((item, index) => (
            <li key={index}>
              <button
                onClick={() => handleSmoothScroll(item.id)}
                className="flex items-center gap-2 hover:bg-white/20 px-3 py-1 rounded-md transition-all"
              >
                {item.icon} {item.name}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
