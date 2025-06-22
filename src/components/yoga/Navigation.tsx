import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Heart, Menu, X, Search, User, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { theme, setTheme } = useTheme();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Asana Library", path: "/asanas" },
    { name: "Yoga Plans", path: "/plans" },
    { name: "Practice", path: "/practice" },
    { name: "Learn", path: "/learn" },
    { name: "Body Scan", path: "/body-scan" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-gradient-to-br from-sky-500 to-serenity-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Heart className="w-4 h-4 text-white" />
            </div>
            <span className="text-xl font-serif font-semibold bg-gradient-to-r from-sky-600 to-sage-600 bg-clip-text text-transparent">
              Yogapedia
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex items-center gap-6">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={cn(
                    "text-sm font-medium transition-all duration-300 hover:text-sky-600 relative",
                    isActive(item.path)
                      ? "text-sky-600"
                      : "text-muted-foreground",
                  )}
                >
                  {item.name}
                  {isActive(item.path) && (
                    <div className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-sky-500 to-serenity-500 rounded-full" />
                  )}
                </Link>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="w-9 h-9 p-0"
              >
                {theme === "dark" ? (
                  <Sun className="w-4 h-4" />
                ) : (
                  <Moon className="w-4 h-4" />
                )}
              </Button>

              <Button variant="ghost" size="sm" className="w-9 h-9 p-0">
                <Search className="w-4 h-4" />
              </Button>

              <Button variant="ghost" size="sm" className="w-9 h-9 p-0">
                <User className="w-4 h-4" />
              </Button>

              <Button className="bg-gradient-to-r from-sky-500 to-serenity-600 hover:from-sky-600 hover:to-serenity-700 text-white rounded-full px-6">
                Get Started
              </Button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden w-9 h-9 p-0"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-sky-600 px-2 py-1",
                    isActive(item.path)
                      ? "text-sky-600 bg-sky-50 rounded-md"
                      : "text-muted-foreground",
                  )}
                >
                  {item.name}
                </Link>
              ))}

              <div className="flex items-center justify-between pt-4 border-t border-border">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  className="flex items-center gap-2"
                >
                  {theme === "dark" ? (
                    <>
                      <Sun className="w-4 h-4" />
                      Light Mode
                    </>
                  ) : (
                    <>
                      <Moon className="w-4 h-4" />
                      Dark Mode
                    </>
                  )}
                </Button>

                <Button className="bg-gradient-to-r from-sky-500 to-serenity-600 hover:from-sky-600 hover:to-serenity-700 text-white rounded-full px-6">
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
