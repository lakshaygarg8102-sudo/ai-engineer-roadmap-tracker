import { Section } from "../../types/roadmap";

export const confidenceIntervals: Section = {
  id: "confidence-intervals",
  title: "Confidence Intervals",

  groups: [

    {
      id: "fundamentals",
      title: "Confidence Interval Basics",

      topics: [
        {
          id: "what-is-confidence-interval",
          title: "What is a Confidence Interval?",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "confidence-level",
          title: "Confidence Level",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "margin-of-error",
          title: "Margin of Error",
          estimatedMinutes: 35,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "construction",
      title: "Constructing Confidence Intervals",

      topics: [
        {
          id: "mean-ci",
          title: "Confidence Interval for Mean",
          estimatedMinutes: 40,
          interviewImportance: 5,
        },
        {
          id: "proportion-ci",
          title: "Confidence Interval for Proportion",
          estimatedMinutes: 40,
          interviewImportance: 5,
        },
        {
          id: "sample-size-ci",
          title: "Sample Size Effects",
          estimatedMinutes: 35,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "applications",
      title: "Applications",

      topics: [
        {
          id: "ab-confidence",
          title: "Confidence Intervals in A/B Testing",
          estimatedMinutes: 45,
          interviewImportance: 5,
        },
        {
          id: "model-evaluation",
          title: "Confidence Intervals for Model Evaluation",
          estimatedMinutes: 45,
          interviewImportance: 5,
        },
        {
          id: "uncertainty-estimation",
          title: "Uncertainty Estimation",
          estimatedMinutes: 40,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "production",
      title: "Production ML",

      topics: [
        {
          id: "prediction-uncertainty",
          title: "Prediction Uncertainty",
          estimatedMinutes: 40,
          interviewImportance: 5,
        },
        {
          id: "monitoring-confidence",
          title: "Confidence Monitoring",
          estimatedMinutes: 40,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "interview",
      title: "Interview Questions",

      topics: [
        {
          id: "95-confidence",
          title: "What Does 95% Confidence Mean?",
          estimatedMinutes: 45,
          interviewImportance: 5,
        },
        {
          id: "confidence-vs-probability",
          title: "Confidence Interval vs Probability",
          estimatedMinutes: 40,
          interviewImportance: 5,
        }
      ]
    }

  ]
};