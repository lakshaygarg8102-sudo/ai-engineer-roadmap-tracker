import { Section } from "../../types/roadmap";

export const calculusFoundation: Section = {
  id: "calculus-foundation",
  title: "Calculus Foundation",

  groups: [

    {
      id: "functions",
      title: "Functions",

      topics: [
        {
          id: "functions",
          title: "Functions",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "limits",
          title: "Limits",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "continuity",
          title: "Continuity",
          estimatedMinutes: 35,
          interviewImportance: 4,
        }
      ]
    },

    {
      id: "derivatives",
      title: "Derivatives",

      topics: [
        {
          id: "derivative",
          title: "Derivatives",
          estimatedMinutes: 50,
          interviewImportance: 5,
        },
        {
          id: "partial-derivatives",
          title: "Partial Derivatives",
          estimatedMinutes: 50,
          interviewImportance: 5,
        },
        {
          id: "chain-rule",
          title: "Chain Rule",
          estimatedMinutes: 50,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "optimization",
      title: "Optimization",

      topics: [
        {
          id: "critical-points",
          title: "Critical Points",
          estimatedMinutes: 40,
          interviewImportance: 5,
        },
        {
          id: "maxima-minima",
          title: "Maxima & Minima",
          estimatedMinutes: 45,
          interviewImportance: 5,
        },
        {
          id: "gradient-interpretation",
          title: "Gradient Interpretation",
          estimatedMinutes: 45,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "ai",
      title: "Calculus in AI",

      topics: [
        {
          id: "backpropagation-foundation",
          title: "Backpropagation Mathematics",
          estimatedMinutes: 60,
          interviewImportance: 5,
        },
        {
          id: "loss-optimization",
          title: "Loss Optimization",
          estimatedMinutes: 50,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "interview",
      title: "Interview Questions",

      topics: [
        {
          id: "chain-rule-interview",
          title: "Chain Rule in Neural Networks",
          estimatedMinutes: 50,
          interviewImportance: 5,
        },
        {
          id: "derivative-interview",
          title: "Why Derivatives Matter",
          estimatedMinutes: 45,
          interviewImportance: 5,
        }
      ]
    }

  ]
};