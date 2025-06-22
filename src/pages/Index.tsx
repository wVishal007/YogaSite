import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/yoga/Navigation";
import { yogaPoses, categories } from "@/data/poses";
import {
  ArrowRight,
  Heart,
  Target,
  Users,
  BookOpen,
  Star,
  Play,
  Clock,
  TrendingUp,
  Sparkles,
  Shield,
  Zap,
} from "lucide-react";
import { cn } from "@/lib/utils";

const Index = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const features = [
    {
      icon: Target,
      title: "Personalized Practice",
      description:
        "Filter by body type, health conditions, and experience level for poses tailored to you.",
      color: "sky",
    },
    {
      icon: BookOpen,
      title: "1000+ Asanas",
      description:
        "Complete library with Sanskrit names, step-by-step instructions, and animated guides.",
      color: "sage",
    },
    {
      icon: Heart,
      title: "Health-Focused",
      description:
        "Specific routines for heart health, diabetes, anxiety, back pain, and more conditions.",
      color: "serenity",
    },
    {
      icon: Users,
      title: "All Body Types",
      description:
        "Whether you're lean, muscular, flexible, or stiff - find poses that work for your body.",
      color: "sky",
    },
  ];

  const yogaPlans = [
    {
      id: "stress-relief",
      title: "Stress Relief",
      description: "Calming poses to reduce anxiety and promote relaxation",
      duration: "15-30 min",
      difficulty: "Beginner",
      image: "/placeholder.svg",
      poses: 12,
      color: "sage",
    },
    {
      id: "healthy-heart",
      title: "Heart Health",
      description: "Gentle poses to support cardiovascular wellness",
      duration: "20-40 min",
      difficulty: "Intermediate",
      image: "/placeholder.svg",
      poses: 18,
      color: "sky",
    },
    {
      id: "better-sleep",
      title: "Better Sleep",
      description: "Evening routine for deep, restful sleep",
      duration: "10-20 min",
      difficulty: "Beginner",
      image: "/placeholder.svg",
      poses: 8,
      color: "serenity",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Yoga Instructor",
      content:
        "Yogapedia has revolutionized how I teach. The detailed filtering helps me create perfect sequences for each student's unique needs.",
      rating: 5,
      image: "/placeholder.svg",
    },
    {
      name: "Michael Rodriguez",
      role: "Beginner Practitioner",
      content:
        "As someone with back pain, finding the right poses was challenging. Yogapedia's health filters made it so much easier!",
      rating: 5,
      image: "/placeholder.svg",
    },
    {
      name: "Dr. Priya Patel",
      role: "Wellness Expert",
      content:
        "The scientific approach to categorizing poses by health benefits is impressive. I recommend this to all my patients.",
      rating: 5,
      image: "/placeholder.svg",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-serenity-50">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-sky-100/50 via-transparent to-sage-100/30" />
        <div className="absolute top-20 right-10 w-64 h-64 bg-gradient-to-br from-sky-200/30 to-serenity-200/30 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-20 left-10 w-48 h-48 bg-gradient-to-br from-sage-200/30 to-sky-200/30 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <Badge
              variant="secondary"
              className="mb-6 bg-white/80 backdrop-blur-sm text-sky-700 border-sky-200 px-4 py-2 text-sm"
            >
              <Sparkles className="w-4 h-4 mr-2" />
              Welcome to the Future of Yoga Learning
            </Badge>

            {/* Heading */}
            <h1 className="text-4xl lg:text-7xl font-serif font-bold mb-6 bg-gradient-to-br from-sky-600 via-serenity-600 to-sage-600 bg-clip-text text-transparent leading-tight">
              Master 1000+ Yoga Asanas Tailored to Your Body, Health & Spirit
            </h1>

            {/* Subheading */}
            <p className="text-xl lg:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Discover personalized yoga sequences based on your body type,
              health conditions, and experience level. Find inner peace through
              ancient wisdom.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-sky-500 to-serenity-600 hover:from-sky-600 hover:to-serenity-700 text-white rounded-full px-8 py-6 text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <Link to="/asanas">
                  <Target className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                  Explore Yoga for You
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="border-2 border-sage-300 text-sage-700 hover:bg-sage-50 rounded-full px-8 py-6 text-lg font-medium backdrop-blur-sm bg-white/80 group"
              >
                <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
                Watch Demo
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div className="text-center group">
                <div className="text-3xl lg:text-4xl font-bold text-sky-600 mb-2 group-hover:scale-110 transition-transform duration-300">
                  {yogaPoses.length}+
                </div>
                <div className="text-sm text-muted-foreground">Yoga Poses</div>
              </div>
              <div className="text-center group">
                <div className="text-3xl lg:text-4xl font-bold text-sage-600 mb-2 group-hover:scale-110 transition-transform duration-300">
                  {categories.length}
                </div>
                <div className="text-sm text-muted-foreground">
                  Pose Categories
                </div>
              </div>
              <div className="text-center group">
                <div className="text-3xl lg:text-4xl font-bold text-serenity-600 mb-2 group-hover:scale-110 transition-transform duration-300">
                  100k+
                </div>
                <div className="text-sm text-muted-foreground">
                  Happy Practitioners
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-serif font-bold mb-6 text-foreground">
              Why Choose Yogapedia?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experience yoga like never before with our intelligent filtering
              system and comprehensive pose library.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="p-6 text-center bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
              >
                <div
                  className={cn(
                    "w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300",
                    feature.color === "sky" &&
                      "bg-gradient-to-br from-sky-100 to-sky-200",
                    feature.color === "sage" &&
                      "bg-gradient-to-br from-sage-100 to-sage-200",
                    feature.color === "serenity" &&
                      "bg-gradient-to-br from-serenity-100 to-serenity-200",
                  )}
                >
                  <feature.icon
                    className={cn(
                      "w-8 h-8",
                      feature.color === "sky" && "text-sky-600",
                      feature.color === "sage" && "text-sage-600",
                      feature.color === "serenity" && "text-serenity-600",
                    )}
                  />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Yoga Plans Preview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-serif font-bold mb-6 text-foreground">
              Guided Yoga Plans
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ready-made sequences designed by experts for specific health goals
              and wellness outcomes.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {yogaPlans.map((plan, index) => (
              <Card
                key={plan.id}
                className="overflow-hidden bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group cursor-pointer"
              >
                <div className="relative aspect-[4/3] bg-gradient-to-br from-sky-50 to-serenity-50">
                  <img
                    src={plan.image}
                    alt={plan.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge
                      variant="secondary"
                      className={cn(
                        "backdrop-blur-sm font-medium",
                        plan.color === "sage" &&
                          "bg-sage-100/90 text-sage-700 border-sage-200",
                        plan.color === "sky" &&
                          "bg-sky-100/90 text-sky-700 border-sky-200",
                        plan.color === "serenity" &&
                          "bg-serenity-100/90 text-serenity-700 border-serenity-200",
                      )}
                    >
                      {plan.difficulty}
                    </Badge>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-foreground group-hover:text-sky-600 transition-colors duration-300">
                    {plan.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {plan.description}
                  </p>

                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {plan.duration}
                      </div>
                      <div className="flex items-center gap-1">
                        <Target className="w-4 h-4" />
                        {plan.poses} poses
                      </div>
                    </div>
                  </div>

                  <Button
                    asChild
                    variant="outline"
                    className="w-full group-hover:bg-sky-50 group-hover:border-sky-300 group-hover:text-sky-700 transition-colors duration-300"
                  >
                    <Link to="/practice">
                      Start Practice
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-2 border-sky-300 text-sky-700 hover:bg-sky-50 rounded-full px-8 py-6"
            >
              <Link to="/plans">
                View All Plans
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-br from-sage-50 to-sky-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-serif font-bold mb-6 text-foreground">
              Loved by Practitioners Worldwide
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Join thousands who have transformed their practice with Yogapedia.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="p-8 lg:p-12 text-center bg-white/80 backdrop-blur-sm border-0 shadow-xl">
              <div className="flex justify-center mb-6">
                {[...Array(testimonials[currentTestimonial].rating)].map(
                  (_, i) => (
                    <Star
                      key={i}
                      className="w-6 h-6 text-yellow-400 fill-current"
                    />
                  ),
                )}
              </div>

              <blockquote className="text-xl lg:text-2xl text-foreground mb-8 italic font-serif leading-relaxed">
                "{testimonials[currentTestimonial].content}"
              </blockquote>

              <div className="flex items-center justify-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-sky-200 to-serenity-200 rounded-full flex items-center justify-center">
                  <img
                    src={testimonials[currentTestimonial].image}
                    alt={testimonials[currentTestimonial].name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                </div>
                <div className="text-left">
                  <div className="font-semibold text-foreground">
                    {testimonials[currentTestimonial].name}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonials[currentTestimonial].role}
                  </div>
                </div>
              </div>

              {/* Testimonial Indicators */}
              <div className="flex justify-center gap-2 mt-8">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={cn(
                      "w-3 h-3 rounded-full transition-all duration-300",
                      index === currentTestimonial
                        ? "bg-sky-500"
                        : "bg-sky-200 hover:bg-sky-300",
                    )}
                  />
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-sky-600 via-serenity-600 to-sage-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10" />
        <div className="absolute top-10 right-10 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-10 left-10 w-48 h-48 bg-white/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "3s" }}
        />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl lg:text-5xl font-serif font-bold mb-6">
              Begin Your Yoga Journey Today
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Join our community and discover the perfect yoga practice for your
              unique body and health needs.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-white text-sky-600 hover:bg-white/90 rounded-full px-8 py-6 text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <Link to="/asanas">
                  <Zap className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
                  Start Exploring
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="border-2 border-white/30 text-white hover:bg-white/10 rounded-full px-8 py-6 text-lg font-medium backdrop-blur-sm"
              >
                <Shield className="w-5 h-5 mr-2" />
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-foreground text-white">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-sky-500 to-serenity-600 rounded-full flex items-center justify-center">
                <Heart className="w-4 h-4 text-white" />
              </div>
              <span className="text-xl font-serif font-semibold">
                Yogapedia
              </span>
            </div>
            <p className="text-white/70 mb-6">
              Connecting ancient wisdom with modern wellness
            </p>
            <div className="flex justify-center gap-8 text-sm text-white/60">
              <Link
                to="/privacy"
                className="hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link
                to="/contact"
                className="hover:text-white transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
