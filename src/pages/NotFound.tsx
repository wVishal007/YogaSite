import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navigation from "@/components/yoga/Navigation";
import { Link } from "react-router-dom";
import { Home, Search, Heart, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-serenity-50">
      <Navigation />

      <div className="container mx-auto px-4 py-20">
        <div className="max-w-2xl mx-auto text-center">
          <Card className="p-12 bg-white/80 backdrop-blur-sm border-0 shadow-xl">
            {/* Lotus Icon */}
            <div className="w-24 h-24 mx-auto mb-8 bg-gradient-to-br from-sky-100 to-serenity-100 rounded-full flex items-center justify-center">
              <Heart className="w-12 h-12 text-sky-600" />
            </div>

            {/* 404 Text */}
            <h1 className="text-6xl lg:text-8xl font-serif font-bold mb-4 bg-gradient-to-br from-sky-600 via-serenity-600 to-sage-600 bg-clip-text text-transparent">
              404
            </h1>

            {/* Message */}
            <h2 className="text-2xl lg:text-3xl font-serif font-semibold mb-4 text-foreground">
              Page Not Found
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-md mx-auto">
              The page you're looking for seems to have wandered off the path.
              Let's guide you back to your yoga journey.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-sky-500 to-serenity-600 hover:from-sky-600 hover:to-serenity-700 text-white rounded-full px-8"
              >
                <Link to="/">
                  <Home className="w-5 h-5 mr-2" />
                  Return Home
                </Link>
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-2 border-sky-300 text-sky-700 hover:bg-sky-50 rounded-full px-8"
              >
                <Link to="/asanas">
                  <Search className="w-5 h-5 mr-2" />
                  Explore Poses
                </Link>
              </Button>
            </div>

            {/* Back Link */}
            <Button
              variant="ghost"
              onClick={() => window.history.back()}
              className="mt-6 text-muted-foreground hover:text-foreground"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Go Back
            </Button>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
