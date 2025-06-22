import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import {
  Heart,
  Clock,
  Target,
  AlertTriangle,
  Lightbulb,
  Play,
  Pause,
  CheckCircle,
  X,
} from "lucide-react";
import { cn } from "@/lib/utils";
import type { YogaPose } from "@/data/poses";

interface PoseModalProps {
  pose: YogaPose | null;
  isOpen: boolean;
  onClose: () => void;
  onLike?: (poseId: string) => void;
}

const PoseModal = ({ pose, isOpen, onClose, onLike }: PoseModalProps) => {
  const [showGif, setShowGif] = useState(false);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);

  if (!pose) return null;

  const toggleStep = (stepIndex: number) => {
    setCompletedSteps((prev) =>
      prev.includes(stepIndex)
        ? prev.filter((i) => i !== stepIndex)
        : [...prev, stepIndex],
    );
  };

  const difficultyColors = {
    beginner: "bg-sage-100 text-sage-700 border-sage-200",
    intermediate: "bg-sky-100 text-sky-700 border-sky-200",
    advanced: "bg-serenity-100 text-serenity-700 border-serenity-200",
  };

  const energyColors = {
    calming: "bg-sage-100 text-sage-700",
    energizing: "bg-sky-100 text-sky-700",
    neutral: "bg-serenity-100 text-serenity-700",
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] p-0 bg-white/95 backdrop-blur-md">
        <div className="grid md:grid-cols-2 h-full">
          {/* Image/Video Section */}
          <div className="relative bg-gradient-to-br from-sky-50 to-serenity-50">
            <div className="absolute top-4 right-4 z-10 flex gap-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => onLike?.(pose.id)}
                className={cn(
                  "w-10 h-10 p-0 rounded-full backdrop-blur-sm",
                  pose.isLiked
                    ? "bg-red-500/90 text-white hover:bg-red-600/90"
                    : "bg-white/80 text-gray-600 hover:bg-white/90",
                )}
              >
                <Heart
                  className={cn("w-5 h-5", pose.isLiked && "fill-current")}
                />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={onClose}
                className="w-10 h-10 p-0 rounded-full bg-white/80 text-gray-600 hover:bg-white/90 backdrop-blur-sm"
              >
                <X className="w-5 h-5" />
              </Button>
            </div>

            <div className="absolute top-4 left-4 z-10 flex gap-2">
              <Badge
                variant="secondary"
                className={cn(
                  "backdrop-blur-sm",
                  difficultyColors[pose.difficulty],
                )}
              >
                {pose.difficulty}
              </Badge>
              <Badge
                variant="secondary"
                className={cn(
                  "backdrop-blur-sm",
                  energyColors[pose.energyLevel],
                )}
              >
                {pose.energyLevel}
              </Badge>
            </div>

            <div className="aspect-square relative overflow-hidden">
              <img
                src={showGif && pose.gif ? pose.gif : pose.image}
                alt={pose.nameEnglish}
                className="w-full h-full object-cover"
              />

              {pose.gif && (
                <Button
                  onClick={() => setShowGif(!showGif)}
                  className="absolute bottom-4 left-4 bg-black/60 hover:bg-black/80 text-white backdrop-blur-sm"
                >
                  {showGif ? (
                    <>
                      <Pause className="w-4 h-4 mr-2" />
                      Show Image
                    </>
                  ) : (
                    <>
                      <Play className="w-4 h-4 mr-2" />
                      Show Animation
                    </>
                  )}
                </Button>
              )}
            </div>
          </div>

          {/* Content Section */}
          <div className="flex flex-col h-full">
            <DialogHeader className="p-6 pb-4">
              <DialogTitle className="text-2xl font-serif">
                {pose.nameEnglish}
              </DialogTitle>
              <p className="text-lg text-muted-foreground italic font-serif">
                {pose.nameSanskrit}
              </p>

              <div className="flex items-center gap-4 pt-2">
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <Clock className="w-4 h-4" />
                  {pose.duration}
                </div>
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <Target className="w-4 h-4" />
                  {pose.category}
                </div>
              </div>
            </DialogHeader>

            <ScrollArea className="flex-1 px-6">
              <Tabs defaultValue="instructions" className="w-full">
                <TabsList className="grid w-full grid-cols-4 mb-6">
                  <TabsTrigger value="instructions">Steps</TabsTrigger>
                  <TabsTrigger value="benefits">Benefits</TabsTrigger>
                  <TabsTrigger value="safety">Safety</TabsTrigger>
                  <TabsTrigger value="details">Details</TabsTrigger>
                </TabsList>

                <TabsContent value="instructions" className="space-y-4">
                  <h3 className="font-semibold flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-sky-600" />
                    Step-by-Step Instructions
                  </h3>
                  <div className="space-y-3">
                    {pose.instructions.map((step, index) => (
                      <div
                        key={index}
                        className={cn(
                          "flex items-start gap-3 p-3 rounded-lg cursor-pointer transition-colors",
                          completedSteps.includes(index)
                            ? "bg-sage-50 border border-sage-200"
                            : "bg-gray-50 hover:bg-gray-100",
                        )}
                        onClick={() => toggleStep(index)}
                      >
                        <div
                          className={cn(
                            "w-6 h-6 rounded-full flex items-center justify-center text-sm font-medium mt-0.5",
                            completedSteps.includes(index)
                              ? "bg-sage-500 text-white"
                              : "bg-gray-300 text-gray-600",
                          )}
                        >
                          {completedSteps.includes(index) ? (
                            <CheckCircle className="w-4 h-4" />
                          ) : (
                            index + 1
                          )}
                        </div>
                        <p
                          className={cn(
                            "text-sm flex-1",
                            completedSteps.includes(index) &&
                              "line-through text-muted-foreground",
                          )}
                        >
                          {step}
                        </p>
                      </div>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="benefits" className="space-y-4">
                  <h3 className="font-semibold flex items-center gap-2">
                    <Heart className="w-5 h-5 text-sky-600" />
                    Health Benefits
                  </h3>
                  <div className="grid gap-3">
                    {pose.benefits.map((benefit, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-sky-500 rounded-full mt-2 flex-shrink-0" />
                        <p className="text-sm">{benefit}</p>
                      </div>
                    ))}
                  </div>

                  <Separator className="my-4" />

                  <h4 className="font-medium">Targeted Body Parts</h4>
                  <div className="flex flex-wrap gap-2">
                    {pose.bodyParts.map((part, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {part}
                      </Badge>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="safety" className="space-y-4">
                  <div className="space-y-4">
                    {pose.precautions.length > 0 && (
                      <div>
                        <h3 className="font-semibold flex items-center gap-2 text-amber-700 mb-3">
                          <AlertTriangle className="w-5 h-5" />
                          Precautions
                        </h3>
                        <div className="space-y-2">
                          {pose.precautions.map((precaution, index) => (
                            <div
                              key={index}
                              className="flex items-start gap-2 p-3 bg-amber-50 rounded-lg border border-amber-200"
                            >
                              <AlertTriangle className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
                              <p className="text-sm text-amber-800">
                                {precaution}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {pose.modifications.length > 0 && (
                      <div>
                        <h3 className="font-semibold flex items-center gap-2 text-blue-700 mb-3">
                          <Lightbulb className="w-5 h-5" />
                          Modifications & Props
                        </h3>
                        <div className="space-y-2">
                          {pose.modifications.map((modification, index) => (
                            <div
                              key={index}
                              className="flex items-start gap-2 p-3 bg-blue-50 rounded-lg border border-blue-200"
                            >
                              <Lightbulb className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                              <p className="text-sm text-blue-800">
                                {modification}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </TabsContent>

                <TabsContent value="details" className="space-y-4">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium mb-2">Suitable Body Types</h4>
                      <div className="flex flex-wrap gap-2">
                        {pose.bodyType.map((type, index) => (
                          <Badge
                            key={index}
                            variant="outline"
                            className="text-xs capitalize"
                          >
                            {type}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-medium mb-2">Health Conditions</h4>
                      <div className="flex flex-wrap gap-2">
                        {pose.healthConditions.map((condition, index) => (
                          <Badge
                            key={index}
                            variant="outline"
                            className="text-xs bg-sage-50 text-sage-700 border-sage-200"
                          >
                            {condition.replace("-", " ")}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-medium mb-2">Energy Level</h4>
                      <Badge
                        className={cn(
                          "capitalize",
                          energyColors[pose.energyLevel],
                        )}
                      >
                        {pose.energyLevel}
                      </Badge>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </ScrollArea>

            <div className="p-6 pt-4 border-t">
              <div className="flex gap-3">
                <Button
                  asChild
                  className="flex-1 bg-gradient-to-r from-sky-500 to-serenity-600 hover:from-sky-600 hover:to-serenity-700 text-white"
                >
                  <a href={`/practice?poses=${pose.id}`}>Add to Practice</a>
                </Button>
                <Button
                  variant="outline"
                  className="flex-1"
                  onClick={() => onLike?.(pose.id)}
                >
                  {pose.isLiked ? "Remove from Favorites" : "Add to Favorites"}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PoseModal;
