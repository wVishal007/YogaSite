import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Navigation from "@/components/yoga/Navigation";
import {
  Camera,
  Upload,
  Sparkles,
  ArrowRight,
  Check,
  Star,
  Zap,
  Shield,
  Brain,
  Target,
  Heart,
  AlertCircle,
} from "lucide-react";
import { cn } from "@/lib/utils";

const BodyScan = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    age: "",
    height: "",
    weight: "",
    fitnessLevel: "",
    healthConditions: "",
    goals: "",
    experience: "",
    availability: "",
  });

  const features = [
    {
      icon: Brain,
      title: "AI-Powered Analysis",
      description:
        "Advanced computer vision analyzes your posture, body alignment, and flexibility markers.",
    },
    {
      icon: Target,
      title: "Personalized Recommendations",
      description:
        "Get poses specifically tailored to your body type, limitations, and wellness goals.",
    },
    {
      icon: Shield,
      title: "Safety First",
      description:
        "Our AI identifies potential risk factors and suggests modifications for safe practice.",
    },
    {
      icon: Heart,
      title: "Holistic Approach",
      description:
        "Combines physical assessment with health history for comprehensive yoga guidance.",
    },
  ];

  const steps = [
    {
      id: 1,
      title: "Body Assessment",
      description: "Upload photos or complete our assessment questionnaire",
    },
    {
      id: 2,
      title: "Health Profile",
      description: "Tell us about your health conditions and fitness goals",
    },
    {
      id: 3,
      title: "AI Analysis",
      description: "Our AI processes your information and creates your profile",
    },
    {
      id: 4,
      title: "Custom Plan",
      description: "Receive your personalized yoga routine and recommendations",
    },
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-serenity-50">
      <Navigation />

      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Badge
              variant="secondary"
              className="bg-serenity-100 text-serenity-700 border-serenity-200 px-3 py-1"
            >
              <Sparkles className="w-4 h-4 mr-1" />
              AI Body Scan
            </Badge>
          </div>
          <h1 className="text-3xl lg:text-5xl font-serif font-bold mb-4 text-foreground">
            Personalized Yoga with AI
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Upload a photo or complete our assessment to get a personalized yoga
            plan tailored to your unique body type, health conditions, and
            wellness goals.
          </p>
        </div>

        {/* Coming Soon Notice */}
        <Card className="p-8 mb-12 text-center bg-gradient-to-br from-amber-50 to-orange-50 border-amber-200">
          <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full flex items-center justify-center">
            <Zap className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-2xl font-serif font-bold mb-2 text-amber-800">
            Coming Soon: AI Body Scan
          </h2>
          <p className="text-amber-700 mb-6">
            We're putting the finishing touches on our revolutionary AI-powered
            body assessment tool. Join our waitlist to be the first to
            experience personalized yoga like never before.
          </p>
          <Button className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white rounded-full px-8">
            Join Waitlist
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </Card>

        {/* How It Works */}
        <div className="mb-12">
          <h2 className="text-2xl lg:text-3xl font-serif font-bold text-center mb-8 text-foreground">
            How AI Body Scan Works
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {steps.map((stepItem, index) => (
              <div key={stepItem.id} className="text-center">
                <div className="relative mb-4">
                  <div
                    className={cn(
                      "w-12 h-12 mx-auto rounded-full flex items-center justify-center text-white font-bold text-lg",
                      index < step
                        ? "bg-sky-500"
                        : index === step - 1
                          ? "bg-sky-500"
                          : "bg-gray-300",
                    )}
                  >
                    {index < step ? <Check className="w-6 h-6" /> : stepItem.id}
                  </div>
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-6 left-[calc(50%+24px)] w-[calc(100%-48px)] h-0.5 bg-gray-300" />
                  )}
                </div>
                <h3 className="font-semibold mb-2 text-foreground">
                  {stepItem.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {stepItem.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Demo Assessment Form */}
        <div className="max-w-2xl mx-auto mb-12">
          <Card className="p-8 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <div className="flex items-center gap-2 mb-6">
              <AlertCircle className="w-5 h-5 text-sky-600" />
              <h3 className="text-xl font-semibold text-foreground">
                Try Our Assessment Demo
              </h3>
            </div>
            <p className="text-muted-foreground mb-6">
              While we finalize our AI technology, you can experience our
              assessment questionnaire that will power the personalized
              recommendations.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Photo Upload Option */}
              <Card className="p-6 text-center border-2 border-dashed border-sky-300 bg-sky-50/50 hover:bg-sky-50 transition-colors duration-300 cursor-pointer group">
                <Camera className="w-12 h-12 mx-auto mb-4 text-sky-600 group-hover:scale-110 transition-transform duration-300" />
                <h4 className="font-semibold mb-2 text-foreground">
                  Upload Photos
                </h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Take front and side photos for AI analysis (coming soon)
                </p>
                <Button
                  variant="outline"
                  className="border-sky-300 text-sky-700 hover:bg-sky-50"
                  disabled
                >
                  <Upload className="w-4 h-4 mr-2" />
                  Coming Soon
                </Button>
              </Card>

              {/* Manual Assessment Option */}
              <Card className="p-6 text-center bg-white border-2 border-sage-300 hover:bg-sage-50/50 transition-colors duration-300">
                <Brain className="w-12 h-12 mx-auto mb-4 text-sage-600" />
                <h4 className="font-semibold mb-2 text-foreground">
                  Manual Assessment
                </h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Complete our comprehensive questionnaire
                </p>
                <Button className="bg-gradient-to-r from-sage-500 to-sage-600 hover:from-sage-600 hover:to-sage-700 text-white">
                  <Heart className="w-4 h-4 mr-2" />
                  Start Assessment
                </Button>
              </Card>
            </div>
          </Card>
        </div>

        {/* Features */}
        <div className="mb-12">
          <h2 className="text-2xl lg:text-3xl font-serif font-bold text-center mb-8 text-foreground">
            Advanced Features
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="p-6 text-center bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-sky-100 to-serenity-100 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-sky-600" />
                </div>
                <h3 className="text-lg font-semibold mb-3 text-foreground">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </Card>
            ))}
          </div>
        </div>

        {/* Testimonials Preview */}
        <Card className="p-8 lg:p-12 text-center bg-gradient-to-br from-sky-600 via-serenity-600 to-sage-600 text-white border-0 mb-12">
          <div className="flex justify-center mb-6">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                className="w-6 h-6 text-yellow-400 fill-current"
              />
            ))}
          </div>
          <blockquote className="text-xl lg:text-2xl mb-6 italic font-serif">
            "The AI body scan completely transformed my practice. For the first
            time, I have poses that actually work with my body type and
            limitations."
          </blockquote>
          <div className="text-white/90">
            <div className="font-semibold">Beta Tester Preview</div>
            <div className="text-sm text-white/70">Early Access Program</div>
          </div>
        </Card>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-2xl lg:text-3xl font-serif font-bold mb-4 text-foreground">
            Ready to Experience Personalized Yoga?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands who are already transforming their practice with our
            intelligent approach to yoga.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-sky-500 to-serenity-600 hover:from-sky-600 hover:to-serenity-700 text-white rounded-full px-8 font-medium"
            >
              <Sparkles className="w-5 h-5 mr-2" />
              Join Beta Program
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-sky-300 text-sky-700 hover:bg-sky-50 rounded-full px-8 font-medium"
            >
              <Target className="w-5 h-5 mr-2" />
              Browse Poses Instead
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BodyScan;
