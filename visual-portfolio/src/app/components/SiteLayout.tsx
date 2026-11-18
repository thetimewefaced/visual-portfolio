import { useEffect, useState } from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router";
import { Menu, X } from "lucide-react";

const navItems = [
  { to: "/", label: "Work" },
  { to: "/about", label: "About" },
  { to: "/resume", label: "Resume" },
];

export function SiteLayout() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
    if (location.hash) {
      window.requestAnimationFrame(() => document.querySelector(location.hash)?.scrollIntoView());
    } else {
      window.scrollTo({ top: 0, behavior: "instant" });
    }
  }, [location.pathname, location.hash]);

  return (
    <>
      <a className="skip-link" href="#main-content">跳至主要内容</a>
      <header className="site-header">
        <Link className="wordmark" to="/" aria-label="返回首页">
          <span>YOUR NAME</span>
          <small>Visual Designer</small>
        </Link>
        <nav className="desktop-nav" aria-label="主要导航">
          {navItems.map((item) => (
            <NavLink key={item.to} to={item.to} end={item.to === "/"}>
              {item.label}
            </NavLink>
          ))}
        </nav>
        <button className="menu-button" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-nav" aria-label={open ? "关闭菜单" : "打开菜单"}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
        <nav id="mobile-nav" className={`mobile-nav ${open ? "is-open" : ""}`} aria-label="移动端导航">
          {navItems.map((item, index) => (
            <NavLink key={item.to} to={item.to} end={item.to === "/"}>
              <span>0{index + 1}</span>{item.label}
            </NavLink>
          ))}
        </nav>
      </header>
      <main id="main-content">
        <Outlet />
      </main>
      <footer className="site-footer">
        <div>
          <p className="eyebrow">Available for opportunities</p>
          <Link className="footer-cta" to="/about#contact">Let’s make something<br />with intention.</Link>
        </div>
        <div className="footer-meta">
          <span>© {new Date().getFullYear()} YOUR NAME</span>
          <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>Back to top ↑</button>
        </div>
      </footer>
    </>
  );
}
