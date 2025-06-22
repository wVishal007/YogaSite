import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Heart, Clock, TrendingUp, Info } from "lucide-react";
import { cn } from "@/lib/utils";

import type { YogaPose } from "@/data/poses";

interface PoseCardProps {
  pose: YogaPose;
  onClick?: (pose: YogaPose) => void;
  onLike?: (poseId: string) => void;
}

const PoseCard = ({ pose, onClick, onLike }: PoseCardProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [showGif, setShowGif] = useState(false);

  const difficultyColors = {
    beginner: "bg-sage-100 text-sage-700 border-sage-200",
    intermediate: "bg-sky-100 text-sky-700 border-sky-200",
    advanced: "bg-serenity-100 text-serenity-700 border-serenity-200",
  };

  const energyColors = {
    calming: "bg-sage-50 border-sage-200",
    energizing: "bg-sky-50 border-sky-200",
    neutral: "bg-serenity-50 border-serenity-200",
  };

  const handleLike = (e: React.MouseEvent) => {
    e.stopPropagation();
    onLike?.(pose.id);
  };

  return (
    <Card
      className={cn(
        "group overflow-hidden cursor-pointer transition-all duration-500 hover:shadow-xl hover:-translate-y-2 border-0 bg-white/90 backdrop-blur-sm hover:bg-white",
        energyColors[pose.energyLevel],
      )}
      onClick={() => onClick?.(pose)}
      onMouseEnter={() => setShowGif(true)}
      onMouseLeave={() => setShowGif(false)}
    >
      {/* Image Container */}
      <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-sky-50 to-serenity-50">
        {!imageLoaded && (
          <div className="absolute inset-0 bg-gradient-to-br from-sky-100 to-serenity-100 animate-pulse" />
        )}
        <img
          src={showGif && pose.gif ? pose.gif : pose.image}
          alt={pose.nameEnglish}
          className={cn(
            "w-full h-full object-cover transition-all duration-700 group-hover:scale-110",
            imageLoaded ? "opacity-100" : "opacity-0",
          )}
          onLoad={() => setImageLoaded(true)}
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Overlay Actions */}
        <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
          <Button
            variant="ghost"
            size="sm"
            className={cn(
              "w-9 h-9 p-0 rounded-full backdrop-blur-md transition-all duration-300 shadow-lg",
              pose.isLiked
                ? "bg-red-500/90 text-white hover:bg-red-600/90 hover:scale-110"
                : "bg-white/90 text-gray-600 hover:bg-white hover:scale-110",
            )}
            onClick={handleLike}
          >
            <Heart
              className={cn(
                "w-4 h-4 transition-all duration-300",
                pose.isLiked && "fill-current scale-110",
              )}
            />
          </Button>
        </div>

        {/* Difficulty Badge */}
        <div className="absolute top-3 left-3">
          <Badge
            variant="secondary"
            className={cn(
              "capitalize font-medium backdrop-blur-sm border transition-all duration-300 group-hover:scale-105",
              difficultyColors[pose.difficulty],
            )}
          >
            {pose.difficulty}
          </Badge>
        </div>

        {/* Category Badge */}
        <div className="absolute top-3 left-3 mt-8">
          <Badge
            variant="outline"
            className="text-xs backdrop-blur-sm bg-white/80 border-white/50 text-gray-700"
          >
            {pose.category}
          </Badge>
        </div>

        {/* GIF Indicator */}
        {pose.gif && (
          <div className="absolute bottom-3 left-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
            <Badge
              variant="secondary"
              className="bg-black/70 text-white backdrop-blur-sm border-0 animate-pulse"
            >
              <TrendingUp className="w-3 h-3 mr-1" />
              {showGif ? "Playing" : "Hover for animation"}
            </Badge>
          </div>
        )}

        {/* Energy Level Indicator */}
        <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
          <div
            className={cn(
              "w-3 h-3 rounded-full border-2 border-white shadow-lg",
              pose.energyLevel === "calming" && "bg-sage-500 animate-breathe",
              pose.energyLevel === "energizing" && "bg-sky-500 animate-pulse",
              pose.energyLevel === "neutral" && "bg-serenity-500",
            )}
          />
        </div>
      </div>

      {/* Content */}
      <div className="p-5 space-y-4">
        {/* Names */}
        <div className="min-h-[3rem]">
          <h3 className="font-semibold text-foreground group-hover:text-sky-600 transition-colors duration-300 text-lg leading-tight">
            {pose.nameEnglish}
          </h3>
          <p className="text-sm text-muted-foreground italic font-serif mt-1">
            {pose.nameSanskrit}
          </p>
        </div>

        {/* Duration and Energy */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <Clock className="w-4 h-4" />
            <span>{pose.duration}</span>
          </div>
          <Badge
            variant="outline"
            className={cn(
              "text-xs capitalize",
              pose.energyLevel === "calming" &&
                "bg-sage-50 text-sage-700 border-sage-200",
              pose.energyLevel === "energizing" &&
                "bg-sky-50 text-sky-700 border-sky-200",
              pose.energyLevel === "neutral" &&
                "bg-serenity-50 text-serenity-700 border-serenity-200",
            )}
          >
            {pose.energyLevel}
          </Badge>
        </div>

        {/* Body Parts */}
        <div className="flex flex-wrap gap-1.5">
          {pose.bodyParts.slice(0, 3).map((part, index) => (
            <Badge
              key={index}
              variant="outline"
              className="text-xs bg-gradient-to-r from-sage-50 to-sky-50 text-gray-700 border-gray-200 hover:border-sky-300 transition-colors duration-300"
            >
              {part}
            </Badge>
          ))}
          {pose.bodyParts.length > 3 && (
            <Badge
              variant="outline"
              className="text-xs bg-muted hover:bg-gray-100 transition-colors duration-300"
            >
              +{pose.bodyParts.length - 3}
            </Badge>
          )}
        </div>

        {/* Benefits Preview */}
        <div className="flex items-start gap-2 min-h-[2.5rem]">
          <Info className="w-4 h-4 mt-0.5 text-muted-foreground flex-shrink-0" />
          <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">
            {pose.benefits[0]}
          </p>
        </div>

        {/* Hover Action Hint */}
        <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
          <div className="text-xs text-sky-600 text-center font-medium">
            Click to view details
          </div>
        </div>
      </div>
    </Card>
  );
};

export default PoseCard;
