import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/yoga/Navigation";
import FilterPanel from "@/components/yoga/FilterPanel";
import PoseCard from "@/components/yoga/PoseCard";
import PoseModal from "@/components/yoga/PoseModal";
import { yogaPoses, getFilteredPoses } from "@/data/poses";
import type { YogaPose } from "@/data/poses";
import {
  Search,
  Filter,
  Grid,
  List,
  ChevronDown,
  SlidersHorizontal,
  Sparkles,
  Shuffle,
} from "lucide-react";
import { cn } from "@/lib/utils";

const AsanaLibrary = () => {
  const [poses, setPoses] = useState<YogaPose[]>(yogaPoses);
  const [filters, setFilters] = useState({
    searchTerm: "",
    bodyType: [],
    healthCondition: [],
    bodyPart: [],
    experience: [],
    difficulty: [],
    category: [],
    energyLevel: [],
  });
  const [sortBy, setSortBy] = useState("name");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedPose, setSelectedPose] = useState<YogaPose | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const posesPerPage = 12;

  // Filter poses based on active filters
  const filteredPoses = useMemo(() => {
    let filtered = getFilteredPoses(poses, filters);

    // Sort poses
    filtered.sort((a, b) => {
      switch (sortBy) {
        case "name":
          return a.nameEnglish.localeCompare(b.nameEnglish);
        case "difficulty":
          const difficultyOrder = { beginner: 1, intermediate: 2, advanced: 3 };
          return difficultyOrder[a.difficulty] - difficultyOrder[b.difficulty];
        case "duration":
          return a.duration.localeCompare(b.duration);
        case "category":
          return a.category.localeCompare(b.category);
        case "random":
          return Math.random() - 0.5;
        default:
          return 0;
      }
    });

    return filtered;
  }, [poses, filters, sortBy]);

  // Paginated poses
  const paginatedPoses = useMemo(() => {
    const startIndex = (currentPage - 1) * posesPerPage;
    return filteredPoses.slice(startIndex, startIndex + posesPerPage);
  }, [filteredPoses, currentPage, posesPerPage]);

  const totalPages = Math.ceil(filteredPoses.length / posesPerPage);

  const handleFiltersChange = (newFilters: any) => {
    setFilters(newFilters);
    setCurrentPage(1); // Reset to first page when filters change
  };

  const handlePoseClick = (pose: YogaPose) => {
    setSelectedPose(pose);
  };

  const handleLike = (poseId: string) => {
    setPoses((prev) =>
      prev.map((pose) =>
        pose.id === poseId ? { ...pose, isLiked: !pose.isLiked } : pose,
      ),
    );
  };

  const getActiveFilterCount = () => {
    return (
      filters.bodyType.length +
      filters.healthCondition.length +
      filters.bodyPart.length +
      filters.experience.length +
      filters.difficulty.length +
      filters.category.length +
      filters.energyLevel.length +
      (filters.searchTerm ? 1 : 0)
    );
  };

  const clearAllFilters = () => {
    setFilters({
      searchTerm: "",
      bodyType: [],
      healthCondition: [],
      bodyPart: [],
      experience: [],
      difficulty: [],
      category: [],
      energyLevel: [],
    });
    setCurrentPage(1);
  };

  const shufflePoses = () => {
    setSortBy("random");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-serenity-50">
      <Navigation />

      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Badge
              variant="secondary"
              className="bg-sky-100 text-sky-700 border-sky-200 px-3 py-1"
            >
              <Sparkles className="w-4 h-4 mr-1" />
              Asana Library
            </Badge>
          </div>
          <h1 className="text-3xl lg:text-5xl font-serif font-bold mb-4 text-foreground">
            Discover Your Perfect Poses
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Explore our comprehensive library of {yogaPoses.length}+ yoga
            asanas. Filter by your body type, health needs, and experience level
            to find poses that work perfectly for you.
          </p>
        </div>

        {/* Controls */}
        <div className="flex flex-col lg:flex-row gap-6 mb-8">
          <div className="flex items-center gap-4 flex-wrap">
            {/* Sort Dropdown */}
            <div className="flex items-center gap-2">
              <SlidersHorizontal className="w-4 h-4 text-muted-foreground" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-white border border-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
              >
                <option value="name">Sort by Name</option>
                <option value="difficulty">Sort by Difficulty</option>
                <option value="duration">Sort by Duration</option>
                <option value="category">Sort by Category</option>
              </select>
            </div>

            {/* Shuffle Button */}
            <Button
              variant="outline"
              size="sm"
              onClick={shufflePoses}
              className="hover:bg-sky-50 hover:border-sky-300"
            >
              <Shuffle className="w-4 h-4 mr-2" />
              Shuffle
            </Button>

            {/* View Mode Toggle */}
            <div className="flex items-center bg-white rounded-lg border border-border p-1">
              <Button
                variant={viewMode === "grid" ? "default" : "ghost"}
                size="sm"
                onClick={() => setViewMode("grid")}
                className={cn(
                  "w-8 h-8 p-0",
                  viewMode === "grid" &&
                    "bg-sky-100 text-sky-700 hover:bg-sky-200",
                )}
              >
                <Grid className="w-4 h-4" />
              </Button>
              <Button
                variant={viewMode === "list" ? "default" : "ghost"}
                size="sm"
                onClick={() => setViewMode("list")}
                className={cn(
                  "w-8 h-8 p-0",
                  viewMode === "list" &&
                    "bg-sky-100 text-sky-700 hover:bg-sky-200",
                )}
              >
                <List className="w-4 h-4" />
              </Button>
            </div>

            {/* Results count */}
            <div className="text-sm text-muted-foreground">
              {filteredPoses.length} pose{filteredPoses.length !== 1 ? "s" : ""}{" "}
              found
              {getActiveFilterCount() > 0 && (
                <Badge variant="secondary" className="ml-2">
                  {getActiveFilterCount()} filter
                  {getActiveFilterCount() !== 1 ? "s" : ""}
                </Badge>
              )}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Filter Panel */}
          <div className="lg:col-span-1">
            <FilterPanel
              onFiltersChange={handleFiltersChange}
              isOpen={isFilterOpen}
              onToggle={() => setIsFilterOpen(!isFilterOpen)}
            />
          </div>

          {/* Poses Grid */}
          <div className="lg:col-span-3">
            {filteredPoses.length > 0 ? (
              <>
                <div
                  className={cn(
                    "grid gap-6 mb-8",
                    viewMode === "grid"
                      ? "grid-cols-1 md:grid-cols-2 xl:grid-cols-3"
                      : "grid-cols-1",
                  )}
                >
                  {paginatedPoses.map((pose) => (
                    <div
                      key={pose.id}
                      className="animate-fade-in"
                      style={{
                        animationDelay: `${
                          paginatedPoses.indexOf(pose) * 0.1
                        }s`,
                      }}
                    >
                      <PoseCard
                        pose={pose}
                        onClick={handlePoseClick}
                        onLike={handleLike}
                      />
                    </div>
                  ))}
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                  <div className="flex items-center justify-center gap-2 mt-8">
                    <Button
                      variant="outline"
                      onClick={() =>
                        setCurrentPage((prev) => Math.max(1, prev - 1))
                      }
                      disabled={currentPage === 1}
                    >
                      Previous
                    </Button>

                    <div className="flex items-center gap-1">
                      {Array.from({ length: totalPages }, (_, i) => {
                        const page = i + 1;
                        const isVisible =
                          page === 1 ||
                          page === totalPages ||
                          Math.abs(page - currentPage) <= 1;

                        if (!isVisible) {
                          if (
                            page === currentPage - 2 ||
                            page === currentPage + 2
                          ) {
                            return <span key={page}>...</span>;
                          }
                          return null;
                        }

                        return (
                          <Button
                            key={page}
                            variant={
                              page === currentPage ? "default" : "outline"
                            }
                            size="sm"
                            onClick={() => setCurrentPage(page)}
                            className={cn(
                              page === currentPage &&
                                "bg-sky-500 hover:bg-sky-600 text-white",
                            )}
                          >
                            {page}
                          </Button>
                        );
                      })}
                    </div>

                    <Button
                      variant="outline"
                      onClick={() =>
                        setCurrentPage((prev) => Math.min(totalPages, prev + 1))
                      }
                      disabled={currentPage === totalPages}
                    >
                      Next
                    </Button>
                  </div>
                )}
              </>
            ) : (
              <Card className="p-12 text-center bg-white/80 backdrop-blur-sm border-0">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-sky-100 to-serenity-100 rounded-full flex items-center justify-center">
                  <Search className="w-8 h-8 text-sky-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">
                  No poses found
                </h3>
                <p className="text-muted-foreground mb-6">
                  Try adjusting your filters or search terms to find more poses.
                </p>
                <Button variant="outline" onClick={clearAllFilters}>
                  Clear All Filters
                </Button>
              </Card>
            )}
          </div>
        </div>
      </div>

      {/* Pose Detail Modal */}
      <PoseModal
        pose={selectedPose}
        isOpen={!!selectedPose}
        onClose={() => setSelectedPose(null)}
        onLike={handleLike}
      />
    </div>
  );
};

export default AsanaLibrary;
