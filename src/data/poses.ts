export interface YogaPose {
  id: string;
  nameEnglish: string;
  nameSanskrit: string;
  image: string;
  gif?: string;
  difficulty: "beginner" | "intermediate" | "advanced";
  duration: string;
  benefits: string[];
  instructions: string[];
  bodyParts: string[];
  bodyType: string[];
  healthConditions: string[];
  precautions: string[];
  modifications: string[];
  isLiked?: boolean;
  category: string;
  energyLevel: "calming" | "energizing" | "neutral";
}

export const yogaPoses: YogaPose[] = [
  {
    id: "mountain-pose",
    nameEnglish: "Mountain Pose",
    nameSanskrit: "Tadasana",
    image:
      "https://images.unsplash.com/photo-1506629905587-4b46a77224ba?w=400&h=300&fit=crop",
    gif: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZGp3MnJkMXN3aWQ5Y2p5cDBmZGZuYjF4MHNuNzBmZWE2eWo2dGQyYSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3oKIPEHhFr8JYLqJfW/giphy.gif",
    difficulty: "beginner",
    duration: "1-3 min",
    benefits: [
      "Improves posture and body awareness",
      "Strengthens thighs, knees, and ankles",
      "Calms the mind and reduces stress",
      "Builds foundation for all standing poses",
    ],
    instructions: [
      "Stand with feet hip-width apart, arms at your sides",
      "Distribute weight evenly on both feet",
      "Engage leg muscles and lift kneecaps",
      "Lengthen spine and crown of head toward ceiling",
      "Relax shoulders away from ears",
      "Breathe deeply and hold the pose",
    ],
    bodyParts: ["core", "legs", "spine"],
    bodyType: ["lean", "muscular", "flexible", "stiff", "overweight"],
    healthConditions: ["anxiety", "back-pain", "diabetes"],
    precautions: ["Avoid if you have low blood pressure"],
    modifications: [
      "Place back against wall for support",
      "Use blocks under hands if needed",
    ],
    category: "Standing",
    energyLevel: "neutral",
    isLiked: false,
  },
  {
    id: "downward-dog",
    nameEnglish: "Downward Facing Dog",
    nameSanskrit: "Adho Mukha Svanasana",
    image:
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=300&fit=crop",
    gif: "https://media.giphy.com/media/3oKIPnOHV5bkWDcb2o/giphy.gif",
    difficulty: "beginner",
    duration: "1-5 min",
    benefits: [
      "Stretches shoulders, hamstrings, and calves",
      "Strengthens arms and legs",
      "Energizes the entire body",
      "Relieves stress and mild depression",
    ],
    instructions: [
      "Start on hands and knees",
      "Tuck toes under and lift hips up and back",
      "Straighten legs as much as comfortable",
      "Press hands firmly into ground",
      "Create inverted V shape with body",
      "Hold and breathe deeply",
    ],
    bodyParts: ["spine", "shoulders", "legs", "arms"],
    bodyType: ["lean", "muscular", "flexible"],
    healthConditions: ["back-pain", "anxiety", "heart"],
    precautions: [
      "Avoid if you have wrist injuries",
      "Be careful with high blood pressure",
    ],
    modifications: [
      "Use blocks under hands",
      "Bend knees slightly",
      "Step feet wider apart",
    ],
    category: "Inversion",
    energyLevel: "energizing",
    isLiked: true,
  },
  {
    id: "warrior-one",
    nameEnglish: "Warrior I",
    nameSanskrit: "Virabhadrasana I",
    image:
      "https://images.unsplash.com/photo-1506629905587-4b46a77224ba?w=400&h=300&fit=crop",
    difficulty: "intermediate",
    duration: "30 sec - 1 min each side",
    benefits: [
      "Strengthens legs, glutes, and core",
      "Opens hips and chest",
      "Improves balance and stability",
      "Builds confidence and focus",
    ],
    instructions: [
      "Step left foot back 3-4 feet",
      "Turn left foot out 45-60 degrees",
      "Bend right knee over ankle",
      "Square hips toward front",
      "Raise arms overhead",
      "Hold and repeat on other side",
    ],
    bodyParts: ["legs", "hips", "core", "chest"],
    bodyType: ["muscular", "flexible", "stiff"],
    healthConditions: ["heart", "anxiety", "diabetes"],
    precautions: ["Avoid if you have knee injuries"],
    modifications: ["Use wall for support", "Place block under front thigh"],
    category: "Standing",
    energyLevel: "energizing",
    isLiked: false,
  },
  {
    id: "child-pose",
    nameEnglish: "Child's Pose",
    nameSanskrit: "Balasana",
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
    gif: "https://media.giphy.com/media/26gJy9p3W2PPkP8EE/giphy.gif",
    difficulty: "beginner",
    duration: "1-5 min",
    benefits: [
      "Calms the nervous system",
      "Relieves stress and anxiety",
      "Gently stretches hips and thighs",
      "Promotes introspection and rest",
    ],
    instructions: [
      "Kneel on floor with big toes touching",
      "Sit back on heels",
      "Separate knees hip-width apart",
      "Fold forward, extending arms in front",
      "Rest forehead on ground",
      "Breathe deeply and relax",
    ],
    bodyParts: ["spine", "hips", "shoulders"],
    bodyType: ["lean", "overweight", "stiff", "flexible"],
    healthConditions: ["anxiety", "back-pain", "sleep", "stress-relief"],
    precautions: ["Avoid if pregnant or have knee injuries"],
    modifications: ["Place pillow under forehead", "Sit on block or cushion"],
    category: "Restorative",
    energyLevel: "calming",
    isLiked: false,
  },
  {
    id: "tree-pose",
    nameEnglish: "Tree Pose",
    nameSanskrit: "Vrikshasana",
    image:
      "https://images.unsplash.com/photo-1588286840104-8957b019727f?w=400&h=300&fit=crop",
    difficulty: "intermediate",
    duration: "30 sec - 1 min each side",
    benefits: [
      "Improves balance and concentration",
      "Strengthens legs and core",
      "Enhances mental focus",
      "Calms the mind",
    ],
    instructions: [
      "Stand in Mountain Pose",
      "Shift weight to left foot",
      "Place right foot on inner left thigh",
      "Avoid placing foot on side of knee",
      "Bring palms together at heart center",
      "Find a focal point and balance",
    ],
    bodyParts: ["legs", "core", "spine"],
    bodyType: ["lean", "muscular", "flexible"],
    healthConditions: ["anxiety", "diabetes", "balance"],
    precautions: ["Use wall support if needed"],
    modifications: ["Keep toe on ground", "Use wall for balance"],
    category: "Balance",
    energyLevel: "neutral",
    isLiked: true,
  },
  {
    id: "cobra-pose",
    nameEnglish: "Cobra Pose",
    nameSanskrit: "Bhujangasana",
    image:
      "https://images.unsplash.com/photo-1506629905587-4b46a77224ba?w=400&h=300&fit=crop",
    gif: "https://media.giphy.com/media/3o7TKQ8kAP0f9X5PoY/giphy.gif",
    difficulty: "intermediate",
    duration: "15-30 sec",
    benefits: [
      "Strengthens spine and back muscles",
      "Opens chest and lungs",
      "Improves posture",
      "Stimulates digestive organs",
    ],
    instructions: [
      "Lie face down with palms under shoulders",
      "Press pubic bone and legs into floor",
      "Slowly lift chest using back muscles",
      "Keep shoulders away from ears",
      "Look forward or slightly up",
      "Hold and breathe steadily",
    ],
    bodyParts: ["spine", "chest", "arms", "shoulders"],
    bodyType: ["lean", "muscular", "stiff"],
    healthConditions: ["back-pain", "heart", "thyroid", "digestion"],
    precautions: ["Avoid if pregnant or have back injuries"],
    modifications: ["Keep forearms on ground", "Place pillow under pelvis"],
    category: "Backbend",
    energyLevel: "energizing",
    isLiked: false,
  },
  {
    id: "lotus-pose",
    nameEnglish: "Lotus Pose",
    nameSanskrit: "Padmasana",
    image:
      "https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?w=400&h=300&fit=crop",
    difficulty: "advanced",
    duration: "1-10 min",
    benefits: [
      "Calms the mind and nervous system",
      "Improves posture and spinal alignment",
      "Enhances meditation practice",
      "Increases hip flexibility",
    ],
    instructions: [
      "Sit cross-legged on floor",
      "Place right foot on left thigh",
      "Place left foot on right thigh",
      "Keep spine straight and shoulders relaxed",
      "Rest hands on knees",
      "Focus on breath and meditation",
    ],
    bodyParts: ["hips", "spine", "legs"],
    bodyType: ["flexible"],
    healthConditions: ["anxiety", "sleep", "stress-relief"],
    precautions: ["Avoid if you have knee or ankle injuries"],
    modifications: [
      "Sit on cushion or block",
      "Practice half lotus",
      "Use wall support",
    ],
    category: "Seated",
    energyLevel: "calming",
    isLiked: false,
  },
  {
    id: "cat-cow",
    nameEnglish: "Cat-Cow Stretch",
    nameSanskrit: "Marjaryasana-Bitilasana",
    image:
      "https://images.unsplash.com/photo-1506629905587-4b46a77224ba?w=400&h=300&fit=crop",
    gif: "https://media.giphy.com/media/3oKIPf4F5F5P7kPt5u/giphy.gif",
    difficulty: "beginner",
    duration: "1-3 min",
    benefits: [
      "Improves spinal flexibility and mobility",
      "Relieves back and neck tension",
      "Massages internal organs",
      "Coordinates movement with breath",
    ],
    instructions: [
      "Start on hands and knees",
      "Inhale, arch back and look up (Cow)",
      "Exhale, round spine toward ceiling (Cat)",
      "Keep movements slow and controlled",
      "Coordinate with breath",
      "Repeat 5-10 times",
    ],
    bodyParts: ["spine", "neck", "core"],
    bodyType: ["lean", "overweight", "stiff", "flexible"],
    healthConditions: ["back-pain", "digestion", "stress-relief"],
    precautions: ["Move slowly if you have neck issues"],
    modifications: ["Place blanket under knees", "Sit in chair variation"],
    category: "Flow",
    energyLevel: "neutral",
    isLiked: true,
  },
  {
    id: "warrior-two",
    nameEnglish: "Warrior II",
    nameSanskrit: "Virabhadrasana II",
    image:
      "https://images.unsplash.com/photo-1506629905587-4b46a77224ba?w=400&h=300&fit=crop",
    difficulty: "intermediate",
    duration: "30 sec - 1 min each side",
    benefits: [
      "Strengthens legs and arms",
      "Opens hips and groin",
      "Improves stamina and concentration",
      "Builds warrior spirit",
    ],
    instructions: [
      "Step feet 3-4 feet apart",
      "Turn right foot out 90 degrees",
      "Bend right knee over ankle",
      "Extend arms parallel to floor",
      "Gaze over right fingertips",
      "Hold and repeat on other side",
    ],
    bodyParts: ["legs", "hips", "arms", "core"],
    bodyType: ["muscular", "flexible", "lean"],
    healthConditions: ["heart", "anxiety", "diabetes"],
    precautions: ["Avoid if you have knee problems"],
    modifications: ["Use wall support", "Place block under front thigh"],
    category: "Standing",
    energyLevel: "energizing",
    isLiked: false,
  },
  {
    id: "triangle-pose",
    nameEnglish: "Triangle Pose",
    nameSanskrit: "Trikonasana",
    image:
      "https://images.unsplash.com/photo-1506629905587-4b46a77224ba?w=400&h=300&fit=crop",
    difficulty: "intermediate",
    duration: "30 sec - 1 min each side",
    benefits: [
      "Stretches sides of body",
      "Strengthens legs and core",
      "Improves digestion",
      "Relieves stress and anxiety",
    ],
    instructions: [
      "Step feet 3-4 feet apart",
      "Turn right foot out 90 degrees",
      "Reach right hand toward floor",
      "Place hand on shin, ankle, or block",
      "Extend left arm toward ceiling",
      "Keep both sides of waist long",
    ],
    bodyParts: ["spine", "legs", "core"],
    bodyType: ["flexible", "lean", "muscular"],
    healthConditions: ["digestion", "anxiety", "back-pain"],
    precautions: ["Avoid if you have neck problems"],
    modifications: ["Use block under hand", "Keep hand on thigh"],
    category: "Standing",
    energyLevel: "energizing",
    isLiked: false,
  },
  {
    id: "seated-forward-fold",
    nameEnglish: "Seated Forward Fold",
    nameSanskrit: "Paschimottanasana",
    image:
      "https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?w=400&h=300&fit=crop",
    difficulty: "intermediate",
    duration: "1-3 min",
    benefits: [
      "Calms the mind and nervous system",
      "Stretches spine and hamstrings",
      "Stimulates digestive organs",
      "Relieves stress and anxiety",
    ],
    instructions: [
      "Sit with legs extended straight",
      "Inhale to lengthen spine",
      "Exhale and fold forward from hips",
      "Reach for feet or shins",
      "Keep spine long, don't round",
      "Breathe deeply and relax",
    ],
    bodyParts: ["spine", "legs", "hips"],
    bodyType: ["flexible", "lean"],
    healthConditions: ["anxiety", "digestion", "sleep"],
    precautions: ["Avoid if you have back injuries"],
    modifications: [
      "Sit on cushion",
      "Bend knees slightly",
      "Use strap around feet",
    ],
    category: "Seated",
    energyLevel: "calming",
    isLiked: false,
  },
  {
    id: "bridge-pose",
    nameEnglish: "Bridge Pose",
    nameSanskrit: "Setu Bandhasana",
    image:
      "https://images.unsplash.com/photo-1506629905587-4b46a77224ba?w=400&h=300&fit=crop",
    difficulty: "beginner",
    duration: "30 sec - 1 min",
    benefits: [
      "Strengthens back and glutes",
      "Opens chest and hip flexors",
      "Calms the mind",
      "Energizes the body",
    ],
    instructions: [
      "Lie on back with knees bent",
      "Place feet hip-width apart",
      "Press feet down and lift hips",
      "Keep knees parallel",
      "Interlace fingers under back",
      "Hold and breathe steadily",
    ],
    bodyParts: ["spine", "glutes", "chest"],
    bodyType: ["lean", "muscular", "overweight"],
    healthConditions: ["back-pain", "anxiety", "thyroid"],
    precautions: ["Avoid if you have neck injuries"],
    modifications: ["Place block between thighs", "Use bolster under sacrum"],
    category: "Backbend",
    energyLevel: "energizing",
    isLiked: false,
  },
  {
    id: "pigeon-pose",
    nameEnglish: "Pigeon Pose",
    nameSanskrit: "Eka Pada Rajakapotasana",
    image:
      "https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?w=400&h=300&fit=crop",
    difficulty: "advanced",
    duration: "1-3 min each side",
    benefits: [
      "Opens hips and hip flexors",
      "Stretches thighs and groin",
      "Releases emotional tension",
      "Improves posture",
    ],
    instructions: [
      "Start in downward dog",
      "Bring right knee forward",
      "Place right shin parallel to front of mat",
      "Extend left leg back",
      "Square hips toward front",
      "Fold forward over front leg",
    ],
    bodyParts: ["hips", "thighs", "spine"],
    bodyType: ["flexible"],
    healthConditions: ["anxiety", "stress-relief"],
    precautions: ["Avoid if you have knee injuries"],
    modifications: ["Use bolster under hips", "Keep hands on blocks"],
    category: "Hip Opener",
    energyLevel: "calming",
    isLiked: false,
  },
  {
    id: "warrior-three",
    nameEnglish: "Warrior III",
    nameSanskrit: "Virabhadrasana III",
    image:
      "https://images.unsplash.com/photo-1588286840104-8957b019727f?w=400&h=300&fit=crop",
    difficulty: "advanced",
    duration: "15-30 sec each side",
    benefits: [
      "Improves balance and coordination",
      "Strengthens entire body",
      "Enhances focus and concentration",
      "Builds core strength",
    ],
    instructions: [
      "Start in Warrior I",
      "Shift weight to front foot",
      "Lift back leg as you hinge forward",
      "Extend arms forward or wide",
      "Keep hips square",
      "Form T-shape with body",
    ],
    bodyParts: ["legs", "core", "arms"],
    bodyType: ["muscular", "flexible"],
    healthConditions: ["balance", "anxiety"],
    precautions: ["Use wall for support if needed"],
    modifications: ["Keep hands on blocks", "Use wall support"],
    category: "Balance",
    energyLevel: "energizing",
    isLiked: false,
  },
  {
    id: "camel-pose",
    nameEnglish: "Camel Pose",
    nameSanskrit: "Ustrasana",
    image:
      "https://images.unsplash.com/photo-1506629905587-4b46a77224ba?w=400&h=300&fit=crop",
    difficulty: "advanced",
    duration: "15-30 sec",
    benefits: [
      "Opens entire front body",
      "Strengthens back muscles",
      "Improves posture",
      "Energizes and uplifts mood",
    ],
    instructions: [
      "Kneel with shins parallel",
      "Place hands on lower back",
      "Engage front body and lift chest",
      "Reach for heels if comfortable",
      "Keep hips moving forward",
      "Breathe deeply",
    ],
    bodyParts: ["spine", "chest", "shoulders"],
    bodyType: ["flexible", "muscular"],
    healthConditions: ["thyroid", "heart"],
    precautions: ["Avoid if you have neck or back injuries"],
    modifications: ["Keep hands on lower back", "Use blocks on calves"],
    category: "Backbend",
    energyLevel: "energizing",
    isLiked: false,
  },
  {
    id: "happy-baby",
    nameEnglish: "Happy Baby Pose",
    nameSanskrit: "Ananda Balasana",
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
    difficulty: "beginner",
    duration: "1-2 min",
    benefits: [
      "Gently stretches hips and groin",
      "Calms the mind",
      "Relieves stress and fatigue",
      "Massages spine",
    ],
    instructions: [
      "Lie on back and draw knees to chest",
      "Hold outside edges of feet",
      "Keep knees wider than torso",
      "Rock gently side to side",
      "Keep shoulders on ground",
      "Breathe and smile",
    ],
    bodyParts: ["hips", "spine"],
    bodyType: ["flexible", "lean", "overweight"],
    healthConditions: ["anxiety", "stress-relief", "sleep"],
    precautions: ["Avoid if pregnant or have knee injuries"],
    modifications: ["Hold behind thighs instead of feet"],
    category: "Restorative",
    energyLevel: "calming",
    isLiked: false,
  },
];

