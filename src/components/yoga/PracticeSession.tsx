import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import {
  Play,
  Pause,
  SkipForward,
  SkipBack,
  RotateCcw,
  CheckCircle,
  Clock,
  Target,
  Heart,
  Volume2,
  VolumeX,
  X,
  Home,
} from "lucide-react";
import { cn } from "@/lib/utils";
import type { YogaPose } from "@/data/poses";

interface PracticeSessionProps {
  poses: YogaPose[];
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  duration?: string;
}

const PracticeSession = ({
  poses,
  isOpen,
  onClose,
  title = "Practice Session",
  duration,
}: PracticeSessionProps) => {
  const [currentPoseIndex, setCurrentPoseIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [timer, setTimer] = useState(0);
  const [poseTimer, setPoseTimer] = useState(30); // 30 seconds per pose
  const [completedPoses, setCompletedPoses] = useState<string[]>([]);
  const [showGif, setShowGif] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  const currentPose = poses[currentPoseIndex];
  const progress = ((currentPoseIndex + 1) / poses.length) * 100;
  const totalDuration = poses.length * 30; // 30 seconds per pose

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isPlaying && poseTimer > 0) {
      interval = setInterval(() => {
        setPoseTimer((prev) => prev - 1);
        setTimer((prev) => prev + 1);
      }, 1000);
    } else if (isPlaying && poseTimer === 0) {
      // Auto advance to next pose
      handleNextPose();
    }

    return () => clearInterval(interval);
  }, [isPlaying, poseTimer]);

  const handlePlay = () => {
    setIsPlaying(true);
    setShowGif(true);
  };

  const handlePause = () => {
    setIsPlaying(false);
    setShowGif(false);
  };

  const handleNextPose = () => {
    if (currentPose && !completedPoses.includes(currentPose.id)) {
      setCompletedPoses((prev) => [...prev, currentPose.id]);
    }

    if (currentPoseIndex < poses.length - 1) {
      setCurrentPoseIndex((prev) => prev + 1);
      setPoseTimer(30);
    } else {
      // Practice complete
      setIsPlaying(false);
      handleComplete();
    }
  };

  const handlePreviousPose = () => {
    if (currentPoseIndex > 0) {
      setCurrentPoseIndex((prev) => prev - 1);
      setPoseTimer(30);
    }
  };

  const handleRestart = () => {
    setCurrentPoseIndex(0);
    setPoseTimer(30);
    setTimer(0);
    setCompletedPoses([]);
    setIsPlaying(false);
    setShowGif(false);
  };

  const handleComplete = () => {
    // Mark all poses as completed
    setCompletedPoses(poses.map((pose) => pose.id));

    // Show completion state
    setTimeout(() => {
      // Could show celebration animation or navigate somewhere
    }, 1000);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  const isSessionComplete = completedPoses.length === poses.length;

  if (!currentPose) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-6xl max-h-[95vh] p-0 bg-gradient-to-br from-sky-50 to-serenity-50">
        <div className="grid lg:grid-cols-2 h-full">
          {/* Pose Display */}
          <div className="relative bg-gradient-to-br from-sky-100 to-serenity-100">
            {/* Header Controls */}
            <div className="absolute top-4 left-4 right-4 z-10 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <Badge
                  variant="secondary"
                  className="bg-white/90 backdrop-blur-sm"
                >
                  {currentPoseIndex + 1} of {poses.length}
                </Badge>
                <Badge
                  variant="secondary"
                  className="bg-white/90 backdrop-blur-sm"
                >
                  {formatTime(timer)} / {formatTime(totalDuration)}
                </Badge>
              </div>

              <div className="flex items-center gap-2">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsMuted(!isMuted)}
                  className="w-10 h-10 p-0 bg-white/80 backdrop-blur-sm hover:bg-white/90"
                >
                  {isMuted ? (
                    <VolumeX className="w-4 h-4" />
                  ) : (
                    <Volume2 className="w-4 h-4" />
                  )}
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={onClose}
                  className="w-10 h-10 p-0 bg-white/80 backdrop-blur-sm hover:bg-white/90"
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="absolute top-16 left-4 right-4 z-10">
              <Progress value={progress} className="h-2 bg-white/50" />
            </div>

            {/* Pose Image/GIF */}
            <div className="aspect-square flex items-center justify-center p-8">
              <div className="relative w-full h-full max-w-md">
                <img
                  src={
                    showGif && currentPose.gif
                      ? currentPose.gif
                      : currentPose.image
                  }
                  alt={currentPose.nameEnglish}
                  className="w-full h-full object-cover rounded-2xl shadow-2xl"
                />

                {/* Pose Timer Circle */}
                <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-white rounded-full shadow-lg flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-sky-600">
                      {poseTimer}
                    </div>
                    <div className="text-xs text-muted-foreground">sec</div>
                  </div>
                </div>

                {/* Difficulty Badge */}
                <div className="absolute top-4 left-4">
                  <Badge
                    className={cn(
                      "capitalize",
                      currentPose.difficulty === "beginner" &&
                        "bg-sage-100 text-sage-700",
                      currentPose.difficulty === "intermediate" &&
                        "bg-sky-100 text-sky-700",
                      currentPose.difficulty === "advanced" &&
                        "bg-serenity-100 text-serenity-700",
                    )}
                  >
                    {currentPose.difficulty}
                  </Badge>
                </div>
              </div>
            </div>
          </div>

          {/* Practice Controls */}
          <div className="flex flex-col bg-white">
            <DialogHeader className="p-6 pb-4">
              <div className="flex items-center justify-between">
                <div>
                  <DialogTitle className="text-xl font-serif mb-1">
                    {title}
                  </DialogTitle>
                  {duration && (
                    <p className="text-sm text-muted-foreground">{duration}</p>
                  )}
                </div>
                {isSessionComplete && (
                  <Badge className="bg-green-100 text-green-700 border-green-200">
                    <CheckCircle className="w-4 h-4 mr-1" />
                    Complete!
                  </Badge>
                )}
              </div>
            </DialogHeader>

            <div className="flex-1 px-6 pb-6">
              {/* Current Pose Info */}
              <div className="mb-6">
                <h3 className="text-2xl font-serif font-semibold mb-1">
                  {currentPose.nameEnglish}
                </h3>
                <p className="text-lg text-muted-foreground italic mb-3">
                  {currentPose.nameSanskrit}
                </p>

                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {currentPose.duration}
                  </div>
                  <div className="flex items-center gap-1">
                    <Target className="w-4 h-4" />
                    {currentPose.category}
                  </div>
                  <div className="flex items-center gap-1">
                    <Heart className="w-4 h-4" />
                    {currentPose.energyLevel}
                  </div>
                </div>

                {/* Primary Benefit */}
                <p className="text-sm text-muted-foreground bg-sky-50 p-3 rounded-lg">
                  <strong>Focus:</strong> {currentPose.benefits[0]}
                </p>
              </div>

              <Separator className="mb-6" />

              {/* Instructions */}
              <div className="mb-6">
                <h4 className="font-semibold mb-3">Key Instructions:</h4>
                <div className="space-y-2">
                  {currentPose.instructions
                    .slice(0, 3)
                    .map((instruction, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <div className="w-6 h-6 rounded-full bg-sky-100 text-sky-700 flex items-center justify-center text-sm font-medium mt-0.5 flex-shrink-0">
                          {index + 1}
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {instruction}
                        </p>
                      </div>
                    ))}
                </div>
              </div>

              {/* Practice Controls */}
              <div className="space-y-4">
                <div className="flex items-center justify-center gap-4">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={handlePreviousPose}
                    disabled={currentPoseIndex === 0}
                    className="w-12 h-12 p-0"
                  >
                    <SkipBack className="w-5 h-5" />
                  </Button>

                  <Button
                    size="lg"
                    onClick={isPlaying ? handlePause : handlePlay}
                    className="w-16 h-16 p-0 rounded-full bg-gradient-to-r from-sky-500 to-serenity-600 hover:from-sky-600 hover:to-serenity-700 text-white shadow-lg"
                  >
                    {isPlaying ? (
                      <Pause className="w-8 h-8" />
                    ) : (
                      <Play className="w-8 h-8 ml-1" />
                    )}
                  </Button>

                  <Button
                    variant="outline"
                    size="sm"
                    onClick={handleNextPose}
                    disabled={
                      currentPoseIndex === poses.length - 1 && isSessionComplete
                    }
                    className="w-12 h-12 p-0"
                  >
                    <SkipForward className="w-5 h-5" />
                  </Button>
                </div>

                <div className="flex items-center justify-center gap-3">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={handleRestart}
                    className="text-muted-foreground hover:text-foreground"
                  >
                    <RotateCcw className="w-4 h-4 mr-2" />
                    Restart
                  </Button>

                  {isSessionComplete && (
                    <Button
                      onClick={onClose}
                      className="bg-green-600 hover:bg-green-700 text-white"
                    >
                      <Home className="w-4 h-4 mr-2" />
                      Finish Practice
                    </Button>
                  )}
                </div>
              </div>

              {/* Session Summary */}
              {isSessionComplete && (
                <div className="mt-6 p-4 bg-green-50 rounded-lg border border-green-200">
                  <h4 className="font-semibold text-green-800 mb-2">
                    🎉 Practice Complete!
                  </h4>
                  <p className="text-sm text-green-700">
                    You completed {poses.length} poses in {formatTime(timer)}.
                    Great job on your practice today!
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PracticeSession;
