import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import {
  Search,
  Filter,
  X,
  ChevronDown,
  ChevronUp,
  Users,
  Heart,
  Target,
  Activity,
  Zap,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface FilterPanelProps {
  onFiltersChange: (filters: any) => void;
  isOpen: boolean;
  onToggle: () => void;
}

const FilterPanel = ({
  onFiltersChange,
  isOpen,
  onToggle,
}: FilterPanelProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeFilters, setActiveFilters] = useState<{
    bodyType: string[];
    healthCondition: string[];
    bodyPart: string[];
    experience: string[];
    difficulty: string[];
    category: string[];
    energyLevel: string[];
  }>({
    bodyType: [],
    healthCondition: [],
    bodyPart: [],
    experience: [],
    difficulty: [],
    category: [],
    energyLevel: [],
  });

  const [expandedSections, setExpandedSections] = useState<{
    [key: string]: boolean;
  }>({
    bodyType: true,
    healthCondition: false,
    bodyPart: true,
    experience: true,
    difficulty: true,
    category: false,
    energyLevel: true,
  });

  const filterData = {
    bodyType: [
      { id: "lean", name: "Lean", icon: Users },
      { id: "muscular", name: "Muscular", icon: Activity },
      { id: "overweight", name: "Overweight", icon: Users },
      { id: "flexible", name: "Flexible", icon: Activity },
      { id: "stiff", name: "Stiff", icon: Users },
    ],
    healthCondition: [
      { id: "heart", name: "Heart Health", icon: Heart },
      { id: "diabetes", name: "Diabetes", icon: Target },
      { id: "thyroid", name: "Thyroid", icon: Target },
      { id: "digestion", name: "Digestion", icon: Target },
      { id: "anxiety", name: "Anxiety", icon: Heart },
      { id: "back-pain", name: "Back Pain", icon: Target },
      { id: "skin-glow", name: "Skin Glow", icon: Heart },
      { id: "weight-loss", name: "Weight Loss", icon: Target },
      { id: "sleep", name: "Better Sleep", icon: Heart },
    ],
    bodyPart: [
      { id: "shoulders", name: "Shoulders" },
      { id: "spine", name: "Spine" },
      { id: "core", name: "Core" },
      { id: "legs", name: "Legs" },
      { id: "arms", name: "Arms" },
      { id: "hips", name: "Hips" },
      { id: "neck", name: "Neck" },
      { id: "chest", name: "Chest" },
    ],
    experience: [
      { id: "beginner", name: "Beginner", color: "sage" },
      { id: "intermediate", name: "Intermediate", color: "sky" },
      { id: "advanced", name: "Advanced", color: "serenity" },
    ],
    difficulty: [
      { id: "beginner", name: "Beginner", color: "sage" },
      { id: "intermediate", name: "Intermediate", color: "sky" },
      { id: "advanced", name: "Advanced", color: "serenity" },
    ],
    category: [
      { id: "standing", name: "Standing" },
      { id: "seated", name: "Seated" },
      { id: "backbend", name: "Backbend" },
      { id: "forward-fold", name: "Forward Fold" },
      { id: "twist", name: "Twist" },
      { id: "inversion", name: "Inversion" },
      { id: "balance", name: "Balance" },
      { id: "hip-opener", name: "Hip Opener" },
      { id: "restorative", name: "Restorative" },
      { id: "flow", name: "Flow" },
    ],
    energyLevel: [
      { id: "calming", name: "Calming", color: "sage" },
      { id: "energizing", name: "Energizing", color: "sky" },
      { id: "neutral", name: "Neutral", color: "serenity" },
    ],
  };

  const toggleFilter = (category: string, value: string) => {
    setActiveFilters((prev) => {
      const newFilters = { ...prev };
      const categoryFilters = newFilters[category as keyof typeof newFilters];

      if (categoryFilters.includes(value)) {
        newFilters[category as keyof typeof newFilters] =
          categoryFilters.filter((item) => item !== value);
      } else {
        newFilters[category as keyof typeof newFilters] = [
          ...categoryFilters,
          value,
        ];
      }

      onFiltersChange({ ...newFilters, searchTerm });
      return newFilters;
    });
  };

  const clearFilters = () => {
    setActiveFilters({
      bodyType: [],
      healthCondition: [],
      bodyPart: [],
      experience: [],
      difficulty: [],
      category: [],
      energyLevel: [],
    });
    setSearchTerm("");
    onFiltersChange({
      bodyType: [],
      healthCondition: [],
      bodyPart: [],
      experience: [],
      difficulty: [],
      category: [],
      energyLevel: [],
      searchTerm: "",
    });
  };

  const toggleSection = (section: string) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const getActiveFilterCount = () => {
    return Object.values(activeFilters).flat().length;
  };

  const handleSearchChange = (value: string) => {
    setSearchTerm(value);
    onFiltersChange({ ...activeFilters, searchTerm: value });
  };

  return (
    <div className={cn("space-y-4", !isOpen && "hidden lg:block")}>
      {/* Mobile Filter Toggle */}
      <div className="lg:hidden">
        <Button
          variant="outline"
          onClick={onToggle}
          className="w-full justify-between"
        >
          <div className="flex items-center gap-2">
            <Filter className="w-4 h-4" />
            Filters
            {getActiveFilterCount() > 0 && (
              <Badge variant="secondary" className="ml-2">
                {getActiveFilterCount()}
              </Badge>
            )}
          </div>
          {isOpen ? (
            <ChevronUp className="w-4 h-4" />
          ) : (
            <ChevronDown className="w-4 h-4" />
          )}
        </Button>
      </div>

      <Card
        className={cn(
          "p-6 bg-white/80 backdrop-blur-sm",
          !isOpen && "hidden lg:block",
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold flex items-center gap-2">
            <Filter className="w-5 h-5 text-sky-600" />
            Filters
          </h3>
          {getActiveFilterCount() > 0 && (
            <Button
              variant="ghost"
              size="sm"
              onClick={clearFilters}
              className="text-muted-foreground hover:text-foreground"
            >
              <X className="w-4 h-4 mr-1" />
              Clear All
            </Button>
          )}
        </div>

        {/* Search */}
        <div className="mb-6">
          <Label htmlFor="search" className="text-sm font-medium mb-2 block">
            Search Poses
          </Label>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
              id="search"
              placeholder="Search by name or benefit..."
              value={searchTerm}
              onChange={(e) => handleSearchChange(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        <Separator className="mb-6" />

        {/* Filter Sections */}
        <div className="space-y-6">
          {/* Body Type */}
          <div>
            <button
              onClick={() => toggleSection("bodyType")}
              className="flex items-center justify-between w-full text-left mb-3 group"
            >
              <Label className="text-sm font-medium flex items-center gap-2 cursor-pointer">
                <Users className="w-4 h-4 text-sky-600" />
                Body Type
              </Label>
              {expandedSections.bodyType ? (
                <ChevronUp className="w-4 h-4 text-muted-foreground group-hover:text-foreground" />
              ) : (
                <ChevronDown className="w-4 h-4 text-muted-foreground group-hover:text-foreground" />
              )}
            </button>
            {expandedSections.bodyType && (
              <div className="grid grid-cols-2 gap-2">
                {filterData.bodyType.map((item) => (
                  <Button
                    key={item.id}
                    variant="outline"
                    size="sm"
                    onClick={() => toggleFilter("bodyType", item.id)}
                    className={cn(
                      "justify-start text-left h-auto py-2 px-3",
                      activeFilters.bodyType.includes(item.id)
                        ? "bg-sky-100 border-sky-300 text-sky-700"
                        : "bg-white hover:bg-sky-50",
                    )}
                  >
                    <item.icon className="w-4 h-4 mr-2" />
                    {item.name}
                  </Button>
                ))}
              </div>
            )}
          </div>

          <Separator />

          {/* Health Conditions */}
          <div>
            <button
              onClick={() => toggleSection("healthCondition")}
              className="flex items-center justify-between w-full text-left mb-3 group"
            >
              <Label className="text-sm font-medium flex items-center gap-2 cursor-pointer">
                <Heart className="w-4 h-4 text-sage-600" />
                Health Conditions
              </Label>
              {expandedSections.healthCondition ? (
                <ChevronUp className="w-4 h-4 text-muted-foreground group-hover:text-foreground" />
              ) : (
                <ChevronDown className="w-4 h-4 text-muted-foreground group-hover:text-foreground" />
              )}
            </button>
            {expandedSections.healthCondition && (
              <div className="grid grid-cols-1 gap-2">
                {filterData.healthCondition.map((item) => (
                  <Button
                    key={item.id}
                    variant="outline"
                    size="sm"
                    onClick={() => toggleFilter("healthCondition", item.id)}
                    className={cn(
                      "justify-start text-left h-auto py-2 px-3",
                      activeFilters.healthCondition.includes(item.id)
                        ? "bg-sage-100 border-sage-300 text-sage-700"
                        : "bg-white hover:bg-sage-50",
                    )}
                  >
                    <item.icon className="w-4 h-4 mr-2" />
                    {item.name}
                  </Button>
                ))}
              </div>
            )}
          </div>

          <Separator />

          {/* Body Parts */}
          <div>
            <button
              onClick={() => toggleSection("bodyPart")}
              className="flex items-center justify-between w-full text-left mb-3 group"
            >
              <Label className="text-sm font-medium flex items-center gap-2 cursor-pointer">
                <Target className="w-4 h-4 text-serenity-600" />
                Body Parts
              </Label>
              {expandedSections.bodyPart ? (
                <ChevronUp className="w-4 h-4 text-muted-foreground group-hover:text-foreground" />
              ) : (
                <ChevronDown className="w-4 h-4 text-muted-foreground group-hover:text-foreground" />
              )}
            </button>
            {expandedSections.bodyPart && (
              <div className="flex flex-wrap gap-2">
                {filterData.bodyPart.map((item) => (
                  <Badge
                    key={item.id}
                    variant="outline"
                    onClick={() => toggleFilter("bodyPart", item.id)}
                    className={cn(
                      "cursor-pointer hover:bg-serenity-50 transition-colors",
                      activeFilters.bodyPart.includes(item.id)
                        ? "bg-serenity-100 border-serenity-300 text-serenity-700"
                        : "bg-white",
                    )}
                  >
                    {item.name}
                  </Badge>
                ))}
              </div>
            )}
          </div>

          <Separator />

          {/* Difficulty Level */}
          <div>
            <Label className="text-sm font-medium flex items-center gap-2 mb-3">
              <Activity className="w-4 h-4 text-sky-600" />
              Difficulty Level
            </Label>
            <div className="space-y-2">
              {filterData.difficulty.map((item) => (
                <Button
                  key={item.id}
                  variant="outline"
                  size="sm"
                  onClick={() => toggleFilter("difficulty", item.id)}
                  className={cn(
                    "w-full justify-start",
                    activeFilters.difficulty.includes(item.id)
                      ? `bg-${item.color}-100 border-${item.color}-300 text-${item.color}-700`
                      : "bg-white hover:bg-gray-50",
                  )}
                >
                  {item.name}
                </Button>
              ))}
            </div>
          </div>

          <Separator />

          {/* Category */}
          <div>
            <button
              onClick={() => toggleSection("category")}
              className="flex items-center justify-between w-full text-left mb-3 group"
            >
              <Label className="text-sm font-medium flex items-center gap-2 cursor-pointer">
                <Target className="w-4 h-4 text-serenity-600" />
                Pose Category
              </Label>
              {expandedSections.category ? (
                <ChevronUp className="w-4 h-4 text-muted-foreground group-hover:text-foreground" />
              ) : (
                <ChevronDown className="w-4 h-4 text-muted-foreground group-hover:text-foreground" />
              )}
            </button>
            {expandedSections.category && (
              <div className="flex flex-wrap gap-2">
                {filterData.category.map((item) => (
                  <Badge
                    key={item.id}
                    variant="outline"
                    onClick={() => toggleFilter("category", item.id)}
                    className={cn(
                      "cursor-pointer hover:bg-serenity-50 transition-colors text-xs",
                      activeFilters.category.includes(item.id)
                        ? "bg-serenity-100 border-serenity-300 text-serenity-700"
                        : "bg-white",
                    )}
                  >
                    {item.name}
                  </Badge>
                ))}
              </div>
            )}
          </div>

          <Separator />

          {/* Energy Level */}
          <div>
            <Label className="text-sm font-medium flex items-center gap-2 mb-3">
              <Zap className="w-4 h-4 text-sky-600" />
              Energy Level
            </Label>
            <div className="space-y-2">
              {filterData.energyLevel.map((item) => (
                <Button
                  key={item.id}
                  variant="outline"
                  size="sm"
                  onClick={() => toggleFilter("energyLevel", item.id)}
                  className={cn(
                    "w-full justify-start",
                    activeFilters.energyLevel.includes(item.id)
                      ? `bg-${item.color}-100 border-${item.color}-300 text-${item.color}-700`
                      : "bg-white hover:bg-gray-50",
                  )}
                >
                  {item.name}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default FilterPanel;
