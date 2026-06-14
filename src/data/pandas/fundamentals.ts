import { Section } from "../../types/roadmap";

export const fundamentals: Section = {
  id: "pandas-fundamentals",
  title: "Pandas Fundamentals",

  groups: [
    {
      id: "introduction",
      title: "Introduction",

      topics: [
        {
          id: "why-pandas",
          title: "Why Pandas?",
          estimatedMinutes: 20,
          interviewImportance: 5,
        },
        {
          id: "pandas-vs-numpy",
          title: "Pandas vs NumPy",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "where-pandas-used",
          title: "Where Pandas is Used",
          estimatedMinutes: 30,
          interviewImportance: 5,
        },
        {
          id: "install-pandas",
          title: "Installing Pandas",
          estimatedMinutes: 15,
          interviewImportance: 3,
        }
      ]
    },

    {
      id: "architecture",
      title: "Architecture",

      topics: [
        {
          id: "series-dataframe-overview",
          title: "Series & DataFrame Overview",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "rows-columns-index",
          title: "Rows, Columns & Index",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "column-oriented-storage",
          title: "Column-oriented Storage",
          estimatedMinutes: 35,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "ecosystem",
      title: "Ecosystem",

      topics: [
        {
          id: "numpy-integration",
          title: "Relationship with NumPy",
          estimatedMinutes: 30,
          interviewImportance: 5,
        },
        {
          id: "pyarrow-backend",
          title: "PyArrow Backend",
          estimatedMinutes: 30,
          interviewImportance: 5,
        },
        {
          id: "pandas-ai-stack",
          title: "Pandas in AI & Data Engineering",
          estimatedMinutes: 35,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "interview",
      title: "Interview Questions",

      topics: [
        {
          id: "iq-why-pandas",
          title: "Why Pandas instead of NumPy?",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "iq-column-storage",
          title: "Why is Pandas Column-oriented?",
          estimatedMinutes: 35,
          interviewImportance: 5,
        }
      ]
    }
  ]
};