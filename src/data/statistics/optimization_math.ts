import { Section } from "../../types/roadmap";

export const optimizationMath: Section = {
  id: "optimization-math",
  title: "Optimization Mathematics",

  groups: [

    {
      id: "optimization",
      title: "Optimization Basics",

      topics: [
        {
          id: "optimization-problem",
          title: "Optimization Problems",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "objective-function",
          title: "Objective Functions",
          estimatedMinutes: 40,
          interviewImportance: 5,
        },
        {
          id: "loss-function",
          title: "Loss Functions",
          estimatedMinutes: 45,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "gradient",
      title: "Gradient Optimization",

      topics: [
        {
          id: "gradient",
          title: "Gradient",
          estimatedMinutes: 45,
          interviewImportance: 5,
        },
        {
          id: "gradient-descent",
          title: "Gradient Descent",
          estimatedMinutes: 60,
          interviewImportance: 5,
        },
        {
          id: "learning-rate",
          title: "Learning Rate",
          estimatedMinutes: 40,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "optimizers",
      title: "Optimization Algorithms",

      topics: [
        {
          id: "batch-gradient-descent",
          title: "Batch Gradient Descent",
          estimatedMinutes: 45,
          interviewImportance: 5,
        },
        {
          id: "stochastic-gradient-descent",
          title: "Stochastic Gradient Descent",
          estimatedMinutes: 45,
          interviewImportance: 5,
        },
        {
          id: "mini-batch-gradient-descent",
          title: "Mini-batch Gradient Descent",
          estimatedMinutes: 45,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "production",
      title: "Production ML",

      topics: [
        {
          id: "optimizer-selection",
          title: "Choosing Optimizers",
          estimatedMinutes: 40,
          interviewImportance: 5,
        },
        {
          id: "training-instability",
          title: "Training Instability",
          estimatedMinutes: 45,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "interview",
      title: "Interview Questions",

      topics: [
        {
          id: "gd-interview",
          title: "Explain Gradient Descent",
          estimatedMinutes: 50,
          interviewImportance: 5,
        },
        {
          id: "sgd-vs-bgd",
          title: "SGD vs Batch GD",
          estimatedMinutes: 45,
          interviewImportance: 5,
        }
      ]
    }

  ]
};