// Helper functions for filtering
export const getFilteredPoses = (
  poses: YogaPose[],
  filters: {
    searchTerm?: string;
    bodyType?: string[];
    healthCondition?: string[];
    bodyPart?: string[];
    difficulty?: string[];
    category?: string[];
    energyLevel?: string[];
  },
) => {
  let filtered = poses;

  if (filters.searchTerm) {
    const term = filters.searchTerm.toLowerCase();
    filtered = filtered.filter(
      (pose) =>
        pose.nameEnglish.toLowerCase().includes(term) ||
        pose.nameSanskrit.toLowerCase().includes(term) ||
        pose.benefits.some((benefit) => benefit.toLowerCase().includes(term)) ||
        pose.category.toLowerCase().includes(term),
    );
  }

  if (filters.bodyType && filters.bodyType.length > 0) {
    filtered = filtered.filter((pose) =>
      filters.bodyType!.some((type) => pose.bodyType.includes(type)),
    );
  }

  if (filters.healthCondition && filters.healthCondition.length > 0) {
    filtered = filtered.filter((pose) =>
      filters.healthCondition!.some((condition) =>
        pose.healthConditions.includes(condition),
      ),
    );
  }

  if (filters.bodyPart && filters.bodyPart.length > 0) {
    filtered = filtered.filter((pose) =>
      filters.bodyPart!.some((part) => pose.bodyParts.includes(part)),
    );
  }

  if (filters.difficulty && filters.difficulty.length > 0) {
    filtered = filtered.filter((pose) =>
      filters.difficulty!.includes(pose.difficulty),
    );
  }

  if (filters.category && filters.category.length > 0) {
    filtered = filtered.filter((pose) =>
      filters.category!.includes(pose.category),
    );
  }

  if (filters.energyLevel && filters.energyLevel.length > 0) {
    filtered = filtered.filter((pose) =>
      filters.energyLevel!.includes(pose.energyLevel),
    );
  }

  return filtered;
};

export const categories = [
  "Standing",
  "Seated",
  "Backbend",
  "Forward Fold",
  "Twist",
  "Inversion",
  "Balance",
  "Hip Opener",
  "Restorative",
  "Flow",
  "Core",
  "Arm Balance",
];

export const energyLevels = ["calming", "energizing", "neutral"];
