type UpcomingProjectsSectionProjectsType = {
  title: string;
  link: string;
  description: string;
  keyFeatures: {
    featureTitle: string;
    features: Array<string>;
  }[];
};

export const UpcomingProjectsSectionProjectsData: Readonly<
  UpcomingProjectsSectionProjectsType[]
> = [
  {
    title: " Health management system",
    link: "https://github.com/reginald-chand",
    description: `The Health Management System is an innovative and comprehensive
              platform designed to empower individuals to take control of their
              health and fitness journey. Drawing inspiration from the renowned
              MyFitnessPal, this system integrates a wide array of features
              tailored to support users in achieving their wellness goals.`,
    keyFeatures: [
      {
        featureTitle: "Recipes and Meal Planning",
        features: [
          "Discover a vast library of nutritious recipes.",
          "Plan meals with ease, considering dietary preferences and restrictions.",
          "Save and share favorite recipes with the community.",
        ],
      },

      {
        featureTitle: "BMI and Health Metrics",
        features: [
          "Accurately calculate Body Mass Index (BMI) based on personal data.",
          "Track essential health metrics over time for a holistic view of progress.",
        ],
      },

      {
        featureTitle: "Calorie and Micronutrient Tracking",
        features: [
          "Monitor daily caloric intake and expenditure.",
          "Balance micronutrient's to meet specific health and fitness objectives.",
          "Analyze nutrient consumption patterns to optimize diet.",
        ],
      },

      {
        featureTitle: "Activity and Exercise Logging",
        features: [
          "Log workouts and physical activities seamlessly.",
          "Access exercise recommendations and routines tailored to individual goals.",
          "Sync with popular fitness devices and apps for comprehensive tracking.",
        ],
      },
    ],
  },
];
