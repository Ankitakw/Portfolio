import { useState, useEffect } from "react";
import { Moon, Sun, Menu, X, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { portfolioData } from "@/data/portfolio";

const navItems = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export function FloatingNav() {
  const [isDark, setIsDark] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const shouldBeDark = saved === "dark" || (!saved && prefersDark);
    setIsDark(shouldBeDark);
    document.documentElement.classList.toggle("dark", shouldBeDark);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    localStorage.setItem("theme", newTheme ? "dark" : "light");
    document.documentElement.classList.toggle("dark", newTheme);
  };

  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <>
      {/* Desktop Nav - Bottom Right Corner */}
      <nav
        className={`floating-nav hidden lg:flex items-center gap-1 p-2 rounded-full transition-all duration-500 ${
          scrolled
            ? "bottom-6 right-6 bg-card/90"
            : "bottom-8 right-8 bg-card/70"
        }`}
      >
        {navItems.map((item) => (
          <button
            key={item.href}
            onClick={() => scrollTo(item.href)}
            className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-primary rounded-full hover:bg-primary/10 transition-all duration-300"
          >
            {item.label}
          </button>
        ))}
        <div className="w-px h-6 bg-border mx-2" />
        <Button
          variant="ghost"
          size="icon"
          onClick={toggleTheme}
          className="rounded-full hover:bg-primary/10"
        >
          {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
        </Button>
      </nav>

      {/* Mobile Nav Toggle */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`lg:hidden floating-nav bottom-6 right-6 p-4 rounded-full bg-primary text-primary-foreground shadow-glow ${
          isOpen ? "rotate-90" : ""
        } transition-transform duration-300`}
      >
        {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 z-40 bg-background/95 backdrop-blur-xl flex flex-col items-center justify-center gap-6 animate-fade-in">
          {navItems.map((item, index) => (
            <button
              key={item.href}
              onClick={() => scrollTo(item.href)}
              className="text-2xl font-display font-semibold text-foreground hover:text-primary transition-colors"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {item.label}
            </button>
          ))}
          <div className="flex items-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={toggleTheme}
              className="rounded-full"
            >
              {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </Button>
          </div>
        </div>
      )}

      {/* Top Left Logo */}
      <div className="fixed top-6 left-6 z-50">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="font-display text-xl font-bold text-gradient"
        >
          {portfolioData.personal.firstName[0]}{portfolioData.personal.lastName[0]}
        </button>
      </div>
    </>
  );
}
