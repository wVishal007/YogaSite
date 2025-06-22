// Combines class names conditionally (Tailwind-friendly)
export function cn(...classes: (string | undefined | false | null)[]): string {
  return classes.filter(Boolean).join(" ");
}

// Capitalizes the first letter of each word
export function capitalizeWords(text: string): string {
  return text.replace(/\b\w/g, (char) => char.toUpperCase());
}

// Filters yoga poses by body part (e.g., "heart", "skin", etc.)
export function filterByTargetArea(poses: any[], target: string): any[] {
  return poses.filter(pose => pose.targetAreas?.includes(target.toLowerCase()));
}

// Filters yoga poses by issue (e.g., "stress", "digestion", "anxiety")
export function filterByHealthIssue(poses: any[], issue: string): any[] {
  return poses.filter(pose => pose.issues?.includes(issue.toLowerCase()));
}

// Groups poses by category (e.g., beginner, intermediate, advanced)
export function groupByCategory(poses: any[]): Record<string, any[]> {
  return poses.reduce((grouped, pose) => {
    const category = pose.level || "Uncategorized";
    if (!grouped[category]) grouped[category] = [];
    grouped[category].push(pose);
    return grouped;
  }, {} as Record<string, any[]>);
}
