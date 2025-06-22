import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/yoga/Navigation";
import { Link } from "react-router-dom";
import {
  BookOpen,
  Heart,
  Sparkles,
  ArrowRight,
  Clock,
  User,
  Wind,
  Brain,
  Utensils,
  Leaf,
} from "lucide-react";

const Learn = () => {
  const articles = [
    {
      id: "yoga-philosophy",
      title: "Understanding Yoga Philosophy",
      excerpt:
        "Explore the ancient wisdom behind yoga practice, from the eight limbs of yoga to finding inner peace.",
      category: "Philosophy",
      readTime: "8 min read",
      author: "Dr. Priya Sharma",
      image: "/placeholder.svg",
      featured: true,
    },
    {
      id: "pranayama-guide",
      title: "Complete Guide to Pranayama",
      excerpt:
        "Master the art of yogic breathing with detailed techniques for different types of pranayama practice.",
      category: "Breathing",
      readTime: "12 min read",
      author: "Yogi Rajesh",
      image: "/placeholder.svg",
      featured: true,
    },
    {
      id: "ayurvedic-diet",
      title: "Ayurvedic Diet for Yogis",
      excerpt:
        "Discover how to nourish your body according to ancient Ayurvedic principles to support your yoga practice.",
      category: "Nutrition",
      readTime: "10 min read",
      author: "Dr. Anita Gupta",
      image: "/placeholder.svg",
      featured: false,
    },
    {
      id: "meditation-techniques",
      title: "Meditation Techniques for Beginners",
      excerpt:
        "Learn simple yet powerful meditation practices to calm the mind and deepen your spiritual journey.",
      category: "Meditation",
      readTime: "6 min read",
      author: "Swami Krishnananda",
      image: "/placeholder.svg",
      featured: false,
    },
    {
      id: "yoga-anatomy",
      title: "Yoga Anatomy: Understanding Your Body",
      excerpt:
        "Explore how yoga poses affect your muscles, joints, and internal systems for safer, more effective practice.",
      category: "Anatomy",
      readTime: "15 min read",
      author: "Dr. Sarah Wilson",
      image: "/placeholder.svg",
      featured: false,
    },
    {
      id: "stress-management",
      title: "Using Yoga for Stress Management",
      excerpt:
        "Scientific insights into how yoga practice reduces stress hormones and promotes mental well-being.",
      category: "Wellness",
      readTime: "9 min read",
      author: "Dr. Michael Chen",
      image: "/placeholder.svg",
      featured: false,
    },
  ];

  const categories = [
    {
      name: "Philosophy",
      icon: Brain,
      count: 12,
      color: "sage",
      description: "Ancient wisdom and modern insights",
    },
    {
      name: "Breathing",
      icon: Wind,
      count: 8,
      color: "sky",
      description: "Pranayama techniques and benefits",
    },
    {
      name: "Nutrition",
      icon: Utensils,
      count: 15,
      color: "serenity",
      description: "Ayurvedic diet and healthy eating",
    },
    {
      name: "Meditation",
      icon: Heart,
      count: 10,
      color: "sage",
      description: "Mindfulness and inner peace",
    },
    {
      name: "Anatomy",
      icon: User,
      count: 6,
      color: "sky",
      description: "Understanding your body",
    },
    {
      name: "Wellness",
      icon: Leaf,
      count: 20,
      color: "serenity",
      description: "Holistic health approaches",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-serenity-50">
      <Navigation />

      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <Badge
              variant="secondary"
              className="bg-sage-100 text-sage-700 border-sage-200 px-3 py-1"
            >
              <Sparkles className="w-4 h-4 mr-1" />
              Learning Hub
            </Badge>
          </div>
          <h1 className="text-3xl lg:text-5xl font-serif font-bold mb-4 text-foreground">
            Deepen Your Yoga Knowledge
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Explore articles, guides, and resources covering yoga philosophy,
            pranayama breathing techniques, Ayurvedic nutrition, and holistic
            wellness practices.
          </p>
        </div>

        {/* Featured Articles */}
        <div className="mb-12">
          <h2 className="text-2xl font-serif font-semibold mb-6 text-foreground">
            Featured Articles
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {articles
              .filter((article) => article.featured)
              .map((article) => (
                <Card
                  key={article.id}
                  className="overflow-hidden bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group cursor-pointer"
                >
                  <div className="aspect-[16/9] bg-gradient-to-br from-sky-50 to-serenity-50">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-3">
                      <Badge
                        variant="outline"
                        className="bg-sky-50 text-sky-700 border-sky-200"
                      >
                        {article.category}
                      </Badge>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Clock className="w-4 h-4" />
                        {article.readTime}
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-foreground group-hover:text-sky-600 transition-colors duration-300">
                      {article.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 text-sm">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-muted-foreground">
                        By {article.author}
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-sky-600 hover:text-sky-700 hover:bg-sky-50 group"
                      >
                        Read More
                        <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
          </div>
        </div>

        {/* Categories */}
        <div className="mb-12">
          <h2 className="text-2xl font-serif font-semibold mb-6 text-foreground">
            Explore by Category
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category) => (
              <Card
                key={category.name}
                className="p-6 bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group cursor-pointer"
              >
                <div className="flex items-center gap-4 mb-3">
                  <div
                    className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                      category.color === "sage"
                        ? "bg-gradient-to-br from-sage-100 to-sage-200"
                        : category.color === "sky"
                          ? "bg-gradient-to-br from-sky-100 to-sky-200"
                          : "bg-gradient-to-br from-serenity-100 to-serenity-200"
                    }`}
                  >
                    <category.icon
                      className={`w-6 h-6 ${
                        category.color === "sage"
                          ? "text-sage-600"
                          : category.color === "sky"
                            ? "text-sky-600"
                            : "text-serenity-600"
                      }`}
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground group-hover:text-sky-600 transition-colors duration-300">
                      {category.name}
                    </h3>
                    <div className="text-sm text-muted-foreground">
                      {category.count} articles
                    </div>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  {category.description}
                </p>
              </Card>
            ))}
          </div>
        </div>

        {/* All Articles */}
        <div className="mb-12">
          <h2 className="text-2xl font-serif font-semibold mb-6 text-foreground">
            Recent Articles
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles
              .filter((article) => !article.featured)
              .map((article) => (
                <Card
                  key={article.id}
                  className="overflow-hidden bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group cursor-pointer"
                >
                  <div className="aspect-[16/9] bg-gradient-to-br from-sky-50 to-serenity-50">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4">
                    <div className="flex items-center gap-3 mb-2">
                      <Badge
                        variant="outline"
                        className="text-xs bg-sky-50 text-sky-700 border-sky-200"
                      >
                        {article.category}
                      </Badge>
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Clock className="w-3 h-3" />
                        {article.readTime}
                      </div>
                    </div>
                    <h3 className="font-semibold mb-2 text-foreground group-hover:text-sky-600 transition-colors duration-300 line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                      {article.excerpt}
                    </p>
                    <div className="text-xs text-muted-foreground">
                      By {article.author}
                    </div>
                  </div>
                </Card>
              ))}
          </div>
        </div>

        {/* CTA Section */}
        <Card className="p-8 lg:p-12 text-center bg-gradient-to-br from-sky-600 via-serenity-600 to-sage-600 text-white border-0">
          <h2 className="text-2xl lg:text-4xl font-serif font-bold mb-4">
            Continue Your Learning Journey
          </h2>
          <p className="text-lg mb-8 text-white/90 max-w-2xl mx-auto">
            Stay updated with the latest insights, research, and wisdom from the
            world of yoga and holistic wellness.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-white text-sky-600 hover:bg-white/90 rounded-full px-8 font-medium"
            >
              <Link to="/asanas">
                <BookOpen className="w-5 h-5 mr-2" />
                Practice Poses
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-white/30 text-white hover:bg-white/10 rounded-full px-8 font-medium"
            >
              <Heart className="w-5 h-5 mr-2" />
              Join Newsletter
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Learn;
