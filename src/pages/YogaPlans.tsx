import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/yoga/Navigation";
import { Link } from "react-router-dom";
import {
  Heart,
  Target,
  Moon,
  Zap,
  Shield,
  ArrowRight,
  Clock,
  Users,
  TrendingUp,
  Sparkles,
} from "lucide-react";

const YogaPlans = () => {
  const plans = [
    {
      id: "stress-relief",
      title: "Stress Relief & Calm",
      description:
        "A comprehensive program designed to reduce anxiety and promote deep relaxation through gentle poses and breathing techniques.",
      duration: "4 weeks",
      sessions: "15-30 min daily",
      difficulty: "Beginner",
      image: "/placeholder.svg",
      poses: 25,
      color: "sage",
      benefits: ["Reduces anxiety", "Improves sleep", "Calms nervous system"],
      price: "Free",
    },
    {
      id: "heart-health",
      title: "Heart Health & Vitality",
      description:
        "Strengthen your cardiovascular system with poses specifically chosen to support heart health and improve circulation.",
      duration: "6 weeks",
      sessions: "20-40 min daily",
      difficulty: "Intermediate",
      image: "/placeholder.svg",
      poses: 35,
      color: "sky",
      benefits: [
        "Improves circulation",
        "Strengthens heart",
        "Lowers blood pressure",
      ],
      price: "Premium",
    },
    {
      id: "better-sleep",
      title: "Better Sleep & Recovery",
      description:
        "Evening routines and restorative poses to help you unwind and achieve deeper, more restful sleep naturally.",
      duration: "3 weeks",
      sessions: "10-20 min evening",
      difficulty: "Beginner",
      image: "/placeholder.svg",
      poses: 18,
      color: "serenity",
      benefits: ["Deeper sleep", "Faster recovery", "Reduces insomnia"],
      price: "Free",
    },
    {
      id: "weight-loss",
      title: "Weight Loss & Metabolism",
      description:
        "Dynamic sequences to boost metabolism, burn calories, and build lean muscle while maintaining mindful movement.",
      duration: "8 weeks",
      sessions: "30-45 min daily",
      difficulty: "Intermediate",
      image: "/placeholder.svg",
      poses: 45,
      color: "sage",
      benefits: ["Burns calories", "Builds muscle", "Boosts metabolism"],
      price: "Premium",
    },
    {
      id: "back-pain",
      title: "Back Pain Relief",
      description:
        "Therapeutic poses and gentle stretches specifically designed to alleviate back pain and strengthen your spine.",
      duration: "5 weeks",
      sessions: "15-25 min daily",
      difficulty: "Beginner",
      image: "/placeholder.svg",
      poses: 30,
      color: "sky",
      benefits: ["Relieves pain", "Strengthens spine", "Improves posture"],
      price: "Free",
    },
    {
      id: "diabetes-support",
      title: "Diabetes Support",
      description:
        "Gentle yet effective poses to help manage blood sugar levels and support overall metabolic health.",
      duration: "6 weeks",
      sessions: "20-30 min daily",
      difficulty: "Beginner",
      image: "/placeholder.svg",
      poses: 28,
      color: "serenity",
      benefits: ["Stabilizes blood sugar", "Improves insulin sensitivity"],
      price: "Premium",
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
              Guided Plans
            </Badge>
          </div>
          <h1 className="text-3xl lg:text-5xl font-serif font-bold mb-4 text-foreground">
            Personalized Yoga Plans
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Transform your health with expertly crafted yoga sequences designed
            for specific wellness goals. Each plan includes step-by-step
            guidance and progress tracking.
          </p>
        </div>

        {/* Plans Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {plans.map((plan) => (
            <Card
              key={plan.id}
              className="overflow-hidden bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className="relative aspect-[4/3] bg-gradient-to-br from-sky-50 to-serenity-50">
                <img
                  src={plan.image}
                  alt={plan.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <Badge
                    variant="secondary"
                    className="bg-white/90 backdrop-blur-sm text-foreground font-medium"
                  >
                    {plan.price}
                  </Badge>
                </div>
                <div className="absolute top-4 right-4">
                  <Badge
                    variant="secondary"
                    className="bg-white/90 backdrop-blur-sm text-foreground font-medium"
                  >
                    {plan.difficulty}
                  </Badge>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-foreground group-hover:text-sky-600 transition-colors duration-300">
                  {plan.title}
                </h3>
                <p className="text-muted-foreground mb-4 text-sm">
                  {plan.description}
                </p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      {plan.sessions}
                    </div>
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <Target className="w-4 h-4" />
                      {plan.poses} poses
                    </div>
                  </div>

                  <div className="text-sm text-muted-foreground">
                    <strong>Duration:</strong> {plan.duration}
                  </div>

                  <div className="space-y-1">
                    <div className="text-sm font-medium text-foreground">
                      Key Benefits:
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {plan.benefits.slice(0, 2).map((benefit, index) => (
                        <Badge
                          key={index}
                          variant="outline"
                          className="text-xs bg-sky-50 text-sky-700 border-sky-200"
                        >
                          {benefit}
                        </Badge>
                      ))}
                      {plan.benefits.length > 2 && (
                        <Badge variant="outline" className="text-xs">
                          +{plan.benefits.length - 2} more
                        </Badge>
                      )}
                    </div>
                  </div>
                </div>

                <Button
                  asChild
                  className="w-full bg-gradient-to-r from-sky-500 to-serenity-600 hover:from-sky-600 hover:to-serenity-700 text-white group"
                >
                  <Link to={`/practice?plan=${plan.id}`}>
                    Start Plan
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <Card className="p-6 bg-gradient-to-br from-sage-50 to-sage-100 border-0">
            <div className="w-12 h-12 bg-sage-500 rounded-lg flex items-center justify-center mb-4">
              <Users className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Expert Guidance</h3>
            <p className="text-muted-foreground text-sm">
              All plans are created by certified yoga instructors and wellness
              experts with years of experience.
            </p>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-sky-50 to-sky-100 border-0">
            <div className="w-12 h-12 bg-sky-500 rounded-lg flex items-center justify-center mb-4">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Progress Tracking</h3>
            <p className="text-muted-foreground text-sm">
              Monitor your journey with detailed progress tracking and
              achievements to keep you motivated.
            </p>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-serenity-50 to-serenity-100 border-0">
            <div className="w-12 h-12 bg-serenity-500 rounded-lg flex items-center justify-center mb-4">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Safe & Adaptive</h3>
            <p className="text-muted-foreground text-sm">
              Each plan adapts to your progress level and includes safety
              modifications for all body types.
            </p>
          </Card>
        </div>

        {/* CTA Section */}
        <Card className="p-8 lg:p-12 text-center bg-gradient-to-br from-sky-600 via-serenity-600 to-sage-600 text-white border-0">
          <h2 className="text-2xl lg:text-4xl font-serif font-bold mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-lg mb-8 text-white/90 max-w-2xl mx-auto">
            Choose a plan that resonates with your goals and begin transforming
            your health today. Your body and mind will thank you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-white text-sky-600 hover:bg-white/90 rounded-full px-8 font-medium"
            >
              <Link to="/asanas">
                <Zap className="w-5 h-5 mr-2" />
                Browse Poses First
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-white/30 text-white hover:bg-white/10 rounded-full px-8 font-medium"
            >
              <Heart className="w-5 h-5 mr-2" />
              Get Premium Access
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default YogaPlans;
