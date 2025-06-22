import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/yoga/Navigation";
import PracticeSession from "@/components/yoga/PracticeSession";
import { yogaPoses, getFilteredPoses } from "@/data/poses";
import type { YogaPose } from "@/data/poses";
import {
  Play,
  Clock,
  Target,
  Users,
  Heart,
  Sparkles,
  ArrowLeft,
  Settings,
  Shuffle,
} from "lucide-react";
import { Link } from "react-router-dom";

const Practice = () => {
  const [searchParams] = useSearchParams();
  const [selectedPoses, setSelectedPoses] = useState<YogaPose[]>([]);
  const [isPracticeOpen, setIsPracticeOpen] = useState(false);
  const [practiceTitle, setPracticeTitle] = useState("Custom Practice");

  // Get practice type from URL params
  const practiceType = searchParams.get("type");
  const planId = searchParams.get("plan");

  // Define quick practice sessions
  const quickSessions = [
    {
      id: "morning-flow",
      title: "Morning Flow",
      description: "Energizing sequence to start your day",
      duration: "10-15 min",
      difficulty: "beginner",
      poses: [
        "mountain-pose",
        "downward-dog",
        "warrior-one",
        "tree-pose",
        "cobra-pose",
      ],
      color: "sky",
      icon: "☀️",
    },
    {
      id: "stress-relief",
      title: "Stress Relief",
      description: "Calming poses to reduce tension and anxiety",
      duration: "15-20 min",
      difficulty: "beginner",
      poses: [
        "child-pose",
        "cat-cow",
        "seated-forward-fold",
        "happy-baby",
        "bridge-pose",
      ],
      color: "sage",
      icon: "🌿",
    },
    {
      id: "strength-building",
      title: "Strength Building",
      description: "Build core and full-body strength",
      duration: "20-25 min",
      difficulty: "intermediate",
      poses: [
        "warrior-one",
        "warrior-two",
        "triangle-pose",
        "bridge-pose",
        "cobra-pose",
      ],
      color: "serenity",
      icon: "💪",
    },
    {
      id: "flexibility-focus",
      title: "Flexibility Focus",
      description: "Deep stretches to improve flexibility",
      duration: "15-20 min",
      difficulty: "intermediate",
      poses: [
        "downward-dog",
        "pigeon-pose",
        "seated-forward-fold",
        "cobra-pose",
        "bridge-pose",
      ],
      color: "sky",
      icon: "🤸",
    },
    {
      id: "balance-stability",
      title: "Balance & Stability",
      description: "Improve balance and body awareness",
      duration: "12-18 min",
      difficulty: "intermediate",
      poses: ["tree-pose", "warrior-three", "mountain-pose", "triangle-pose"],
      color: "sage",
      icon: "⚖️",
    },
    {
      id: "evening-unwind",
      title: "Evening Unwind",
      description: "Gentle poses for relaxation and better sleep",
      duration: "10-15 min",
      difficulty: "beginner",
      poses: [
        "child-pose",
        "cat-cow",
        "bridge-pose",
        "happy-baby",
        "seated-forward-fold",
      ],
      color: "serenity",
      icon: "🌙",
    },
  ];

  // Get poses for a session
  const getPosesForSession = (poseIds: string[]): YogaPose[] => {
    return poseIds
      .map((id) => yogaPoses.find((pose) => pose.id === id))
      .filter(Boolean) as YogaPose[];
  };

  const startQuickSession = (session: any) => {
    const poses = getPosesForSession(session.poses);
    setSelectedPoses(poses);
    setPracticeTitle(session.title);
    setIsPracticeOpen(true);
  };

  const startRandomPractice = () => {
    // Get 5 random poses
    const shuffled = [...yogaPoses].sort(() => 0.5 - Math.random());
    const randomPoses = shuffled.slice(0, 5);
    setSelectedPoses(randomPoses);
    setPracticeTitle("Random Practice");
    setIsPracticeOpen(true);
  };

  const startCustomPractice = (filters: any) => {
    const filtered = getFilteredPoses(yogaPoses, filters);
    const selected = filtered.slice(0, 8); // Max 8 poses for custom practice
    setSelectedPoses(selected);
    setPracticeTitle("Custom Practice");
    setIsPracticeOpen(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-serenity-50">
      <Navigation />

      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            <Button variant="ghost" asChild className="hover:bg-sky-50">
              <Link to="/">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Link>
            </Button>
            <Badge
              variant="secondary"
              className="bg-sky-100 text-sky-700 border-sky-200 px-3 py-1"
            >
              <Sparkles className="w-4 h-4 mr-1" />
              Practice Sessions
            </Badge>
          </div>
          <h1 className="text-3xl lg:text-5xl font-serif font-bold mb-4 text-foreground">
            Start Your Practice
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Choose from our curated practice sessions or create your own custom
            routine. Each session includes guided timing and instructions.
          </p>
        </div>

        {/* Quick Sessions Grid */}
        <div className="mb-12">
          <h2 className="text-2xl font-serif font-semibold mb-6 text-foreground">
            Quick Practice Sessions
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {quickSessions.map((session) => (
              <Card
                key={session.id}
                className="p-6 bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group cursor-pointer"
                onClick={() => startQuickSession(session)}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="text-3xl">{session.icon}</div>
                  <Badge
                    variant="outline"
                    className={`
                      ${session.color === "sky" ? "bg-sky-50 text-sky-700 border-sky-200" : ""}
                      ${session.color === "sage" ? "bg-sage-50 text-sage-700 border-sage-200" : ""}
                      ${session.color === "serenity" ? "bg-serenity-50 text-serenity-700 border-serenity-200" : ""}
                    `}
                  >
                    {session.difficulty}
                  </Badge>
                </div>

                <h3 className="text-xl font-semibold mb-2 text-foreground group-hover:text-sky-600 transition-colors duration-300">
                  {session.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {session.description}
                </p>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    {session.duration}
                  </div>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Target className="w-4 h-4" />
                    {session.poses.length} poses
                  </div>
                </div>

                <Button className="w-full bg-gradient-to-r from-sky-500 to-serenity-600 hover:from-sky-600 hover:to-serenity-700 text-white group">
                  <Play className="w-4 h-4 mr-2" />
                  Start Practice
                </Button>
              </Card>
            ))}
          </div>
        </div>

        {/* Custom Practice Options */}
        <div className="mb-12">
          <h2 className="text-2xl font-serif font-semibold mb-6 text-foreground">
            Custom Practice
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {/* Random Practice */}
            <Card className="p-6 bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-sky-100 to-sky-200 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Shuffle className="w-8 h-8 text-sky-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-foreground">
                  Random Practice
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Let us surprise you with a mix of poses from our library
                </p>
                <Button
                  onClick={startRandomPractice}
                  variant="outline"
                  className="w-full hover:bg-sky-50 hover:border-sky-300"
                >
                  Surprise Me
                </Button>
              </div>
            </Card>

            {/* Filter by Body Part */}
            <Card className="p-6 bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-sage-100 to-sage-200 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-8 h-8 text-sage-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-foreground">
                  Target Areas
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Focus on specific body parts or muscle groups
                </p>
                <Button
                  onClick={() =>
                    startCustomPractice({ bodyPart: ["core", "spine"] })
                  }
                  variant="outline"
                  className="w-full hover:bg-sage-50 hover:border-sage-300"
                >
                  Core & Spine
                </Button>
              </div>
            </Card>

            {/* Filter by Energy Level */}
            <Card className="p-6 bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-serenity-100 to-serenity-200 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Heart className="w-8 h-8 text-serenity-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-foreground">
                  Energy Level
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Choose calming or energizing poses based on your mood
                </p>
                <Button
                  onClick={() =>
                    startCustomPractice({ energyLevel: ["calming"] })
                  }
                  variant="outline"
                  className="w-full hover:bg-serenity-50 hover:border-serenity-300"
                >
                  Calming
                </Button>
              </div>
            </Card>
          </div>
        </div>

        {/* Advanced Options */}
        <Card className="p-8 bg-gradient-to-br from-sky-600 via-serenity-600 to-sage-600 text-white border-0 mb-8">
          <div className="text-center">
            <Settings className="w-12 h-12 mx-auto mb-4" />
            <h2 className="text-2xl font-serif font-bold mb-4">
              Need More Customization?
            </h2>
            <p className="text-lg mb-6 text-white/90 max-w-2xl mx-auto">
              Browse our full pose library to create your perfect practice
              session with advanced filtering options.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-white text-sky-600 hover:bg-white/90 rounded-full px-8 font-medium"
            >
              <Link to="/asanas">
                <Target className="w-5 h-5 mr-2" />
                Browse All Poses
              </Link>
            </Button>
          </div>
        </Card>
      </div>

      {/* Practice Session Modal */}
      <PracticeSession
        poses={selectedPoses}
        isOpen={isPracticeOpen}
        onClose={() => setIsPracticeOpen(false)}
        title={practiceTitle}
        duration={`${selectedPoses.length * 0.5} - ${selectedPoses.length} min`}
      />
    </div>
  );
};

export default Practice;
