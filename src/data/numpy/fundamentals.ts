import { Section } from "../../types/roadmap";

export const fundamentals: Section = {
  id: "numpy-fundamentals",
  title: "NumPy Fundamentals",

  groups: [

    {
      id: "introduction",
      title: "Introduction",

      topics: [
        {
          id: "why-numpy",
          title: "Why NumPy?",
          estimatedMinutes: 20,
          interviewImportance: 5,
        },
        {
          id: "numpy-vs-python-lists",
          title: "NumPy Arrays vs Python Lists",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "where-numpy-is-used",
          title: "NumPy in AI, ML & Data Engineering",
          estimatedMinutes: 25,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "installation",
      title: "Getting Started",

      topics: [
        {
          id: "install-numpy",
          title: "Installing NumPy",
          estimatedMinutes: 10,
          interviewImportance: 3,
        },
        {
          id: "importing-numpy",
          title: "Importing NumPy",
          estimatedMinutes: 10,
          interviewImportance: 5,
        },
        {
          id: "numpy-version",
          title: "Checking Version & Configuration",
          estimatedMinutes: 15,
          interviewImportance: 3,
        }
      ]
    },

    {
      id: "ecosystem",
      title: "NumPy Ecosystem",

      topics: [
        {
          id: "relationship-pandas",
          title: "Relationship with Pandas",
          estimatedMinutes: 25,
          interviewImportance: 5,
        },
        {
          id: "relationship-pytorch",
          title: "Relationship with PyTorch",
          estimatedMinutes: 25,
          interviewImportance: 5,
        },
        {
          id: "relationship-scipy",
          title: "Relationship with SciPy",
          estimatedMinutes: 20,
          interviewImportance: 4,
        }
      ]
    },

    {
      id: "interview",
      title: "Interview Questions",

      topics: [
        {
          id: "iq-why-numpy",
          title: "Why is NumPy Faster?",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "iq-numpy-usecases",
          title: "Where Would You Use NumPy?",
          estimatedMinutes: 25,
          interviewImportance: 5,
        }
      ]
    }

  ]
};