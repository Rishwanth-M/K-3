import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { useNavigate, Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../../assets/logo.png";
import { useAuth } from "../../context/AuthContext";
import { createPortal } from "react-dom";

export default function Navbar({ variant }) {
  const [open, setOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [active, setActive] = useState("");

  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  // 🔥 SCROLL ACTIVE DETECTION (HOME ONLY)
  useEffect(() => {
    if (location.pathname !== "/") return;

    const sections = ["program", "steps", "benefits"];

    const handleScroll = () => {
      let current = "";
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) {
          const offset = el.offsetTop - 120;
          if (window.scrollY >= offset) current = id;
        }
      });
      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  // 🔥 CLICK HANDLER (SMART NAVIGATION)
  const goToSection = (id) => {
    setDropdown(false);
    setOpen(false);

    // 👉 ONLY smooth scroll on HOME
    if (location.pathname === "/") {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    } else {
      // 👉 ALL OTHER PAGES (especially coaches)
      navigate(`/#${id}`);
    }
  };

  const itemClass = (id) =>
    `text-left transition ${
      active === id ? "text-green-400" : "text-white hover:text-green-400"
    }`;

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-black/30 border-b border-white/10">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <img src={logo} className="w-16 h-16" />
          <h1 className="text-xl font-bold">KREEDENTIALS</h1>
        </div>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8 text-sm">

          <Link to="/" className="text-lg text-white hover:text-green-400">
            Home
          </Link>

          {/* 🔥 PROGRAM DROPDOWN (CLICK BASED) */}
          <div className="relative">
            <div
              onClick={() => setDropdown(!dropdown)}
              className="flex items-center gap-1 cursor-pointer text-lg text-white hover:text-green-400"
            >
              Program <ChevronDown size={16} />
            </div>

            <AnimatePresence>
              {dropdown && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95, y: -10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-10 left-0 bg-[#0b0f0f]/95 backdrop-blur-xl border border-white/10 rounded-xl shadow-xl p-4 flex flex-col gap-3 w-52"
                >
                  <button onClick={() => goToSection("program")} className={itemClass("program")}>
                    Program
                  </button>

                  <button onClick={() => goToSection("steps")} className={itemClass("steps")}>
                    How it works
                  </button>

                  <button onClick={() => goToSection("benefits")} className={itemClass("benefits")}>
                    Benefits
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link to="/coaches" className="text-lg text-white hover:text-green-400">
            Coaches
          </Link>

          <Link to="/contact" className="text-lg text-white hover:text-green-400">
            Contact
          </Link>

          {/* Buttons */}
          <div className="flex items-center gap-4 ml-4">

  {location.pathname === "/township" ? (
    <button
      onClick={() => {
        if (!user) {
          navigate("/login");
        } else {
          navigate("/enroll");
        }
      }}
      className="bg-green-500 text-black px-5 py-2 rounded-lg hover:bg-green-400 transition shadow-lg shadow-green-500/30"
    >
      Enroll Now
    </button>
  ) : (
    <button
      onClick={() => navigate("/township")}
      className="bg-green-500 text-black px-5 py-2 rounded-lg hover:bg-green-400 transition"
    >
      Township Program
    </button>
  )}

  <a
    href="https://kreedentials.in/"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-green-500 text-black px-5 py-2 rounded-lg hover:bg-green-400 transition"
  >
    𝐎𝐮𝐫 𝐌𝐞𝐫𝐜𝐡𝐚𝐧𝐝𝐢𝐬𝐞
  </a>
</div>
        </div>

        {/* Mobile Button */}
        <div className="md:hidden">
          <Menu onClick={() => setOpen(true)} />
        </div>
      </div>

      {open &&
  createPortal(
    <>
      {/* Overlay */}
      <motion.div
        className="fixed inset-0 bg-black/90 z-[9998]"
        onClick={() => setOpen(false)}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      />

      {/* Drawer */}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ duration: 0.3 }}
        className="fixed right-0 top-0 w-[80%] max-w-sm h-full z-[9999]
        bg-black text-white
        border-l border-white/10 shadow-2xl
        p-6 flex flex-col gap-6"
      >
        {/* Top */}
        <div className="flex justify-between items-center">
          <h2 className="text-green-400">Menu</h2>
          <X onClick={() => setOpen(false)} className="cursor-pointer" />
        </div>

        <Link to="/" onClick={() => setOpen(false)}>Home</Link>

        {/* Program */}
        <div className="flex flex-col">
          <button
            onClick={() => setDropdown(!dropdown)}
            className="flex justify-between items-center text-green-400"
          >
            Program
            <span className={`${dropdown ? "rotate-180" : ""}`}>▼</span>
          </button>

          {dropdown && (
            <div className="flex flex-col gap-3 mt-3 pl-3 border-l border-white/10">
              <button onClick={() => goToSection("program")}>Program</button>
              <button onClick={() => goToSection("steps")}>How it works</button>
              <button onClick={() => goToSection("benefits")}>Benefits</button>
            </div>
          )}
        </div>

        <Link to="/coaches" onClick={() => setOpen(false)}>Coaches</Link>
        <Link to="/contact" onClick={() => setOpen(false)}>Contact</Link>

        {/* Buttons */}
        <div className="flex flex-col gap-4 mt-4">
          {location.pathname === "/township" ? (
  <button
    onClick={() => {
      if (!user) {
        navigate("/login");
      } else {
        navigate("/enroll");
      }
      setOpen(false);
    }}
    className="bg-green-500 text-black px-4 py-2 rounded-lg hover:bg-green-400 transition"
  >
    Enroll Now
  </button>
) : (
  <button
    onClick={() => {
      navigate("/township");
      setOpen(false);
    }}
    className="bg-green-500 text-black px-4 py-2 rounded-lg"
  >
    Township Program
  </button>
)}

          <a
            href="https://kreedentials.in/"
            target="_blank"
            className="bg-green-500 text-black px-4 py-2 rounded-lg text-center"
          >
            𝐎𝐮𝐫 𝐌𝐞𝐫𝐜𝐡𝐚𝐧𝐝𝐢𝐬𝐞
          </a>
        </div>
      </motion.div>
    </>,
    document.body
  )}
    </nav>
  );
}